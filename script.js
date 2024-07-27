const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.getElementById('form');

const romanNumbers = [ ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];

const convert = () => {
  let number = +input.value;
  console.log(number);

  if(!number){
    input.value = '';
    output.classList.remove('hidden');
    output.innerText = "Please enter a valid number";
  }else if(number <= -1){
    input.value = '';
    output.classList.remove('hidden');
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if(number >= 4000){
    input.value = '';
    output.classList.remove('hidden');
    output.innerText = "Please enter a number less than or equal to 3999";
  } else{
  let result = '';

  romanNumbers.forEach((arr) => {
	while(arr[1] <= number){
		result += arr[0];
		number -= arr[1];
		}
});

  input.value = '';
  output.classList.remove('hidden');
  output.innerText = `${result}`;
  }

}

button.addEventListener("click", convert);