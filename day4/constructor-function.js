var Car = function(brand, speed) {
	this.brand = brand,
	this.speed = speed

	this.accelerate = function(speed) {
		this.speed += speed;
		console.log(this.brand +" is going at " + this.speed + " Km/h.")
	}

	this.brake = function(speed) {
		this.speed -= speed;
		console.log(this.brand +" is going at " + this.speed + " Km/h.")
	}
};

var clk430 = new Car("Mercedes", 0);
clk430.accelerate(180);
clk430.brake(90);br