        //nav bar
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
	
        //page scroll
	$(document).ready(function(){
		$(".soft").click(function(){
			if(this.hash!==""){
				event.preventDefault();
				$('body').animate({
				  scrollTop: $(this.hash).offset().top-100
				}, 1000, function(){
				  window.location.hash = this.hash;
				});
			  }
			});
		  });
        
        //page scroll for footer links
	$(document).ready(function(){
		$(".footnav").click(function(){
			if(this.hash!==""){
				event.preventDefault();
				$('body').animate({
				  scrollTop: $(this.hash).offset().top-100
				}, 1000, function(){
				  window.location.hash = this.hash;
				});
			  }
			});
		  });
        //project 1
        $(document).ready(function(){
                $(".projbox1").hover(function(){
                        $(".projinfo1").css("height","125px");
                        $(".repobut1").css("transform","scale(1.0)");
                        $(".projpara1").css("opacity","0");
                }, function(){
                 $(".projinfo1").css("height","300px");
                 $(".repobut1").css("transform","scale(0)");
                 $(".projpara1").css("opacity","1");
            });
        });
        
        //project 2
        $(document).ready(function(){
                $(".projbox2").hover(function(){
                        $(".projinfo2").css("height","125px");
                        $(".repobut2").css("transform","scale(1.0)");
                        $(".projpara2").css("opacity","0");
                }, function(){
                 $(".projinfo2").css("height","300px");
                 $(".repobut2").css("transform","scale(0)");
                 $(".projpara2").css("opacity","1");
            });
        });
        
        //project 3
        $(document).ready(function(){
                $(".projbox3").hover(function(){
                        $(".projinfo3").css("height","125px");
                        $(".repobut3").css("transform","scale(1.0)");
                        $(".projpara3").css("opacity","0");
                }, function(){
                 $(".projinfo3").css("height","300px");
                 $(".repobut3").css("transform","scale(0)");
                 $(".projpara3").css("opacity","1");
            });
        });
        
        //project 4
        $(document).ready(function(){
                $(".projbox4").hover(function(){
                        $(".projinfo4").css("height","125px");
                        $(".repobut4").css("transform","scale(1.0)");
                        $(".projpara4").css("opacity","0");
                }, function(){
                 $(".projinfo4").css("height","300px");
                 $(".repobut4").css("transform","scale(0)");
                 $(".projpara4").css("opacity","1");
            });
        });
        
        //project 5
        $(document).ready(function(){
                $(".projbox5").hover(function(){
                        $(".projinfo5").css("height","125px");
                        $(".repobut5").css("transform","scale(1.0)");
                        $(".projpara5").css("opacity","0");
                }, function(){
                 $(".projinfo5").css("height","300px");
                 $(".repobut5").css("transform","scale(0)");
                 $(".projpara5").css("opacity","1");
            });
        });
        
        //project 6
        $(document).ready(function(){
                $(".projbox6").hover(function(){
                        $(".projinfo6").css("height","125px");
                        $(".repobut6").css("transform","scale(1.0)");
                        $(".projpara6").css("opacity","0");
                }, function(){
                 $(".projinfo6").css("height","300px");
                 $(".repobut6").css("transform","scale(0)");
                 $(".projpara6").css("opacity","1");
            });
        });
        
        //project 7
        $(document).ready(function(){
                $(".projbox7").hover(function(){
                        $(".projinfo7").css("height","125px");
                        $(".repobut7").css("transform","scale(1.0)");
                        $(".projpara7").css("opacity","0");
                }, function(){
                 $(".projinfo7").css("height","300px");
                 $(".repobut7").css("transform","scale(0)");
                 $(".projpara7").css("opacity","1");
            });
        });