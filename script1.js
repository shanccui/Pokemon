var audio = document.getElementById("start");
var image = document.createElement("IMG");
//image.style.visibility = "visible";
image.id = "image1";
var image2 = document.createElement("IMG");
//image2.style.visibility = "visible";
image2.id = "image2";
var newimage = "yes";
var chances = 2;

window.onload = function() {
  audio.volume = 0.2;
  audio.play();
};

function submitName() {
  var userName = document.getElementById("name").value;
  document.getElementById("prep1").innerHTML =
    "Perfect! Nice to meet you " +
    userName +
    "! Now lets form your team:<br> Invalid entries will be disregarded. Please only choose up to 6:";
  document.getElementById("prep2").style.visibility = "visible";
  document.getElementById("prep3").style.visibility = "visible";
  pokemons.forEach(display);
  alert(
    "***PLEASE READ**** Welcome to my Pokemon game, and thank you for playing it! If you would like to test the game's functionality and not worry about being defeated, please make sure to include pokemon #53 in your party, as that pokemon has buffed stats and will ensure that you can get through the game! Otherwise if you are up for a fun challenge, avoid using Blazikekn (53)! Have fun and thanks for playing!"
  );
}
var playerTeam = [];
function chooseTeam() {
  var teamArray = document.getElementById("choose").value.split(",");
  var result = teamArray.map(function(x) {
    return parseInt(x) - 1;
  });
  result.forEach(function(item) {
    if (
      Number.isInteger(item) &&
      item >= 0 &&
      item < 82 &&
      playerTeam.length < 6
    ) {
      playerTeam.push(pokemons[item]);
    }
  });
  if (playerTeam.length == 0) {
    document.getElementById("prep1").innerHTML =
      "Invalid entry, please re enter your team of 6 Pokemon:";
  } else {
    document.getElementById("prep3").style.visibility = "hidden";
    document.getElementById("prep1").innerHTML = null;
    document.getElementById("prep1").style.visibility = "hidden";
    document.getElementById("prep2").innerHTML = null;
    document.getElementById("prep2").style.visibility = "hidden";
    document.getElementById("prep3").innerHTML = null;
    document.getElementById("finalstep").style.visibility = "visible";
    var challenge = document.createElement("BUTTON");
    challenge.innerHTML = "Challenge";
    challenge.onclick = function() {
      erase();
      quote();
    };
    document.getElementById("finalstep").innerHTML =
      "<h3> Now we are all set! If you haven't done a Pokemon battle before, heres a brief intro for you. There are 18 different types of Pokemon, you can use as a reference: <br /> <center> <img src='https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ftypechart.png?v=1609797703431'>" +
      "</center><br />In order to win, it is best that you keep in mind what type the opponents Pokemon are and whether you are strong, weak or balanced by that type! Each of the elite 4 has a team of 6 strong pokemon, that fall in 3 or less types. However it is not that simple. In Pokemon, you have two different types of offense. Physical attack (atk), and Special Attack (spa). All of your Pokemon moves fall under one or the other. This is particularly useful to know, because some Pokemon have lower special defense and some have lower physical defense. Some Pokemon have higher special attack, and some have higher physical attack! You will also find that the opponent's Pokemon moves before yours, and thats because their speed stat is higher. And some Pokemon have higher health points than others, which can make them harder to defeat. <br><br> You can tell if your Pokemon has a higher atk or special atk stat by looking at your hpbar border, likewise your opponents. Higher atkstat is red- higher spa stat is blue. White is equal. Your moves will havea red or blue outline indicating if its a ATK or SPA move, respectively.Thats a quick intro on how this game works! After you beat all 4, you can move on to challenge the Champion of the Tummysa region. <br /></h3><h2>  Now go on and press the Challenge button! I have great confidence that  you will succeed!</h2>";
    document.getElementById("finalstep").appendChild(challenge);
  }
}
var pokemons = [
  // rock 4/5
  {
    name: "Kabutops",
    level: 79,
    type: "rock",
    total_hp: 224,
    hp: 224,
    spe: 172,
    atk: 227,
    def: 211,
    spa: 148,
    spd: 156,
    moves: {
      m1: ["Waterfall", 80, 1, "atk", "water"],
      m2: ["Stone Edge", 100, 0.8, "atk", "rock"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/kabutops.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/kabutops.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kabutops.mp3"
  },

  {
    name: "Cradily",
    level: 76,
    type: "rock",
    total_hp: 288,
    hp: 288,
    spe: 123,
    atk: 189,
    def: 216,
    spa: 189,
    spd: 233,
    moves: {
      m1: ["Seed Bomb", 80, 1, "atk", "grass"],
      m2: ["Rock Slide", 80, 90, "atk", "rock"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/cradily.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/cradily.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/cradily.mp3"
  },
  {
    name: "Sudowoodo",
    level: 88,
    type: "rock",
    total_hp: 266,
    hp: 266,
    spe: 103,
    atk: 226,
    def: 253,
    spa: 103,
    spd: 165,
    moves: {
      m1: ["Earthquake", 100, 1, "atk", "ground"],
      m2: ["Head Smash", 130, 0.7, "atk", "rock"],
      m3: ["Sucker Punch", 70, 1, "atk", "dark"],
      m4: ["Wood Hammer", 130, 0.7, "atk", "grass"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/sudowoodo.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/sudowoodo.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sudowoodo.mp3"
  },
  //bug DONE
  {
    name: "Mothim",
    level: 87,
    type: "bug",
    total_hp: 264,
    hp: 264,
    spe: 165,
    atk: 171,
    def: 137,
    spa: 212,
    spd: 136,
    moves: {
      m1: ["Air Slash", 80, 0.95, "atk", "flying", 32],
      m2: ["Bug Buzz", 90, 1, "spa", "bug", 16],
      m3: ["Hidden Power Ground", 70, 1, "spa", "ground"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/mothim.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/mothim.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mothim.mp3"
  },

  {
    name: "Galvantula",
    level: 84,
    type: "bug",
    total_hp: 255,
    hp: 255,
    spe: 230,
    atk: 136,
    def: 148,
    spa: 300,
    spd: 149,
    moves: {
      m1: ["Bug Buzz", 90, 1, "spa", "bug", 16],
      m2: ["Hidden Power Ice", 70, 1, "spa", "ice", 24],
      m3: ["Thunder", 120, 0.9, "spa", "electric", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/galvantula.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/galvantula.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/galvantula.mp3"
  },
  {
    name: "Heracross",
    level: 82,
    type: "bug",
    total_hp: 265,
    hp: 265,
    spe: 187,
    atk: 252,
    def: 170,
    spa: 113,
    spd: 203,
    moves: {
      m1: ["Megahorn", 120, 0.85, "atk", "bug", 16],
      m2: ["Facade", 120, 1, "atk", "normal", 32],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16],
      m4: ["Close Combat", 120, 0.8, "atk", "fighting", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/heracross.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/heracross.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/heracross.mp3"
  },

  // grass 4/5

  {
    name: "Shiftry",
    level: 88,
    type: "grass",
    total_hp: 302,
    hp: 302,
    spe: 191,
    atk: 181,
    def: 156,
    spa: 209,
    spd: 156,
    moves: {
      m1: ["Dark Pulse", 80, 1, "spa", "dark", 24],
      m2: ["Leaf Storm", 120, 0.9, "spa", "grass", 8],
      m3: ["Heat Wave", 95, 0.9, "spa", "fire", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/shiftry.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/shiftry.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shiftry.mp3"
  },
  {
    name: "Roserade",
    level: 82,
    type: "grass",
    total_hp: 233,
    hp: 233,
    spe: 195,
    atk: 119,
    def: 137,
    spa: 252,
    spd: 219,
    moves: {
      m1: ["Leaf Storm", 120, 0.9, "spa", "grass", 8],
      m2: ["Sludge Bomb", 90, 1, "spa", "poison", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/roserade.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/roserade.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/roserade.mp3"
  },
  {
    name: "Tangrowth",
    level: 84,
    type: "grass",
    total_hp: 305,
    hp: 305,
    spe: 132,
    atk: 216,
    def: 258,
    spa: 233,
    spd: 132,
    moves: {
      m1: ["Giga Drain", 80, 1, "spa", "grass", 16],
      m2: ["Sludge Bomb", 90, 1, "spa", "poison", 16],
      m3: ["Knock Off", 70, 1, "atk", "dark", 32]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/tangrowth.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/tangrowth.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tangrowth.mp3"
  },

  // fire DONE
  {
    name: "Ninetales",
    type: "fire",
    level: 84,
    total_hp: 270,
    hp: 270,
    spe: 216,
    atk: 132,
    def: 174,
    spa: 184,
    spd: 216,
    moves: {
      m1: ["Heat Wave", 95, 0.9, "spa", "fire", 16],
      m2: ["Scorching Sands", 80, 1, "spa", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ninetales.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/ninetales.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ninetales.mp3"
  },
  {
    name: "Magmortar",
    type: "fire",
    level: 84,
    total_hp: 263,
    hp: 263,
    spe: 188,
    atk: 164,
    def: 161,
    spa: 258,
    spd: 208,
    moves: {
      m1: ["Focus Blast", 120, 0.7, "spa", "fighting", 8],
      m2: ["Thunderbolt", 95, 1, "spa", "electric", 24],
      m3: ["Fire Blast", 110, 0.85, "spa", "fire", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/magmortar.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/magmortar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/magmortar.mp3"
  },
  {
    name: "Camerupt",
    type: "fire",
    level: 86,
    total_hp: 261,
    hp: 261,
    spe: 118,
    atk: 178,
    def: 170,
    spa: 229,
    spd: 178,
    moves: {
      m1: ["Lava Plume", 80, 1, "spa", "fire", 24],
      m2: ["Hidden Power Grass", 70, 1, "spa", "grass", 24],
      m3: ["Earth Power", 90, 1, "spa", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/camerupt.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/camerupt.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/camerupt.mp3"
  },
  //dark DONE

  {
    name: "Weaville",
    level: 82,
    type: "dark",
    total_hp: 249,
    hp: 249,
    spe: 252,
    atk: 244,
    def: 154,
    spa: 121,
    spd: 187,
    moves: {
      m1: ["Icicle Crash", 85, 0.9, "atk", "ice"],
      m2: ["Low Kick", 75, 1, "atk", "fighting", 32],
      m3: ["Night Slash", 75, 1, "atk", "dark", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/weavile.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/weavile.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/weavile.mp3"
  },
  {
    name: "Scrafty",
    level: 82,
    type: "dark",
    total_hp: 241,
    hp: 241,
    spe: 142,
    atk: 195,
    def: 236,
    spa: 121,
    spd: 236,
    moves: {
      m1: ["High Jump Kick", 120, 0.9, "atk", "fighting"],
      m2: ["Zen Headbutt", 80, 0.9, "atk", "psychic", 24],
      m3: ["Crunch", 80, 1, "atk", "dark", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/scrafty.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/scrafty.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/scrafty.mp3"
  },

  {
    name: "Sableye",
    level: 88,
    type: "dark",
    total_hp: 231,
    hp: 231,
    spe: 138,
    atk: 182,
    def: 182,
    spa: 165,
    spd: 165,
    moves: {
      m1: ["Shadow Ball", 80, 1, "atk", "ghost"],
      m2: ["Seismic Toss", 88, 1, "atk", "fighting"],
      m3: ["Sucker Punch", 80, 1, "atk", "dark"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/sableye.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/sableye.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sableye.mp3"
  },

  // dragon DONE
  {
    name: "Garchomp",
    type: "dragon",
    level: 84,
    total_hp: 304,
    hp: 304,
    spe: 209,
    atk: 254,
    def: 298,
    spa: 174,
    spd: 182,
    moves: {
      m1: ["Fire fang", 70, 0.95, "atk", "fire", 24],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16],
      m3: ["Draco Meteor", 120, 0.9, "atk", "dragon", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/garchomp.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/garchomp.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/garchomp.mp3"
  },
  {
    name: "Dragapult",
    type: "dragon",
    level: 78,
    total_hp: 265,
    hp: 265,
    spe: 267,
    atk: 192,
    def: 162,
    spa: 201,
    spd: 162,
    moves: {
      m1: ["Draco Meteor", 120, 0.8, "spa", "dragon", 8],
      m2: ["Shadow Ball", 80, 1, "spa", "ghost", 24],
      m3: ["Fire Blast", 110, 0.85, "spa", "fire", 8],
      m4: ["Thunderbolt", 90, 1, "spa", "electric", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dragapult.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dragapult.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dragapult.mp3"
  },
  {
    name: "Altaria",
    level: 88,
    type: "dragon",
    total_hp: 275,
    hp: 275,
    spe: 191,
    atk: 128,
    def: 209,
    spa: 173,
    spd: 235,
    moves: {
      m1: ["Draco Meteor", 130, 0.7, "atk", "dragon", 8],
      m2: ["Fire Blast", 110, 0.85, "spa", "fire", 8],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/altaria.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/altaria.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/altaria.mp3"
  },

  // electric DONE
  {
    name: "Electivire",
    level: 88,
    type: "electric",
    total_hp: 275,
    hp: 275,
    spe: 217,
    atk: 267,
    def: 168,
    spa: 217,
    spd: 200,
    moves: {
      m1: ["Ice Punch", 75, 1, "atk", "ice"],
      m2: ["Wild Charge", 90, 1, "atk", "electric"],
      m3: ["Flamethrower", 90, 1, "spa", "fire"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/electivire.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/electivire.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/electivire.mp3"
  },

  {
    name: "Pachirisu",
    level: 87,
    type: "electric",
    total_hp: 246,
    hp: 246,
    spe: 215,
    atk: 83,
    def: 172,
    spa: 128,
    spd: 206,
    moves: {
      m1: ["Super Fang", 90, 1, "atk", "normal", 16],
      m2: ["Thunderbolt", 95, 1, "spa", "electric"],
      m3: ["Focus Blast", 120, 0.7, "spa", "fighting", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pachirisu.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/pachirisu.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pachirisu.mp3"
  },

  // psychic DONE
  {
    name: "Reuniclus",
    level: 84,
    type: "psychic",
    total_hp: 322,
    hp: 322,
    spe: 55,
    atk: 114,
    def: 174,
    spa: 258,
    spd: 191,
    moves: {
      m1: ["Psychic", 90, 1, "spa", "psychic"],
      m2: ["Shadow Ball", 80, 1, "spa", "ghost"],
      m3: ["Focus Blast", 120, 0.7, "spa", "fighting"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/reuniclus.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/reuniclus.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/reuniclus.mp3"
  },
  {
    name: "Alakazam",
    level: 80,
    type: "psychic",
    total_hp: 219,
    hp: 219,
    spe: 238,
    atk: 85,
    def: 118,
    spa: 262,
    spd: 182,
    moves: {
      m1: ["Shadow Ball", 80, 1, "spa", "ghost"],
      m2: ["Psychic", 90, 1, "spa", "psychic"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/alakazam.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/alakazam.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/alakazam.mp3"
  },
  {
    name: "Beheeyem",
    level: 88,
    type: "psychic",
    total_hp: 275,
    hp: 275,
    spe: 120,
    atk: 137,
    def: 181,
    spa: 269,
    spd: 217,
    moves: {
      m1: ["Signal Beam", 75, 1, "spa", "bug"],
      m2: ["Psychic", 90, 1, "spa", "psychic"],
      m3: ["Hidden Power Fighting", 60, 1, "spa", "fighting"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/beheeyem.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/beheeyem.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/beheeyem.mp3"
  },

  // water DONE
  {
    name: "Seaking",
    level: 88,
    type: "water",
    total_hp: 284,
    hp: 284,
    spe: 170,
    atk: 212,
    def: 165,
    spa: 165,
    spd: 191,
    moves: {
      m1: ["Drill Run", 80, 0.95, "atk", "ground"],
      m2: ["Waterfall", 80, 1, "atk", "water"],
      m3: ["Crunch", 68, 1, "atk", "crunch"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/seaking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/seaking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/seaking.mp3"
  },
  {
    name: "Slowking",
    level: 86,
    type: "water",
    total_hp: 304,
    hp: 304,
    spe: 101,
    atk: 134,
    def: 187,
    spa: 221,
    spd: 238,
    moves: {
      m1: ["Surf", 95, 1, "spa", "water", 24],
      m2: ["Psychic", 90, 1, "spa", "psychic"],
      m3: ["Fire Blast", 110, 0.85, "spa", "fire"],
      m4: ["Ice Beam", 95, 1, "spa", "ice", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/slowking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/slowking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/slowking.mp3"
  },
  {
    name: "Gyarados",
    level: 76,
    type: "water",
    total_hp: 269,
    hp: 269,
    spe: 167,
    atk: 234,
    def: 164,
    spa: 315,
    spd: 196,
    moves: {
      m1: ["Waterfall", 80, 1, "atk", "water", 24],
      m2: ["Bounce", 85, 0.85, "atk", "flying", 8],
      m3: ["Power Whip", 120, 0.85, "atk", "grass", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gyarados.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/gyarados.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gyarados.mp3"
  },

  // ice DONE
  {
    name: "Avalugg",
    level: 86,
    type: "ice",
    total_hp: 303,
    hp: 303,
    spe: 97,
    atk: 250,
    def: 366,
    spa: 125,
    spd: 128,
    moves: {
      m1: ["Avalanche", 100, 1, "atk", "ice"],
      m2: ["Body Press", 80, 1, "atk", "fighting"]
      //recover
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/avalugg.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/avalugg.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/avalugg.mp3"
  },

  {
    name: "Delibird",
    level: 88,
    type: "ice",
    total_hp: 222,
    hp: 222,
    spe: 182,
    atk: 147,
    def: 129,
    spa: 165,
    spd: 129,
    moves: {
      m1: ["Ice Beam", 95, 1, "spa", "ice"],
      m2: ["Aerial Ace", 60, 1, "atk", "flying"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/delibird.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/delibird.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/delibird.mp3"
  },
  {
    name: "Mamoswine",
    type: "ice",
    level: 82,
    total_hp: 315,
    hp: 315,
    spe: 178,
    atk: 300,
    def: 178,
    spa: 162,
    spd: 146,
    moves: {
      m1: ["Icicle Crash", 85, 0.9, "atk", "ice", 16],
      m2: ["Superpower", 120, 0.8, "atk", "fighting", 8],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/mamoswine.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/mamoswine.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mamoswine.mp3"
  },
  // steel DONE
  {
    name: "Aggron",
    level: 79,
    type: "steel",
    total_hp: 240,
    hp: 240,
    spe: 125,
    atk: 219,
    def: 330,
    spa: 140,
    spd: 140,
    moves: {
      m1: ["Low Kick", 80, 1, "atk", "fighting"],
      m2: ["Ice Punch", 75, 1, "atk", "ice"],
      m3: ["Heavy Slam", 120, 1, "atk", "steel", 16],
      m4: ["Head Smash", 120, 0.8, "atk", "rock", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/aggron.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/aggron.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/aggron.mp3"
  },
  {
    name: "Metagross",
    level: 82,
    type: "steel",
    total_hp: 265,
    hp: 265,
    spe: 162,
    atk: 269,
    def: 260,
    spa: 203,
    spd: 195,
    moves: {
      m1: ["Thunder Punch", 75, 1, "atk", "electric", 24],
      m2: ["Meteor Mash", 90, 0.9, "atk", "steel", 16],
      m3: ["Zen Headbutt", 80, 0.9, "atk", "psychic", 24],
      //lower spped by 1
      m3: ["Hammer Arm", 100, 0.9, "atk", "fighting", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/metagross.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/metagross.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/metagross.mp3"
  },
  {
    name: "Steelix",
    level: 84,
    type: "steel",
    total_hp: 263,
    hp: 263,
    spe: 99,
    atk: 191,
    def: 284,
    spa: 141,
    spd: 147,
    moves: {
      m1: ["Head Smash", 120, 0.8, "atk", "rock", 8],
      m2: ["Heavy Slam", 120, 1, "atk", "steel", 16],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/steelix.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/steelix.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/steelix.mp3"
  },
  // normal DONE
  {
    name: "Stoutland",
    level: 88,
    type: "normal",
    total_hp: 293,
    hp: 293,
    spe: 191,
    atk: 244,
    def: 209,
    spa: 129,
    spd: 209,
    moves: {
      m1: ["Body Slam", 85, 1, "atk", "normal"],
      m2: ["Superpower", 120, 0.8, "atk", "fighting"],
      m3: ["Crunch", 80, 1, "atk", "dark", 24],
      m4: ["Play Rough", 90, 0.9, "atk", "fairy", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/stoutland.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/stoutland.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/stoutland.mp3"
  },
  {
    name: "Exploud",
    level: 84,
    type: "normal",
    total_hp: 312,
    hp: 312,
    spe: 162,
    atk: 157,
    def: 154,
    spa: 231,
    spd: 171,
    moves: {
      m1: ["Boomburst", 140, 1, "spa", "normal", 16],
      m2: ["Focus Blast", 120, 0.7, "spa", "fighting", 8],
      m3: ["Fire Blast", 110, 0.85, "spa", "fire", 8],
      m4: ["Surf", 90, 1, "spa", "water", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/exploud.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/exploud.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/exploud.mp3"
  },
  {
    name: "Tauros",
    level: 82,
    type: "normal",
    total_hp: 257,
    hp: 257,
    spe: 228,
    atk: 211,
    def: 203,
    spa: 113,
    spd: 162,
    moves: {
      m1: ["Body Slam", 85, 1, "atk", "normal"],
      m2: ["Close Combat", 120, 0.8, "atk", "fighting"],
      m3: ["Throat Chop", 75, 1, "atk", "dark", 24],
      m4: ["Zen Headbutt", 85, 0.9, "atk", "psychic", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/tauros.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/tauros.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tauros.mp3"
  },

  // ghost DONE
  {
    name: "Dusknoir",
    level: 75,
    type: "ghost",
    total_hp: 191,
    hp: 191,
    spe: 111,
    atk: 194,
    def: 246,
    spa: 141,
    spd: 246,
    moves: {
      m1: ["Ice Punch", 75, 1, "atk", "ice", 24],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16],
      m3: ["Shadow Ball", 80, 1, "spa", "ghost", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dusknoir.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dusknoir.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dusknoir.mp3"
  },

  {
    name: "Drifblim",
    level: 88,
    type: "ghost",
    total_hp: 407,
    hp: 407,
    spe: 191,
    atk: 145,
    def: 128,
    spa: 209,
    spd: 145,
    moves: {
      m1: ["Shadow Ball", 80, 1, "spa", "ghost"],
      m2: ["Thunderbolt", 90, 1, "spa", "electric"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/drifblim.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/drifblim.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/drifblim.mp3"
  },
  {
    name: "Gourgeist",
    type: "ghost",
    level: 84,
    total_hp: 263,
    hp: 263,
    spe: 164,
    atk: 208,
    def: 253,
    spa: 146,
    spd: 174,
    moves: {
      m1: ["Poltergeist", 80, 1, "atk", "ghost", 16],
      m2: ["Power Whip", 120, 0.85, "atk", "grass", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gourgeist.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/gourgeist.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gourgeist.mp3"
  },
  {
    name: "Mismagius",
    level: 82,
    type: "ghost",
    total_hp: 233,
    hp: 233,
    spe: 219,
    atk: 105,
    def: 145,
    spa: 219,
    spd: 219,
    moves: {
      m1: ["Shadow Ball", 80, 1, "spa", "ghost"],
      m2: ["Thunderbolt", 90, 1, "spa", "electric"],
      m3: ["Hidden Power Fighting", 70, 1, "spa", "fighting"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/mismagius.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/mismagius.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mismagius.mp3"
  },

  // ground DONE
  {
    name: "Dugtrio",
    level: 80,
    type: "ground",
    total_hp: 184,
    hp: 184,
    spe: 238,
    atk: 174,
    def: 126,
    spa: 126,
    spd: 158,
    moves: {
      m1: ["Earthquake", 100, 1, "atk", "ground"],
      m2: ["Rock Slide", 80, 0.9, "atk", "rock"],
      m3: ["Aerial Ace", 60, 1, "atk", "flying"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dugtrio.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dugtrio.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dugtrio.mp3"
  },
  {
    name: "Donphan",
    level: 80,
    type: "ground",
    hp: 184,
    spe: 238,
    atk: 174,
    def: 126,
    spa: 126,
    spd: 158,
    moves: {
      m1: ["Earthquake", 100, 1, "atk", "ground"],
      m2: ["Seed Bomb", 80, 1, "atk", "grass", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/donphan.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/donphan.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/donphan.mp3"
  },

  {
    name: "Excadrill",
    level: 80,
    type: "ground",
    total_hp: 307,
    hp: 307,
    spe: 187,
    atk: 262,
    def: 142,
    spa: 126,
    spd: 150,
    moves: {
      m1: ["Iron Head", 80, 1, "atk", "steel", 24],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/excadrill.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/excadrill.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/excadrill.mp3"
  },
  {
    name: "Nidoking",
    level: 79,
    type: "poison",
    total_hp: 258,
    hp: 258,
    spe: 180,
    atk: 191,
    def: 167,
    spa: 180,
    spd: 164,
    moves: {
      m1: ["Earthquake", 100, 1, "atk", "ground"],
      m2: ["Fire Blast", 120, 0.85, "spa", "fire"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/nidoking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/nidoking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/nidoking.mp3"
  },
  {
    name: "Drapion",
    level: 84,
    type: "poison",
    total_hp: 255,
    hp: 255,
    spe: 208,
    atk: 199,
    def: 233,
    spa: 149,
    spd: 174,
    moves: {
      m1: ["Earthquake", 100, 1, "atk", "ground"],
      m2: ["Crunch", 80, 1, "atk", "dark"],
      m3: ["Poison Jab", 80, 1, "atk", "poison"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/drapion.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/drapion.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/drapion.mp3"
  },
  {
    name: "Garbodor",
    level: 86,
    type: "poison",
    total_hp: 278,
    hp: 278,
    spe: 278,
    atk: 213,
    def: 190,
    spa: 152,
    spd: 190,
    moves: {
      m1: ["Drain Punch", 80, 1, "atk", "fighting", 16],
      m2: ["Gunk Shot", 120, 0.8, "atk", "poison", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/garbodor.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/garbodor.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/garbodor.mp3"
  },

  // flying

  {
    name: "Corviknight",
    level: 78,
    type: "flying",
    total_hp: 281,
    hp: 281,
    spe: 150,
    atk: 181,
    def: 209,
    spa: 128,
    spd: 178,
    moves: {
      m1: ["Brave Bird", 120, 0.8, "atk", "flying"],
      m2: ["Body Press", 80, 1, "atk", "fighting"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/corviknight.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/corviknight.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/corviknight.mp3"
  },
  {
    name: "Pelipper",
    level: 87,
    type: "flying",
    total_hp: 246,
    hp: 246,
    spe: 163,
    atk: 92,
    def: 224,
    spa: 198,
    spd: 172,
    moves: {
      m1: ["Hurricane", 120, 0.8, "spa", "flying"],
      m2: ["Scald", 80, 1, "spa", "water"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pelipper.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/pelipper.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pelipper.mp3"
  },

  // fairy DONE
  {
    name: "Clefable",
    level: 80,
    type: "fairy",
    total_hp: 283,
    hp: 283,
    spe: 142,
    atk: 117,
    def: 163,
    spa: 198,
    spd: 190,
    moves: {
      m1: ["Fire Blast", 110, 0.85, "spa", "fire"],
      m2: ["Moonblast", 95, 1, "spa", "fairy"]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/clefable.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/clefable.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/clefable.mp3"
  },
  {
    name: "Slurpuff",
    level: 80,
    type: "fairy",
    total_hp: 262,
    hp: 262,
    spe: 161,
    atk: 174,
    def: 184,
    spa: 182,
    spd: 166,
    moves: {
      m1: ["Facade", 70, 1, "atk", "normal", 32],
      m2: ["Play Rough", 90, 0.9, "atk", "fairy", 16],
      m3: ["Drain Punch", 75, 1, "atk", "fighting", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/slurpuff.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/slurpuff.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/slurpuff.mp3"
  },
  {
    name: "Shiinotic",
    level: 86,
    type: "fairy",
    total_hp: 243,
    hp: 243,
    spe: 101,
    atk: 82,
    def: 187,
    spa: 204,
    spd: 221,
    moves: {
      // spore, strength sap
      m1: ["Energy Ball", 90, 1, "spa", "grass", 16],
      m2: ["Moonblast", 95, 1, "spa", "fairy", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/shiinotic.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/shiinotic.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shiinotic.mp3"
  },

  {
    name: "Machamp",
    level: 82,
    type: "fighting",
    total_hp: 282,
    hp: 282,
    spe: 137,
    atk: 275,
    def: 178,
    spa: 154,
    spd: 187,
    moves: {
      m1: ["Bullet Punch", 70, 1, "atk", "steel", 48],
      m2: ["Close Combat", 120, 0.8, "atk", "fighting", 16],
      m3: ["Facade", 80, 1, "atk", "normal", 24],
      m4: ["Knock Off", 65, 1, "atk", "fighting", 32]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/machamp.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/machamp.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/machamp.mp3"
  },
  {
    name: "Poliwrath",
    level: 84,
    type: "fighting",
    total_hp: 288,
    hp: 288,
    spe: 166,
    atk: 208,
    def: 208,
    spa: 166,
    spd: 199,
    moves: {
      m1: ["Liquidation", 85, 1, "atk", "water", 16],
      m2: ["Close Combat", 120, 0.8, "atk", "fighting", 16],
      m3: ["Darkest Lariat", 85, 1, "atk", "dark", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/poliwrath.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/poliwrath.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/poliwrath.mp3"
  },
  {
    name: "Blaziken",
    level: 79,
    type: "fighting",
    total_hp: 1256,
    hp: 1256,
    spe: 1172,
    atk: 1235,
    def: 1156,
    spa: 1219,
    spd: 1156,
    moves: {
      m1: ["Stone Edge", 100, 0.8, "atk", "rock", 8],
      m2: ["High Jump Kick", 120, 0.8, "atk", "fighting", 16],
      m3: ["Flare Blitz", 120, 0.8, "atk", "fire", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/blaziken.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/blaziken.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/blaziken.mp3"
  }
];

var andre = [
  {
    name: "Gastrodon",
    level: 86,
    type: "water",
    total_hp: 331,
    hp: 331,
    spe: 116,
    atk: 192,
    def: 166,
    spa: 207,
    spd: 190,
    moves: {
      m1: ["Scald", 80, 1, "spa", "water", 24],
      m2: ["Ice Beam", 95, 1, "spa", "ice", 16],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gastrodon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gastrodon.mp3"
  },
  /*
  {
    name: "Starmie",
    level: 84,
    type: "water",
    total_hp: 238,
    hp: 238,
    spe: 241,
    atk: 131,
    def: 191,
    spa: 275,
    spd: 191,
    moves: {
      m1: ["Hydro Pump", 120, 0.8, "spa", "water", 8],
      m2: ["Psychic", 90, 1, "spa", "psychic", 16],
      m3: ["Thunderbolt", 90, 1, "spa", "electric", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/starmie.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/starmie.mp3"
  },
  
  {
    name: "Milotic",
    level: 84,
    type: "water",
    total_hp: 297,
    hp: 297,
    spe: 184,
    atk: 105,
    def: 181,
    spa: 216,
    spd: 258,
    moves: {
      m1: ["Scald", 80, 1, "atk", "water"],
      m2: ["Ice Beam", 95, 1, "spa", "ice"],
      m3: ["Dragon Tail", 80, 0.9, "atk", "dragon"]
    },
    img:
      "http://play.pokemonshowdown.com/sprites/ani-shiny/milotic.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/milotic.mp3"
  },
  */
  {
    name: "Kingdra",
    level: 84,
    type: "water",
    total_hp: 263,
    hp: 263,
    spe: 191,
    atk: 264,
    def: 208,
    spa: 208,
    spd: 208,
    moves: {
      m1: ["Hydro Pump", 110, 0.8, "spa", "water", 8],
      m2: ["Draco Meteor", 120, 0.9, "spa", "dragon", 8],
      m3: ["Hurrricane", 110, 0.7, "spa", "flying", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/kingdra.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kingdra.mp3"
  },
  {
    name: "Manaphy",
    level: 79,
    type: "water",
    total_hp: 288,
    hp: 288,
    spe: 204,
    atk: 163,
    def: 204,
    spa: 204,
    spd: 204,
    moves: {
      m1: ["Surf", 95, 1, "spa", "water", 24],
      m2: ["Grass Knot", 80, 1, "spa", "grass", 32],
      m3: ["Ice Beam", 95, 1, "spa", "ice", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/manaphy.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/manaphy.mp3"
  },

  {
    name: "Sharpedo",
    level: 84,
    type: "water",
    total_hp: 255,
    hp: 255,
    spe: 208,
    atk: 275,
    def: 115,
    spa: 208,
    spd: 115,
    moves: {
      m1: ["Crunch", 80, 1, "atk", "dark", 24],
      m2: ["Hydro Pump", 110, 0.8, "spa", "water", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/sharpedo-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sharpedo-mega.mp3"
  }
];

var keisha = [
  {
    name: "Meowstic",
    level: 86,
    type: "psychic",
    total_hp: 262,
    hp: 262,
    spe: 223,
    atk: 85,
    def: 176,
    spa: 248,
    spd: 184,
    moves: {
      m1: ["Energy Ball", 90, 1, "spa", "green", 16],
      m2: ["Shadow Ball", 80, 1, "spa", "ghost", 24],
      m3: ["Thunderbolt", 90, 1, "spa", "electric", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/meowstic-f.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/meowstic.mp3"
  },
  {
    name: "Meloetta",
    level: 84,
    type: "psychic",
    total_hp: 298,
    hp: 298,
    spe: 195,
    atk: 131,
    def: 173,
    spa: 330,
    spd: 257,
    moves: {
      m1: ["Psychic", 90, 1, "spa", "psychic", 16],
      m2: ["Shadow Ball", 75, 1, "spa", "ghost", 26],
      m3: ["Focus Blast", 120, 0.7, "spa", "fighting", 8]
    },
    img:
      "http://play.pokemonshowdown.com/sprites/ani-shiny/meloetta-pirouette.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/meloetta.mp3"
  },
  {
    name: "Espeon",
    level: 80,
    type: "psychic",
    total_hp: 235,
    hp: 235,
    spe: 221,
    atk: 110,
    def: 142,
    spa: 253,
    spd: 198,
    moves: {
      m1: ["Hyper Voice ", 110, 1, "spa", "fairy", 16],
      m2: ["Psychic", 90, 1, "spa", "psychic"],
      m3: ["Hidden Power Fire", 70, 1, "spa", "fire", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/espeon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/espeon.mp3"
  },
  {
    name: "Gardevoir",
    level: 86,
    type: "psychic",
    total_hp: 257,
    hp: 257,
    spe: 187,
    atk: 116,
    def: 161,
    spa: 275,
    spd: 247,
    moves: {
      m1: ["Dazzling Gleam", 90, 1, "spa", "fairy", 16],
      m2: ["Thunderbolt", 95, 1, "spa", "electric", 24],
      m3: ["Psychic", 90, 1, "spa", "psychic", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gardevoir-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gardevoir-mega.mp3"
  }
];

var andy = [
  {
    name: "Tyranitar",
    level: 70,
    type: "rock",
    total_hp: 256,
    hp: 256,
    spe: 126,
    atk: 229,
    def: 195,
    spa: 174,
    spd: 181,
    moves: {
      m1: ["Rock Slide", 85, 0.9, "atk", "rock", 16],
      m2: ["Crunch", 80, 1, "atk", "dark", 24],
      m3: ["Ice Punch", 80, 1, "atk", "ice", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/tyranitar-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tyranitar-mega.mp3"
  },
  {
    name: "Archeops",
    level: 84,
    type: "rock",
    total_hp: 263,
    hp: 263,
    spe: 233,
    atk: 283,
    def: 157,
    spa: 236,
    spd: 157,
    moves: {
      m1: ["Acrobatics", 110, 1, "atk", "flying", 24],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16],
      m3: ["U-turn", 80, 1, "atk", "bug", 32],
      m2: ["Head Smash", 120, 0.8, "atk", "rock", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/archeops.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/archeops.mp3"
  },
  {
    name: "Lycanroc",
    level: 80,
    type: "rock",
    total_hp: 251,
    hp: 251,
    spe: 225,
    atk: 230,
    def: 150,
    spa: 134,
    spd: 150,
    moves: {
      m1: ["Psychic Fangs", 85, 1, "atk", "psychic", 16],
      m2: ["Stone Edge", 100, 0.8, "atk", "rock", 8],
      m3: ["Close Combat", 120, 0.9, "atk", "fighting", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lycanroc.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lycanroc.mp3"
  },
  {
    name: "Rampardos",
    level: 87,
    type: "rock",
    total_hp: 311,
    hp: 311,
    spe: 151,
    atk: 337,
    def: 154,
    spa: 163,
    spd: 137,
    moves: {
      m1: ["Fire Punch", 75, 1, "atk", "fire", 24],
      m2: ["Rock Slide", 75, 0.9, "atk", "rock", 16],
      m3: ["Superpower", 120, 0.9, "atk", "fighting", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/rampardos.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/rampardos.mp3"
  }
];

var mona = [
  /*
  {
    name: "Reshiram",
    level: 74,
    type: "dragon",
    hp: 270,
    spe: 176,
    atk: 221,
    def: 191,
    spa: 265,
    spd: 221,
    moves: {
      m1: ["Stone Edge", 100, 0.8, "atk", "rock", 8],
      m2: ["Blue flare", 130, 0.85, "spa", "fire", 8],
      m3: ["Draco Meteor", 120, 0.9, "spa", "dragon", 8],
      m4: ["Earth Power", 90, 1, "spa", "ground", 16]
    }
  },
  */
  {
    name: "Kommo-o",
    level: 80,
    type: "dragon",
    total_hp: 251,
    hp: 251,
    spe: 182,
    atk: 222,
    def: 246,
    spa: 206,
    spd: 214,
    moves: {
      m1: ["Changing Scales", 110, 1, "spa", "dragon", 8],
      m2: ["Close Combat", 120, 0.8, "atk", "fighting", 8],
      m3: ["Poison Jab", 80, 1, "atk", "poison", 32]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/kommoo.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kommoo.mp3"
  },

  {
    name: "Salamence",
    level: 70,
    type: "dragon",
    total_hp: 249,
    hp: 249,
    spe: 181,
    atk: 230,
    def: 153,
    spa: 195,
    spd: 153,
    moves: {
      m1: ["Dragon Claw", 80, 1, "atk", "dragon", 24],
      m2: ["Fly", 90, 0.95, "atk", "flying", 24],
      m3: ["Earthquake", 100, 1, "atk", "ground", 16],
      m4: ["Fire Blast", 120, 0.85, "spa", "fire", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/salamence.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/salamence.mp3"
  },
  {
    name: "Charizard",
    level: 86,
    type: "dragon",
    total_hp: 274,
    hp: 274,
    spe: 221,
    atk: 151,
    def: 183,
    spa: 236,
    spd: 195,
    moves: {
      m1: ["Fire Blast", 120, 0.85, "spa", "fire", 8],
      m2: ["Hidden Power Grass", 70, 1, "spa", "grass", 24],
      m3: ["Draco Meteor", 90, 1, "spa", "dragon", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/charizard-megax.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/charizard-megax.mp3"
  },
  {
    name: "Hydreigon",
    level: 80,
    type: "dragon",
    total_hp: 278,
    hp: 278,
    spe: 203,
    atk: 173,
    def: 190,
    spa: 246,
    spd: 190,
    moves: {
      m1: ["Flamethrower", 95, 1, "spa", "fire", 24],
      m2: ["Dark Pulse", 80, 1, "spa", "dark", 24],
      m3: ["Draco Meteor", 120, 0.9, "spa", "dragon", 8]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/hydreigon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/hydreigon.mp3"
  }
];

var jakey = [
  {
    name: "Quagsire",
    level: 86,
    type: "water",
    total_hp: 360,
    hp: 360,
    spe: 110,
    atk: 200,
    def: 195,
    spa: 165,
    spd: 165,
    moves: {
      m1: ["Scald", 80, 1, "spa", "water", 24],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/quagsire.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/quagsire.mp3"
  },
  {
    name: "Lilligant",
    level: 88,
    type: "grass",
    total_hp: 266,
    hp: 266,
    spe: 209,
    atk: 110,
    def: 182,
    spa: 244,
    spd: 182,
    moves: {
      m1: ["Pollen Puff", 90, 1, "spa", "bug", 24],
      m2: ["Petal Dance", 120, 0.9, "spa", "grass", 16]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lilligant.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lilligant.mp3"
  },
  {
    name: "Pikachu",
    level: 90,
    type: "electric",
    total_hp: 209,
    hp: 209,
    spe: 213,
    atk: 300,
    def: 123,
    spa: 282,
    spd: 141,
    moves: {
      m1: ["Volt Tackle", 120, 0.8, "atk", "electric", 24],
      m2: ["Iron Tail", 100, 0.8, "atk", "steel", 24],
      m3: ["Knock Off", 70, 1, "atk", "dark", 32]
    },
    img: "https://play.pokemonshowdown.com/sprites/ani-shiny/pikachu-phd.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3"
  },
  {
    name: "Haxorus",
    level: 80,
    type: "dragon",
    total_hp: 253,
    hp: 253,
    spe: 301,
    atk: 281,
    def: 190,
    spa: 142,
    spd: 158,
    moves: {
      m1: ["Poison Jab", 80, 1, "atk", "poison", 32],
      m2: ["Earthquake", 100, 1, "atk", "ground", 16],
      m3: ["Close Combat", 120, 0.8, "atk", "fighting", 8],
      m4: ["Aqua Tail", 90, 0.9, "atk", "water", 160]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/haxorus.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/haxorus.mp3"
  },
  /*
  {
    name: "mewtwo",
    level: 72,
    type: "psychic",
    hp: 250,
    spe: 229,
    atk: 163,
    def: 172,
    spa: 264,
    spd: 172,
    moves: {
      m1: ["Psystrike", 100, 1, "spa", "psychic", 16],
      m2: ["Fire Blast", 110, 0.85, "spa", "fire", 8],
      m2: ["Close Combat", 90, 1, "spa", "ice", 16]
    }
  },
  */
  {
    name: "Lucario",
    level: 84,
    type: "fighting",
    total_hp: 255,
    hp: 255,
    spe: 199,
    atk: 233,
    def: 166,
    spa: 241,
    spd: 166,
    moves: {
      m1: ["Close Combat", 120, 0.8, "atk", "fighting", 8],
      m2: ["Meteor Mash", 90, 0.9, "atk", "steel", 16],
      m3: ["Ice Punch", 75, 1, "atk", "ice", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/lucario-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lucario-mega.mp3"
  }
];

var typeList = [
  {
    type: "normal",
    supereffective: null,
    noteffective: ["rock", "steel"],
    noeffect: "ghost",
    color: "#d4d4cd",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy.webp?v=1614996637219"
  },
  {
    type: "fire",
    supereffective: ["grass", "ice", "bug", "steel"],
    noteffective: ["fire", "water", "rock", "dragon"],
    noeffect: null,
    color: "#f28a4e",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(1).webp?v=1614997176062"
  },
  {
    type: "water",
    supereffective: ["fire", "ground", "rock"],
    noteffective: ["water", "grass", "dragon"],
    noeffect: null,
    color: "#53bde0",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(2).webp?v=1614997108458"
  },
  {
    type: "electric",
    supereffective: ["water", "flying"],
    noteffective: ["electric", "grass", "dragon"],
    noeffect: "ground",
    color: "#f5f17f",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(3).webp?v=1614997113388"
  },
  {
    type: "grass",
    supereffective: ["water", "ground", "rock"],
    noteffective: ["fire", "grass", "poison", "flying", "bug"],
    noeffect: null,
    color: "#90db65",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(4).webp?v=1614997118082"
  },
  {
    type: "ice",
    supereffective: ["grass", "ground", "flying", "dragon"],
    noteffective: ["fire", "water", "ice", "steel"],
    noeffect: null,
    color: "#9bf1f2",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(10).gif?v=1615777870943"
  },
  {
    type: "fighting",
    supereffective: ["normal", "ice", "rock", "dark", "steel"],
    noteffective: ["poison", "flying", "psychic", "bug"],
    noeffect: "ghost",
    color: "#c28638",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(6).webp?v=1614997128914"
  },
  {
    type: "poison",
    supereffective: ["grass", "fairy"],
    noteffective: ["poison", "ground", "rock", "ghost"],
    noeffect: "steel",
    color: "#8f3eb8",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(7).webp?v=1614997133395"
  },
  {
    type: "ground",
    supereffective: ["fire", "electric", "poison", "rock", "steel"],
    noteffective: ["grass", "bug"],
    noeffect: "flying",
    color: "#d4c283",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(8).webp?v=1614997137972"
  },
  {
    type: "flying",
    supereffective: ["grass", "fighting", "bug"],
    noteffective: ["electric", "rock", "steel"],
    noeffect: null,
    color: "#b8b8f5",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(9).webp?v=1614997144395"
  },
  {
    type: "psychic",
    supereffective: ["fighting", "poison"],
    noteffective: ["psychic", "steel"],
    noeffect: "dark",
    color: "#f584ad",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(10).webp?v=1614997147519"
  },
  {
    type: "bug",
    supereffective: ["grass", "psychic", "dark"],
    noteffective: [
      "fire",
      "fighting",
      "poison",
      "flying",
      "ghost",
      "steel",
      "fairy"
    ],
    noeffect: null,
    color: "#b0c27e",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(11).webp?v=1614997151711"
  },
  {
    type: "rock",
    supereffective: ["fire", "ice", "flying", "bug"],
    noteffective: ["fighting", "ground", "steel"],
    noeffect: null,
    color: "#807062",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy.gif?v=1614997211283"
  },
  {
    type: "ghost",
    supereffective: ["psychic", "ghost"],
    noteffective: ["dark"],
    noeffect: "normal",
    color: "#93899c",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(12).webp?v=1614997186702"
  },
  {
    type: "dragon",
    supereffective: ["dragon"],
    noteffective: ["steel"],
    noeffect: "fairy",
    color: "#4d29c4",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(7).gif?v=1615852115547"
  },
  {
    type: "dark",
    supereffective: ["psychic", "ghost"],
    noteffective: ["fighting", "dark", "fairy"],
    noeffect: null,
    color: "#454547",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(5).gif?v=1615777059060"
  },
  {
    type: "steel",
    supereffective: ["ice", "rock", "fairy"],
    noteffective: ["fire", "water", "electric", "steel"],
    noeffect: null,
    color: "#919199",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(15).webp?v=1614997205584"
  },
  {
    type: "fairy",
    supereffective: ["fighting", "dragon", "dark"],
    noteffective: ["fire", "poison", "steel"],
    noeffect: null,
    color: "#fcbdff",
    animation:
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fgiphy%20(16).webp?v=1614997207172"
  }
];

var enemy_array = andre;
var current_enemy = andre[0];
var current_ally = playerTeam[0];
var current_elite = "Andre";

function display(item, index, arr) {
  var newdiv = document.createElement("DIV");
  newdiv.setAttribute("id", "newdiv");
  newdiv.style.padding = "1%";
  document.getElementById("prep3").appendChild(newdiv);
  var pokeimage = document.createElement("IMG");
  pokeimage.style.height = "10vh";
  pokeimage.style.width = "10vh";
  pokeimage.setAttribute("src", arr[index].img);
  newdiv.innerHTML += "<br>" + (index + 1) + "." + arr[index].name + "<br>";
  newdiv.appendChild(pokeimage);
}

function quote() {
  window.scrollTo(0, 0);
  var y = document.getElementsByTagName("BODY")[0];
  var x = document.getElementById("intro");
  play("encounter");
  if (current_elite === "Andre") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F118535.jpg?v=1614975819765')";
    x.style.backgroundColor = "#89CFF0";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2FPkmnTrainer_000.png?v=1609791576529"
    );
    x.innerHTML =
      "<h3> Greetings I am Andre, the first out of the 4 you will face but certainly not the weakest. I specialize in solely water type Pokemon. Why you may ask? I believe that water is graceful and elegant.. and truly beautiful.  I was raised on the coastline where i interacted with these beautiful water type Pokemon for years, and now I am an expert in training and communicating with them. We are in harmony, and theres no way you'll beat us! </h3>";
  } else if (current_elite == "Keisha") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F3119409.jpg?v=1615777950115')";
    x.style.backgroundColor = "#C489F0";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy.png?v=1609791581817"
    );
    x.innerHTML =
      "<h3> Hi challenger! My names Keisha~ the cutest and youngest elite member! I am a master of psychic Pokemon! Ghost type freaks me out, and fairy type is just way tooo dainty for a girl like me! Psychic Pokemon- is a perfect blend of power, intelligence and beauty! I was a challenger last year, however I got overtaken. So by joining the Elite four I hope that I can prove that I am worthy of being the champion- I wont let u get in my way! </h3>";
  } else if (current_elite == "Andy") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F203198.jpg?v=1615851603518')";
    x.style.backgroundColor = "#C7AA74";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski.png?v=1609791579445"
    );
    x.innerHTML =
      "<h3>WOah hey! way to interrupt my workout sess! the names Andy, an expert with the powerful rock Pokemon. Not only are rock Pokemon the perfect fitness buddies, but I admire how protective they are. If you beat Andre and Keisha that means that you really have potential! So, not to set the bar high, but I am expecting the best battle out of you!</h3>";
  } else if (current_elite == "Mona") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F1Tl2iQk.png?v=1615921062843')";
    x.style.backgroundColor = "#7385F8";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fbaron.png?v=1609791567849"
    );
    x.innerHTML =
      "<h3>Greetings " +
      name +
      "! I see that you have made it this far, which is amazing! My name is Mona. I have the most experience on the Elite team, having been here for 3 years now, and thats why I am the very last one you shall challenge- save the best for last! I am sooooo pumped to finally battle someone, so lets get this party started with my beautiful and fierce dragon Pokemon! Prove to me that your worthy to become the new champion!";
  } else if (current_elite == "Jakey") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F34363.jpg?v=1615922975718')";
    x.style.backgroundColor = "white";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fjakey.png?v=1621113534690"
    );
    x.innerHTML =
      "<h3>Greetings " +
      name +
      ", I am Jakey, the current champion of the Eula Region! <br> I have been the Champion of the region for a year now, and not a single challenger has been able to beat me yet. My Pokemon has been raised with love and care, and I have been able to excell through the strong trust and love I have established with them. Will you be the first one to beat our power of friendship? Let's find out! </h3>";
  }
  var challenge = document.createElement("BUTTON");
  challenge.innerHTML = "Challenge";
  challenge.onclick = function() {
    document.getElementById("btn_click").play();
    erase();
    x.style.visibility = "hidden";
    play(current_elite);
    battle(enemy_array);
  };
  x.appendChild(image);
  x.innerHTML += "<br>";
  x.appendChild(challenge);
}

function play(x) {
  audio.pause();
  audio.currentTime = 0;
  if (x === "start") {
    audio = document.getElementById("start");
  } else if (x == "victory") {
    audio = document.getElementById("victory");
  } else if (x == "Andre") {
    audio = document.getElementById("s_theme");
  } else if (x == "Keisha") {
    audio = document.getElementById("m_theme");
  } else if (x == "Mona") {
    audio = document.getElementById("b_theme");
  } else if (x == "Andy") {
    audio = document.getElementById("o_theme");
  } else if (x == "encounter") {
    audio = document.getElementById("encounter");
  }
  audio.volume = 0.2;
  if (x == "Jakey") {
    audio = document.getElementById("t_theme");
    audio.volume = 0.3;
  }

  audio.play();
}

function load_hp(playermon, enemymon) {
  var bar1 = document.getElementById("hpbar1");
  bar1.style.visibility = "visible";
  var bar2 = document.getElementById("hpbar2");
  bar2.style.visibility = "visible";
  if (enemymon.atk > enemymon.spa) {
    bar2.style.borderColor = "red";
  } else if (enemymon.spa > enemymon.atk) {
    bar2.style.borderColor = "blue";
  }
  if (playermon.atk > playermon.spa) {
    bar1.style.borderColor = "red";
  } else if (playermon.spa > playermon.atk) {
    bar1.style.borderColor = "blue";
  }

  var hp1 = document.getElementById("hp1");
  var hp2 = document.getElementById("hp2");
  var player_width = (playermon.hp / playermon.total_hp) * 100;
  var enemy_width = (enemymon.hp / enemymon.total_hp) * 100;
  hp_color(playermon, hp1);
  hp_color(enemymon, hp2);
  document.getElementById("hp1").innerHTML = Math.round(playermon.hp);
  hp1.style.width = player_width.toString() + "%";
  document.getElementById("hp2").innerHTML = Math.round(enemymon.hp);
  hp2.style.width = enemy_width.toString() + "%";
}

function hp_color(mon, bar) {
  if (mon.hp < mon.total_hp / 5) {
    bar.style.backgroundColor = "red";
  } else if (mon.hp < mon.total_hp / 2) {
    bar.style.backgroundColor = "#f5e084";
    bar.style.color = "black";
  } else {
    bar.style.backgroundColor = "green";
  }
}

function movesfirst(playermon, enemymon) {
  if (playermon.spe >= enemymon.spe) {
    playermove(playermon, enemymon);
  } else {
    setTimeout(function() {
      attackPlayer(enemyturn(enemymon, playermon), enemymon, playermon);
    }, 4000);
  }
}

function reset_hp() {
  playerTeam.forEach(function(x) {
    x.hp = x.total_hp;
  });
}

function reset_enemy_hp(arr) {
  arr.forEach(function(x) {
    x.hp = x.total_hp;
  });
}
function battle(arr) {
  document.getElementById("battle").style.visibility = "visible";
  document.getElementById("prepare").style.visibility = "visible";
  reset_hp();
  var y = document.getElementsByTagName("BODY")[0];
  var x = document.getElementById("prepare");
  if (arr == andre) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ficon1.png?v=1610218688331";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F3.png?v=1609905007042')";
  } else if (arr == keisha) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy%20(2).png?v=1615777814479";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F7.png?v=1609905018553')";
  } else if (arr == andy) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski%20(4).png?v=1615852335090";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F2.png?v=1609905003589')";
  } else if (arr == mona) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fbaron%20(3).png?v=1615860497532";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F6.png?v=1609905014525')";
  } else if ((arr = jakey)) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fjakey22.png?v=1621113906537";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2FDS%20DSi%20-%20Pokemon%20Platinum%20-%20Battle%20Backgrounds%20(2).png?v=1615922984040')";
  }
  y.style.backgroundColor = "white";
  y.style.backgroundRepeat = "no-repeat";
  y.style.backgroundSize = "cover";
  x.style.backgroundRepeat = "no-repeat";
  x.style.backgroundSize = "cover";
  document.getElementById("battlemessage").innerHTML =
    current_elite +
    " sent out " +
    arr[0].name +
    "!<br>You sent out " +
    playerTeam[0].name;
  var sound1 = new Audio(playerTeam[0].sound);
  var sound2 = new Audio(arr[0].sound);
  setTimeout(function() {
    if (newimage == "no") {
      document.getElementById("image2").style.visibility = "visible";
    }
    enemypokemon(arr[0]);
    sound2.play();
  }, 1000);
  setTimeout(function() {
    //   document.getElementById("image1").style.visibility = "visible";
    if (newimage == "no") {
      document.getElementById("image1").style.visibility = "visible";
    }
    userpokemon(playerTeam[0]);
    sound1.play();
  }, 4000);
  setTimeout(function() {
    load_hp(playerTeam[0], arr[0]);
    movesfirst(playerTeam[0], arr[0]);
  }, 6000);
}

function playermove(playermon, enemymon) {
  document.getElementById("battlemessage").innerHTML +=
    "!<br> What will " + playermon.name + " do?<br>";
  var switchout = document.createElement("BUTTON");
  switchout.className += "movebtn";
  switchout.innerHTML = "Switch Pokemon";
  document.getElementById("otheroptions").appendChild(switchout);
  switchout.onclick = function() {
    document.getElementById("btn_click").play();
    playerswitch();
    document.getElementById("battlebuttons").innerHTML = "";
    document.getElementById("otheroptions").innerHTML = "";
  };
  Object.values(playermon.moves).forEach(function(item) {
    var move = document.createElement("BUTTON");
    move.classList.add("movebtn");

    typeList.forEach(function(x) {
      if (x.type == item[4]) {
        move.style.backgroundColor = x.color;
      }
    });

    if (item[3] == "atk") {
      move.style.borderColor = "red";
    } else {
      move.style.borderColor = "blue";
    }

    move.innerHTML = item[0];
    move.onclick = function() {
      document.getElementById("btn_click").play();
      attackEnemy(item, playermon, enemymon);
    };
    document.getElementById("battlebuttons").appendChild(move);
  });
}

function attackEnemy(move, playermon, enemymon) {
  document.getElementById("battlebuttons").innerHTML = "";
  document.getElementById("otheroptions").innerHTML = "";
  var battle = document.getElementById("battlemessage");
  var hit = new Boolean(true);
  battle.innerHTML = playermon.name + " used " + move[0] + "! ";
  if (move[2] != 1) {
    var miss = Math.random();
    if (miss >= move[2]) {
      hit = false;
      battle.innerHTML += playermon.name + " missed...";
    }
  }
  if (hit == true) {
    var atkdmg;
    if (move[3] == "atk") {
      atkdmg = playermon.atk / enemymon.def;
    } else {
      atkdmg = playermon.spa / enemymon.spd;
    }
    var random = Math.floor(Math.random() * 15 + 85) / 100;
    var stab = 1;
    if (move[4] == playermon.type) {
      stab = 1.25;
    }
    var critical = Math.random();
    if (critical < 0.0625) {
      battle.innerHTML += " Critical hit! ";
      critical = 1.75;
    } else {
      critical = 1;
    }
    var type = 1;
    typeList.forEach(function(item) {
      if (item.type == move[4]) {
        enemy_animation(item.animation);
        if (
          move[4] != "normal" &&
          item.supereffective.includes(enemymon.type)
        ) {
          type = 1.75;
          battle.innerHTML += "It is super effective! ";
        } else if (item.noteffective.includes(enemymon.type)) {
          type = 0.5;
          battle.innerHTML += "It is not very effective... ";
        } else if (item.noeffect == enemymon.type) {
          type = 0;
          battle.innerHTML +=
            "The enemy Pokemon appears to be immune to the attack. ";
        }
      }
    });
    var modifier = random * stab * critical * type;
    var damage =
      ((((2 * playermon.level) / 5) * move[1] * atkdmg) / 50 + 2) * modifier;
    var bar2 = document.getElementById("hp2");
    if (damage >= enemymon.hp) {
      bar2.style.width = "0%";
      bar2.style.transition = "width 3s";
      document.getElementById("hp2").innerHTML = 0;
      enemymon.hp = 0;
      setTimeout(function() {
        battle.innerHTML = enemymon.name + " fainted!";
        enemyswitch(playermon);
      }, 3000);
    } else {
      document.getElementById("hp2").innerHTML = Math.round(
        enemymon.hp - damage
      );
      var new_width = ((enemymon.hp - damage) / enemymon.total_hp) * 100;
      bar2.style.width = new_width.toString() + "%";
      bar2.style.transition = "width 3s";
      enemymon.hp -= damage;
      hp_color(enemymon, bar2);
      setTimeout(function() {
        attackPlayer(enemyturn(enemymon, playermon), enemymon, playermon);
      }, 4000);
    }
  } else {
    setTimeout(function() {
      attackPlayer(enemyturn(enemymon, playermon), enemymon, playermon);
    }, 4000);
  }
}

function attackPlayer(move, playermon, enemymon) {
  var battle = document.getElementById("battlemessage");
  var hit = new Boolean(true);
  battle.innerHTML = playermon.name + " used " + move[0] + "! ";
  if (move[2] != 1) {
    var miss = Math.random();
    if (miss >= move[2]) {
      hit = false;
      battle.innerHTML += playermon.name + " missed...";
    }
  }
  if (hit == true) {
    var atkdmg;
    if (move[3] == "atk") {
      atkdmg = playermon.atk / enemymon.def;
    } else {
      atkdmg = playermon.spa / enemymon.spd;
    }

    var random = Math.floor(Math.random() * 15 + 85) / 100;
    var stab = 1;
    if (move[4] == playermon.type) {
      stab = 1.25;
    }
    var critical = Math.random();
    if (critical < 0.0625) {
      battle.innerHTML += " Critical hit! ";
      critical = 1.75;
    } else {
      critical = 1;
    }
    var type = 1;
    typeList.forEach(function(item) {
      if (item.type == move[4]) {
        player_animation(item.animation);
        if (item.supereffective.includes(enemymon.type)) {
          type = 1.75;
          battle.innerHTML += "It is super effective! ";
        } else if (item.noteffective.includes(enemymon.type)) {
          type = 0.5;
          battle.innerHTML += "It is not very effective... ";
        } else if (item.noeffect == enemymon.type) {
          type = 0;
          battle.innerHTML +=
            "The enemy Pokemon appears to be immune to the attack... ";
        }
      }
    });
    var modifier = random * stab * critical * type;
    var damage =
      ((((2 * playermon.level) / 5) * move[1] * atkdmg) / 50 + 2) * modifier;
    var bar1 = document.getElementById("hp1");
    if (damage >= enemymon.hp) {
      bar1.style.width = "0%";
      bar1.style.transition = "width 3s";
      document.getElementById("hp1").innerHTML = 0;
      setTimeout(function() {
        battle.innerHTML = enemymon.name + " fainted!";
        enemymon.hp = 0;
        playerswitch();
      }, 3000);
    } else {
      document.getElementById("hp1").innerHTML = Math.round(
        enemymon.hp - damage
      );
      var new_width = ((enemymon.hp - damage) / enemymon.total_hp) * 100;
      bar1.style.width = new_width.toString() + "%";
      bar1.style.transition = "width 3s";
      enemymon.hp -= damage;
      hp_color(enemymon, bar1);
      playermove(enemymon, playermon);
    }
  } else {
    playermove(enemymon, playermon);
  }
}

function enemyturn(enemymon, playermon) {
  var num_moves = Object.keys(enemymon.moves).length;
  var random_move = Math.floor(Math.random() * num_moves);

  var move1 = enemymon.moves.m1;
  var move2;
  var move3;
  var move4;
  var effect_m1 = new Boolean(effectiveness(move1[4], playermon.type));

  var effect_m2 = new Boolean(false);
  var effect_m3 = new Boolean(false);
  var effect_m4 = new Boolean(false);

  if (num_moves == 4) {
    move2 = enemymon.moves.m2;
    move3 = enemymon.moves.m3;
    move4 = enemymon.moves.m4;
    effect_m2 = new Boolean(effectiveness(move2[4], playermon.type));
    effect_m3 = new Boolean(effectiveness(move3[4], playermon.type));
    effect_m4 = new Boolean(effectiveness(move4[4], playermon.type));
  } else if (num_moves == 3) {
    move2 = enemymon.moves.m2;
    move3 = enemymon.moves.m3;
    effect_m2 = new Boolean(effectiveness(move2[4], playermon.type));
    effect_m3 = new Boolean(effectiveness(move3[4], playermon.type));
  } else if (num_moves == 2) {
    move2 = enemymon.moves.m2;
    effect_m2 = new Boolean(effectiveness(move2[4], playermon.type));
  }

  while (true) {
    if (
      effect_m1 == true ||
      effect_m2 == true ||
      effect_m3 == true ||
      effect_m4 == true
    ) {
      while (true) {
        if (random_move == 0 && effect_m1 == true) {
          random_move = move1;
          break;
        } else if (random_move == 1 && effect_m2 == true) {
          random_move = move2;
          break;
        } else if (random_move == 2 && effect_m3 == true) {
          random_move = move3;
          break;
        } else if (random_move == 2 && effect_m4 == true) {
          random_move = move4;
          break;
        }
        random_move = Math.floor(Math.random() * num_moves);
      }
      break;
    } else if (playermon.def >= playermon.spf) {
      if (random_move == 0 && move1[3] == "spa") {
        random_move = move1;
        break;
      } else if (random_move == 1 && move2[3] == "spa") {
        random_move = move2;
        break;
      } else if (random_move == 2 && move3[3] == "spa") {
        random_move = move3;
        break;
      } else if (random_move == 3 && move4[3] == "spa") {
        random_move = move4;
        break;
      }
    } else if (playermon.spf > playermon.def) {
      if (random_move == 0 && move1[3] == "atk") {
        random_move = move1;
        break;
      } else if (random_move == 1 && move2[3] == "atk") {
        random_move = move2;
        break;
      } else if (random_move == 2 && move3[3] == "atk") {
        random_move = move3;
        break;
      } else if (random_move == 3 && move4[3] == "atk") {
        random_move = move4;
        break;
      }
    } else if (random_move == 0) {
      random_move = move1;
      break;
    } else if (random_move == 1) {
      random_move = move2;
      break;
    } else if (random_move == 2) {
      random_move = move3;
      break;
    } else {
      random_move = move4;
      break;
    }
    random_move = Math.floor(Math.random() * num_moves);
  }

  return random_move;
}
function display2(index, arr) {
  var pokeimage = document.createElement("IMG");
  pokeimage.setAttribute("src", arr[index].img);
  document.getElementById("battlemessage").innerHTML +=
    "<br>" + (index + 1) + "." + arr[index].name + "<br>";
  document.getElementById("battlemessage").appendChild(pokeimage);
}

function playerswitch() {
  var dead = 0;
  var alive = [];
  playerTeam.forEach(function(item, index) {
    if (item.hp == 0) {
      dead++;
    } else {
      alive.push(index);
    }
  });
  if (dead == playerTeam.length) {
    document.getElementById("battlemessage").innerHTML =
      "You are out of Pokemon... You have lost the battle";
    if (chances > 0 && current_enemy != "Andre") {
      document.getElementById("battlemessage").innerHTML +=
        ". Try again from previous elite? You have " +
        chances +
        " chances left. Click restart at the bottom of the page to restart <br>";
      var tryagain = document.createElement("BUTTON");
      tryagain.innerHTML = "Try again";
      document.getElementById("battlemessage").appendChild(tryagain);
      var arr = andre;
      var enemy = "Andre";
      if (current_enemy == "Andy") {
        arr = keisha;
        enemy = "Keisha";
      } else if (current_enemy == "Mona") {
        arr = andy;
        enemy = "Andy";
      } else if (current_enemy == "Jakey") {
        arr = mona;
        enemy = "Mona";
      }
      tryagain.onclick = function() {
        reset_enemy_hp(enemy_array);
        document.getElementById("prepare").style.visibility = "hidden";
        document.getElementById("hpbar1").style.visibility = "hidden";
        document.getElementById("hpbar2").style.visibility = "hidden";
        document.getElementById("battle").style.visibility = "hidden";
        document.getElementById("image2").style.visibility = "hidden";
        document.getElementById("image1").style.visibility = "hidden";
        document.getElementById("image2").src = "";
        document.getElementById("image1").src = "";
        newimage = "no";
        enemy_array = arr;
        current_enemy = arr[0];
        current_ally = playerTeam[0];
        current_elite = enemy;
        chances--;
        window.scrollTo(0, 0);
        var x = document.getElementById("intro");
        x.style.visibility = "visible";
        x.style.color = "black";
        reset_enemy_hp(enemy_array);
        erase();
        quote(current_elite);
      };
    } else {
      document.getElementById("battlemessage").innerHTML +=
        "You are out of chances... You have been defeated...";
    }
  } else {
    document.getElementById("battlemessage").innerHTML +=
      " You have " +
      (playerTeam.length - dead) +
      " Pokemon left<br>Please enter the number of the pokemon you would like to send out next";
    document.getElementById("switchdead").style.visibility = "visible";
    alive.forEach(function(item) {
      display2(item, playerTeam);
    });
  }
}

function enemyswitch(playermon) {
  var dead = 0;
  var alive = [];
  enemy_array.forEach(function(item, index) {
    if (item.hp == 0) {
      dead++;
    } else {
      alive.push(index);
    }
  });
  if (dead == enemy_array.length) {
    document.getElementById("battlemessage").innerHTML +=
      "<br>" +
      current_elite +
      " is out of pokemon... " +
      name +
      " has won!<br>";
    play("victory");
    var proceed = document.createElement("BUTTON");
    proceed.innerHTML = "Proceed";
    proceed.onclick = function() {
      document.getElementById("prepare").style.visibility = "hidden";
      document.getElementById("hpbar1").style.visibility = "hidden";
      document.getElementById("hpbar2").style.visibility = "hidden";
      document.getElementById("battle").style.visibility = "hidden";
      document.getElementById("image2").style.visibility = "hidden";
      document.getElementById("image1").style.visibility = "hidden";
      document.getElementById("image2").src = "";
      document.getElementById("image1").src = "";
      newimage = "no";
      add_text(current_elite);
    };
    document.getElementById("battlemessage").appendChild(proceed);
  } else {
    current_enemy = enemy_array[alive[0]];
    var y = document.getElementsByTagName("BODY")[0];
    document.getElementById("battlemessage").innerHTML +=
      "<br>" + enemy_array[alive[0]].name + " was sent out!";
    var sound2 = new Audio(current_enemy.sound);
    document.getElementById("image2").src = enemy_array[alive[0]].img;
    enemypokemon(enemy_array[alive[0]]);
    sound2.play();
    load_hp(playermon, enemy_array[alive[0]]);
    movesfirst(playermon, enemy_array[alive[0]]);
  }
}

function submit_choice() {
  document.getElementById("switchdead").style.visibility = "hidden";
  var choice = document.getElementById("choice").value - 1;
  current_ally = playerTeam[choice];
  document.getElementById("battlemessage").innerHTML =
    "You sent out " + playerTeam[choice].name + "!";
  var sound1 = new Audio(playerTeam[choice].sound);
  sound1.play();
  document.getElementById("image1").src = playerTeam[choice].reverse;
  userpokemon(playerTeam[choice]);
  load_hp(current_ally, current_enemy);
  setTimeout(function() {
    attackPlayer(
      enemyturn(current_enemy, current_ally),
      current_enemy,
      current_ally
    );
  }, 3000);
}

function submit_switch() {
  document.getElementById("switchdead").style.visibility = "hidden";
  var choice = document.getElementById("choice").value - 1;
  document.getElementById("battlemessage").innerHTML =
    "You sent out " + playerTeam[choice].name + "!";
  current_ally = playerTeam[choice];
  load_hp(current_ally, current_enemy);
  var sound1 = new Audio(playerTeam[choice].sound);
  document.getElementById("image1").src = playerTeam[choice].reverse;
  userpokemon(playerTeam[choice]);
  sound1.play();
  movesfirst(current_ally, current_enemy);
}

function effectiveness(movetype, enemytype) {
  var result;
  typeList.forEach(function(item) {
    if (item.type == movetype) {
      if (item.supereffective.includes(enemytype)) {
        result = true;
      } else {
        result = false;
      }
    }
  });
  return result;
}

function userpokemon(playermon) {
  image.setAttribute("src", playermon.reverse);
  document.getElementById("prepare").appendChild(image);
  image.style.height = "15vh";
  image.style.width = "15vh";
  image.style.position = "absolute";
  image.style.bottom = "2vh";
  image.style.left = "12vh";
}

function player_animation(x) {
  var img = document.createElement("IMG");
  img.setAttribute("src", x);
  img.style.visibility = "visible";
  document.getElementById("prepare").appendChild(img);
  img.style.height = "15vh";
  img.style.width = "15vh";
  img.style.position = "absolute";
  img.style.bottom = "2vh";
  img.style.left = "12vh";
  setTimeout(function() {
    img.style.visibility = "hidden";
  }, 3000);
}

function enemy_animation(x) {
  var img = document.createElement("IMG");
  img.setAttribute("src", x);
  img.style.visibility = "visible";
  document.getElementById("prepare").appendChild(img);
  img.style.height = "15vh";
  img.style.width = "15vh";
  img.style.position = "absolute";
  img.style.top = "14vh";
  img.style.right = "7vh";
  setTimeout(function() {
    img.style.visibility = "hidden";
  }, 3000);
}

function enemypokemon(enemymon) {
  image2.setAttribute("src", enemymon.img);
  document.getElementById("prepare").appendChild(image2);
  image2.style.height = "15vh";
  image2.style.width = "15vh";
  image2.style.position = "absolute";
  image2.style.top = "14vh";
  image2.style.right = "7vh";
}

function add_text(elite) {
  window.scrollTo(0, 0);
  var x = document.getElementById("intro");
  x.style.visibility = "visible";
  x.style.color = "black";
  var image = document.createElement("IMG");
  if (elite == "Andre") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2FPkmnTrainer_000.png?v=1609791576529"
    );
    x.innerHTML =
      " <h3> Wow, congratulations " +
      name +
      "! What a fun an exiting battle! Seems like you were capable of breaking my jaws, an act not many trainers are capable of! Though I am only the first out of the four you will face. I wish you luck on your next battle </h3>";
    enemy_array = keisha;
    current_enemy = keisha[0];
    current_ally = playerTeam[0];
    current_elite = "Keisha";
  } else if (elite == "Keisha") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy.png?v=1609791581817"
    );
    x.innerHTML =
      "<h3> What??? This is impossible. I guess I am not so suited to be champion after all! Your battlestyle is quite impressive, I guess you have my permission to move on.. If you beat me, you can definetly beat the champion! </h3>";
    enemy_array = andy;
    current_enemy = andy[0];
    current_ally = playerTeam[0];
    current_elite = "Andy";
  } else if (elite == "Andy") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski.png?v=1609791579445"
    );
    x.innerHTML =
      "<h3> Oh boy am I sweating!!! Haven't had such an intense battle in a while! Even my dear Tyra couldn't prevent my defeat, haha! You did amazing there, so represent this victory by defeating the last elite and the champion! And hopefully I can challenge you again! </h3>";
    enemy_array = mona;
    current_enemy = mona[0];
    current_ally = playerTeam[0];
    current_elite = "Mona";
  } else if (elite == "Mona") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fbaron.png?v=1609791567849"
    );
    x.innerHTML =
      "<h3> Oh my gosh that was exhilarating! You absolutely blew me and my dragons out! I haven't encountered such a phenomenal opponent in a while, which makes you, " +
      name +
      " a very worthy candidate of becoming the next champion! So go on, good luck on your last battle, show the champion what you've got! </h3>";
    enemy_array = jakey;
    current_enemy = jakey[0];
    current_ally = playerTeam[0];
    current_elite = "Jakey";
  } else if (elite == "Jakey") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fjakey.png?v=1621113534690"
    );
    current_elite = "done";
    x.innerHTML =
      "<h3> Congratulations " +
      name +
      "...  You really proved to me why you should hold the title of Champion of Eula. It appears that the bond between you and your Pokemon is even stronger than mine! Don't you worry about keeping your responsibilites as champion however, because I'll be back to reclaim my position. I will see you again, and don't let me down! </h3>";
  }
  x.appendChild(image);
  if (current_elite != "done") {
    x.innerHTML += "<br>";
    var next_button = document.createElement("BUTTON");
    next_button.innerHTML = "Proceed";
    document.getElementById("intro").appendChild(next_button);
    next_button.onclick = function() {
      erase();
      quote(current_elite);
    };
  }
}
function erase() {
  document.getElementById("intro").innerHTML = null;
  var x = document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = "#457ADA";
}
