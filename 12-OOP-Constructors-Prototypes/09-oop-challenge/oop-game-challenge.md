OOP GAME CHALLENEGE

#Instructions

 - Create a constructor to  create **Player** object with a name
 - Player should have an **name** as well as a **lvl** set to 1 by default and **points** set to 0 by default
 - Create a method on the prototype method called **gainXp** that takes in a number from 1-10 and adds it to the player **points**. If the current **points** are >= 10 then add 1 to the **lvl** and decrement the points by 10.
 - Create another prototype method called **describe** that displays the players stats (name,lvl,points)

You should be able to use the Player object like this

```javascript
let player1 = new Player('bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); //Bob is level 2 with 6 experience points  
console.log(player2.describe()); // Alice is level2 with 3 experiencce points.
```