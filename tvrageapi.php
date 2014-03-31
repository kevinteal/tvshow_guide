<?php

if(isset($_GET["option"])){
$option = $_GET["option"];
}
$value = $_GET["value"];

$value = urlencode($value);

$url = "http://services.tvrage.com/feeds/search.php?show=".$value;
$result = file_get_contents($url);
$xml = new SimpleXMLElement($result);


$content = "";
foreach($xml as $tvshow){
	$temp = urlencode($tvshow->name);
	$content.="<input type='radio' onclick='getshowid($tvshow->showid,\"$temp\")' name='show' value='".$tvshow->showid."'><label>".$tvshow->name."</label>";
}

echo $content;
?>