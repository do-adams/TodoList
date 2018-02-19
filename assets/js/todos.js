"use strict";

$("li").click(function() {
	$(this).toggleClass("completed");
});

$("span").click(function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});