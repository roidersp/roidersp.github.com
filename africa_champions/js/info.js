var numeroImages2=2;
 var slider_on2=false;
 var intervalID2;
var posicion_slider2=0;
 
 
var startslider2 =function(){
	slider_on2=true;
	console.log("strat");
	clearInterval(intervalID2);
	 intervalID2=setInterval(function(){
	 	if(posicion_slider2<numeroImages2-1){
	 		posicion_slider2++;
	 	}else{
	 		posicion_slider2=0;
	 	}
	 	slider_change2();	 		
	 }, 2000);
}
				 
var slider_change2=function(){
	 $("#indepth_infografia_container2").animate({"margin-left":-posicion_slider2*100+"%"},600);
	  $(".indepth_info_team_img").css("border-bottom","none");
	 $("#indepth_info_team"+posicion_slider2+" .indepth_info_team_img").css("border-bottom","3px solid black");

}
						 
var slider_stop2= function(){
	slider_on2=false;
	clearInterval(intervalID2);
}

var slider_back2=function(){
	 if(posicion_slider2>0){
	            posicion_slider2 = posicion_slider2-1;
	            slider_change2();
	        }
	       slider_stop2();
}

var slider_next=function(){
	 if(numeroImages2-1>posicion_slider2){
            posicion_slider2 = posicion_slider2+1;
            slider_change2();
	        }
	       slider_stop2();
}



		  
				 startslider2();

$("#indepth_infografia_container2").on("click",function(){
	if(slider_on){
		  		slider_stop2();
		  	}else{
			  	startslider2();
		  	}
})

$(".indepth_info_team").on("click",function(){
	posicion_slider2=$(this).attr("num");
	 slider_change2();
	 slider_stop2();
});