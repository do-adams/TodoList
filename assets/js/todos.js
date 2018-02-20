"use strict";

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		let todoText = $(this).val();
		// check for empty/whitespace string
		if (todoText.trim() === "") return;

		$(this).val("");
		$("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});