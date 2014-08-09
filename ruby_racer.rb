require_relative 'die.rb'

class Player
  attr_reader :name
  attr_accessor :position
  def initialize(name, position)
    @name = name
    @position = position
  end

end

class RubyRacer
  attr_reader :length, :players

  def initialize(players, length = 30)
    @length = length
    @players = add_players(players)
    @die = Die.new(3)
  end

  def finished?
    @players.each do |player|
      return true if player.position >= @length
    end
    false
  end

# HORSE
# ~____^>
#  /\/\

  def add_players(players)
    players_array = []
    players.each do |player|
      players_array << Player.new(player, 0)
    end
    players_array
  end

  def winner
    @players.each do |player|
      return player.name.upcase if player.position >= @length
    end
  end

  def print_board
    @players.each do |player|
      puts " | "*player.position + "~____^>" + " | "*length_to_go(player) + " #{player.name.upcase}"
      puts " | "*player.position + " /\\/\\  " + " | "*length_to_go(player) + " #{player.position}"
      puts ""
    end
  end

  def length_to_go(player)
    return 0 if (@length - player.position) < 0
    @length - player.position
  end

  def advance_player!
    @players.each do |player|
      player.position += @die.roll
    end
  end

  def print_results
    @players.each do |player|
      puts "#{player.name.upcase}: #{player.position}"
    end
  end

  def clear_screen!
    print "\e[2J"
  end

  def move_to_home!
    print "\e[H"
  end

  def reset_screen!
    clear_screen!
    move_to_home!
  end
end
