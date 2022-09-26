function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar','David','Ana','Ulises','Jennifer'])
console.log(it.next().value) //Oscar
console.log(it.next().value) //David
console.log(it.next().value) //Ana
console.log(it.next().value) //Ulises
console.log(it.next().value) //Jennifer
console.log(it.next().value) //Undefined