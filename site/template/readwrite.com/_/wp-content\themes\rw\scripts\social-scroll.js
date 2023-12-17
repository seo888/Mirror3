$(window).scroll(function(e){var scroller_anchor=$("#scroller-anchor").offset().top;if($(this).scrollTop()>=scroller_anchor&&$('#single #menu-social-media').css('position')!='fixed')
{$('#single #menu-social-media').css({'position':'fixed','top':'0px','max-width':'5%'});$('.scroller_anchor').css('height','50px');}
else if($(this).scrollTop()<scroller_anchor&&$('#single #menu-social-media').css('position')!='relative')
{$('.scroller_anchor').css('height','0px');$('#single #menu-social-media').css({'position':'relative','max-width':'unset'});}});