var orderOutline;
$(function(){
	orderOutline = initTestData(10);
	var $scheduleOutline = $("#schedule-outline");
	for(var i = 0; i < orderOutline.length; i ++){
		var outline = orderOutline[i];
		var $li = $("<li class='"+outline.id+"'>").appendTo($scheduleOutline);
		var $d = $("<div>").appendTo($li);
		$d.attr("class","ellipsis ")
			.attr("title",outline.title)
			.attr("state",outline.state)
			.text(outline.title)
			.after("<input type='text' class='schedule-input validate-integer' id='"+outline.id+"' value='"+outline.duration+"'/><span>分钟</span>");
	}
	//表单校验，
	$(document).on("blur",".validate-integer",function(){
		if($(this).val() == undefined || $(this).val() == ""){
			alert("该项不能为空");
			$(this).focus();
			return ;
		}
		//校验是否是整数
		var isInteger = /^\d+$/g.test($(this).val());
		if(!isInteger){
			alert("只能输入数字！");
			$(this).focus();
			$(this).select();
		}
	});
//	$( "#schedule-outline" ).sortable();
//	$( "#schedule-outline" ).disableSelection();
});
function validateForm(){
	
}
function getscheduleData(){
	var seri = $("#schedule-form").serializeJSON();
	console.log(seri);
}
/***
 * 将表单数据序列化成JSON
 */
$.fn.serializeJSON = function() {
	var serializeObj = {};
	var array = this.serializeArray();
	$(array).each(function() {
		if (this.name in serializeObj) {
			if ($.isArray(serializeObj[this.name])) {
				serializeObj[this.name].push(this.value);
			} else {
				serializeObj[this.name] = [ serializeObj[this.name], this.value ];
			}
		} else {
			serializeObj[this.name] = this.value;
		}
	});
	return serializeObj;
};
//初始化测试数据
function initTestData(size){
	  var datas = new Array();
	  for(var i=1; i<=size; i++){
	  	var data = {
	  		period:i,
	  		duration:parseInt((Math.random()*30)+10),
	  		title:"T"+i+" JDBC连接数据库及处理结果集",
	  		id:"abe29fehwk2n"+i,
	  		state:0
	  	};
	  	datas.push(data);
	  }
  	  return datas;
 }
//创建课程表
function createschedule(){
	$(".sche-tips").show();
	$(".schedule-line-header").show();
  	var schedules = $("#schedules").val();
  	var periodDuration = $("#periodDuration").val();
	var $scheduleForm = $("#schedule-form");
	var widthVar = 260/periodDuration;
	//初始化测试数据
	var datas = orderOutline;
	for (var i = 0,c = 1; c <= datas.length; i ++,c++) {
		var data = datas[i];
		//当前课时已用时长
		var totalDur = 0; 
		var schedule = "<div class='schedule-line' id='tem-schedule-line'>"
			+"<div class='pull-left text-muted schedule-period'>课时"+c+"：</div>"
			+"<input type='hidden' name='period' value='"+c+"'/>"
			+"<ul id='sortable"+c+"' class='connectedSortable ul-schedule-cont' style='width:"+periodDuration*widthVar+"px'>";
		for(var j = i; j < datas.length; j ++){
			var d = datas[j];
			totalDur += parseInt(d.duration);
			//已用时长大于课时时长，则跳出，换下一个课时
			if(totalDur > periodDuration){
				totalDur -= parseInt(d.duration);
				i = j-1;
				break;
			}
			//减1是为了减去右边框宽度
			schedule += "<li class='ui-state-highlight' style='width:"+((d.duration*widthVar)-1)+"px' id='"+d.id+"' duration='"+d.duration+"'>"+d.duration+"分钟</li>";
			if(j == datas.length-1){
				i = j;
			}
		}
		schedule += "</ul><div class='text-muted remain-time'>"+(periodDuration-totalDur)+"分钟</div>"
			+"<input type='hidden' name='arrangeRemainTime' value='"+(periodDuration-totalDur)+"'/>"
			+"<div class='sche-input'><input class='timepicker readonly' type='text' value='09:00' name='startTime'/></div>"
			+"<div class='sche-input'><input class='timepicker readonly' type='text' value='09:50' name='endTime'/></div>"
			+"<div class='sche-input'><input class='datepicker readonly' type='text' value='2014-11-11' name='startDate' style='width:75px'/></div>"
			+"<div class='shce-state'></div></div>";
		$scheduleForm.append(schedule);
	}
	$("body").append("<script src='../../js/datepicker.js' type='application/javascript'></script>");
	 //激活排序
	activeSortable(periodDuration);
	
}
//激活排序
function activeSortable(periodDuration){
	$( ".connectedSortable" ).sortable({
      connectWith: ".connectedSortable",
      over: function(ev, ui){
      		//激活顺序视图的对应节点
      		$("."+ui.item.attr("id")).addClass("activeItem");
      		//目标课时时长
      		var desDuration = getscheduleDur($(this));
      		//当前拖拽内容时长
      		var itemDur = parseInt(ui.item.attr("duration"));
	      	if((desDuration+itemDur) > periodDuration){
	      		//隐藏占位符
	      		ui.placeholder.addClass("hide");
	      		ui.sender.addClass("no");
	      	}else{
	      		//显示占位符
	      		ui.placeholder.removeClass("hide");
	      		ui.sender.removeClass("no");
	      	}
		},
	  stop: function(ev,ui){
	  	//拖拽的课时
  		var $itemParent = ui.item.parent();
  		//移除顺序视图对应节点的激活效果
  		$("."+ui.item.attr("id")).removeClass("activeItem");
  		if(ui.item.prev().length == 0){
  			var $prevUl = ui.item.parent().parent().prev().find("ul");
  			for(var i = 0; i < 99; i++){
  				if($prevUl.find("li").length == 0){
  					$prevUl = $prevUl.parent().prev().find("ul");
  					continue;
  				}else{
		  			var prevId = $prevUl.find("li:last").attr("id");
		  			$("."+prevId).after($("."+ui.item.attr("id")));
		  			break;
  				}
  			}
  		}else{
	  		//将顺序视图的节点也移动到对应节点之后
	  		$("."+ui.item.prev().attr("id")).after($("."+ui.item.attr("id")));
  		}
  		
  		//目标课时
	  	var desDuration = getscheduleDur($itemParent);
  		//剩余时长
  		var remainDur = getscheduleDur($(this));
  		//设置拖动课时的剩余时长
  		$(this).next().text((periodDuration-remainDur)+"分钟");
  		//设置目标课时的剩余时长
  		$itemParent.next().text((periodDuration-desDuration)+"分钟");
	  },
	  //当一个有使用连接的sortable对象结束排$scheduleTem序动作时，所有允许的sortable触发此事件。
      deactivate: function(ev, ui){	   
	      	if($(this).hasClass("no")){
	      		return false;
	      	}
      }
    }).disableSelection();
}
//获得目标课时当前已使用时长
function getscheduleDur(obj){
  	var liArr = obj.find("li[duration]");
  	//目标课时时长
	var desDuration = 0;
	for(var i = 0; i < liArr.length; i++){
		var dur =  $(liArr[i]).attr("duration");
		desDuration += parseInt(dur);
	}
	return parseInt(desDuration);
}