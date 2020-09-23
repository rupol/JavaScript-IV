/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// old constructor
/*
function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
*/

// new class
class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

// old constructor
/*
function CharacterStats(charAttr) {
  GameObject.call(this, charAttr);
  this.healthPoints = charAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
*/

// new class
class CharacterStats extends GameObject {
  constructor(charAttr) {
    super(charAttr);
    this.healthPoints = charAttr.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
 * team
 * weapons
 * language
 * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
 * should inherit destroy() from GameObject through CharacterStats
 * should inherit takeDamage() from CharacterStats
*/

// old constructor
/*
function Humanoid(humanAttr) {
  CharacterStats.call(this, humanAttr);
  this.team = humanAttr.team;
  this.weapons = humanAttr.weapons;
  this.language = humanAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};
*/

// new class
class Humanoid extends CharacterStats {
  constructor(humanAttr) {
    super(humanAttr);
    this.team = humanAttr.team;
    this.weapons = humanAttr.weapons;
    this.language = humanAttr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// old constructor
/*
function Hero(heroAttr) {
  Humanoid.call(this, heroAttr);
  this.alignment = heroAttr.alignment;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function() {
  return function() {
    let damageDealt = Math.floor(Math.random() * (1 + 15 - 1)) + 1;
    villain.healthPoints = villain.healthPoints - damageDealt;
    let currentWeapon =
      hero.weapons[Math.floor(Math.random() * hero.weapons.length)];
    if (villain.healthPoints > 0) {
      return `${
        hero.name
      } has dealt ${damageDealt} points of damage using ${currentWeapon}. ${
        villain.name
      } health: ${villain.healthPoints}`;
    } else if (villain.healthPoints <= 0) {
      return `${hero.name} has destroyed ${
        villain.name
      }! There is order once more!`;
    }
  };
};
*/

// new class
class Hero extends Humanoid {
  constructor(heroAttr) {
    super(heroAttr);
    this.alignment = heroAttr.alignment;
  }
  attack() {
    return function() {
      let damageDealt = Math.floor(Math.random() * (1 + 15 - 1)) + 1;
      villain.healthPoints = villain.healthPoints - damageDealt;
      let currentWeapon =
        hero.weapons[Math.floor(Math.random() * hero.weapons.length)];
      if (villain.healthPoints > 0) {
        return `${
          hero.name
        } has dealt ${damageDealt} points of damage using ${currentWeapon}. ${
          villain.name
        } health: ${villain.healthPoints}`;
      } else if (villain.healthPoints <= 0) {
        return `${hero.name} has destroyed ${
          villain.name
        }! There is order once more!`;
      }
    };
  }
}

const newHeroAttack = Hero.prototype.attack();

// old constructor
/*
function Villain(villainAttr) {
  Humanoid.call(this, villainAttr);
  this.alignment = villainAttr.alignment;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function() {
  return function() {
    let damageDealt = Math.floor(Math.random() * (1 + 15 - 1)) + 1;
    hero.healthPoints = hero.healthPoints - damageDealt;
    let currentWeapon =
      villain.weapons[Math.floor(Math.random() * villain.weapons.length)];
    if (hero.healthPoints > 0) {
      return `${
        villain.name
      } has dealt ${damageDealt} points of damage using ${currentWeapon}. ${
        hero.name
      } health: ${hero.healthPoints}`;
    } else if (hero.healthPoints <= 0) {
      return `${villain.name} has destroyed ${hero.name}! Chaos reigns!`;
    }
  };
};
*/

// new class
class Villain extends Humanoid {
  constructor(villainAttr) {
    super(villainAttr);
    this.alignment = villainAttr.alignment;
  }
  attack() {
    return function() {
      let damageDealt = Math.floor(Math.random() * (1 + 15 - 1)) + 1;
      hero.healthPoints = hero.healthPoints - damageDealt;
      let currentWeapon =
        villain.weapons[Math.floor(Math.random() * villain.weapons.length)];
      if (hero.healthPoints > 0) {
        return `${
          villain.name
        } has dealt ${damageDealt} points of damage using ${currentWeapon}. ${
          hero.name
        } health: ${hero.healthPoints}`;
      } else if (hero.healthPoints <= 0) {
        return `${villain.name} has destroyed ${hero.name}! Chaos reigns!`;
      }
    };
  }
}

const newVillainAttack = Villain.prototype.attack();

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 30,
  name: "Link",
  team: "Hyrule",
  weapons: ["Bow", "Master Sword", "Boomerang", "Slingshot", "Hookshot"],
  language: "Hylian",
  alignment: "Lawful Good"
});

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6
  },
  healthPoints: 50,
  name: "Ganondorf",
  team: "Dark Realm",
  weapons: ["Sword of Sages", "Magic", "Choke"],
  language: "Gerudo",
  alignment: "Neutral Evil"
});

const init = () => {
  while (hero.healthPoints > 0 && villain.healthPoints > 0) {
    console.log(newHeroAttack());
    console.log(newVillainAttack());
  }
  return `Game Over. Play again? 5 4 3 2 1`;
};

console.log(init());
