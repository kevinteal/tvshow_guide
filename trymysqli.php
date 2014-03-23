<?php

	$DB_NAME = 'tvshows';
	$DB_HOST = 'localhost';
	$DB_USER = 'root';
	$DB_PASS = '';


$db = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}
/*
$me = "The Simpsons";
$me = $db->escape_string($me);

$sql = 
	"
	SELECT *
    FROM `myshowkev`
	";
	
if(!$result = $db->query($sql)){
    die('There was an error running the query [' . $db->error . ']');
}

while($row = $result->fetch_assoc()){
   // echo stripslashes($row['showname']) . '<br />';
}
echo $result->num_rows;


if(! $statement = $db->prepare("SELECT * FROM 'myshowkev' WHERE 1=1")){
	echo "err" . $db->error;
}

$day = "tuesday";

if(! $statement->bind_param('s',$day)){
	echo "error". $db->error;
}

$statement->execute();

//$statement->bind_result($returned_day);

while($statement->fetch()){
   // echo $returned_name . '<br />';
}

$statement->free_result();
*/

$day = "tuesday";
$sn = 1;

if($stmt = $db -> prepare("SELECT showname,showid FROM myshowkev WHERE season_num=? and mydayname=?")) {

      /* Bind parameters
         s - string, b - blob, i - int, etc */
      $stmt -> bind_param("is", $sn,$day);

      /* Execute it */
      $stmt -> execute();

      /* Bind results */
      $stmt -> bind_result($result,$id);

      /* Fetch the value */
     // $stmt -> fetch();
	
		
	  while($stmt->fetch()){
     	 echo $id .' '. $result .'<br />';
	  }
	  
     

      /* Close statement */
      $stmt -> close();
   }else{
	   echo $db->error;
   }

   /* Close connection */
   $db -> close();


?>