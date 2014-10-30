var slider_on=false;
var posicion_cuentos = 0;
var posicion_slider=0;
var intervalID;

var numeroImages=0;


var startslider =function(){
	slider_on=true;
	$("#indepth_mapa_img_"+posicion_slider).show();
	$( "#indepth_mapa_controles #rep" ).removeClass( "pause" );
	clearInterval(intervalID);
	 intervalID=setInterval(function(){
	 	if(posicion_slider<numeroImages-1){
	 		posicion_slider++;
		 	
	 	}else{
	 		posicion_slider=0;
	 	}
	 	slider_change();	 		
	 	
	 }, 2000);
 }

var slider_stop= function(){
				slider_on=false;
				clearInterval(intervalID);
				$( "#indepth_mapa_controles #rep" ).addClass( "pause" );
}

var slider_back=function(){
	 if(posicion_slider>0){
	            posicion_slider = posicion_slider-1;
	            slider_change();
	        }
	       slider_stop();
}

var slider_next=function(){
	 if(numeroImages-1>posicion_slider){
            posicion_slider = posicion_slider+1;
            slider_change();
	        }
	       slider_stop();
}

var slider_change=function(){
	console.log("move"+posicion_slider)
	$(".indepth_mapa_img").hide();
	 	$("#indepth_mapa_img_"+posicion_slider).fadeIn();
	 	$("#indepth_mapa_container_text").animate({"left":-posicion_slider*100+"%"},600);
	 	if(posicion_slider<=0){
		 	$("#indepth_mapa_controles #prev").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #prev").css("visibility","visible");
	 	}
	 	
	 	if(posicion_slider>=numeroImages-1){
		 	$("#indepth_mapa_controles #next").css("visibility","hidden");
	 	}else{
		 	$("#indepth_mapa_controles #next").css("visibility","visible");
	 	}
}

var slider = function(x){	
	numeroImages=x;
	//$('#indepth_timeline_X').waypoint(function(direction) {
		if(!slider_on){
			startslider();
			
		}
	//});
	
	 $("#indepth_mapa_controles #rep").on("click",function(){
	 console.log(slider_on);
	 	if(slider_on){
	  		slider_stop();
	  	}else{
		  	startslider();
	  	}
	  });
	  
	   $("#indepth_mapa_controles #prev").on("click",function(){
	   console.log("prev")
	  		 slider_stop();
	  		slider_back();
	  		
	  });
	  
	   $("#indepth_africa_mapa, #indepth_mapa_map_imgconteneiner,#indepth_mapa_controles, #indepth_mapa_text").on("swiperight",function(){
	   console.log("r");
		   slider_stop();
	  		slider_back();
	   })
	   
	   $("#indepth_africa_mapa, #indepth_mapa_map_imgconteneiner,#indepth_mapa_controles, #indepth_mapa_text").on("swipeleft",function(){
	   console.log("l");
		   slider_stop();
	  		slider_next();
	   })
	  
	   $("#indepth_mapa_controles #next").on("click",function(){
	   	console.log("next")
	   		slider_stop();
	  		slider_next();
	  });

	
	 /*$(".element_timeline").on("click",function(){
		 if($(this).hasClass("no_active")){
		 	posicion_slider=$(this).attr("position");
		 	console.log("r: "+posicion_slider);
		 	$(".element_timeline").removeClass().addClass("element_timeline no_active");
		 	$("#element_timeline_"+posicion_slider).removeClass().addClass("element_timeline active");
		 	$(".indepth_slider_container").animate({"left":-posicion_slider*100+"%"},600);
		 	if(slider_on){
		 		slider_stop();
		 	}
		 }
	 });
	 
	*/	 
 } 
 
