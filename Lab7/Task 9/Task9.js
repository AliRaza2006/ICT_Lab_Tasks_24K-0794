let name=prompt("Enter your name:");
let age=prompt("Enter age:");
age=Number(age);
if(age<18)
    alert(name+" is of age "+age+" and is minor");
else
    alert(name+" is of age "+age+" and is adult");
