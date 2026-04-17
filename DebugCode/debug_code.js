	
	function performOperation() {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    let parseNum1= parseFloat(num1);
    let parseNum2= parseFloat(num2);
	debugger;
    // Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
	// Perform the operation
					let result ;
                    switch (operation){
                        case 'add':
                            result = parseNum1 + parseNum2;
                            break;
                        case 'multiply':
                            result = parseNum1 * parseNum2;
                            break;
                        case 'divide' :
                            result = parseNum1 / parseNum2;
                            break;
                        default:
                            result = 'Invalid'
                    }

					// Display the result
					displayResult(result);
				} else {
					displayResult('Please enter valid numbers');
				}
			}



			function displayResult(result) {
				// Display the result in the paragraph element
				const resultElement = document.getElementById('result');
				resultElement.textContent = `The result is: ${result}`;
			}
		
