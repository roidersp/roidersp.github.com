var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="";
var disqus_number_c=2;
var disqus_per_page=3;
var pos=0;
var table1=false;
$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});
	
var indepthexpand = function(){
var text;
	$("#indepth_tabla_expand_1").on("click",function(){

		if(table1){
			$("#indepth_tabla_full_container_1").animate({ height: "430px"},2000);
			var position = $(".indepth_tabla_full").offset();
			
			$('html, body').animate({
			scrollTop: position.top
			}, 2000);
			$(this).find(".expand-corte").css("display","block");
			$(this).css('border-top','none');
			text="VER TABLA COMPLETA";
			table1=false;
		}else{
		var h=$(".indepth_tabla_container").height();
			
			$("#indepth_tabla_full_container_1").animate({ height: h+"px"},2000);
			
			$(this).find(".expand-corte").css("display","none");
			$(this).css('border-top','1px solid rgb(216, 216, 216)');
			
			text="Ver menos";
			table1=true;
		}
		$(this).find(".indepth_tabla_expand_text").html(text);
	})
				  
}

 function loadDisqus(source, identifier, url) {
	if (window.DISQUS) {
	   jQuery('#disqus_thread').insertAfter(source);
	   /** if Disqus exists, call it's reset method with new parameters **/
	
	    DISQUS.reset({
	  reload: true,
	  config: function () { 
	   this.page.identifier = identifier.toString();    //important to convert it to string
	   this.page.url = url;
	  }
	 });
	} else {
	//insert a wrapper in HTML after the relevant "show comments" link
		source.append('<div id="disqus_thread"></div>');
	   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
	   disqus_identifier = identifier; //set the identifier argument
	   disqus_url = url; //set the permalink argument
	   disqus_per_page=3;
	   //append the Disqus embed script to HTML
	   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
	   jQuery('head').append(dsq);
	}
};

$(document).ready(function(){
indepthexpand();
	$('#div-gpt-ad-1409780195277-0').html("<script type='text/javascript'>googletag.cmd.push(function() {googletag.defineSlot('/270045723/Ads_indepth', [1920, 800], 'div-gpt-ad-1409780195277-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});googletag.cmd.push(function() { googletag.display('div-gpt-ad-1409780195277-0'); });</script>");
	
	//indepth_sizeAdjust(true);
	//indepth_preloadImgs();

    var ventana_alto = $(window).height();
	 if(ventana_alto>800){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	
	 	}
	 	console.log(navigator.platform)
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
	    {   	
				 $("#indepth_parallax_back").css("background-attachment", "initial");
				 $("#indepth_libros_controles").css("display","none");
	    }
    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
		loadDisqus($("#indepth_coments"), disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});
$(window).on("resize", function(){

		
	
})