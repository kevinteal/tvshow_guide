<?php
session_start();

$con = mysql_connect("localhost", "root", "")
	   or die("Could not connect: " . mysql_error());
	
	mysql_select_db("tvshows", $con)
	or die("Could not find database: " . mysql_error());
	

if(isset($_GET["air_date"])){
$air_date = $_GET["air_date"];
$smonth = $_GET["smonth"];
$sday = $_GET["sday"];
$syear = $_GET["syear"];
}else{
	$air_date = "unavailable";
	$smonth = "unavailable";
	$sday = "unavailable";
	$syear = "unavailable";
}

if(isset($_SESSION['route']))
{
	if($_SESSION['route']=="day")
	{
		$path=$_SESSION['route'];
	}
	if($_SESSION['route']=="name")
	{
		$path=$_SESSION['route'];
	}
}

/**
	**Start of Delete section**
**/
if(isset($_GET["delete"]))
{
	$tvarr=$_GET["delArray"];

	//rawurldecode($tvarr);
	$tvarr = explode(",", $tvarr);
	$tvshow=$tvarr[0];
	//echo $tvshow;
	$tvshow = mysql_real_escape_string($tvshow);

	
	
		$findday="SELECT mydayname from myshowkev WHERE showname ='".$tvshow."'";
		$day = mysql_query($findday);
		$row = mysql_fetch_array($day);
		$day=$row['mydayname'];
	



foreach($tvarr as $deltv)
	{
		$deltv = mysql_real_escape_string($deltv);
		mysql_query("DELETE from myshowkev where showname ='$deltv'");
	}
	
	
	if($path=="day")
	{
		$sql="SELECT * FROM myshowkev WHERE mydayname = '".$day."'";
		$refreshdata = mysql_query($sql);
		
	}
	if($path=="name")
	{
		$sql="SELECT * FROM myshowkev WHERE showname = '".$tvshow."'";
		$refreshdata = mysql_query($sql);
	}
}
/**
	^^End of Delete section^^
**/


/**
	**Start of Day section**
**/
if(isset($_GET["day"]))
{
	//echo "working";
	//select all and use the sent over date to curl the shows wiki page
	// can set up curr season and episode number, if found +1 to ep no 
	$_SESSION['route'] = "day";
	$day=$_GET["downloadday"];
	$sql="SELECT * FROM myshowkev WHERE mydayname = '".$day."'";
	$refreshdata = mysql_query($sql);
}
/**
	^^End of Day section^^
**/


/**
	**Start of Search section**
**/
if(isset($_GET["searchshow"]))
{
	//echo "called me";
	$_SESSION['route']="name";
	$show=$_GET["q"];
	$show = mysql_real_escape_string($show);	
	$sql="SELECT * FROM myshowkev WHERE showname = '$show'";
	$refreshdata = mysql_query($sql);
}
/**
	^^End of Search section^^
**/


/**
	**Start of Update section**
**/
if(isset($_GET["updateshow"]))
{
	//echo "called update show";
	$showid=$_GET["updatedname"];
	$newname = $_GET["newname"];
	//echo $newname;
	//echo rawurldecode($newname);
	$newname = ucwords($newname);
	$newname = mysql_real_escape_string($newname);
	mysql_query("UPDATE myshowkev SET showname='$newname' WHERE showid = '$showid'");
		

	
		$findday="SELECT mydayname from myshowkev WHERE showid = '$showid'";
		$day = mysql_query($findday);
		$row = mysql_fetch_array($day);
		$day=$row['mydayname'];
	
	
	
	if($path=="day")
	{
		$sql="SELECT * FROM myshowkev WHERE mydayname = '".$day."'";
		$refreshdata = mysql_query($sql);
		
	}
	if($path=="name")
	{
		$sql="SELECT * FROM myshowkev WHERE showname = '".$newname."'";
		$refreshdata = mysql_query($sql);
	}
}
/**
	^^End of Update section^^
**/




/**
    **start of full edit update
**/

if(isset($_GET["update_full_edit"])){
	
	
	$e_id = $_GET["showid"];
	$e_name = $_GET["e_name"];
	$e_url = $_GET["e_link_list"];
	$e_ep_no = $_GET["e_ep_no"];
	$e_season_no = $_GET["e_season_no"];
	$e_last_air = $_GET["e_last_air"];
	$e_air_day = $_GET["e_air_date"];
	
	$e_name = mysql_real_escape_string($e_name);
	$e_url = mysql_real_escape_string($e_url);
	$e_last_air = mysql_real_escape_string($e_last_air);
	
	
	mysql_query("UPDATE myshowkev SET mydayname='$e_air_day', showname='$e_name', season_num='$e_season_no', episode_num='$e_ep_no', last_airdate='$e_last_air', list_link='$e_url' WHERE showid = '$e_id'");	
	$sql="SELECT * FROM myshowkev WHERE mydayname = '".$e_air_day."'";
	$refreshdata = mysql_query($sql);
	
}

/**
    **EDd of full edit update
**/



/**
	**Start of Update Day section**
**/
if(isset($_GET["setupdateday"]))
{
	$updateday=$_GET["updateday"];
	$showid = $_GET["showid"];
	
	mysql_query("UPDATE myshowkev SET mydayname='$updateday' WHERE showid = '$showid'");	
	$sql="SELECT * FROM myshowkev WHERE mydayname = '".$updateday."'";
	$refreshdata = mysql_query($sql);
}
/**
	^^End of Update Day section^^
**/

/**
	**Start of Insert section**
**/
if(isset($_GET["insert"]))
{
	$newday=$_GET["newday"];
	$newshow=$_GET["newshow"];
	
	
	$season_no = $_GET["season_no"];
	$ep_no = $_GET["ep_no"];
	$ep_url = $_GET["ep_url"];
	
	$tvrage_id= $_GET["tvrage_id"];
	
	$ep_url = mysql_real_escape_string($ep_url);
	//rawurldecode($newshow);
	//echo $newday." ". $newshow;
	 $newshow = ucwords($newshow);
	$newshow = mysql_real_escape_string($newshow);
	
	mysql_query("INSERT INTO myshowkev (mydayname, showname, season_num, episode_num, last_airdate, list_link, tvrageapi_id) VALUES ('$newday', '$newshow', '$season_no', '$ep_no', 'Unknown', '$ep_url', '$tvrage_id' )");
	
		$day=$newday;
	
	
	
	if($path=="day")
	{
		$sql="SELECT * FROM myshowkev WHERE mydayname = '".$day."'";
		$refreshdata = mysql_query($sql);
		
	}
	if($path=="name")
	{
		$sql="SELECT * FROM myshowkev WHERE showname = '".$newshow."'";
		$refreshdata = mysql_query($sql);
	}
}
/**
	^^End of Insert section^^
**/


if(isset($_SESSION['loggedin']))
{
if($_SESSION['loggedin']=="true")
{
	//echo "yes";
	$disabled="";
	$loggedin="true";
}
else
{
	//echo "no";
	$disabled="disabled";
	$loggedin="false";
}
}
else
{
	//echo "not set";
	$disabled="disabled";
	$loggedin="false";
}

echo "<table cellpadding='10'>
<thead>
<tr>
<th>Show Name</th>
<th>Search Torrent</th>
<th>Air Day</th>
<th>Wiki</th>
<th>iframe</th>
<th>Last Air Date</th>
<th>Edit</th>
<th>TvRage</th>
<th>Remove</th>
</tr>
</thead>";
$x=0;


while($row = mysql_fetch_array($refreshdata))
  {
	  
$show  = $row['showname'];
$showid = $row['showid'];
$show=stripslashes($show);
$airday=$row['mydayname'];
$spaces = " ";
$plussign   = ".";
$db_air_date = $row['last_airdate'];
$season_no = $row['season_num'];
$ep_no = $row['episode_num'];
$list_link = $row['list_link'];
$tvrageapi_id=$row['tvrageapi_id'];
$db_air_date=stripslashes($db_air_date);
$list_link=stripslashes($list_link);


if($db_air_date != $air_date){
	//$db_air_date = "searching";
	
	$curl_handle=curl_init();
	curl_setopt($curl_handle,CURLOPT_URL,$list_link);
	curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($curl_handle); 
	curl_close($curl_handle);
	
	$output = preg_replace("/&#?[a-z0-9]+;/i","",$output);
	$spaced_date = $smonth." ".$sday.", ".$syear;
	
	$air_date=$air_date;
	$spaced_date=$spaced_date;
	
	
	if (strpos($output,'<td>'.$air_date) !== false) {
		//echo 'true';
		$db_air_date = "Aired";
		mysql_query("UPDATE myshowkev SET last_airdate='$air_date', episode_num  = episode_num + 1 WHERE showid = '$showid'");
		$ep_no++;
	}elseif (strpos($output,'<td>'.$spaced_date) !== false) {
		//echo 'true';
		$db_air_date = "Aired";
		mysql_query("UPDATE myshowkev SET last_airdate='$air_date', episode_num  = episode_num + 1 WHERE showid = '$showid'");
		$ep_no++;
	}
	
	
	
}else{
	$db_air_date = "Aired";
}

$snx=$season_no;
$enx=$ep_no;

if ($season_no < 10){
$snx = "0".$season_no;
}
if($ep_no < 10){
	$enx = "0".$ep_no;
}


$newphrase = str_replace($spaces, $plussign, $show);
	     
$g=urlencode($list_link);
  $g=json_encode($g);
  echo "<tbody>";
  echo "<tr id=$showid >";
  echo "<td><input type='text' id='updname$x' name=$show value=\"$show\" onblur='updateshow($showid,this.value)' $disabled/></td>"; 
  echo "<td><a id='$g' data-tvid='$tvrageapi_id' draggable='true' ondragstart='drag(event)' target='_blank' href=https://www.google.co.uk/search?q=" . $newphrase . "+s".$snx."e".$enx."+720p+torrent&ie=UTF-8&safe=off&tbs=qdr:w>".$row['showname']."</a></td>";
  echo "<td>
  <select id='updateday$x' onchange='updateday(this.value,$showid)' $disabled>
  <option value=$airday>$airday</option>
  <option value='Sunday'>Sunday</option>
  <option value='Monday'>Monday</option>
  <option value='Tuesday'>Tuesday</option>
  <option value='Wednesday'>Wednesday</option>
  <option value='Thursday'>Thursday</option>
  <option value='Friday'>Friday</option>
  <option value='Saturday'>Saturday</option>
  </select></td>";
  echo "<td><a target='_blank' href=".$list_link.">info</a></td>";
   echo "<td><a href='#' onclick='updateiframe($g)' >iframed</a></td>";
  echo "<td>".$db_air_date."</td>";
   echo "<td><button type='button' id='es$x' onclick='edit_this_show($showid,\"$newphrase\",$g,$ep_no,$season_no,\"$db_air_date\",\"$airday\")' $disabled >Edit</button></td>";
   echo "<td><button type='button' id='tv$x' onclick='tvrageapi_getshowhistory($tvrageapi_id)' >History</button></td>";
  echo "<td><input type='checkbox' id='chk$x' $disabled /></td>";
  echo "</tr>";
  $x++;
  }
  //$showid,'$newphrase',$g,'$ep_no','$season_no','$db_air_date','$airday'
  echo "</tbody>";
  echo "<tfoot>";
  echo "<tr>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
   echo "<td></td>";
  echo "<td><input type=button id='btnremove' value='Remove' onclick='if($x>0){show_confirm($x)}' $disabled/></td>";
  echo "</tr>";
  echo "</tfoot>";
  
  if(isset($airday))
  {
  }
  else
  {
	  if(isset($day))
	  {
	      $airday=$day;
	  }
	  else
	  {
		  $airday="Sunday";
	  }
  }
  /*
  echo "<tr onmouseover=\"style.backgroundColor='#2EFE2E'\" onmouseout=\"style.backgroundColor='#6699cc'\">
  <td><input type='text' id='newshow' style='background-color: #2EFE2E' $disabled/></td>
  <td><input type='number' placeholder='current season no.' id='newshow_season'   />
  <input type='number' placeholder='current episode no.' id='newshow_episode'   />
  <input type='text' placeholder='wiki episode link'  id='newshow_link'  /></td>
  
  <td>
  <select id='selectaday' $disabled>
  <option value=$airday>$airday</option>
  <option value='Sunday'>Sunday</option>
  <option value='Monday'>Monday</option>
  <option value='Tuesday'>Tuesday</option>
  <option value='Wednesday'>Wednesday</option>
  <option value='Thursday'>Thursday</option>
  <option value='Friday'>Friday</option>
  <option value='Saturday'>Saturday</option>
  </select>
  </td>
  <td></td>
  <td></td>
  <td><input type=button id='btnadd' value='Add' onclick='insertshow()' $disabled/></td>
  
  </tr>";
  */
echo "</table>";

if($loggedin=="true")
{
	echo "<input id='pwd' type='password' onkeypress='press_enter(event,$x)' placeholder='admin login' disabled/><input type='button'id='loginlogout'  value='Logout' onclick='adminlogout($x)'/>";
	
}
elseif ($loggedin=="false")
{
	echo "<input id='pwd' type='password' onkeypress='press_enter(event,$x)' placeholder='admin login'/><input id='loginlogout' type='button'  value='Login' onclick='adminlogin($x)'/>";
}


mysql_close($con);
?>
