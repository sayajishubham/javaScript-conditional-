let choice=prompt("Temperature Conversion Program\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter your choice (1 or 2):");
if(choice==='1'){
    let Celsius=prompt("Enter Your Celsius: ");
    let result=(Celsius*9/5)+32;
    console.log("Celsius is equal to Fahrenheit: ",result);
}
else if(choice==='2'){
    let Fahrenheit=prompt("ENter Your Fahrenheit: ");
    let result=(Fahrenheit-32)*5/9;
    console.log("Fahrenheit is equal to Celsius: ",result);
}