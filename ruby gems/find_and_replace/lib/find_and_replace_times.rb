
class Array

	def find_and_replace_times(original_value, replacement_value, times)
		new_array = []
		counter = 0
		self.collect do |item|
			if item == original_value && counter < times
				new_array << replacement_value
				counter += 1
			else
				new_array << item
			end
		  #end
		end
		new_array
	end

	def find_and_replace_times!(original_value, replacement_value, times)
		counter = 0
		self.collect! do |item|
			if item == original_value && counter < times
				counter += 1
				replacement_value
			else
				item
			end
		end
		self
	end

end

p [0,2,3,4,5,6,5,6,5,6,5,6,5].find_and_replace_times!(5, "hey", 3)





