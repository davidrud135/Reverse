function reverse() {
	const userInput = document.getElementById('input').value;
	const stringLen = userInput.length;
	const stringArr = userInput.split('');
	const reversedStrArr = stringArr.reverse();
	const result = reversedStrArr.join('');
	var resultDiv = document.getElementById('result');
	resultDiv.style.display = 'block';
	return resultDiv.innerHTML = result;  	
}