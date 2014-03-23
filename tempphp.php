<?php
$con = mysql_connect("localhost", "root", "")
	   or die("Could not connect: " . mysql_error());
	
	mysql_select_db("tvshows", $con)
	or die("Could not find database: " . mysql_error());
	
	
	
	
$sql="SELECT * FROM myshowkev";
$refreshdata = mysql_query($sql);

$tvarr = array();
$x=0;
while($row = mysql_fetch_array($refreshdata))
  {
	 // $tvarr[$x] = array("showname"=>$row["showname"]);
	//$tvarr[$x] = $row["showname"];
	  $x++;
	  array_push($tvarr,$row["showname"]);
  }


echo json_encode($tvarr);
?>