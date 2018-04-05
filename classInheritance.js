//ride sharing service
class Car{
  constructor(seats){
    this.availableSeats = seats
    this.riders = []
  }
  //add a rider to the riders array
  addRider(userId){
    //check if seats available
    if (availableSeats > 0){
      this.riders.push(userId)
      console.log(userId + " was just picked up.")
      this.availableSeats--
    }
  }

  dropRider(userId){
    var dropOff = this.riders.shift()
    console.log(dropOff + " was just dropped off at their destination.")
    this.availableSeats++
  }
}

var taxiOne = new Car(4)
var taxiTwo = new Car(4)
var taxiThree = new Car(4)

taxiOne.addRider("29387")

console.log(taxiOne)

var riderQueue = [
  "24904832",
  "23434",
  "908509483",
  "23421",
  "908230"
]

//taxi queue
var taxiQueue = [
  taxiOne
]

//taxi service function uses a list of users that need a ride and adds them to available taxis
function taxiService(taxiList, riderList){
  //could loop this until the car is full
  taxiList[0].addRider(riderList[0])
  //every time i add a rider to the car, I must also remove them from the rider list
  //could remove the current taxi from the taxi queue
}

taxiService(taxiQueue, riderQueue)

console.log(taxiOne)
