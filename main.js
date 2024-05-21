//Hunter Keasey
//5/21/24
//Student Credits

//input
const credits = 120;

const currentCreddits = parseInt(prompt("Please enter student credits."));

//process/output
if (currentCreddits >= credits){
    alert("Congrats, you did it!");
}
else if (currentCreddits >= 90){
    alert("You need some more credits.");
}
else{
    alert("You need a lot of credits.");
}