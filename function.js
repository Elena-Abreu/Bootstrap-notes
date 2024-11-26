//define a function(parameters) 
//then {define things in block of code}
//    document.getElementById('heading-two') 
// -> go into html and look for id heading two, then add text.innerText = (anything inside <> in html);
function AddNumbers(username, lastname)  
{
    let a = 100 ;
    let b = 50 ;
    console.log(a+b); 
    document.getElementById('heading-two').innerText = (a + b);
} 
AddNumbers();  

//Function call (NECCESSARY TO SEE OUTPUT)
//can be used to repeat above code multiple times, or solv



//first value replaces username, second value replaces lastname 
//function AddNumbers(username, lastname) 
//AddNumbers('hary', 'potter')



//----------------------------------------------------//