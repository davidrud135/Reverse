$(document).ready(function() {

	$('form').submit(function reverseString() {
		var userString, arrayOfStrings, reversedArrOfStrs, resultString;

		userString = getInputData();
		arrayOfStrings = createArrayOfStrings(userString);
		reversedArrOfStrs = reverseArray(arrayOfStrings);
		resultString = makeStringFromArray(reversedArrOfStrs);

		showResult(resultString);
		return false;
	});

	function getInputData() {
		return $('input[type=text]').val();
	}

	function showResult(result) {
		$('#result').html(result);
	}

	function createArrayOfStrings(userString) {
		return userString.split('');
	}

	function reverseArray(array) {
		return array.reverse();
	}

	function makeStringFromArray(array) {
		return array.join('');
	}
});