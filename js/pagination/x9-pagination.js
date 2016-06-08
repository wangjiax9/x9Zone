/***
 * X9分页插件
 * @Author wjl
 */
(function($){
	var x9Page = {};
	x9Page.default = {
		pageSize:10,
		startRow:0,
		totalPage:1
	};
	x9Page.method = {
		init : function(){
			return this.each(function(){
				
			});
		}
	}
	
	
	$(function(){
		$(".x9Pagination").on();
	});
})(jQuery)
