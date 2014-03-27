
var icounter=0;


window.onload=function()
{
	var d = new Date();
	var theday=d.getDay();
	var dlday=getdayname(theday,1);
	//document.getElementById("heading").innerHTML="Day is: "+getdayname(theday,0);
	document.getElementById("tdv").value=dlday;
    document.getElementById("subheading").innerHTML="Download lineup from: "+dlday;
	selectday(dlday,false);
	
	
	for (icounter; icounter<=2; icounter++){
		var x = (icounter + 1) * 150;
      $('<span>', {id:"day"+icounter } ).appendTo("#daypick");
	  $("#day"+icounter).addClass("daybox");
	  $("#day"+icounter).css("left",x);
	}

	$(".daybox:nth-child(2)").html("<span class='dark'>"+dlday+"</span>");
	$(".daybox:nth-child(1)").html("<span class='dark'>"+getnextday(dlday,-1)+"</span>");
	$(".daybox:nth-child(3)").html("<span class='dark'>"+getnextday(dlday,1)+"</span>");

	$(".daybox:nth-child(2)").css({
		fontSize:"18px"
	}
		);

	

	
	
	 $( "#mydia" ).dialog({
      autoOpen: false,
      show: {
        effect: "clip",
        duration: 1000
      },
      hide: {
        effect: "clip",
        duration: 1000
      },
	  modal:true,
	 title: "Add New Tv Show",
	 minWidth: 400,
	 minHeight: 400,
	 close: function( event, ui ) {
		 $("#ep_url").css("border-color", "rgb(204,204,204)");
		 $("#name").css("border-color", "rgb(204,204,204)");
		 },
	  buttons: [ { text: "Add", 
	  		click: function() { 
				var name = document.getElementById("name").value;
				var ep_url = document.getElementById("ep_url").value;
				var season_number = document.getElementById("season_number").value;
				var episode_number= document.getElementById("episode_number").value;
				var day = document.getElementById("days").value;
				
				if(name === "" || ep_url === ""){
					$('#mydia').parent().effect("shake", {times: 4}, 1100);
					if(name ===""){
						
						document.getElementById("name").style.borderColor="red";
					}
					if(ep_url ===""){
						document.getElementById("ep_url").style.borderColor="red";
					}
				}else{
					$( this ).dialog( "close" ); 
					insertshow(name,ep_url,season_number,episode_number,day);
				}
				
			}}]
    });
	
	
	
	$( "#edit_show_form" ).dialog({
      autoOpen: false,
      show: {
        effect: "clip",
        duration: 1000
      },
      hide: {
        effect: "clip",
        duration: 1000
      },
	  modal:true,
	 title: "Edit Tv Show",
	 minWidth: 400,
	 minHeight: 400,
	 close: function( event, ui ) {
		 $("#e_name").css("border-color", "rgb(204,204,204)");
		 $("#e_ep_url").css("border-color", "rgb(204,204,204)");
		  $("#e_episode_number").css("border-color", "rgb(204,204,204)");
		 $("#e_season_number").css("border-color", "rgb(204,204,204)");
		 },
	  buttons: [ { text: "Edit", 
	  		click: function() { 
			
				var id = $("#e_id").val();
				var name = $("#e_name").val();
				var link_list = $("#e_ep_url").val();
				var ep_no = $("#e_episode_number").val();
				var season_no = $("#e_season_number").val();
				var last_air = $("#e_last_airdate").val();
				var air_date = $("#e_days").val();
				
				if(name === "" || link_list === "" || ep_no === "" || season_no === ""){
					$('#edit_show_form').parent().effect("shake", {times: 4}, 1100);
					if(name ===""){
						$("#e_name").css("border-color","red");
					}
					if(link_list ===""){
						$("#e_ep_url").css("border-color","red");
					}
					if(ep_no ===""){
						$("#e_episode_number").css("border-color","red");
					}
					if(season_no ===""){
						$("#e_season_number").css("border-color","red");
					}
				}else{
					$( this ).dialog( "close" ); 
					edit_show_update(id,name,link_list,ep_no,season_no,last_air,air_date);
				}
				
			}}]
    });
	
	
	
	
	
	
		check_if_logged_in();
	/*
	start on initial load, then when selecting day from list, run check against the selected day
	
	var months = new Array(12);
	months[0] = "January";
	months[1] = "February";
	months[2] = "March";
	months[3] = "April";
	months[4] = "May";
	months[5] = "June";
	months[6] = "July";
	months[7] = "August";
	months[8] = "September";
	months[9] = "October";
	months[10] = "November";
	months[11] = "December";
	var now = new Date();
	now.setDate(now.getDate()-7);
	alert(months[now.getMonth()]+""+now.getDate()+","+now.getFullYear());
	*/
	
}

function check_if_logged_in(){
	 $.ajax({url:"check_logged_in.php",success:function(result){
      if(result=="true"){
		  document.getElementById("dialog-link").style.display="block";
	  }
    }});
}

function open_show_form(){
	$( "#mydia" ).dialog( "open" );
}


xmlhttp=new XMLHttpRequest();

function work_out_last_date(day){
	switch(day)
	{
		case "Sunday":
		  day="0";
		  break;
		case "Monday":
		  day="1";
		  break;
		  case "Tuesday":
		  day="2";
		  break;
		case "Wednesday":
		  day="3";
		  break;
		  case "Thursday":
		 day="4";
		  break;
		case "Friday":
		  day="5";
		  break;
		  case "Saturday":
		  day="6";
		  break;
		default:
		  date="Can't Find day";
	}
	
	
	var tempd = new Date();
	var tempday=tempd.getDay();
	var diff = 0;


	for (var x=0;x<=6;x++)
	{
		if(day==tempday)
		{
			diff=x;
		}
		tempday--;
		if(tempday<0)
		{
			tempday=6;
		}
	}
	//use the val of diff to minus from date
	var months = new Array(12);
	months[0] = "January";
	months[1] = "February";
	months[2] = "March";
	months[3] = "April";
	months[4] = "May";
	months[5] = "June";
	months[6] = "July";
	months[7] = "August";
	months[8] = "September";
	months[9] = "October";
	months[10] = "November";
	months[11] = "December";
	var now = new Date();
	now.setDate(now.getDate()-diff);
	var searchdate = new Array(2);
	searchdate[0] = months[now.getMonth()];
	searchdate[1] = now.getFullYear();
	searchdate[2] = now.getDate();
	return searchdate;
}





function getdayname(date,called)
{
	if (called==1)
	{
		if (date==0)
		{
			date=6;
		}
		else
		{
		date=date-1;
		}
	}
switch(date)
	{
		case 0:
		  date="Sunday";
		  break;
		case 1:
		  date="Monday";
		  break;
		  case 2:
		  date="Tuesday";
		  break;
		case 3:
		  date="Wednesday";

		  break;
		  case 4:
		 date="Thursday";
		  break;
		case 5:
		  date="Friday";
		  break;
		  case 6:
		  date="Saturday";
		  break;
		default:
		  date="Can't Find day";
}
return date;
}



function selectday(day,editText)
{
	
	//checking if aired, work out last date 'day' was from today, send over that date and curl it and ouput it.
	var datearr = work_out_last_date(day);
	
	var air_date = datearr[0]+datearr[2]+","+datearr[1];
	//alert(air_date);
	//send datearr[0] and [1] to alledits.php use that date to curl all shows form returned query - if date equals last queried date dont query
	
	if (day=="")
  {
	    var d2 = new Date();
		var theday2=d2.getDay();
		day=getdayname(theday2,1);
	  
  }
	document.getElementById("myinfo").innerHTML="<img src='300.gif' style=\'margin-left:240px;'\ height='33' width='220' /></center>";
	xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
		$("#subheading").html("Download lineup from: "+day);
		if(editText==true){
			$(".daybox:nth-child(2)").html("<span class='dark'>"+day+"</span>");
			$(".daybox:nth-child(1)").html("<span class='dark'>"+getnextday(day,-1)+"</span>");
			$(".daybox:nth-child(3)").html("<span class='dark'>"+getnextday(day,1)+"</span>");
		}
    }
  }
xmlhttp.open("GET","alledits.php?downloadday="+day+"&day=runday&air_date="+air_date+"&smonth="+datearr[0]+"&sday="+datearr[2]+"&syear="+datearr[1],true);
xmlhttp.send();

}

function showHint(str)
{
if (str.length==0)
  { 
  document.getElementById("txtHint").innerHTML="";
  return;
  }

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","gethint.php?q="+str,true);
xmlhttp.send();
}

function findshow(show)
{
	
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","alledits.php?q="+show+"&searchshow=setsearchshow",true);
xmlhttp.send();
}


/**
function doiwork(txtshow)
{
	alert(txtshow);
}
**/

function adminlogin(x)
{
	var ans=new Boolean();
	var pwd=document.getElementById("pwd").value;
		
	xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    ans=xmlhttp.responseText;
	
		adminright(x,ans)
    }
  }
xmlhttp.open("POST","login.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pwd="+pwd);

}


function adminlogout(x)
{
	//alert("admin logout");
	
	xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    ans=xmlhttp.responseText;
		adminright(x,ans)
    }
  }
xmlhttp.open("POST","login.php",true);
xmlhttp.send();
	
}



function adminright(x,ans)
{
	var mybool=new Boolean();
	if(ans==1)
	{
		mybool=false;
		document.getElementById("pwd").disabled=true;
		document.getElementById("loginlogout").value="Logout";
		document.getElementById("loginlogout").onclick=function () { adminlogout(x); };
		document.getElementById("dialog-link").style.display="block";
		
	}
	if (ans==0)
	{
		mybool=true;
		document.getElementById("pwd").disabled=false;
		document.getElementById("loginlogout").value="Login";
		document.getElementById("loginlogout").onclick=function () { adminlogin(x); };
		document.getElementById("dialog-link").style.display="none";
		
	}
	//alert("in admin right "+sessionStorage.admin);
		for(i=0;i<x;i++)
	{
		document.getElementById("updname"+i).disabled=mybool;
		document.getElementById("updateday"+i).disabled=mybool;
		document.getElementById("chk"+i).disabled=mybool;
		document.getElementById("es"+i).disabled=mybool;
	}
	document.getElementById("btnremove").disabled=mybool;
	document.getElementById("newshow").disabled=mybool;
	document.getElementById("selectaday").disabled=mybool;
	document.getElementById("btnadd").disabled=mybool;
}

function updateday(day,id)
{
	//alert(day+" "+id);
	
	xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
			}
		  }
		xmlhttp.open("GET","alledits.php?updateday="+day+"&showid="+id+"&setupdateday=runupdateday",true);
		xmlhttp.send();
		
}


function insertshow(name,ep_url,season_number,episode_number,day)
{
//var newday = document.getElementById("selectaday").value;
//var newshow = document.getElementById("newshow").value;
//alert("name: "+name+"\n		ep_url: "+ep_url+"\n		season number: "+season_number+"\n		ep no: "+episode_number+"\n		day: "+day);

$("#ep_url").css("border-color", "rgb(204,204,204)");
	 $("#name").css("border-color", "rgb(204,204,204)");
	
		xmlhttp.onreadystatechange=function()
			  {
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
				document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
				}
			  }
			xmlhttp.open("GET","alledits.php?newday="+day+"&season_no="+season_number+"&ep_no="+episode_number+"&ep_url="+encodeURIComponent(ep_url)+"&newshow="+encodeURIComponent(name)+"&insert=setinsert",true);
			xmlhttp.send();
	
	
}

function updateshow(updtv,newname)
{
	
	encodeURIComponent(newname);
	
	xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
			}
		  }
		xmlhttp.open("GET","alledits.php?updatedname="+updtv+"&newname="+newname+"&updateshow=setupdateshow",true);
		xmlhttp.send();
}


function show_confirm(numshow)
{
	var tvarray=new Array();
	var tvi=0;
	
	var chkarr=new Array();
	
	for(i=0;i<numshow;i++)
	{
		if(document.getElementById("chk"+i).checked)
		{				
		tvarray[tvi]=document.getElementById("updname"+i).value;
		chkarr[tvi]=i;
		tvi++;
		}
	}
	
var r=confirm("Are you sure you want to delete "+tvarray.toString()+"?");
if (r==true)
  {
	  //call to whatever to delete the selected show from db
	  
		  xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("myinfo").innerHTML=xmlhttp.responseText;
			}
		  }
		xmlhttp.open("GET","alledits.php?delArray="+encodeURIComponent(tvarray)+"&delete=setdelete",true);
		xmlhttp.send();
	  
  }
else
  {
  
  
  for(ii=0;ii<tvarray.length;ii++)
	  {
	
		  document.getElementById("chk"+chkarr[ii]).checked=false;
	  }
  }
 
}


function updateiframe(url){
	console.log(decodeURIComponent(url));
	url=decodeURIComponent(url);
	var iframe = document.getElementById("iframe_url");
	document.getElementById("frame_close").style.display="block";
	iframe.src=url;
	iframe.style.display="block";
	
	
}
function close_frame(){
	
	document.getElementById("iframe_url").style.display="none";
	document.getElementById("frame_close").style.display="none";
	}
	
	function press_enter(e,x){
		var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		adminlogin(x);	
	}
	}
	
function edit_this_show(id,name,link_list,ep_no,season_no,last_air,air_date){
	link_list=decodeURIComponent(link_list);
	//alert("id:"+id+" \n name:"+name+"\n url:"+link_list+" \n ep no:"+ep_no+" \n season no:"+season_no+" \n last air "+last_air+"air day:"+air_date);
	
	name = name.replace(/[.]/g," ");
	$("#e_id").val(id);
	$("#e_name").val(name);
	$("#e_ep_url").val(link_list);
	$("#e_episode_number").val(ep_no);
	$("#e_season_number").val(season_no);
	$("#e_last_airdate").val(last_air);
	$("#e_days").val(air_date);
	

	$( "#edit_show_form" ).dialog( "open" );
}

function edit_show_update(id,name,link_list,ep_no,season_no,last_air,air_date){
	$("#e_name").css("border-color", "rgb(204,204,204)");
	$("#e_ep_url").css("border-color", "rgb(204,204,204)");
	$("#e_episode_number").css("border-color", "rgb(204,204,204)");
	$("#e_season_number").css("border-color", "rgb(204,204,204)");
	
	name=encodeURIComponent(name);
	link_list=encodeURIComponent(link_list);
	last_air=encodeURIComponent(last_air);
	
	 $.ajax({url:"alledits.php?showid="+id+"&e_name="+name+"&e_link_list="+link_list+"&e_ep_no="+ep_no+"&e_season_no="+season_no+"&e_last_air="+last_air+"&e_air_date="+air_date+"&update_full_edit=runfullupdate",success:function(result){
      $("#myinfo").html(result);
    }});
	

	//alert("id:"+id+" \n name:"+name+"\n url:"+link_list+" \n ep no:"+ep_no+" \n season no:"+season_no+" \n last air "+last_air+"air day:"+air_date);
}

function getnextday(currday,direction){
	day=0;

switch(currday)
	{
		case "Sunday":
		  day="0";
		  break;
		case "Monday":
		  day="1";
		  break;
		  case "Tuesday":
		  day="2";
		  break;
		case "Wednesday":
		  day="3";
		  break;
		  case "Thursday":
		 day="4";
		  break;
		case "Friday":
		  day="5";
		  break;
		  case "Saturday":
		  day="6";
		  break;
		default:
		  date="Can't Find day";
	}
	
	day=parseInt(day);
	direction=parseInt(direction);
	day=day+direction;
	
	if (day==-1){
		day=6;
	}
	if(day==7){
		day=0;
	}
	
	switch(day)
	{
		case 0:
		  day="Sunday";
		  break;
		case 1:
		  day="Monday";
		  break;
		  case 2:
		  day="Tuesday";
		  break;
		case 3:
		  day="Wednesday";
		  break;
		  case 4:
		 day="Thursday";
		  break;
		case 5:
		  day="Friday";
		  break;
		  case 6:
		  day="Saturday";
		  break;
		default:
		  date="Can't Find day";
	}
	
	return day;
}

function movearr(direction){

		
	$("#arrow1").attr("disabled",true);
	$("#arrow2").attr("disabled",true);
	
	if (direction=="left"){
		
		$( ".dark:first" ).animate({
			opacity:0
		},400);
		
		
		$( ".daybox:first" ).animate({
			left: "-=150",
		  }, 400, function() {
			$(".daybox:first").remove();
			
			
		$('<div>', {id:"day"+icounter } ).appendTo("#daypick");
	  	$("#day"+icounter).addClass("daybox");
		var text = $(".daybox:nth-child(2)").html();
		text = text.replace(/<(?:.|\n)*?>/gm, '');
		
		text = getnextday(text,1);
		$("#day"+icounter).html("<span class='dark'>"+text+"</span>");
		$("#day"+icounter).css({
			opacity:0,
			left:600
			});
		$("#day"+icounter).animate({
			left:"-=150",
			opacity:1
		},400, function(){
			$("#arrow1").attr("disabled",false);
			$("#arrow2").attr("disabled",false);
			var text = $(".daybox:nth-child(2)").html();
			//remove span tag
			text = text.replace(/<(?:.|\n)*?>/gm, '');
			selectday(text,false);
		});
		icounter++;
		
		  });
		  
		  $(".daybox:nth-child(2)").delay(200).animate({
			left:"-=150",
			fontSize:14
		},300);
		$(".daybox:nth-child(3)").delay(200).animate({
			left:"-=150",
			fontSize:18
		},300);
		
		
		
		
	}else if (direction =="right"){
		
		
		
		$( ".dark:last" ).animate({
			opacity:0
		},400);
		
		
		$( ".daybox:last" ).animate({
			left: "+=150",
		  }, 400, function() {
			$(".daybox:last").remove();
			 $('<div>', {id:"day"+icounter } ).prependTo("#daypick");
			 
			 
			 
	  	$("#day"+icounter).addClass("daybox");
		var text = $(".daybox:nth-child(2)").html();
		text = text.replace(/<(?:.|\n)*?>/gm, '');
		
		text = getnextday(text,-1);
		$("#day"+icounter).html("<span class='dark'>"+text+"</span>");
		$("#day"+icounter).css("opacity",0);
		$("#day"+icounter).animate({
			left:"+=150",
			opacity:1
		},400, function(){
			$("#arrow1").attr("disabled",false);
			$("#arrow2").attr("disabled",false);
			
			var text = $(".daybox:nth-child(2)").html();
			//html will inculde the span tag so remove it
			text = text.replace(/<(?:.|\n)*?>/gm, '');
			selectday(text,false);
			
		});
		icounter++;
		
		  });
		  
		  $(".daybox:nth-child(2)").delay(200).animate({
			left:"+=150",
			fontSize:14
		},300);
		$(".daybox:nth-child(1)").delay(200).animate({
			left:"+=150",
			fontSize:18
		},300);
		
		
		
	}
}
function tvrageapi(option,value){
	$.ajax({
	  url: "tvrageapi.php?value="+value+"&option=opt",
	  cache: false
	})
	  .done(function( html ) {
		$("#resultstv").empty();
		$("#resultstv").html(html);
	  });
	
	$("#resultstv").css("display","block");
}

function tvrageapi_getshowhistory(id){
	//$("#tvrage").html(id);
	//count for width of parent
	var tvcount=1;
	 $.ajax({
            type: "GET",
            url: "tvrageapi_history.php?value="+id,
            cache: false,
            dataType: "xml",
            success: function(xml) {
				//get each season tag
                $(xml).find('Season').each(function(){
					//empty the parent 
					$("#tvrage").empty();
					//season no
                    var season_num = $(this).attr('no')
					//create new div for season holder
					$('<div>', {id:"trs"+season_num } ).appendTo("#tvrage");
					$("#trs"+season_num).addClass('tvs');
					tvcount=1;
					//find each ep
					$(this).find('episode').each(function(){
												
						var epnum = $(this).find('epnum').text(),
						title = $(this).find('title').text();
						//create new div for ep and add to season 
						$('<div>', {id:"trse"+epnum} ).appendTo("#trs"+season_num);
						
						$("#trse"+epnum).addClass('tvep');
						$("#trse"+epnum).html(epnum+" - "+title);
						
						//calculate width in here
						
						tvcount++;
					});
                    
                });
				tvcount=tvcount*80;
				
				//make latest season the visible one
				//could have div above with all seasons in, onclick take season num and make current season div display none and new display block
				
				$(".tvs:last-child").css("display","block");
				$(".tvs:last-child").css("width",tvcount+"px");
            }
        });
}


// JavaScript Document