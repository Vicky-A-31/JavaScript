let closure = x =>{
    console.log("x value",x)
    return y =>{
        return x+y
    }
}

let a = 10
let b = 5
let call1 = closure(a)
let call2 = call1(b)
console.log(call2)

