/**
 * Created by jialong on 2014/7/9.
 */
$(function () {
    //激活左侧工具条提示
    $(".left-fixed-bar ul li").each(function () {
        $(this).hover(function () {
            $(this).tooltip("toggle");
        });
    });
});
function addDelicious() {
    var delicious = $("<div class='delicious-div'></div>").appendTo($("#dining-table"));
    var initX = Math.random() * innerWidth + "px";
    var initY = Math.random() * innerHeight + "px";
    delicious.css({position: 'absolute', left: initX, top: initY});
    var xh = setInterval(function () {
        randMove(delicious)
    }, 1000/16);
}
function randMove(element) {
    element.css({
        left: element.position().left + Math.random() * 50 - 25 + 'px',
        top: element.position().top + Math.random() * 50 - 25 + 'px',
        boxShadow:'0 0 '+Math.random()*100+'px rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')'
    });
}
function getDirection(element){

}