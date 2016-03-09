$(document).ready(function(){
	
	$('.input-number').focus();

	$('.input-number').keydown(function(event) {
		if (event.keyCode === 13) {
			var num = $('.input-number').val();
			$('.output').empty();
			fnCountAndConvertUpToNum(num);
		}
	});

	function fnCountAndConvertUpToNum(num) {

		if (num % 1 != 0 || num.indexOf(".")!=-1) {
			$('.output').append("Please enter an integer.");
		}
		else {
			var count = 1;

			while (count <= num) {

				if ((count%3 == 0) && (count%5 == 0)) {
					$('.output').append("FizzBuzz" + "<br>");
				}
				else if (count%3 == 0) {
					$('.output').append("Fizz" + "<br>");
				}
				else if (count%5 == 0) {
					$('.output').append("Buzz" + "<br>");
				}
				else {
					$('.output').append(count + "<br>");
				}
				count++;
			}					
		}
	}
});