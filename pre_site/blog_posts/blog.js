$(document).ready(function(){

//animate name "jeffkeslin" when page opens (appear slowly)
$('#myname').hide().fadeIn(3500);

//initially hide articles
$('.feature').hide();
$('article').hide();

//expand article titles from below green blog posts div and hide dashboard
$('.sub-dashboard').on('click', function(){
	if($('.feature').is(':hidden')){
		$('.feature').show("slow");
		$('.dashboard').hide("slow");
	}else{
		$('.feature').hide("slow");
		$('.dashboard').show("slow");
	}
});

//expand and close articles on click
$('.article-name').on('click', function(){
	var $clicked = $(this).next().next()
	if($($clicked).is(':hidden')){
		$($clicked).show("slow");
	}else{
		$($clicked).hide("slow");
	}
});


//twitter feed
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

}); //end document ready function