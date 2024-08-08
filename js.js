const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener('click', () => {
  const inputrelvalue=input.value;
  const inputvalue = input.value.trim().toLowerCase().replace(/[^a-z0-9]/gi,'');
  console.log(inputvalue) 
  const valuesArray=[];
  for (let char of inputvalue) {
    valuesArray.push(char);
  }
  const valuesArrayreverse = valuesArray.reverse().join("");

  if (inputvalue === '') {
    alert("Please input a value");
  } else if (inputvalue === valuesArrayreverse) {
    result.textContent = `${inputrelvalue} is a palindrome`;
  } else {
    result.textContent = `${inputrelvalue} is not a palindrome`;
  }
  input.value='';
});
