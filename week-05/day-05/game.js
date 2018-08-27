// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

// Load the NPM Package inquirer

var hero = {
    health: 100,
  }


var weapons = [
    {
    name: "bareHands",
      reach: 1,
      attack: [5,5],
      risk: 95,
      reliability: 90,
      uses: 1000000000000000 
    },

        {
        name: "machete",
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 80,
    //chance of landing damage (%)
    reliability: 90,
    //"health" of gun
    uses: 5 
    },

    {
        name: "shotgun",
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [30,50],
    //Chance of taking damge back (%)
    risk: 65,
    reliability: 80,
    //"health" of gun
    uses: 5 
    },

    {
        name: "pistol",
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [25,40],
    //Chance of taking damge back (%)
    risk: 50,
    reliability: 75,
    //"health" of gun
    uses: 5 
    },

    {
        name: "machineGun",
    //number of zombies affected
    reach: 3,
    //Range of possible damage
    attack: [15,30],
    //Chance of taking damge back (%)
    risk: 30,
    reliability: 65,
    //"health" of gun
    uses: 5 
    },

    {
        name: "sniper",
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 50,
    reliability: 10,
    //"health" of gun
    uses: 5 
    },

    {
        name: "rpg",
    //number of zombies affected
    reach: 4,
    //Range of possible damage
    attack: [40,60],
    //Chance of taking damge back (%)
    risk: 95,
    reliability: 40,
    //"health" of gun
    uses: 5 
    }
]

var zombies = [
    {
        name: "zombie1",
        health: 100,
        attack: [0, 5],
        //Chance of dodging (%)
        agility: 15
    },

    {
        name: "zombie2",
        health: 90,
        attack: [1, 6],
        //Chance of dodging (%)
        agility: 18
    },

    {
        name: "zombie3",
        health: 85,
        attack: [2, 4],
        //Chance of dodging (%)
        agility: 20
    },


    {
        name: "zombie4",
        health: 80,
        attack: [2, 5],
        //Chance of dodging (%)
        agility: 22
    },


    {
        name: "zombie5",
        health: 60,
        attack: [7, 10],
        //Chance of dodging (%)
        agility: 10
    }
]

function random(a, b){
    return Math.floor(Math.random() * b) + a;
}

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
function game(){
    inquirer
    .prompt([
        {
        type: "list",
        message: "Choose a weapon!",
        choices: ["bareHands", "machete", "shotgun", "pistol", "machineGun", "sniper", "rpg"],
        name: "choice"
        }
    ])
    .then(function(res) {
        // If the res confirms, we displays the res's username and pokemon from the answers.
        var gun = res.choice;
        var damage = 0;
        var relChance = 0;
        var riskChance = 0;
        var gunUsesLeft;

        for(var i = 0; i < weapons.length; i++){
            if(weapons[i].name === gun){

                weapons[i].uses -= 1;
                //define vars
                gunUsesLeft = weapons[i].uses;
                damage = random(weapons[i].attack[0], weapons[i].attack[1]);
                relChance = weapons[i].reliability;
                riskChange = weapons[i].risk;
            }
        }

        if(gunUsesLeft > -1){
            console.log("You successfully picked a " + gun)
            if(random(1, 100) <= relChance){
                for(var i = 0; i < zombies.length; i++){
                    if(random(1, 100) > zombies[i].agility){
                        zombies[i].health -= damage;
                        console.log("You attacked " + zombies[i].name + " for " + damage + " damage!")
                        console.log(zombies[i].name + " has " + zombies[i].health + " HP left!")

                    }
                    if(random(1, 100) < riskChance){
                        var hit = random(zombies[i].attack[0], zombies[i].attack[1]);
                        hero.health -= hit;
                        console.log("You got hurt by the zombie for " + hit + " damage!")
                        console.log("You have " + user.health + " HP left!")
                    }
                }

            }
       }
       else{
           console.log("Your weapon is done!")
       }



        //     console.log("The zombie attacked you for " + zombieAttack);
        //     userHealth -= zombieAttack;
        //     console.log("Your remaining HP is " + userHealth)
        //     console.log("The zombie's remaining HP is " + zombieHealth)
        // }
        // console.log("_____________________________________")

        // if(userHealth > 0 && zombieHealth > 0){
        //     while(userHealth > 0 && zombieHealth > 0){
        //         return game();
        //     }
        // }
        // else{
        //     if(userHealth > 0){
        //         console.log("#########################")
        //         console.log("YOU WIN BABY!")
        //         console.log("#########################")
        //     }
        //     else{
        //         console.log("#########################")
        //         console.log("YOU GOT EATEN BY THE ZOMBIE!")
        //         console.log("#########################")
        //     }
        //     newGame();
        // }
    });
}

game();

function newGame(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Are you a zombie-loving masochist?",
            name: "confirm",
            default: false
          }
    ]).then(function(response){
        if(response.confirm){
            zombieHealth = 15;
            userHealth = 50;
            game();
        }
        else{
            console.log("Game Over.")
        }

    })
}