<?php
$con = mysql_connect("localhost", "root", "")
	   or die("Could not connect: " . mysql_error());
	
	mysql_select_db("tvshows", $con)
	or die("Could not find database: " . mysql_error());

//get the q parameter from URL
$q=$_GET["q"];	
$hint="";
$sql="SELECT * FROM myshowkev";
$result = mysql_query($sql);
$a=array();
$x=0;
while($row = mysql_fetch_array($result))
  {
	 $a[$x]=$row['showname']; 
	 $x++;
  }


//lookup all hints from array if length of q>0
if (strlen($q) > 0)
  {
  $hint="";
  for($i=0; $i<count($a); $i++)
    {
		
    if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
      {
      
       
		
        $hint=$hint."<li><a href='#' onclick=findshow(this.text)>$a[$i]</a></li>";
		
        }
      }
    }
  

// Set output to "no suggestion" if no hint were found
// or to the correct values
if ($hint == "")
  {
  $response="no suggestion";
  }
else
  {
  $response="<ul id='hint_text'>".$hint."</ul>";
  }

//output the response
//echo "<a href='#' onclick=findshow(this.text)>$response</a>";
echo $response;
?>