var BgCtr ={
	getImageDim:function(e){
		var img = $(e).find("img");
		//set the returned values and show the image		
		var w_w	= $(window).width(),
		w_h	= $(window).height(),
		r_w	= w_h / w_w,
		i_w	= img.width(),
		i_h	= img.height(),
		r_i	= i_h / i_w,
		new_w,new_h,
		new_left,new_top;
				
		if(r_w > r_i){
			new_h	= w_h;
			new_w	= w_h / r_i;
		}
		else{
			new_h	= w_w * r_i;
			new_w	= w_w;
		}
		img.css({"width": new_w + "px","height": new_h +"px","marginLeft": (w_w - new_w) / 2 + "px","marginTop": (w_h - new_h) / 2 + "px"});	
	}
};
BgCtr.getImageDim(".sec_bg");
$(window).resize(function(){
	BgCtr.getImageDim(".sec_bg");
});

function txtHtml(a){
	$(a).live("click",function(){
		var tid = $(this).attr("data-id");
		if(tid != "" || tid != undefined){
			$("#pic_txt").animate({"bottom":"-50%"},500);
			setTimeout(function(){
				$("#pic_txt").find("h1").css("border-bottom","1px solid #fff").html(picInfo[tid].til);
				$("#pic_txt").find("p").html(picInfo[tid].txt);
				$("#pic_txt").animate({"bottom":"5%"},800);
			},1000);
		}
	})
}
txtHtml($("#screen img"));
txtHtml($("#screen canvas"));
txtHtml($("#bar .button"));

function attrSrc(e){
	$(e).find("img").each(function(i){
		var _this = $(this);
		var srcd = _this.attr("data-src");
		var pic = _this.attr("src");
		if(pic=="" || pic == undefined){
			_this.attr("src",srcd);
		}else{
			return;
		}
	});
}

var B = {
	ybreath:function(a){
		if(a.hasClass('nor')){
			a.removeClass('nor');
			a.animate({'bottom':'12%',"opacity":"0.3"},1000,"linear");
		}else{
			a.animate({'bottom':'10%',"opacity":"0.8"},1000,"linear");
			a.addClass('nor');
		}
	},
	breath:function(a){
		if(a.hasClass('nor')){
			a.removeClass('nor');
			a.animate({"opacity":"0.6"},2000);
		}else{
			a.animate({"opacity":"1"},2000);
			a.addClass('nor');
		}
	}
};
