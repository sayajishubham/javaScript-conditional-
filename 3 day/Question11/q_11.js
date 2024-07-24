let number=prompt("Enter a Number: ");
if(number<=1){
    console.log("this is not a prime number.");
}
else if(number==2 || number==3){
    console.log("This is a prime Number.");
}
else if(number%2==0 || number%3==0){
    console.log("this is not a prime number.")
}

