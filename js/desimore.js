$(".desicase-list").on('click', 'li', function(event) {
	event.preventDefault();
	$(".mask").fadeIn(500);
});
$(".control span").click(function(event) {
	$(".mask").fadeOut(500);
});
(function(){
	var i=0;
$(".pic-list p").html(i+1+"/"+$('.casemore-list li').length)
$(".next").click(function(event) {
		i++;
	if(i==$(".casemore-list li").length){
	 	i=0;
	 }
	$(".casemore-list li").eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
	$(".pic-list p").html(i+1+"/"+$('.casemore-list li').length)
});
$(".prev").click(function(event) {
		i--;
	if(i==-1){
	 	i=$(".casemore-list li").length-1;
	 }
	$(".casemore-list li").eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
	
		$(".pic-list p").html(i+1+"/"+$('.casemore-list li').length)
});
})();

