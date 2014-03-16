<?php

if(isset($_GET["option"])){
$option = $_GET["option"];
}
$value = $_GET["value"];

$value = urlencode($value);

$url = "http://services.tvrage.com/feeds/search.php?show=".$value;
$result = file_get_contents($url);
$xml = new SimpleXMLElement($result);


$content = "<ul>";
foreach($xml as $tvshow){
	$content.="<li>".$tvshow->name."</li>";
}


$content.="</ul>";

echo $content;
?>