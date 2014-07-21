class Hash

	def fetch_nested(search_value)
		array = []
		array2 = []
		if self.has_key?(search_value)
			return self.fetch(search_value)
		else
			array = self.values
			if array[0].class == Hash
				array.each do |item|
					if item.has_key?(search_value)
						return item.fetch(search_value)
					end
				end
				array.each do |item|
					array2 << item.values
				end
				array2.flatten!
				if array2[0].class == Hash
					array2.each do |item|
						if item.has_key?(search_value)
							return item.fetch(search_value)
						end
					end
				end
			end
		end
		return nil
	end

end