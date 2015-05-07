function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  if (!this.full()) this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function(nthpassenger) {
  return this.passengers.length
  // var array = this.passengers.push(this.passengerName);
  // return array - 1;
};

Taxi.prototype.full = function() {
  return this.passengerCount() === this.maxNumberOfPassengers;
};

Taxi.prototype.dropOffPassengers = function() {
  this.passengers = [];
};
// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
