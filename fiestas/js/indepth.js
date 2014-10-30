var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="5639cb2f-72cb-4cda-89e4-c963b8cfecac";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var size;
var size_h;
var pos=0;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

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

var menu=function(){
	$(document).on("click",".indepth_author_img",function(){
		var ir=$(this).attr("ir");

		var position = $("#"+ir).offset();
				console.log(position);
		$('html, body').animate({
			scrollTop: position.top
		}, 3000, function(){

		});
	})
}





$(document).ready(function(){


	
	$('#div-gpt-ad-1402493947771-0').html("<script>googletag.cmd.push(function() { googletag.defineSlot('/270045723/Ads_indepth', [1920, 800], 'div-gpt-ad-1402493947771-0').addService(googletag.pubads()); googletag.pubads().enableSingleRequest();});googletag.cmd.push(function() { googletag.display('div-gpt-ad-1402493947771-0'); })</script>");
	
	
	//indepth_sizeAdjust(true);
	//indepth_preloadImgs();
	menu();
    var ventana_alto = $(window).height();
	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	var cover_h=$('#indepth_cover').height();
	 	console.log(cover_h);
 	if(ventana_alto<cover_h){
	 	$('#indepth_cover .indepth_cover_back_body').css("top",ventana_alto*.60);
 	}
	 	
	 	}
	 	console.log(navigator.platform)
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
	    {   	
				 $(".indepth_parallax_back").css("background-attachment", "scroll");				 
				 $("#indepth_libros_controles").css("display","none");
	    }
    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-size", "100%");
	    $(".indepth_parallax_back").css("background-attachment", "scroll");
    }
		loadDisqus($("#indepth_coments"), disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
		
		$('.indepth_ti_right').waypoint(function() {
					$(this).find(".indepth_text_img img").css("opacity","1");
					$(this).find(".indepth_text_img img").addClass("slideInLeft");
	   },{offset: '90%'});
 
   
   $('.indepth_ti_left').waypoint(function() {
   				$(this).find(".indepth_text_img img").css("opacity","1");
				$(this).find(".indepth_text_img img").addClass("slideInRight");
		},{offset: '90%'});
   });


$(window).on("resize", function(){

		
	
})