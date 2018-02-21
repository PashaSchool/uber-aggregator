
$(function() {
	const input = $("#file")
	input.on('change', function(e) {
		console.log(this.files)
	})
})