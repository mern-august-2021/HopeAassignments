class Ninja {

    constructor(name, health, speed=3, strength=3) {

        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    
    }

    sayName(){
        console.log("The ninja's name is:" + this.name);
    }

    showStats(){
        console.log("Ninja name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health)
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " drank sake and health is now: " + this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        console.log("Speaking Wisdom...");
        this.drinkSake();
        console.log("Roads are made for journy's, not destinations.")
    }
}

const ninja1 = new Ninja("Hybusa", 100);
ninja1.sayName();
ninja1.showStats();

const ninja2 = new Ninja("Raff", 200, 50, 100);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();

const sensei1 = new Sensei("Confucius");
sensei1.showStats();
sensei1.speakWisdom();

const sensei2 = new Sensei("Yoda", 60, 100, 300);
sensei2.showStats();
sensei2.speakWisdom();
