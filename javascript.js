

//Block Scope :  Those Variables are declared inside curly barces ,always accessible inside curly braces .
// if we try to access it outside curly braces  , then it arise References Error

// {
//     let a = "a";
//     let b = "b";
//     console.log(a);
//     console.log(b);
// }
// console.log(a);  // Reference Error 
// console.log(b); // ""


//Laxical Scope : Ability of function scope to  access the variable of parents scope 


//  let lax = "laxical"
// function parent(){
//     console.log(lax);
// }
// parent();



//Scope Chain : When variable get references ,then javascript check in current 
//scope , else if not found ,then it go for laxical scope , this process is continued untill it check in global scope .
// This is known as Scope chain .



//  const global = "global";
// function outter(){
//     const laxical = "laxical";
    
//     function inner(){
//         const inner = "inner";
//         console.log(inner);
//         console.log(laxical);
//         console.log(global)
//     }
//     inner();
// }
// outter();

//Hoisting is featuer of javascipt which move the declaration to the top of the sope during compilation of code 
//before code execution .
// Notes : only declartion is move to the top of the scope not intialition , initialised value in original place .

// function sum(a,b){
//     console.log(a+b);
// }

// const Add=(a,b)=>{
//     console.log(a+b);
// }
// sum(5,4);
// Add(1,3);

//Arrow Function vs Normal Function

// const obj = {
//      name : "dhiraj",
//      skill : ["java","python","rust"],
//     showSkills(){
//         this.skill.forEach(skill=> {
//             console.log(`${this.name} have skill ${skill} `);
            
//         });
//     }
// }

// obj.showSkills();


// const obj1 = {
//     name : "dhiraj",
//     skill : ["java","python","rust"],
//    showSkills(){
//        this.skill.forEach(function(skill) {
//            console.log(`${this.name} have skill ${skill} `);
           
//        });
//    }
// }

// obj1.showSkills();

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second);

const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name);
console.log(age);



