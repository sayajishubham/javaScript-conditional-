let choices=prompt("Press 1 for equilateral\n Press 2  for isosceles\n Press 3 for scalene");
if(choices==1){
    let lenght_of_A_Side=prompt("Enter A side: ");
    let lenght_of_B_Side=prompt("Enter B side: ");
    let lenght_of_C_Side=prompt("Enter C side: ");
    if(lenght_of_A_Side==lenght_of_B_Side && lenght_of_B_Side==lenght_of_C_Side){
        console.log("The triangle is Equilateral.");
    }
}
else if(choices==2){
   let lenght_of_A_Side=prompt("Enter A side: ");
    let lenght_of_B_Side=prompt("Enter B side: ");
    let lenght_of_C_Side=prompt("Enter C side: ");
    if(lenght_of_A_Side==lenght_of_B_Side || lenght_of_B_Side==lenght_of_C_Side || lenght_of_C_Side==lenght_of_A_Side){
        console.log("The triangle is Isosceles.");
    } 
}
else if(choices==3){
    let lenght_of_A_Side=prompt("Enter A side: ");
    let lenght_of_B_Side=prompt("Enter B side: ");
    let lenght_of_C_Side=prompt("Enter C side: ");
    console.log("Scalene Triangle");
}

