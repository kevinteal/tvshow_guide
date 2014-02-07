<?php
session_start();


if(isset($_SESSION['loggedin'])){
	
	if($_SESSION['loggedin']="true")
	{
		echo "true";
	}else{
		echo "false";
	}
	
}

?>