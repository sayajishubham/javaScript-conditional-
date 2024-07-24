const age=prompt("Enter your age: ");
if(age>=0 && age<=12){
    console.log("Age Group: Child.");
}
else if(age>=13 && age<=17){
    console.log("Age Group: Teenager.");
}
else if(age>=18 && age<=34){
    console.log("Age Group: Young Adult.");
}
else if(age>=35 && age<=54){
    console.log("Age Group: Adult.");
}
else if(age>=55 && age<=64){
      console.log("Age Group: Senior.");
}
else if(age>=65 && age<=70){
    console.log("Age Group: Elderly.");
}
else{
    console.log("Invaild Age.")
}