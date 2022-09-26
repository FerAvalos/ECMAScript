let fruits=['Apple', 'Banana']
let [a,b] = fruits
console.log(a, fruits[1])

//Object
let user = {username:'Oscar', age:34}
let {username, age}=user
console.log(username, age)

//Spread operator
let person = {name:'Oscar', age:28}
let country='MX'
let data = {...person, country}
console.log(data)

//Rest
function sum(num, ...values){
    console.log(values)
    console.log(num+values[0])
    return num+values[0]
}

sum(1,1,2,3)

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)