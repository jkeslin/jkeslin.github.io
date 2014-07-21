Gem::Specification.new do |s|
  s.name               = "find_and_replace"
  s.version            = "1.0.0"
  s.default_executable = "find_and_replace"

  s.authors = ["Jeff Keslin"]
  s.date = %q{2010-07-20}
  s.description = %q{finds all occurances of a value in an array and replaces with a new value}
  s.email = %q{jkeslin@gmail.com}
  s.files = ["lib/find_and_replace.rb"]
  s.homepage = %q{http://rubygems.org/gems/find_and_replace}
  s.platform = Gem::Platform.local
  s.require_paths = ["lib"]
  s.license = 'MIT'
  s.post_install_message = "Thanks for installing!"
  s.summary = %q{allows a gsub-like replacement of values for the Array class. There are two arguments. The first is the value you are searching for, and the second is the value you would like to replace it with.}

end