<?php
session_start();
$_SESSION['lastone']="day";
$downloadday=$_GET["downloadday"];

$con = mysql_connect("localhost", "root", "")
	   or die("Could not connect: " . mysql_error());
	
	mysql_select_db("tvshows", $con)
	or die("Could not find database: " . mysql_error());
	


$sql="SELECT * FROM myshowkev WHERE mydayname = '".$downloadday."'";

$result = mysql_query($sql);

/**
if(isset($_COOKIE["user"]))
{
	echo $_COOKIE["user"];
}
else
{
	setcookie("user","Kevin",time()+86400);
	//to unset the cookie do time()-3600 on a setcookie()
}

for admin
	disabled property changabled by JS
	need to pass over the amount of shows in list
	then in JS function loop thru that amount getting the
	new id changing disabled = false

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

echo "<table border='0'>
<tr>
<th>Show Name</th>
<th>OneDDL</th>
<th>Filestube</th>
<th>Air Day</th>
<th>Wiki</th>
<th>Remove</th>
</tr>";
$x=0;


while($row = mysql_fetch_array($result))
  {
	  
$show  = $row['showname'];
$showid = $row['showid'];
$show=stripslashes($show);
$day=$row['mydayname'];
$spaces = " ";
$plussign   = "+";

$newphrase = str_replace($spaces, $plussign, $show);
	     
  echo "<tr id=$showid onmouseover=\"style.backgroundColor='#D8D8D8'\" onmouseout=\"style.backgroundColor='#FFFFFF'\">";
  echo "<td><input type='text' id='updname$x' name=$show value=\"$show\" onblur='updateshow($showid,this.value)' $disabled/></td>"; 
  echo "<td><a href=http://www.oneddl.com/?s=" . $newphrase . ">".$row['showname']."</a></td>";
  echo "<td><a href=http://www.filestube.com/search.html?q=" . $newphrase . "&select=All&sort=dd>".$row['showname']."</a></td>";  
  echo "<td>
  <select id='updateday$x' onchange='updateday(this.value,$showid)' $disabled>
  <option value=$day>$day</option>
  <option value='Sunday'>Sunday</option>
  <option value='Monday'>Monday</option>
  <option value='Tuesday'>Tuesday</option>
  <option value='Wednesday'>Wednesday</option>
  <option value='Thursday'>Thursday</option>
  <option value='Friday'>Friday</option>
  <option value='Saturday'>Saturday</option>
  </select></td>";
  echo "<td>
  <a href=http://www.google.co.uk/search?sourceid=chrome&ie=UTF-8&q=wiki+".$newphrase.">info</a>
  </td>";
  echo "<td><input type='checkbox' id='chk$x' $disabled></td>";
  echo "</tr>";
  $x++;
  }
  
  echo "<tr>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td></td>";
  echo "<td><input type=button id='btnremove' value='Remove' onclick='if($x>0){show_confirm($x)}' $disabled/></td>";
  echo "</tr>";
  
  
  echo "<tr onmouseover=\"style.backgroundColor='#2EFE2E'\" onmouseout=\"style.backgroundColor='#FFFFFF'\">
  <td><input type='text' id='newshow' style='background-color: #2EFE2E' $disabled/></td>
  <td></td>
  <td></td>
  <td>
  <select id='selectaday' $disabled>
  <option value=$downloadday>$downloadday</option>
  <option value='Sunday'>Sunday</option>
  <option value='Monday'>Monday</option>
  <option value='Tuesday'>Tuesday</option>
  <option value='Wednesday'>Wednesday</option>
  <option value='Thursday'>Thursday</option>
  <option value='Friday'>Friday</option>
  <option value='Saturday'>Saturday</option>
  </select>
  </td>
  <td><input type=button id='btnadd' value='Add' onclick='insertshow()' $disabled/></td>
  </tr>";
echo "</table>";

if($loggedin=="true")
{
	echo "<input id='pwd' type='password' placeholder='admin login' disabled/><input type='button'id='loginlogout' value='Logout' onclick='adminlogout($x)'/>";
}
elseif ($loggedin=="false")
{
	echo "<input id='pwd' type='password' placeholder='admin login'/><input id='loginlogout' type='button' value='Login' onclick='adminlogin($x)'/>";
}


mysql_close($con);
?>