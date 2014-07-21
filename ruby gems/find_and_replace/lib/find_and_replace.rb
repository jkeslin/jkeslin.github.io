
class Array

	def find_and_replace(original_value, replacement_value)
		new_array = []
		self.collect do |item|
			if item == original_value
				new_array << replacement_value
			else
				new_array << item
			end
		end
		new_array
	end

	def find_and_replace!(original_value, replacement_value)
		self.collect! do |item|
			if item == original_value
				replacement_value
			else
				item
			end
		end
		self
	end

end





