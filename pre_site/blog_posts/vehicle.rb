
$tax_rate = 0.05
class Vehicle
  def initialize(make, model, year)
  	@make = make
  	@model = model
  	@year = year
  	@@use = "transportation"
  end

  def display
  	puts "This #{@make} is built for #{@@use} purposes."
  end

  def cost(sticker_price)
  	cost = sticker_price + sticker_price*$tax_rate
  end
end
#========================================================
model_s = Vehicle.new("Tesla", "Model S", 2013)
model_s.display #=> "This Tesla is built for transportation purposes."
toyota_tacoma = Vehicle.new("Toyota", "Tacoma", 2010)
toyota_tacoma.display #=> "This Toyota is built for transportation purposes."
p toyota_tacoma.cost(13000) #=> 13,650.0
