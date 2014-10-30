var slider_on=false;
var posicion_cuentos = 0;
var posicion_slider=0;
var intervalID;

var numeroImages=0;
var paises= new Array('EGY','COD','MAR','CMR','TUN','DZA','GHA','GIN','NER','CIV','ZAF','COG');

var zoom = new Datamap({
  element: document.getElementById("indepth_mapa_map"),
  geographyConfig: {
            popupOnHover: true,
            highlightOnHover: false,
            borderColor: 'rgb(238, 238, 238)',
                  },
  scope: 'world',
  // Zoom in on Africa
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([21, 1])
      .rotate([4.4, 0])
      .scale(350)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);
    
    return {path: path, projection: projection};
  },
  fills: {
    defaultFill: "#fdfcf2",
    backnone: "none",
   active:"#eadb7b",
  },
  data: {
    'EGY': { fillKey: 'active', "num_pais":0 },
    'COD': { fillKey: 'active' , "num_pais":1},
    'MAR': { fillKey: 'active' , "num_pais":2},
    'CMR': { fillKey: 'active' , "num_pais":3},
    'TUN': { fillKey: 'active' , "num_pais":4},
     'DZA': { fillKey: 'active' , "num_pais":5},
    'GHA': { fillKey: 'active' , "num_pais":6},
    'GIN': { fillKey: 'active' , "num_pais":7},
    'NER': { fillKey: 'active', "num_pais":8},
    'CIV': { fillKey: 'active' , "num_pais":9},
    'ZAF': { fillKey: 'active' , "num_pais":10},
    'COG': { fillKey: 'active', "num_pais":11}
  },
  done: function(datamap) {
  numeroImages=12;
  
	  			var startslider =function(){
					slider_on=true;
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
				 
				 var slider_change=function(){
					 datamap.svg.selectAll('.datamaps-subunit').each(function(d,i){
							  if($(this).attr("data-info")!=undefined){
							 	var json=$.parseJSON($(this).attr("data-info"));
									 if( json.num_pais != undefined){
									 	if(json.num_pais==posicion_slider){
									 		d3.select(this).style("fill","#fc7c50");
										 }else{
											 d3.select(this).style("fill","#eadb7b");
										 }
									 }
								}
						} );
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

  var slider_next=function(){
	 if(numeroImages-1>posicion_slider){
            posicion_slider = posicion_slider+1;
            slider_change();
	        }
	       slider_stop();
		   }

	$("#indepth_mapa_controles #rep").on("click",function(){
		 	if(slider_on){
		  		slider_stop();
		  	}else{
			  	startslider();
		  	}
	  });
	  
	   $("#indepth_mapa_controles #prev").on("click",function(){
	  		 slider_stop();
	  		slider_back();
	  });
	  
	    $("#indepth_mapa_controles #next").on("click",function(){
	   		slider_stop();
	  		slider_next();
	  });
	  
				 startslider();
  			
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            	l=0;
            	            
            if($(this).attr("data-info")!=undefined){
				 var json=$.parseJSON($(this).attr("data-info"));
				 var num;
				 if( json.num_pais != undefined){
					 num=json.num_pais;
				 }
			}
            })
            .on('mouseover', function(geography) {
	             if($(this).attr("data-info")!=undefined){
					 var json=$.parseJSON($(this).attr("data-info"));
					 var num;
					 if( json.num_pais != undefined){
						 posicion_slider=json.num_pais;
						 datamap.svg.selectAll('.datamaps-subunit').each(function(d,i){
							  if($(this).attr("data-info")!=undefined){
							 	var json=$.parseJSON($(this).attr("data-info"));
									 if( json.num_pais != undefined){
										 d3.select(this).style("fill","#eadb7b");
										 slider_stop();
									 }
									 }
							}
						 )
						 d3.select(this).style("fill","#fc7c50");
						  $("#indepth_mapa_container_text").css({"left":-posicion_slider*100+"%"});
						}
				 }	
            });
        }
});

      

