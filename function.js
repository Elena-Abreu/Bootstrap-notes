//define a function(parameters) 
//then {define things in block of code}
//    document.getElementById('heading-two') 
// -> go into html and look for id heading two, then add text.innerText = (anything inside <> in html);
function AddNumbers(username, lastname)  
{
    let a = 100 ;
    let b = 50 ;
    //console.log(a+b);    only necessary if no getelementbyid
    document.getElementById('heading-two').innerText = (a + b); 
    document.getElementById('para1').innerHTML = "<h1>Para changes to H1 Heading<h1>";
}  
//inner text: changes only to text enclosed in h2>Sample text for h2<h2 
//inner HTML: prints new h1 tag (changes paragraph to heading) in this example

//AddNumbers();  

//Function call (NECCESSARY TO SEE OUTPUT)
//can be used to repeat above code multiple times, or solv


//In function call
//first value replaces username, second value replaces lastname 
//function AddNumbers(username, lastname) 
//AddNumbers('hary', 'potter')





//----------------------------------------------------//
//Events in JS: hover, drag over element, submit form, etc, are considered events    


//looks for firstname and inserts value, then makes text under form that shows message Hello (input value)
function getInput(){  
   let inputValue =  document.getElementById('FirstName').value; 
   document.getElementById('inputName').innerText = "Hello, " + inputValue;
}
//or
function LastNameEvent(){  
    let LastValue =  document.getElementById('LastName').value; 
    document.getElementById('lastName-heading').innerText = "Hello, " + LastValue;
} 
document.getElementById('btn1').addEventListener('click', LastNameEvent) ;
////document.getElementById('btn1').addEventListener('click', Function2) ;
//document.getElementById('btn1').addEventListener('click', Function 3); 



//window.location.href= 'test.html'
 //correct username an dpassword, new page
 //define whole function in add listener

let fName = "Harry"; 
let password= "Potter";  
document.getElementById('form1').addEventListener('submit', function(event) {  
   let inputName = document.getElementById('userName').value; 
   let inputPass =  document.getElementById('password').value;  
//does entered value match correct user and pasword? then submit. if not, nothing happens
   if(fName ==inputName $$ password==inputPass)  { 
    console.log("Success") 
   }
   else{ 
    event.preventDefault();
   }

}
 )