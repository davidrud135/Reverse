function reverse() {
	const userInput = document.getElementById('input').value;
	const stringArr = userInput.split('');
	const reversedStrArr = stringArr.reverse();
	const result = reversedStrArr.join('');
	const resultDiv = document.getElementById('result');
	resultDiv.style.display = 'block';
	return resultDiv.innerHTML = result;  	
}