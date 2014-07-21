require_relative 'find_and_replace'

a = [1, 2, 3, 4, 5, 4, 6, 7, 8]

p a.find_and_replace(4, "Hey")

p a