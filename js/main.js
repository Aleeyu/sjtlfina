GETCASE("nq");
GETCASE("kt");
GETCASE("js");
function GETCASE(leii){
    $.post('php/anlist.php',{lei:leii},function(data) {
     var datali=$.parseJSON(data);
     for (var i = 0;i<3;i++) {
         var img=datali[i].img.split(",")[0].slice(3);
         var cas=`<div class="item lf itemss">
      <div><img src=${img} alt=""><span><a href="html/casemore.html#${datali[i].id}"><img src="images/search.png" alt=""></a></span></div>
      <h3>${datali[i].title}</h3>
      <em></em>
      <p>${datali[i].msg.slice(0, 30)}<br>${datali[i].msg.slice(30,50)}</p>
    </div>`
    $(".case-box").append(cas);
     }
 });
};
 $.post('php/selnews.php', function(data) {
 	var datalist=$.parseJSON(data);
 	for (var i = 0;i<3;i++) {
 		var inew=`<div class="newit cl">
      <div class="new-list">
        <span>${datalist[i].timee}</span>
        <p>${datalist[i].msg.slice(0,40)}</p>
        <em></em>
      </div>
    </div>`
    $(".newbox").append(inew);
 	}
 });