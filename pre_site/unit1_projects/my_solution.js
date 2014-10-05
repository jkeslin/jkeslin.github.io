// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// rescue mission
// move up 1
// move right twice
// move down
// attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the mushroom
// add move right
// move back left
// move up
// attack enemy
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


// Drink me
// move right
// attack
// move right
// move down 
// move up
// move right 
// attack
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt The Guards
// delete comments
// move right
// move right
// move up
// move right
// say something
// move around attackers
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("boom.");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a Trap!
// move down
// say something
// move back up
this.moveDown();
this.moveDown();
this.say("boo");
this.moveUp();
this.moveUp();

// Break The Prison
// if name matches friend, then open gate, 
// 	if not then return false and continue
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Brack")
return false;
if(name === "Robert")
return true;
if(name === "MARCUS")
return false;
if(name === "Gordon")
return true;
this.bustDownDoor();

// Taunt
// say something 4 times
this.say("Hey!");
this.say("hey there");
this.say("hello");
this.say("hola");
this.say("cheese");

// Cowardly Taunt
// move to 63, 20
// then move to 50, 16
// say something 
// go back to 63, 20
// then back to my safe spot at 70, 10
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(63, 20);
this.moveXY(50, 16);
this.say("Hey.");
this.moveXY(63, 20);

// Commanding Follower
// say Follow
// move closer to ogres
// say attack
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow me!");
this.moveXY(66,40);
this.say("attack!");

// Mobile Artillery
// move closer to ogres
// fire canonball at location
// fire second canonball at d/2
// fire canonball at last ogres
// fire second canonball at d/2
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(53,42);
this.attackXY(70,55);
this.attackXY(65,50);
this.attackXY(48,61);
this.attackXY(52,51);
 
// Per Release 3:

//"this" is refering to the object that we're manipulating, in this case, the soldier.
//the "()" are for entering the parameters of the method
//the semicolons are to separate commands. However, they are only mandatory if there is no line break between them.

// Reflection:

//I enjoyed the theme of the challenge and the focus on using objects and methods.  But because I have some experience with
//javascript I thought the challenges were a bit too easy.  I'm sure the next set on codecombat go deeper into the inner
//workings of the methods we were using and perhaps force you to write or modify them and not just input parameters.
//I appreciate the value of writing pseudocode, but only when faced with a really touch challenge with a lot 
//of steps that I'm having trouble visualizing all at once.