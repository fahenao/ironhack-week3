
//create new Items
var Item = function(name, price) {
	this.name = name,
	this.price = price
};

//create new Cart
var Cart = function() {
	this.list = [];
};

//add item to cart.
Cart.prototype.addItem = function(item) {
	this.list.push(item);
	console.log("Adding " + item.name + " to the cart at a price of " + item.price + " €.")
};

//show item list in cart
Cart.prototype.printList = function() {
	console.log(this.list)
};

//print the cart.list total cost.
Cart.prototype.total = function() {
	var totalCost = 0;

	for (var i=0; i < this.list.length; i++) {
		 totalCost += this.list[i].price;
	};
	if(this.list.length > 5) {
		totalCost = totalCost * .90;
	};
	console.log("Your total is " + totalCost + " €.");
};







var cart = new Cart

var apple = new Item("Apple", 10)
var orange = new Item("Orange", 5)
var grapes = new Item("Grapes", 15)
var banana = new Item("Banana", 20)
var watermelon = new Item("Watermelon", 50)
var pear = new Item("Pear", 10)

cart.addItem(apple)
//cart.addItem(apple)
//cart.addItem(apple)
cart.addItem(orange)
cart.addItem(grapes)
cart.addItem(banana)
cart.addItem(watermelon)
cart.addItem(pear);

cart.printList();

cart.total();
