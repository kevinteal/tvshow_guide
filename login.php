<?php
session_start();


if(isset($_POST["pwd"]))
{
	$pwd=$_POST["pwd"];
	
	if($pwd=="admin")
	{
		echo 1;
		$_SESSION['loggedin']="true";
		
	}
	else
	{
		echo 0;	
		$_SESSION['loggedin']="false";
	}
}
else
{
	echo 0;	
	$_SESSION['loggedin']="false";
}

?>