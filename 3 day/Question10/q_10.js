let choies=prompt("Press 1 for addition:\n Press 2 for subtraction:\n Press 3 for  multiplication: \n Press 4 for division:");
if(choies==1){
    let num1=Number(prompt("Enter a 1st Number:"));
    let num2=Number(prompt("Enter a 2st Number:"));
   let result=num1+num2;
   console.log(`Addition of ${num1} and ${num2} is: ${result}.`);
}
else if(choies==2){
    let num1=Number(prompt("Enter a 1st Number:"));
    let num2=Number(prompt("Enter a 2st Number:"));
   let result=num1-num2;
   console.log(`Subtraction of ${num1} and ${num2} is: ${result}.`);
}
else if(choies==3){
    let num1=Number(prompt("Enter a 1st Number:"));
    let num2=Number(prompt("Enter a 2st Number:"));
   let result=num1*num2;
   console.log(`Multiplication of ${num1} and ${num2} is: ${result}.`);
}
else if(choies==4){
    let num1=Number(prompt("Enter a 1st Number:"));
    let num2=Number(prompt("Enter a 2st Number:"));
   let result=num1/num2;
   console.log(`division of ${num1} and ${num2} is: ${result}.`);
}