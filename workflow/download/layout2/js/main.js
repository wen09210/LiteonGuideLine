(function () {
	window.alert = function (text, yesCallback, noCallback) {
		//換行符號
		text = text.toString();
		
		// 自定義視窗
		var alertdiv = '<div class="outAlert"><div id="alertDiv"><div class = "alertHeader"> <button type = "button"	class = " alertRClose"> × </button></div><div class="alertContent">' + text + '</div><br /><input type="submit" name="button" class="whiteBtn alertBtnOk btnYes" id="btnYes" value="確定"/><input  type="submit" name="button" class="whiteBtn alertBtnCancel btnNo" id="btnNo" value=" 取消 "/></div></div>'
		$(document.body).append(alertdiv);
		// 打開
		$("#alertDiv").show();
		$('.btnYes').click(function () {
			$(".outAlert").remove()
			yesCallback();
		});
		$('.alertRClose').click(function () {
			$(".outAlert").remove()
		});
		$('.btnNo').click(function () {
			$(".outAlert").remove()
			noCallback();
		});
	};
})();
//

// 報表展開
$(".reportPaperList li:not(:has(>ul))").addClass('theLast')
$('.reportPaperList li').click(function () {
	$('ul', this).toggleClass('openUl');
	return false
})
// 重新綁定點擊事件
// $('.theLast').on('click', function () {
// 	$('#reportModal').modal('show')
// })

$('.openModalList li').append('<a href="javascript:void(0)"><i class="far fa-heart liFavorite"></i></a>')
$('.openModalList li .liFavorite').click(function () {
	$(this).toggleClass('loved');
})
// 拖動事件
$('#sortable > li').append('<a href="javascript:void(0)"><i class="far fa-trash-alt liDelete" onclick="deleteThis(this)"></i></a>')
$("#sortable").sortable();
$("#sortable li .liDelete").click(function (event) {
	//   $("#sortable").stop()
	deleteThis(event)
});
// 刪除事件
function deleteThis(el) {
	alert("確定要刪除嗎?", function () {
		$(el.target).parents("#sortable li").remove();
	});

}


