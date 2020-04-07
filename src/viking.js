// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

const random = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }


  addViking(vObj) {
    this.vikingArmy.push(vObj);
  }

  addSaxon(sObj) {
    this.saxonArmy.push(sObj);
  }

  vikingAttack() {

    // const { saxonArmy, vikingArmy, armyAttack } = this;

    // armyAttack(vikingArmy,saxonArmy);

    let s = random(this.saxonArmy);
    let v = random(this.vikingArmy);
    let damage = this.vikingArmy[v].strength;
    let message = this.saxonArmy[s].receiveDamage(damage);
    let soldier = this.saxonArmy[s];

    if (soldier.health <= 0) {
      this.saxonArmy.splice(s, 1);
    }

    return message;
  }

  saxonAttack() {
    let s = random(this.saxonArmy);
    let v = random(this.vikingArmy);
    let damage = this.saxonArmy[s].strength;
    let message = this.vikingArmy[v].receiveDamage(damage);
    let soldier = this.vikingArmy[v];

    if (soldier.health <= 0) {
      this.vikingArmy.splice(v, 1);
    }

    return message;
  }

  showStatus() {
    const { saxonArmy, vikingArmy } = this;

    var saxons = saxonArmy.length;
    var vikings = vikingArmy.length;
    var message = '';

    if (saxons && vikings !== 0) {
      message = 'Vikings and Saxons are still in the thick of battle.';
    } else if (vikings === 0) {
      message =
        'Saxons have fought for their lives and survived another day...';
    } else {
      message = 'Vikings have won the war of the century!';
    }
    return message;
  }
  //////////////////////////////////////

//   armyAttack(attacker, defender ){


//     console.log(attacker, defender)

//     let att = random(this.saxonArmy);
//     let def = random(this.vikingArmy);


//     let damage = this.vikingArmy[v].strength;
//     let message = this.saxonArmy[s].receiveDamage(damage);
//     let soldier = this.saxonArmy[s];

//     if (soldier.health <= 0) {
//       this.saxonArmy.splice(s, 1);
//     }

//     return message;


//   }
/////////////////////////////////////////



}

// var x = new Soldier(20, 5);
// var y = new Viking('Rohan', 4, 5);
// var z = new Saxon(20, 4);
// var w = new War();
// w.addViking(y)
// w.addViking(y)
// w.addSaxon(z)
// w.addSaxon(z)

// console.log(w.saxonArmy)
// console.log(w.vikingAttack(), w.saxonArmy);

// console.log(w.vikingArmy)
// console.log(w.saxonAttack(), w.vikingArmy);

// console.log(w.showStatus());
