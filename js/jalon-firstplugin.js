/**
 * 可以在前面加的符号有 ~,!,+,-,;
 * 暂时不知道什么用，看起来高大上
 */
~(function($){
	$.fn.extend({
		objLv:function(param){
			console.log("我是对象级别插件方法，即给jQuery对象添加方法");
			//对象级一定要返回jQuery对象，以方便其调用对象的链写操作
			return $(this);
		}
	})
	$.extend({
		globalLv:function(param){
			console.log("我是类级别插件方法，即给jQuery添加全局函数");
		}
	})
	$.fn.objLv1 = function(param){
		console.log("我也是对象级别插件方法，即给jQuery对象添加方法");
		//对象级一定要返回jQuery对象，以方便其调用对象的链写操作
		return $(this);
	}
	$.globalLv1 = function(param){
		console.log("我也是类级别插件方法，即给jQuery添加全局函数");
	}
})(jQuery);
