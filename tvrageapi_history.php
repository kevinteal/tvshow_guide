<?php
header('Content-type: text/xml');


if(isset($_GET["option"])){
$option = $_GET["option"];
}
$value = $_GET["value"];


$url = "http://services.tvrage.com/feeds/episode_list.php?sid=".$value;
print file_get_contents($url);
//$xml = new SimpleXMLElement($result);


//echo $xml;
?>