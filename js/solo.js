GETCASE("nq",$(".zp-nq"));
GETCASE("kt",$(".zp-kt"));
GETCASE("js",$(".zp-js"));
GETCASE("xf",$(".zp-xf"));
function GETCASE(leii,ele){//
    $.post('../php/anlist.php',{lei:leii},function(data) {
        var datalist=$.parseJSON(data);
         var cas=`<li><img src=${datalist[0].img.split(",")[0]} alt=""><p>${datalist[0].title}</p></li>
              <li><img src=${datalist[1].img.split(",")[0]} alt=""><p>${datalist[1].title}</p></li>
              <li class="thr"><img src=${datalist[1].img.split(",")[0]} alt=""><p>${datalist[2].title}</p></li>`
    ele.append(cas);
 });
};
