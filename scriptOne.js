//let a = 100; 
//let b = 100;  

// // a +=10; ==> a = a + 10

// //a=a+10 

// a**10; a=a**10  


//a==b means it will check if both values are the same , so true or false 
//a!=b checks if both values are different  
//a===b compares total and datatype , if they are both the same like a=b then it will compare the datatype being the same (numbers..?) so if one has quotes its false
//a!==b means it will check if values are different, then datatypes number vs string 
//console.log(a !== b); 


//let a = true 
//let b = false 


//a&&B both have to be true 
//A || b means either one or both can be true to be true 
// !a inverses value of variable .. so value a being true is now false
//console.log(!a) 


//check if variable matches, execute code
let house;  
let number = 82; 


if (number > 90) 
{ 
    house = "Grade A"; 
    console.log(house);
} 

else if ( number >80 ) 
{ 
    house = "Grade B"; 
    console.log(house)
} 

else if ( number >70 ) 
    { 
        house = "Grade C"; 
        console.log(house)
    }

else {
    house = "fail"; 
    console.log(house);
} 
//shorthand of above(one condition tho) -> condition ? "if condition true what output" : "if false what output"
number > 90 ? "Grade A": "Fail" ; 

//loop 
