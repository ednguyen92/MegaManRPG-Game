var character = {};
var defender = {};
var defeatedCharacters = [];


var megaMan = {
    name: "MegaMan",
    health: 120,
    baseAttack: 8,
    attack: 8
  };
  
  var protoMan = {
    name: "ProtoMan",
    health: 100,
    baseAttack: 5,
    attack: 5
  };
  
  var Bass = {
    name: "Bass",
    health: 150,
    baseAttack: 20,
    attack: 20
  };
  
  var megaManX = {
    name: "MegaManX",
    health: 180,
    baseAttack: 25,
    attack: 25
  };

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(selectedCharacter) {
    character.name = selectedCharacter.name;
    character.health = selectedCharacterr.health;
    character.baseAttack = selectedCharacter.baseAttack;
    character.attack = selectedCharacter.attack;
  }
  
  // This function will initialize the enemy's value from the global object variables defined above
  function initializeDefender(selectedDefender) {
    defender.name = selectedDefender.name;
    defender.health = selectedDefender.health;
    defender.baseAttack = selectedDefender.baseAttack;
    defender.attack = selectedDefender.attack;
  }

  $(document).ready(function() {

    // Hide the "Restart" button on document load
    $("#restart").hide();
  
    // Determine which character the user has clicked
    $("#megaManChar").on("click", function () {
        console.log("MegaMan is selected");
        $("#megaManChar").removeClass("char1").addClass("main-Character");
        $("#main-Character").append(this);
    });

});
