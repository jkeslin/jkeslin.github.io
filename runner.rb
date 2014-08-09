require_relative 'ruby_racer'

players = ['bob', 'steve', 'joe', 'suzie', 'lauren', 'mike', 'tom'].shuffle
length = 40

game = RubyRacer.new(players, length)

game.reset_screen!

until game.finished?
    
    game.print_board
    game.advance_player!
    game.print_results
    game.move_to_home!
	
    sleep(0.5)

end
game.reset_screen!
game.print_board
puts "\t\t\t\t\t #{game.winner} has won!"
game.print_results


