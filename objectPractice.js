class Car{
    constructor(modelYear, model){
        this.wheels = 4
        this.modelYear = modelYear
        this.lightStatus = "off"
        this.turnSignal = "off"
        this.speed = 0
        this.model = model
    }
    toggleLights(){
        if (this.lightStatus == "off"){
            this.lightStatus = "on"
        } else {
            this.lightStatus = "off"
        }
    }
    signalLeft(){
        if (this.turnSignal != "left"){
            this.turnSignal = "left"
        }
    }
    signalRight(){
        if(this.turnSignal != "right"){
            this.turnSignal = "right"
        }
    }
    signalOff(){
        if(this.turnSignal != "off"){
            this.turnSignal = "off"
        }
    }
    carInfo(){
        return console.log("This " + this.modelYear+ " car has "+ this.wheels + " wheels. It's turn signal is indicating "+ this.turnSignal + " and its lights are " + this.lightStatus + ". Current speed is "+ this.speed +" mph.")
    }
}

class Tesla extends Car{
    constructor(modelYear){
        super(modelYear, "Tesla")
    }
    accelerate(){
        return this.speed += 10

    }
    brake(){
        if ( this.speed < 7 ){
            this.speed = 0
        } else if( this.speed != 0){
            this.speed -= 7
        }
    }
}

class Tata extends Car{
    constructor(modelYear){
        super(modelYear, "Tata")
    }
    accelerate(){
        return this.speed += 2
    }
    brake(){
        if ( this.speed < 1.25 ){
            this.speed = 0
        } else if( this.speed != 0){
            this.speed -= 1.25
        }
    }
}

class Toyota extends Car{
    constructor(modelYear){
        super(modelYear, "Toyota")
    }
    accelerate(){
        return this.speed += 7
    }
    brake(){
        if ( this.speed < 5 ){
            this.speed = 0
        } else if( this.speed != 0){
            this.speed -= 5
        }
    }
}

var myTesla1 = new Tesla(1992)
var myTesla2 = new Tesla(2018)
var myTata1 = new Tata(1980)
var myTata2 = new Tata(2002)
var myToyota1 = new Toyota(1999)
var myToyota2 = new Toyota(2007)

var carArray = [ myTesla1, myTesla2, myTata1, myTata2, myToyota1, myToyota2]

function addCar(carName){
    carArray.push(carName)
}

carArray.sort(function (a, b) {
    a.model < b.model
  return a.modelYear - b.modelYear
})
