const add = (a,b) => {
    // console.log(arguments);
    return a + b
}

console.log(add(56,1, 1001))

const user = {
    name: 'Philip',
    cities: ['New York','Dublin','Kiev'],
    printPlacesLived(){
     return  this.cities.map((city) =>  this.name + 'has lived in ' + city + '!')
    }
}
// console.log(user.printPlacesLived())

const multiplier = {
    numbers: [87,41,654,65,12],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy)
    }
}

console.log(multiplier.multiply())