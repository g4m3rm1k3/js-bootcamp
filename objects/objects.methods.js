let restaurant = {
	name: "ABS",
	guestCapacity: 75,
	guestCount: 0,
	checkAvailability: function (partySize) {
		let seatsLeft = this.guestCapacity - this.guestCount;
		return seatsLeft > partySize;
	},
	seatParty: function (partySize) {
		this.guestCount = this.guestCount + partySize;
	},
	removeParty: function (partySize) {
		this.guestCount = this.guestCount - partySize;
	},
};

restaurant.checkAvailability(50);
restaurant.seatParty(50);
console.log(restaurant.guestCount);
restaurant.removeParty(10);
console.log(restaurant.guestCount);
if (restaurant.checkAvailability(50)) {
	console.log("room for 50 ");
} else {
	console.log("no room for 50");
}
