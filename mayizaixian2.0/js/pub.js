$(function(){
	// 弹框
	$("#follow,#download").bind("click", function (e) {
		var e = e || window.event;
		var curEl = e.srcElement || e.target;
		mbox(curEl.id);
	});
	$('.drop-down').hover(function(){
		$(this).find("ul").css("display","block");
	},function(){
		$(this).find("ul").css("display","none");
	});
});