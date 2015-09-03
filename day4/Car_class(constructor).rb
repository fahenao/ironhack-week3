class Car
	def initialize(brand, speed)
		@brand = brand
		@speed = speed
	end

	def accelerate(inc)
		@speed += inc
		puts "#{@brand} is going at #{@speed} k/h."
	end

	def brake(dec)
		@speed -= dec
		puts "#{@brand} is going at #{@speed} k/h."
	end
end

clk430 = Car.new("mercedes", 0)

 clk430.accelerate(100)
 clk430.brake(50)