/* for(let i=1; i>0; i++){
    console.log("hello world")
} 

let i = 0;
do{
    console.log("Hello World")
    i++
}while(i>0)
*/

let array = [1,2,3,4,5,6]
for(let x of array){
    console.log("Array["+array.indexOf(x)+"] :"+ x)
}

/*
let person = {"name": "vicky", "age": 21, "gender": "male", phone: 6379336812}
for(let key in person){
    console.log(person[key])
}

outerLoop:
for(let i=1; i<=5; i++){
    innerLoop:
    for(let j=1; j<=5; j++){
        if(i==3){
            break outerLoop;
        }
        console.log("*")
    }
}

let x=1;
for(;;x++){
    console.log(x)
    break;
} */
