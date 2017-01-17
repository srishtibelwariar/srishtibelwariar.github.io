
	$(document).ready(function(){
            $(".work").hover(function(){
                $(".workmenu").css("visibility", "inherit");
				
		$(".workmenu").hover(function(){
                    $(".workmenu").css("visibility", "inherit");
                });
				
            }, function(){
                 $(".workmenu").css("visibility","hidden");
            });
        });
        
		
	$(document).ready(function(){
            $(".contacts").hover(function(){
                $(".contactsmenu").css("visibility", "inherit");
				
			$(".contactsmenu").hover(function(){
                    $(".contactsmenu").css("visibility", "inherit");
                });
				
            }, function(){
                 $(".contactsmenu").css("visibility","hidden");
            });
        });
		
	$(document).ready(function(){
		$("a").click(function(){
			if(this.hash!==""){
				event.preventDefault();
				$('html, body').animate({
				  scrollTop: $(this.hash).offset().top-100
				}, 1000, function(){
				  window.location.hash = this.hash;
				});
			  };
			});
		  });