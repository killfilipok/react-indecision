
class Person {
    constructor(name =  'Anonymous', age = 0){
        this.name = name 
        this.age = age
    }

    getGretting(){
        return `Hi I'm ${this.name}!`
    }
    getDescription(){
        return `Hi I'm ${this.name} and I'm ${this.age}`
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGretting(){
        let greeting = super.getGretting()  

        if(!!this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`            
        }
        return greeting 
    }
}

const me = new Traveler('Philip Dolenko',17, 'Ukraine')
console.log(me.getGretting())


const other = new Traveler()
console.log(other.getGretting())
