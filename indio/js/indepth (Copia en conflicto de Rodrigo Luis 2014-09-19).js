var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="9825dd4c-2f92-4719-9285-fe9c322e8ffdf4";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var size;
var size_h;
var pos=0;

$(document).on("click", "#indepth_button_ver" ,function(){
		var ir=$(this).attr("ir");
		var break_position=$("#indepth_break_"+ir).offset();
		var position = $("#indepth_page"+ir).offset();
		$('html, body').animate({
			scrollTop: break_position.top
		}, 2000, function(){
	$('html, body').animate({
				scrollTop: position.top
			}, 1800);
		});
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
		var break_position=$("#indepth_break_"+ir).offset();
		var position = $("#indepth_page"+ir).offset();
		$('html, body').animate({
			scrollTop: break_position.top
		}, 2000, function(){
	$('html, body').animate({
				scrollTop: position.top
			}, 1800);
		});
	})
}

$(document).ready(function(){
	menu();
    var ventana_alto = $(window).height();
	 if(ventana_alto>800){
	 	//$('.indepth_break').css("height",ventana_alto+"px");
	 	}
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
	    {   	
				 $(".indepth_parallax_back").css("background-attachment", "scroll");				 
	    }
    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-size", "100%");
	    $(".indepth_parallax_back").css("background-attachment", "scroll");
    }
		loadDisqus($("#indepth_coments"), disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});
$(window).on("resize", function(){

		
	
})