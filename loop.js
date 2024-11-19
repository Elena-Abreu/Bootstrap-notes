console.log("hello"); 
console.log("hello"); 
console.log("hello"); 
console.log("hello");
console.log("hello");   
//hello 
//hello
//hello
//hello
//hello


//can use i j k or whatever as variable for loop and then initialize it to something like =1; alternative to if (a<b) {}
//check condition i<=5; if true code wll run 
//then i++ will be implemented, which means i=1 becomes i=2 (which is still true for 5 loops)
//i++ is i=i+1 
for(let i=1; i <=5; i++){ 
//block of code 
//line 1   
console.log("Hello");
//(5)Hello
} 

//find out given characters in string (x.length) including spaces
//starts from first letter in first element in sequence, at 0 index
let firstName = "Harry Potter"

console.log(firstName.length) 
//12

//find character at a given index, 0 is the first letter
let lastName = "Elena Abreu"

console.log(lastName[0])
//E 


//hello harry potter
let firstname="harry"
let lastname= "potter"
console.log(`Hello, ${firstname} ${lastname}`)


//uppercase
let animal="dog";
console.log(animal.toUpperCase()) 

//removes white spaces on edges
let plant="    flower    ";
console.log(plant.trim())

// only output first 5 characters, start and stop index, does not include last one, ex (0,5) is 1-4
let Animal="my pet dog";
console.log(Animal.slice(0,5)) 

//same line 
let Plant="flower ";
let house="mine"
console.log(Plant.concat("house"))

//replacing with searched variable
let tree="flower do";
let House="mine"
console.log(tree.replace("flower", "mine")) 

//which character is present at 7 ????


//array
let grade = ['A', 'B', 'C', 'D', 'E'] 
console.log(grade[1]);

//add 100 to end of array .. D100 and pop to get rid of 100 
//show final grade and letter 
let Grade = ['A', 'B', 'C', 'D'] 
let finalGrade= [100,200]
console.log(Grade.concat(finalGrade))

//unshifts(?)
let Grrade = ['A', 'B', 'C', 'D'] 
Grrade.unshift (100, 200, 300)
console.log(Grrade)

//removes first grade
let GGrrade = ['A', 'B', 'C', 'D'] 
GGrrade.shift ()
console.log(GGrrade) 

//Slice takes a portion
let GGrradee = ['A', 'B', 'C', 'D'] 

console.log(GGrradee.slice (0,2))


//Splice deletes inbetween, or from beggining or ending (start index, # elements deleted, new added elemanet))
let GGrradeee = ['A', 'B', 'C', 'D'] 
GGrradeee.splice (2, 2, 100, 200)
console.log(GGrradeee);



