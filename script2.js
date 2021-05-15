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
  tummymons.forEach(display_button);
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
      playerTeam.push(tummymons[item]);
    }
  });
  if (playerTeam.length == 0) {
    document.getElementById("prep1").innerHTML =
      "Invalid entry, please re enter your team of 6 tummymon:";
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
      "<h3> Now we are all set! If you haven't done a tummymon battle before, heres a brief intro for you. There are 18 different types of Tummymon, you can use as a reference: <br /><center>" +
      "</center><br />In order to win, it is best that you keep in mind what type the opponents tummymon are and whether you are strong, weak or balanced by that type! Each of the elite 4 has a team of 6 strong pokemon, that fall in 3 or less types. However it is not that simple. In Tummymon,   you have two different types of offense. Physical attack (atk), and Special Attack (spa). All of your Tummymons moves fall under one or the other. This is particularly useful to know, because some tummymon have lower special defense and some have lower physical defense. Some tummymon have higher special attack, and some have higher physical attack! You will also find that the opponent's tummymon moves before yours, and thats because their speed stat is higher. And some tummymon have higher health points than others, which can make them harder to defeat. <br><br> You can tell if your Pokemon has a higher atk or special atk stat by looking at your hpbar border, likewise your opponents. Higher atkstat is red- higher spa stat is blue. White is equal. Your moves will havea red or blue outline indicating if its a ATK or SPA move, respectively.Thats a quick intro on how this game works! After you beat all 4, you can move on to challenge the Champion of the Tummysa region. <br /></h3><h2>  Now go on and press the Challenge button! I have great confidence that  you will succeed!</h2>";
    document.getElementById("finalstep").appendChild(challenge);
  }
}

var steel_moves = {
  // metal_burst: ["Metal Burst", 90, 1, "atk", "steel", 16],
  iron_head: ["Iron Head", 80, 1, "atk", "steel", 24, "flinch", null, 0.3, null, "inflicts damage and has a 30% chance of causing the target to flinch."],
  flash_cannon: ["Flash Cannon", 80, 1, "spa", "steel", 16, "spd", "target", 0.1, 1, "does damage and has a 10% chance of lowering the target's Special Defense by one stage."],
  meteor_mash: ["Meteor Mash", 90, 0.9, "atk", "steel", 16, "atk", "user", 0.2, 1, "inflicts damage and has a 20% chance of raising the user's Attack stat by one stage."],
  bullet_punch: ["Bullet Punch", 70, 1, "atk", "steel", 48, "prio", null, null, null, "inflicts damage. It has a priority of +1, so is used before all moves that do not have increased priority."],
  iron_tail: ["Iron Tail", 100, 0.75, "atk", "steel", 24, "def", "target", 0.3, null, "inflicts damage and has a 30% chance of lowering the target's Defense stat by one stage."],
  steel_wing: ["Steel Wing", 70, 0.9, "atk", "steel", 40, "def", "user", 0.1, 1, "inflicts damage and has a 10% chance of raising the user's Defense by one stage."],
  magnet_bomb: ["Magnet Bomb", 70, 1, "spa", "steel", 32, null, null, null, null, "inflicts damage and has no secondary effects."],
  // m3: ["Heavy Slam", 120, 1, "atk", "steel", 16],
};

var rock_moves = {
 // ancient_power: ["Ancient Power", 70, 1, "spa", "rock", 8, ["atk, "spa] "inflicts damage and has a 10% chance of raising the user's Attack, Defense, Special Attack, Special Defense, and Speed by one stage each."],
 // rock_blast: ["Rock Blast", 75, 1, "atk", "rock", 16],
  stone_edge: ["Stone Edge", 100, 0.8, "atk", "rock", 8, "crit", null, null, null, "deals damage and has an increased critical hit ratio."],
  rock_slide: ["Rock Slide", 75, 0.9, "atk", "rock", 16, "flinch", null, 0.3, null, "inflicts damage and has a 30% chance of causing the target to flinch."],
  power_gem: ["Power Gem", 80, 1, "spa", "rock", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  diamond_storm: ["Diamond Storm", 100, 0.95, "atk", "rock", 8, "def", "user", 0.5, 2, "deals damage and has a 50% chance to raise the user's Defense by two stages"],
  head_smash: ["Head Smash", 150, 0.8, "atk", "rock", 8, "recoil", null, 0.5, null, "inflicts damage, and the user receives recoil damage equal to ½ of the damage done to the target."]
};

var ground_moves = {
  scorching_sands: ["Scorching Sands", 70, 1, "spa", "ground", 16, "burn", null, 0.3, null, "inflicts damage and has a 30% chance of burning the target."],
  earthquake: ["Earthquake", 100, 1, "atk", "ground", 16, null, null, null, null, "inflicts damage and has no secondary effects."],
  thousand_arrows: ["Thousand Arrows", 90, 1, "atk", "ground", 16, null, null, null, null, "inflicts damage and has no secondary effects."],
  earth_power: ["Earth Power", 90, 1, "spa", "ground", 16, "spd", "target", 0.1, 1, "inflicts damage, and has a 10% chance of lowering the target's Special Defense stat by one stage."],
  high_horsepower: ["High Horsepower", 95, 0.95, "atk", "ground", 16, null, null, null, null, "deals damage and has no secondary effect."],
  hidden_power_ground: ["Hidden Power", 60, 1, "atk", "ground", null, null, null, null, "inflicts damage and has no secondary effects."],
  drill_run: ["Drill Run", 80, 0.95, "atk", "ground", 16, "crit", null, null, null, "deals damage and has an increased critical hit ratio."],
};

var flying_moves = {
  dual_wingbeat: ["Dual Wingbeat", 80, 0.9, "atk", "flying", 16, null, null, null, null, "inflicts damage and has no secondary effects."],
  acrobatics: ["Acrobatics", 110, 1, "atk", "flying", null, null, null, null, "inflicts damage and has no secondary effects."],
  brave_bird: ["Brave Bird", 120, 1, "atk", "flying", 24, "recoil", null, 0.333, null, "inflicts damage, and the user receives recoil damage equal to ⅓ of the damage done to the target."],
  air_slash: ["Air Slash", 75, 0.95, "atk", "flying", 24, "flinch", null, 0.3, null, "inflicts damage and has a 30% chance of causing the target to flinch."],
  hurricane: ["hurricane", 110, 0.7, "atk", "flying", 16, "confu", null, 0.3, null, "deals damage and has a 30% chance of confusing the target."],
  drill_peck: ["Drill Peck", 80, 1, "atk", "flying", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  bounce: ["Bounce", 85, 0.85, "atk", "flying", 8, "para", null, 0.3, null, "deals damage and has a 30% chance of paralyzing the target."],
};

var ice_moves = {
  ice_beam: ["Ice Beam",90, 1, "spa", "ice", 16, "freeze", null, 0.1, null, "inflicts damage and has a 10% chance of freezing the target."],
  ice_shard: ["Ice Shard", 70, 1, "atk", "ice", 32, "prio", null, null, null, "inflicts damage. It has a priority of +1, so is used before all moves that do not have increased priority."],
  icicle_crash: ["Icicle Crash", 85, 0.9, "atk", "ice", "flinch", null, 0.3, null, "inflicts damage and has a 30% chance of causing the target to flinch."],
  hidden_power_ice: ["Hidden Power Ice", 60, 1, "spa", "ice", null, null, null, null, "inflicts damage and has no secondary effects."],
  blizzard: ["Blizzard", 110, 0.8, "spa", "ice", 8, "freeze", null, 0.1, null, "does damage and has a 10% chance of freezing the target."],
  ice_punch: ["Ice Punch", 75, 1, "atk", "ice", 24, "freeze", null, 0.1, null, "does damage and has a 10% chance of freezing the target."]
};

var water_moves = {
  aqua_jet: ["Aqua Jet", 70, 1, "atk", "water", 32, "prio", null, null, null, "inflicts damage. It has a priority of +1, so is used before all moves that do not have increased priority."],
  hydro_pump: ["Hydro Pump", 110, 0.8, "spa", "water", 8, null, null, null, null, "inflicts damage and has no secondary effect."],
  liquidation: ["Liquidation", 85, 1, "atk", "water", 16, "spd", "target", 0.2, 1, "does damage and has a 20% chance of lowering the target's Defense stat by one stage."],
  waterfall: ["Waterfall", 80, 1, "spa", "water", 24, null, null, null, null, "does damage and has no secondary effect."],
  scald: ["Scald", 80, 1, "spa", "water", 24, "burn", null, 0.3, null, "inflicts damage and has a 30% chance of burning the target. Thaws the user if frozen, and thaws the target if frozen."],
  flip_turn: ["Flip Turn", 70, 1, "atk", "water", 32, "switch", null, null, null, "deals damage and then switches the user out. The user will not be switched out if the user is the only Pokémon in the party that is able to battle"],
  surf: ["Surf", 90, 1, "spa", "water", 24, null, null, null, null, "inflicts damage and has no secondary effect."],
  water_pulse: ["Water Pulse", 70, 1, "spa", "water", 32, "confu", null, 0.2, null, "inflicts damage and has a 20% chance of confusing the target."],
  sparkling_aria: ["Sparkling Aria", 90, 1, "spa", "water", 16, null, null, null, null, "inflicts damage and has no secondary effect."]
};

var bug_moves = {
  x_scissor: ["X-Scissor", 80, 1, "atk", "bug", 24, null, null, null, null, "deals damage and has no secondary effect."],
  leech_life: ["Leech Life", 80, 1, "atk", "bug", 16, "heal", null, 0.5, null, "inflicts damage, and 50% of the damage dealt to the target is restored to the user as HP"],
  u_turn: ["U-turn", 70, 1, "atk", "bug", 32, "switch", null, null, null, "deals damage and then switches the user out. The user will not be switched out if the user is the only Pokémon in the party that is able to battle"],
  bug_buzz: ["Bug Buzz", 90, 1, "spa", "bug", 16, "spd", "target", 0.1, 1, "does damage and has a 10% chance of lowering the target's Special Defense by one stage."],
  signal_beam: ["Signal Beam", 75, 1, "spa", "bug", 24, "confu", "target", 0.1, 1, "deals damage and has a 10% chance of confusing the target."],
  megahorn: ["Megahorn", 120, 0.85, "atk", "bug", 16, null, null, null, null, "deals damage and has no secondary effect."]
};
    
var grass_moves = {
  leaf_blade: ["Leaf Blade", 90, 1, "atk", "grass", 24, "crit", null, null, null, "inflicts damage and has an increased critical hit ratio."],
  wood_hammer: ["Wood Hammer", 120, 1, "atk", "grass", 24, "recoil", null, 0.333, null, "inflicts damage, and the user receives recoil damage equal to ⅓ of the damage done to the target."],
  leaf_storm: ["Leaf Storm", 130, 0.9, "spa", "grass", 8, "spa", "user", 1, -2, "deals damage, and lowers the user's Special Attack by two stages."],
  seed_bomb: ["Seed Bomb", 80, 1, "atk", "grass", 24, null, null, null, null, "inflicts damage and has no secondary effect."],
  seed_flare: ["Seed Flare", 120, 0.85, "spa", "grass", 8, "spd", "target", 0.4, 2, "inflicts damage and has a 40% chance of lowering the target's Special Defense stat by two stages."],
  solar_beam: ["Solar Beam", 100, 1, "spa", "grass", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  power_whip: ["Power Whip", 120, 0.85, "atk", "grass", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  energy_ball: ["Energy Ball", 90, 1, "spa", "grass", 16, "spd", "target", 0.1, 1, "damages the opponent and has a 10% chance of lowering the target's Special Defense by one stage."],
  giga_drain: ["Giga Drain", 75, 1, "spa", "grass", 16, "heal", null, 0.5, null, "inflicts damage, and 50% of the damage dealt to the target is restored to the user as HP."],
  hidden_power_grass: ["Hidden Power Grass", 60, 1, "spa", "grass", 24, null, null, null, null, "inflicts damage and has no secondary effects."],
  apple_acid: ["Apple Acid", 80, 1, "spa", "grass", 16, "spd", "target", 1, 1, "inflicts damage and lowers the target's Special Defense stat by one stage."]
  //grass_knot: ["Grass Knot", 90, 1, "spa", "grass", 32],
};

var fire_moves = {
  fire_lash: ["Fire Lash", 80, 1, "atk", "fire", 24, "def", "target", 1, 1,"inflicts damage and lowers the target's Defense stat by one stage."],
  lava_plume: ["Lava Plume", 80, 1, "spa", "fire", 24, "burn", null, 0.3, null, "inflicts damage and has a 30% chance of burning the target."],
  fire_blast: ["Fire Blast", 110, 0.85, "spa", "fire", 8, "burn", null, 0.3, null, "inflicts damage and has a 30% chance of burning the target."],
  flare_blitz: ["Flare Blitz", 120, 1, "atk", "fire", 24, "recoil", null, 0.333, null,"inflicts damage, and the user receives recoil damage equal to ⅓ of the damage done to the target. Has a 10% chance of burning the target. If the user is frozen, Flare Blitz will thaw the user out."],
  flamethrower: ["Flamethrower", 90, 1, "spa", "fire", 24, "burn", null, 0.1, null, "does damage and has a 10% chance of burning the target."],
  fire_punch: ["Fire Punch", 75, 1, "atk", "fire", 24, "burn", null, 0.1, null, "does damage and has a 10% chance of burning the target."],
  heat_wave: ["Heat Wave", 95, 0.9, "spa", "fire", 16, "burn", null, 0.1, null, "does damage and has a 10% chance of burning the target."],
  blaze_kick: ["Blaze Kick", 85, 0.9, "atk", "fire", 16, "crit", null, null, null, "deals damage and has an increased critical hit ratio."],
  mystical_fire: ["Mystical Fire", 75, 1, "spa", "fire", 16, "atk", "target", 1, 1, "inflicts damage and lowers the target's Special Attack stat by one stage."],
  v_create: ["V-create", 120, 0.85, "atk", "fire", 8, "def", "user", 1, 2, "deals damage, then lowers the user's Defense by two stages"],
  fire_fang: ["Fire fang", 70, 0.95, "atk", "fire", 24, "flinch", null, 0.1, null, "deals damage and has a 10% chance of causing the target to flinch."],
  hidden_power_fire: ["Hidden Power Fire", 60, 1, "spa", "grass", 24, null, null, null, null, "inflicts damage and has no secondary effects."],
};

var electric_moves = {
  thunderbolt: ["Thunderbolt", 90, 1, "spa", "electric", 24, "para", null, 0.1, null, "does damage and has a 10% chance of paralyzing the target. Cannot paralyze Electric-type Pokémon."],
  wild_charge: ["Wild Charge", 90, 1, "atk", "electric", 24, "recoil", null, 0.25, "inflicts damage, and the user receives recoil damage equal to ¼ of the damage done to the target."],
  zing_zap: ["Zing Zap", 80, 1, "atk", "electric", 16, "flinch", null, 0.3, null, "inflicts damage and has a 30% chance of making the target flinch."],
  thunder: ["Thunder", 110, 0.7, "spa", "electric", 16, "para", null, 0.1, null, "deals damage and has a 10% chance of paralyzing the target. Cannot paralyze Electric-type Pokémon."],
  thunder_punch: ["Thunder Punch", 75, 1, "atk", "electric", 24, "para", null, 0.1, null, "does damage and has a 10% chance of paralyzing the opponent. Cannot paralyze Electric-type Pokémon."],
  rising_voltage: ["Rising Voltage", 70, 1, "spa", "electric", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  volt_switch: ["Volt Switch", 70, 1, "spa", "electric", 32, "switch", null, null, null, "deals damage and then switches the user out. The user will not be switched out if the user is the only Pokémon in the party that is able to battle"],
  overdrive: ["Overdrive", 105, 1, "spa", "electric", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  bolt_strike: ["Bolt Strike", 130, 0.8, "atk", "electric", 8, "para", null, 0.2, null,"inflicts damage and has a 20% chance of paralyzing the target."]
};

var dark_moves = {
  sucker_punch: ["Sucker Punch", 70, 1, "atk", "dark", 8, "prio", null, null, null, "inflicts damage. It has a priority of +1, so is used before all moves that do not have increased priority." ],
  knock_off: ["Knock Off", 70, 1, "atk", "dark", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  night_slash: ["Night Slash", 70, 1, "atk", "dark", 24, "crit", null, null, null,"deals damage and has an increased critical hit ratio."],
  foul_play: ["Foul Play", 95, 1, "atk", "dark", null, null, null, null, "inflicts damage and has no secondary effect."],
  darkest_lariat: ["Darkest Lariat", 85, 1, "atk", "dark", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  crunch: ["Crunch", 80, 1, "atk", "dark", 24, "def", "target", 0.2, 1, "does damage and has a 20% chance of lowering the target's Defense by one stage"],
  dark_pulse: ["Dark Pulse", 80, 1, "spa", "dark", 24, "flinch", null, 0.2, null, "inflicts damage and has a 20% chance of causing the target to flinch."],
  throat_chop: ["Throat Chop", 80, 1, "atk", "dark", 24, null, null, null, null, "inflicts damage and has no secondary effect."]
};

var dragon_moves = {
  draco_meteor: ["Draco Meteor", 130, 0.9, "spa", "dragon", 8, "spa", "user", 1, -2, "inflicts damage and lowers the user's Special Attack by two stages."],
  dragon_breath: ["Dragon Breath", 100, 0.75, "spa", "dragon", 16, "flinch", null, 0.2, null, "inflicts damage and has a 20% chance of causing the target to flinch."],
  dragon_pulse: ["Dragon Pulse", 85, 1, "spa", "dragon", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  dragon_pulse: ["Dragon Claw", 80, 1, "atk", "dragon", 24, null, null, null, null, "inflicts damage and has no secondary effect."],
  breaking_swipe: ["Breaking Swipe", 70, 1, "atk", "dragon", 24, "atk", "target", 1, 1, "inflicts damage and lowers the target's Attack by one stage."],
  dragon_breath: ["Dragon Breath", 70, 1, "spa", "dragon", 32, "para", null, 0.3, null, "inflicts damage and has a 30% chance of paralyzing the target."]
};

var normal_moves = {
  facade: ["Facade", 100, 1, "atk", "normal", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  double_edge: ["Double-Edge", 120, 1, "atk", "normal", 24, "recoil", null, 0.25, null, "inflicts damage, and the user receives recoil damage equal to ¼ of the damage done to the target."],
  hyper_voice: ["Hyper Voice", 90, 1, "spa", "normal", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  boomburst: ["Boomburst", 140, 1, "spa", "normal", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  extreme_speed: ["Extreme Speed", 80, 1, "atk", "normal", 8, "prio", null, null, null, "inflicts damage. It has a priority of +1, so is used before all moves that do not have increased priority."],
  body_slam: ["Body Slam", 85, 1, "atk", "normal", 24, "para", null, 0.3, null, "inflicts damage and has a 30% chance of paralyzing the target. It cannot paralyze Normal-type Pokémon."],
  return: ["Return", 100, 1, "atk", "normal", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
};

var fighting_moves = {
  close_combat: ["Close Combat", 120, 1, "atk", "fighting", 8, "def", "user", 1, -2, "inflicts damage and then lowers the user's  Defense stat by two stages."],
  //low_kick: ["Low Kick", 75, 1, "atk", "fighting", 32],
  superpower: ["Superpower", 120, 0.8, "atk", "fighting", 8, "atk", "user", 1, -2, "inflicts damage, then lowers the user's Attack stat by two stages."],
  focus_blast: ["Focus Blast", 120, 0.7, "spa", "fighting", 8, "spd", "target", 0.1, 1, "does damage and has a 10% chance of lowering the target's Special Defense by one stage."],
  body_press: ["Body Press", 80, 1, "atk", "fighting", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  aura_sphere: ["Aura Sphere", 80, 1, "spa", "fighting", 32, null, null, null, null, "inflicts damage and has no secondary effect."],
  drain_punch: ["Drain Punch", 75, 1, "atk", "fighting", 16, "heal", null, 0.5, null, "inflicts damage, and 50% of the damage dealt to the target is restored to the user as HP."],
  cross_chop: ["Cross Chop", 100, 0.8, "atk", "fighting", 8, "crit", null, null, null, "deals damage and has an increased critical hit ratio."],
  hidden_power_fighting: ["Hidden Power Fighting", 60, 1, "spa", "fighting", 24, null, null, null, null, "inflicts damage and has no secondary effects."],
  jump_kick: ["Jump Kick", 100, 0.95, "atk", "fighting", 16, "crash", null, 0.5, null, "deals damage, if the user misses it will take crash damage equal to 1/2 of the user's max HP."],
  hammer_arm: ["Hammer Arm", 100, 0.9, "atk", "fighting", 16, "spe", "user", 1, -1, "inflicts damage and lowers the user's Speed by one stage."],
  high_jump_kick: ["High Jump Kick", 130, 0.9, "atk", "fighting", 16, "crash", null, 0.5, null, "deals damage, if the user misses it will take crash damage equal to 1/2 of the user's max HP."]
};

var poison_moves = {
  sludge_bomb: ["Sludge Bomb", 90, 1, "spa", "poison", 16, "pois", null, 0.3, null, "inflicts damage and has a 30% chance of poisoning the target."],
  sludge_wave: ["Sludge Wave", 95, 1, "spa", "poison", 16, "pois", null, 0.1, null, "inflicts damage and has a 10% chance of poisoning the target."],
  poison_jab: ["Poison Jab", 80, 1, "atk", "poison", 32, "pois", null, 0.3, null, "inflicts damage and has a 30% chance of poisoning the target."],
  gunk_shot: ["Gunk Shot", 120, 0.8, "atk", "poison", 8, "pois", null, 0.3, null, "inflicts damage and has a 30% chance of poisoning the target."],
};

var psychic_moves = {
  zen_headbutt: ["Zen Headbutt", 80, 0.9, "atk", "psychic", 24, "flinch", null, 0.2, null, "inflicts damage and has a 20% chance of causing the target to flinch."],
  psyshock: ["Psyshock", 80, 1, "spa", "psychic", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  psychic_fangs: ["Psychic Fangs", 85, 1, "atk", "psychic", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  psychic: ["Psychic", 90, 1, "spa", "psychic", 16, "spd", "target", 0.1, 1, "inflicts damage and has a 10% chance of lowering the target's Special Defense by one stage."],
  psybeam: ["Psybeam", 70, 1, "spa", "psychic", 32, "confu", null, 0.1, null, "does damage and has a 10% chance of confusing the target."],
  extrasensory: ["Extrasensory", 80, 1, "spa", "psychic", 32, "flinch", null, 0.1, 1, "inflicts damage and has a 10% chance of causing the target to flinch."]
};
var ghost_moves = {
  shadow_ball: ["Shadow Ball", 80, 1, "spa", "ghost", 24, "spd", "target", 0.2, 1, "deals damage and has a 20% chance of lowering the target's Special Defense by one stage."],
  shadow_bone: ["Shadow Bone", 85, 1, "atk", "ghost", 16, "def", "target", 0.2, 1, "deals damage and has a 20% chance of lowering the target's Defense by one stage."],
  poltergeist: ["Poltergeist", 110, 0.9, "atk", "ghost", 8, null, null, null, null, "inflicts damage and has no secondary effect."],
  shadow_claw : ["Shadow Claw", 70, 1, "atk", "ghost", 24, "crit", null, null, null, "deals damage and has an increased critical hit ratio."],
  spectral_thief: ["Spectral Thief", 90, 1, "atk", "ghost", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  spirit_shackle: ["Spirit Shackle", 80, 1, "atk", "ghost", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
};

var fairy_moves = {
  play_rough: ["Play Rough", 90, 0.9, "atk", "fairy", 16, "inflicts damage and has a 10% chance of lowering the target's Attack stat by one stage."],
  hyper_voice: ["Hyper Voice", 100, 1, "spa", "fairy", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  dazzling_gleam: ["Dazzling Gleam", 80, 1, "spa", "fairy", 16, null, null, null, null, "inflicts damage and has no secondary effect."],
  moonblast: ["Moonblast", 95, 1, "spa", "fairy", 24, "spa", "target", 0.3, 1, "does damage and has a 30% chance of lowering the target's Special Attack by one stage."],
  fleur_cannon: ["Fleur Cannon", 130, 0.9, "spa", "fairy", 8, "spd", "user", 1, -2, "deals damage and lowers the user's Special Attack by two stages."],
  draining_kiss: ["Draining Kiss", 60, 1, "spa", "fairy", 16, "heal", null, 0.75, null, "does damage and restores the user's HP by 75% of the damage dealt"]
};

var stat_moves = {
  rock_polish: ["Rock Polish", 2, 1, "stat", ["spe"], 32, "raises the user's Speed stat by two stages."],
  iron_defense: ["Iron Defense", 2, 1, "stat", ["def"], 24, "raises the user's Defense stat by two stages."],
  acid_armor: ["Acid Armor", 2, 1, "stat", ["def"], 24, "raises the user's Defense stat by two stages."],
  metal_sound: ["Metal Sound", -2, 0.85, "stat", ["spd"], 64, "lowers the target's Special Defense stat by two stages."],
  swords_dance: ["Swords Dance", 2, 1, "stat", ["atk"], 32, "raises the user's Attack stat by two stages."],
  agility: ["Agility", 2, 1, "stat", ["spe"], 48, "raises the user's Speed stat by two stages."],
  roost: ["Roost", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  recover: ["Recover", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  soft_boiled: ["Soft Boiled", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  morning_sun: ["Morning Sun", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  milk_drink: ["Milk Drink", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  shore_up: ["Shore Up", 0.5, 1, "stat", ["hp"], 16, "restores 1/2 of the user's max hp."],
  nasty_plot: ["Nasty Plot", 2, 1, "stat", ["spa"], 32, "raises the user's Special Attack stat by two stages."],
  calm_mind: ["Calm Mind", 1, 1, "stat", ["spa", "spd"], 32, "raises the user's Special Attack stat and Special Defense stat by one stage."],
  cosmic_power: ["Cosmic Power", 1, 1, "stat", ["def", "spd"], 32, "raises the user's Defense stat and Special Defense stat by one stage."],
  quiver_dance: ["Quiver Dance", 1, 1, "stat", ["spa", "spd", "spe"], 32, "raises the user's Special Attack stat, Special Defense stat, and Speed stat by one stage."],
  shell_smash: ["Shell Smash", 1, 1, "stat", ["spa", "atk", "spe"], 24, "raises the user's Special Attack stat, Attack stat, and Speed stat by one stage."],
  dragon_dance: ["Dragon Dance", 1, 1, "stat", ["atk", "spe"], 32, "raises the user's Attack stat and Speed stat by one stage."],
  bulk_up: ["Bulk Up", 1, 1, "stat", ["atk", "def"], 32, "raises the user's Attack stat and Defense stat by one stage."],
  coil: ["Coil", 1, 1, "stat", ["atk", "def"], 32, "raises the user's Attack stat and Defense stat by one stage."],
  shift_gear: ["Shift Gear", 1, 1, "stat", ["atk", "spe"], 16, "raises the user's Attack stat and Speed stat by one stage."]
};

var cond_moves = {
  toxic: ["Toxic", 0.2, 0.85, "cond", "pois", 16, "badly poisons the target."],
  confuse_ray: ["Confuse Ray", null, 1, "cond", "confu", 16, "confuses the target."],
  thunder_wave: ["Thunder Wave", null, 0.9, "cond", "para", 32, "paralyzes the target."],
  stun_spore: ["Stun Spore", null, 0.75, "cond", "para", 32, "paralyzes the target."],
  glare: ["Glare", null, 1, "cond", "para", 48, "paralyzes the target."],
  sleep_powder: ["Sleep Powder", null, 0.85, "cond", "sleep", 24, "causes the target to fall asleep."],
  hypnosis: ["Hypnosis", null, 0.6, "cond", "sleep", 24, "causes the target to fall asleep."],
  Spore: ["Spore", null, 1, "cond", "sleep", 24, "causes the target to fall asleep."],
  will_o_wisp: ["Will-O-Wisp", 0.15, 0.85, "cond", "burn", 24, "inflicts a burn on the target. It has no effect on Fire-type Pokémon."]
  
}

var rock_mons = [
  {
    name: "Kabutops",
    level: 79,
    type: "rock",
    cond: null,
    turns: null,
    hp: 224,
    spe: 172,
    atk: 227,
    def: 211,
    spa: 148,
    spd: 156,
    moves: [water_moves.waterfall, rock_moves.stone_edge, fighting_moves.super_power, water_moves.aqua_jet],
    img: "http://play.pokemonshowdown.com/sprites/ani/kabutops.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/kabutops.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kabutops.mp3"
  },
  {
    name: "Probopass",
    level: 86,
    type: "rock",
    cond: null,
    turns: null,
    hp: 243,
    spe: 118,
    atk: 99,
    def: 299,
    spa: 178,
    spd: 307,
    moves: [electric_moves.volt_switch, ground_moves.earth_power, rock_moves.power_gem],
    img: "http://play.pokemonshowdown.com/sprites/ani/kabutops.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/kabutops.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kabutops.mp3"
  },
  {
    name: "Cradily",
    level: 76,
    type: "rock",
    cond: null,
    turns: null,
    hp: 288,
    spe: 123,
    atk: 189,
    def: 216,
    spa: 189,
    spd: 233,
    moves: [grass_moves.seed_bomb, rock_moves.rock_slide, stat_moves.recover],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/cradily.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/cradily.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/cradily.mp3"
  },
  {
    name: "Sudowoodo",
    level: 88,
    type: "rock",
    cond: null,
    turns: null,
    hp: 266,
    spe: 103,
    atk: 226,
    def: 253,
    spa: 103,
    spd: 165,
    moves: [ground_moves.earthquake, rock_moves.head_smash, dark_moves.sucker_punch, grass_moves.wood_hammer],
    img: "http://play.pokemonshowdown.com/sprites/ani/sudowoodo.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/sudowoodo.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sudowoodo.mp3"
  },
   {
    name: "Bastiodon",
    level: 86,
    type: "rock",
    cond: null,
    turns: null,
    hp: 243,
    spe: 56,
    atk: 139,
    def: 287,
    spa: 130,
    spd: 287,
    moves: [steel_moves.meteor_mash, rock_moves.rock_blast, ground_moves.earthquake, stat_moves.rock_polish],
    img: "http://play.pokemonshowdown.com/sprites/ani/bastiodon.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/bastiodon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/bastiodon.mp3"
  },
  {
    name: "Aerodactyl",
    level: 82,
    type: "rock",
    cond: null,
    turns: null,
    hp: 265,
    spe: 260,
    atk: 219,
    def: 154,
    spa: 146,
    spd: 170,
    moves: [ground_moves.earthquake, rock_moves.stone_edge, flying_moves.dual_wingbeat, stat_moves.agility],
    img: "http://play.pokemonshowdown.com/sprites/ani/aerodactyl.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/aerodactyl.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/aerodactyl.mp3"
  },
  {
    name: "Omastar",
    level: 82,
    type: "rock",
    cond: null,
    turns: null,
    hp: 249,
    spe: 137,
    atk: 103,
    def: 252,
    spa: 236,
    spd: 162,
    moves: [stat_moves.shell_smash, ground_moves.earth_power, water_moves.hydro_pump, ice_moves.ice_beam],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/omastar.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-shiny-back/omastar-shiny.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/omastar.mp3"
  },
];

var bug_mons = [
  {
    name: "Moththim",
    level: 87,
    type: "bug",
    cond: null,
    turns: null,
    hp: 264,
    spe: 165,
    atk: 171,
    def: 137,
    spa: 212,
    spd: 136,
    moves: [flying_moves.air_slash, bug_moves.bug_buzz, ground_moves.hidden_power_ground, cond_moves.sleep_powder],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/mothim.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/mothim.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mothim.mp3"
  },
  {
    name: "Vivillion",
    level: 86,
    type: "bug",
    cond: null,
    turns: null,
    hp: 277,
    spe: 202,
    atk: 94,
    def: 135,
    spa: 204,
    spd: 135,
    moves: [flying_moves.hurricane, bug_moves.bug_buzz, grass_moves.energy_ball, cond_moves.sleep_powder],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/vivillion.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/vivillion.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/vivillion.mp3"
  },
  {
    name: "Galvantula",
    level: 84,
    type: "bug",
    cond: null,
    turns: null,
    hp: 255,
    spe: 230,
    atk: 136,
    def: 148,
    spa: 300,
    spd: 149,
    moves: [bug_moves.bug_buzz, ice_moves.hidden_power_ice, electric_moves.thunder, cond_moves.stun_spore],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/galvantula.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/galvantula.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/galvantula.mp3"
  },
  {
    name: "Heracross",
    level: 82,
    type: "bug",
    hp: 265,
    spe: 187,
    atk: 252,
    def: 170,
    spa: 113,
    spd: 203,
    moves: [bug_moves.mega_horn, normal_moves.facade, ground_moves.earthquake, fighting_moves.close_combat],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/heracross.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/heracross.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/heracross.mp3"
  },
  {
    name: "Crustle",
    level: 81,
    type: "bug",
    cond: null,
    turns: null,
    hp: 246,
    spe: 120,
    atk: 217,
    def: 249,
    spa: 152,
    spd: 168,
    moves: [rock_moves.rock_slide, bug_moves.x_scissor],
    img: "http://play.pokemonshowdown.com/sprites/ani/crustle.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/crustle.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/crustle.mp3"
  },
  {
    name: "Leavanny",
    level: 87,
    type: "bug",
    cond: null,
    turns: null,
    hp: 272,
    spe: 210,
    atk: 229,
    def: 189,
    spa: 172,
    spd: 172,
    moves: [grass_moves.leaf_blade, bug_moves.x_scissor, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/leavanny.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/leavanny.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/leavanny.mp3"
  },
  {
    name: "Accelgor",
    level: 86,
    type: "bug",
    cond: null,
    turns: null,
    hp: 278,
    spe: 299,
    atk: 125,
    def: 118,
    spa: 221,
    spd: 152,
    moves: [cond_moves.toxic, fighting_moves.focus_blast, bug_moves.bug_buzz],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/accelgor.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/accelgor.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/accelgor.mp3"
  },
];

var normal_mons = [
  {
    name: "Clefable",
    level: 84,
    type: "normal",
    cond: null,
    turns: null,
    hp: 297,
    spe: 149,
    atk: 166,
    def: 171,
    spa: 191,
    spd: 199,
    moves: [normal_moves.double_edge, fire_moves.fire_blast, ice_moves.ice_beam, stat_moves.soft_boiled],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/clefable.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/clefable.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/clefable.mp3"
  },
  {
    name: "Miltank",
    level: 84,
    type: "normal",
    cond: null,
    turns: null,
    hp: 297,
    spe: 216,
    atk: 183,
    def: 225,
    spa: 115,
    spd: 166,
    moves: [normal_moves.body_slam, ground_moves.earthquake, cond_moves.toxic, stat_moves.milk_drink],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/clefable.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/clefable.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/clefable.mp3"
  },
  {
    name: "Bewear",
    level: 82,
    type: "normal",
    cond: null,
    turns: null,
    hp: 331,
    spe: 146,
    atk: 252,
    def: 178,
    spa: 137,
    spd: 146,
    moves: [dark_moves.darkest_lariat, fighting_moves.close_combat, normal_moves.double_edge],
    img: "http://play.pokemonshowdown.com/sprites/ani/bewear.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/bewear.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/bewear.mp3"
  },
  {
    name: "Kangaskhan",
    level: 79,
    type: "normal",
    cond: null,
    turns: null,
    hp: 295,
    spe: 188,
    atk: 196,
    def: 172,
    spa: 109,
    spd: 172,
    moves: [ground_moves.earthquake, dark_moves.sucker_punch, normal_moves.double_edge],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/kangaskhan.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/kangaskhangif",
    sound: "https://play.pokemonshowdown.com/audio/cries/kangaskhan.mp3"
  },
  {
    name: "Stoutland",
    level: 88,
    type: "normal",
    cond: null,
    turns: null,
    hp: 293,
    spe: 191,
    atk: 244,
    def: 209,
    spa: 129,
    spd: 209,
    moves: [normal_moves.body_slam, fighting_moves.superpower, dark_moves.crunch, fairy_moves.play_rough],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/stoutland.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/stoutland.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/stoutland.mp3"
  },
  {
    name: "Exploud",
    level: 84,
    type: "normal",
    cond: null,
    turns: null,
    hp: 312,
    spe: 162,
    atk: 157,
    def: 154,
    spa: 231,
    spd: 171,
    moves: [normal_moves.boomburst, fighting_moves.focus_blast, fire_moves.fire_blast, water_moves.surf],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/exploud.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/exploud.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/exploud.mp3"
  },
  {
    name: "Tauros",
    level: 82,
    type: "normal",
    cond: null,
    turns: null,
    hp: 257,
    spe: 228,
    atk: 211,
    def: 203,
    spa: 113,
    spd: 162,
    moves: [normal_moves.body_slam, fighting_moves.close_combat, dark_moves.throat_chop, psychic_moves.zen_headbutt],
    img: "http://play.pokemonshowdown.com/sprites/ani/tauros.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/tauros.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tauros.mp3"
  },  
  {
    name: "Tummy-licky",
    level: 86,
    type: "normal",
    total_hp: 1329,
    cond: null,
    turns: null,
    hp: 1329,
    spe: 1300,
    atk: 1095,
    def: 213,
    spa: 187,
    spd: 213,
    moves: {
      m1: ["Power Whip", 120, 0.85, "atk", "grass", 16],
      m2: ["Sucker Punch", 80, 1, "atk", "dark"],
      m3: ["Body Slam", 800, 1, "atk", "normal", 24]
    },
    img: "http://play.pokemonshowdown.com/sprites/ani/lickilicky.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/lickilicky.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lickilicky.mp3"
  },
  {
    name: "Per-Tummy",
    level: 84,
    type: "normal",
    hp: 246,
    spe: 241,
    atk: 166,
    def: 149,
    spa: 157,
    spd: 157,
    moves: [ghost_moves.shadow_ball, water_moves.water_pulse, normal_moves.facade, fairy_moves.play_rough],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/persian.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/persian.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/persian.mp3"
  },
];

var fairy_mons = [
  {
    name: "Sylveon",
    level: 84,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 297,
    spe: 149,
    atk: 114,
    def: 157,
    spa: 233,
    spd: 267,
    moves: [fairy_moves.hyper_voice, ghost_moves.shadow_ball, fire_moves.mystical_fire, normal_moves.recover],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/sylveon.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/sylveon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sylveon.mp3"
  },
  /*
  {
    name: "Clef-Tummy",
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
  */
  {
    name: "Slurpuff",
    level: 80,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 262,
    spe: 161,
    atk: 174,
    def: 184,
    spa: 182,
    spd: 166,
    moves: [normal_moves.facade, fairy_moves.play_rough, fighting_moves.drain_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani/slurpuff.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/slurpuff.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/slurpuff.mp3"
  },
  {
    name: "Shiinotic",
    level: 86,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 243,
    spe: 101,
    atk: 82,
    def: 187,
    spa: 204,
    spd: 221,
    moves: [fairy_moves.moonblast, grass_moves.energy_ball, cond_moves.spore],
    img: "http://play.pokemonshowdown.com/sprites/ani/shiinotic.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/shiinotic.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shiinotic.mp3"
  },
  {
    name: "Tummy-bee",
    level: 82,
    type: "fairy",
    hp: 233,
    spe: 251,
    atk: 137,
    def: 246,
    spa: 203,
    spd: 162,
    moves: [fairy_moves.moonblast, bug_moves.u_turn, psychic_moves.psybeam],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ribombee.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/ribombee.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ribombee.mp3"
  },
  {
    name: "Toge-Tummy",
    level: 82,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 274,
    spe: 178,
    atk: 87,
    def: 203,
    spa: 244,
    spd: 236,
    moves: [fairy_moves.play_rough, flying_moves.air_slash, fighting_moves.aura_sphere],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/togekiss.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/togekiss.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/togekiss.mp3"
  },
  {
    name: "Azu-Tummy",
    level: 84,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 305,
    spe: 132,
    atk: 132,
    def: 183,
    spa: 149,
    spd: 183,
    moves: [fairy_moves.play_rough, dark_moves.knock_off, water_moves.liqidation, water_moves.aqua_jet],
    img: "http://play.pokemonshowdown.com/sprites/ani/azumarill.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back/azumarill.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/azumarill.mp3"
  },
   {
    name: "Comfey",
    level: 86,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 228,
    spe: 221,
    atk: 94,
    def: 204,
    spa: 190,
    spd: 238,
    moves: [fairy_moves.draining_kiss, grass_moves.giga_drain, stat_moves.calm_mind],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/comfey.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/comfey.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/comfey.mp3"
  },
];
var grass_mons = [
  {
    name: "Shiftry",
    level: 88,
    type: "grass",
    cond: null,
    turns: null,
    hp: 302,
    spe: 191,
    atk: 181,
    def: 156,
    spa: 209,
    spd: 156,
    moves: [dark_moves.dark_pulse, grass_moves.leaf_storm, fire_moves.heat_wave],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/shiftry.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/shiftry.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shiftry.mp3"
  },
  {
    name: "Roserade",
    level: 82,
    type: "grass",
    cond: null,
    turns: null,
    hp: 233,
    spe: 195,
    atk: 119,
    def: 137,
    spa: 252,
    spd: 219,
    moves: [grass_moves.leaf_storm, poison_moves.sludge_bomb, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/roserade.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/roserade.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/roserade.mp3"
  },
  {
    name: "Serperior",
    level: 80,
    type: "grass",
    cond: null,
    turns: null,
    hp: 251,
    spe: 226,
    atk: 125,
    def: 198,
    spa: 165,
    spd: 198,
    moves: [grass_moves.leaf_storm, poison_moves.sludge_bomb, fire_moves.hidden_power_fire, cond_moves.glare],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/serperior.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/serperior.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/serperior.mp3"
  },
  {
    name: "Tangrowth",
    level: 84,
    type: "grass",
    cond: null,
    turns: null,
    hp: 305,
    spe: 132,
    atk: 216,
    def: 258,
    spa: 233,
    spd: 132,
    moves: [grass_moves.giga_drain, poison_moves.sludge_bomb, dark_moves.knock_off, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani/tangrowth.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/tangrowth.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tangrowth.mp3"
  }, 
  {
    name: "Whimsicott",
    level: 84,
    type: "grass",
    cond: null,
    turns: null,
    hp: 238,
    spe: 243,
    atk: 161,
    def: 191,
    spa: 178,
    spd: 174,
    moves: [grass_moves.leaf_storm, bug_moves.u_turn, stat_moves.stun_spore],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/whimsicott.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/whimsicott.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/whimsicott.mp3"
  },
  {
    name: "Cacturne",
    level: 86,
    type: "grass",
    cond: null,
    turns: null,
    hp: 261,
    spe: 144,
    atk: 247,
    def: 152,
    spa: 247,
    spd: 252,
    moves: [grass_moves.seed_bomb, dark_moves.sucker_punch, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/cacturne.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/cacturne.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/cacturne.mp3"
  },
  {
    name: "Scept-Tummy",
    level: 84,
    type: "grass",
    cond: null,
    turns: null,
    hp: 255,
    spe: 191,
    atk: 191,
    def: 157,
    spa: 225,
    spd: 191,
    moves: [grass_moves.leaf_lade, ground_moves.earthquale, flying_moves.acrobatics],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/sceptile.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/sceptile.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sceptile.mp3"
  },
];

var poison_mons = [
  {
    name: "Arbok",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    hp: 281,
    spe: 219,
    atk: 250,
    def: 197,
    spa: 189,
    spd: 217,
    moves: [poison_moves.poison_jab, ground_moves.earthquake, dark_moves.crunch, stat_moves.coil],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/arbok.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/arbok.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/arbok.mp3"
  },
  {
    name: "Nidoking",
    level: 79,
    type: "poison",
    cond: null,
    turns: null,
    hp: 258,
    spe: 180,
    atk: 191,
    def: 167,
    spa: 180,
    spd: 164,
    moves: [ground_moves.earthquake, poison_moves.sludge_wave, fighting_moves.superpower, fire_moves.fire_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/nidoking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/nidoking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/nidoking.mp3"
  },
  {
    name: "Drapion",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    hp: 255,
    spe: 208,
    atk: 199,
    def: 233,
    spa: 149,
    spd: 174,
    moves: [ground_moves.earthquake, dark_moves.crunch, poison_moves.poison_jab],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/drapion.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/drapion.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/drapion.mp3"
  },
  {
    name: "Garbodor",
    level: 86,
    type: "poison",
    cond: null,
    turns: null,
    hp: 278,
    spe: 278,
    atk: 213,
    def: 190,
    spa: 152,
    spd: 190,
    moves: [fighting_moves.drain_punch, poison_moves.gunk_shot],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/garbodor.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/garbodor.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/garbodor.mp3"
  },
  {
    name: "Muk",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    cond: null,
    turns: null,
    hp: 371,
    spe: 158,
    atk: 270,
    def: 209,
    spa: 189,
    spd: 260,
    moves: [poison_moves.poison_jab, grass_moves.giga_drain, dark_moves.crunch, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/muk-alola.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/muk-alola.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/muk.mp3"
  },
   {
    name: "Nidoqueen",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    hp: 288,
    spe: 176,
    atk: 159,
    def: 194,
    spa: 174,
    spd: 191,
    moves: [poison_moves.sludge_wave, ground_moves.earth_power, ice_moves.ice_beam],
    img: "http://play.pokemonshowdown.com/sprites/ani/nidoqueen.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/nidoqueen.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/nidoqueen.mp3"
  },
  {
    name: "Dragalge",
    level: 82,
    type: "poison",
    cond: null,
    turns: null,
    hp: 252,
    spe: 125,
    atk: 178,
    def: 204,
    spa: 254,
    spd: 261,
    moves: [poison_moves.sludge_wave, dragon_moves.dragon_pulse, fighting_moves.focus_blast, water_moves.flip_turn],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dragalge.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dragalge.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dragalge.mp3"
  },
  {
    name: "Crobat",
    level: 82,
    type: "poison",
    cond: null,
    turns: null,
    hp: 274,
    spe: 260,
    atk: 195,
    def: 178,
    spa: 162,
    spd: 178,
    moves: [poison_moves.sludge_bomb, ghost_moves.shadow_ball, bug_moves.u_turn, fire_moves.heat_wave],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/crobat.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/crobat.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/crobat.mp3"
  },
  {
    name: "Nihilego",
    level: 80,
    type: "poison",
    hp: 306,
    spe: 211,
    atk: 89,
    def: 121,
    spa: 249,
    spd: 249,
    moves: [rock_moves.power_gem, poison_moves.sludge_wave, grass_moves.energy_ball],
    img: "http://play.pokemonshowdown.com/sprites/ani/nihilego.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/nihilego.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/nihilego.mp3"
  },
];
var fire_mons = [
  {
    name: "Ninetales",
    type: "fire",
    cond: null,
    turns: null,
    level: 84,
    hp: 270,
    spe: 216,
    atk: 132,
    def: 174,
    spa: 184,
    spd: 216,
    moves: [fire_moves.heat_wave, ground_moves.scorching_sands, grass_moves.solar_beam, stat_moves.nasty_plot],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ninetales.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/ninetales.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ninetales.mp3"
  },
  {
    name: "Magmortar",
    type: "fire",
    cond: null,
    turns: null,
    level: 84,
    hp: 263,
    spe: 188,
    atk: 164,
    def: 161,
    spa: 258,
    spd: 208,
    moves: [fighting_moves.focus_blast, electric_moves.thunderbolt, fire_moves.fire_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/magmortar.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/magmortar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/magmortar.mp3"
  },
  {
    name: "Flareon",
    type: "fire",
    cond: null,
    turns: null,
    level: 88,
    hp: 258,
    spe: 188,
    atk: 164,
    def: 161,
    spa: 258,
    spd: 208,
    moves: [fire_moves.lava_plume, grass_moves.hidden_power_grass, fighting_moves.super_power, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/flareon.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/flareon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/flareon.mp3"
  },
  {
    name: "Camerupt",
    type: "fire",
    level: 86,
    hp: 261,
    spe: 118,
    atk: 178,
    def: 170,
    spa: 229,
    spd: 178,
    moves: [fire_moves.lava_plume, grass_moves.hidden_power_grass, ground_moves.earth_power],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/camerupt.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/camerupt.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/camerupt.mp3"
  },
   {
    name: "Centiskorch",
    type: "fire",
    cond: null,
    turns: null,
    level: 84,
    hp: 305,
    spe: 157,
    atk: 241,
    def: 157,
    spa: 199,
    spd: 199,
    moves: [fire_moves.fire_lash, bug_moves.leech_life, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/centiskorch.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/centiskorch.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/centiskorch.mp3"
  },
  {
    name: "Torkoal",
    type: "fire",
    cond: null,
    turns: null,
    level: 86,
    hp: 261,
    spe: 84,
    atk: 195,
    def: 290,
    spa: 195,
    spd: 170,
    moves: [grass_moves.solar_beam, fire_moves.lava_plume, rock_moves.rock_slide, ground_moves.earth_power],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/torkoal.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/torkoal.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/torkoal.mp3"
  },
  {
    name: "Turtonator",
    type: "fire",
    level: 84,
    cond: null,
    turns: null,
    hp: 238,
    spe: 109,
    atk: 136,
    def: 275,
    spa: 101,
    spd: 191,
    moves: [stat_moves.shell_smash, fire_moves.will_o_wisp, fire_moves.fire_blast, dragon_moves.dragon_tail],
    img: "http://play.pokemonshowdown.com/sprites/ani/turtonator.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/turtonator.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/turtonator.mp3"
  },
  {
    name: "Incineroar",
    type: "fire",
    level: 80,
    cond: null,
    turns: null,
    hp: 283,
    spe: 142,
    atk: 230,
    def: 190,
    spa: 174,
    spd: 190,
    moves: [dark_moves.throat_chop, fire_moves.flare_blitz, stat_moves.bulk_up],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/incineroar.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/incineroar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/incineroar.mp3"
  },
];

var water_mons = [
  {
    name: "Lumineon",
    level: 88,
    type: "water",
    cond: null,
    turns: null,
    hp: 266,
    spe: 210,
    atk: 171,
    def: 184,
    spa: 171,
    spd: 202,
    moves: [water_moves.surf, grass_moves.hidden_power_grass, bug_moves.u_turn],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lumineon.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/lumineon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lumineon.mp3"
  },
   {
    name: "Seaking",
    level: 88,
    type: "water",
    cond: null,
    turns: null,
    hp: 284,
    spe: 170,
    atk: 212,
    def: 165,
    spa: 165,
    spd: 191,
    moves: [ground_moves.drill_run, water_moves.waterfall, dark_moves.crunch],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/seaking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/seaking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/seaking.mp3"
  },
  {
    name: "Samurott",
    level: 86,
    type: "water",
    cond: null,
    turns: null,
    hp: 304,
    spe: 170,
    atk: 221,
    def: 195,
    spa: 235,
    spd: 170,
    moves: [bug_moves.megahorn, water_moves.waterfall, stat_moves.swords_dance, fighting_moves.superpower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/samurott.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/samurott.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/samurott.mp3"
  },
  {
    name: "Slowking",
    level: 86,
    type: "water",
    cond: null,
    turns: null,
    hp: 304,
    spe: 101,
    atk: 134,
    def: 187,
    spa: 221,
    spd: 238,
    moves: [water_moves.surf, psychic_moves.psybeam, fire_moves.fireblast, ice_moves.ice_beam],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/slowking.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/slowking.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/slowking.mp3"
  },
  {
    name: "Primarina",
    level: 82,
    type: "water",
    cond: null,
    turns: null,
    hp: 265,
    spe: 146,
    atk: 126,
    def: 169,
    spa: 254,
    spd: 237,
    moves: [psychic_moves.psychic, fairy_moves.moonblast, grass_moves.energy_ball, water_moves.sparkling_aria],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/primarina.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/primarina.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/primarina.mp3"
  },
  {
    name: "Gyarados",
    level: 76,
    type: "water",
    cond: null,
    turns: null,
    hp: 269,
    spe: 167,
    atk: 234,
    def: 164,
    spa: 315,
    spd: 196,
    moves: [water_moves.waterfall, flying_moves.bounce, grass_moves.power_whip],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gyarados.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/gyarados.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gyarados.mp3"
  },
  {
    name: "Seismitoad",
    level: 84,
    type: "water",
    cond: null,
    turns: null,
    hp: 314,
    spe: 173,
    atk: 208,
    def: 174,
    spa: 191,
    spd: 174,
    moves: [water_moves.liquidation, ground_moves.earthquake, poison_moves.sludge_bomb],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/seismitoad.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/seismitoad.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/seismitoad.mp3"
  },
  {
    name: "Whiscash",
    level: 86,
    type: "water",
    hp: 329,
    spe: 152,
    atk: 183,
    def: 175,
    spa: 180,
    spd: 171,
    moves: [stat_moves.dragon_dance, water_moves.liquidation, ground_moves.earthquake, psychic_moves.zen_headbutt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/whiscash.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/whiscash.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/whiscash.mp3"
  },
  {
    name: "Swampert",
    level: 82,
    type: "water",
    hp: 298,
    spe: 146,
    atk: 228,
    def: 195,
    spa: 187,
    spd: 195,
    moves: [ice_moves.ice_beam, ground_moves.earth_quake, water_moves.waterfall, fighting_moves.superpower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/swampert.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/swampert.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/swampert.mp3"
  },
];

var psychic_mons = [
  {
    name: "Sigilyph",
    level: 82,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 252,
    spe: 206,
    atk: 100,
    def: 178,
    spa: 216,
    spd: 178,
    moves: [psychic_moves.psyshock, grass_moves.energy_ball, flying_moves.air_slash, stat_moves.calm_mind],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/sigilyph.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/sigilyph.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sigilyph.mp3"
  },
  {
    name: "Reuniclus",
    level: 84,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 322,
    spe: 55,
    atk: 114,
    def: 174,
    spa: 258,
    spd: 191,
    moves: [psychic_moves.psychic, ghost_moves.shadow_ball, fighting_moves.focus_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/reuniclus.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/reuniclus.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/reuniclus.mp3"
  },
  {
    name: "Alakazam",
    level: 80,
    type: "psychic",
    hp: 219,
    spe: 238,
    atk: 85,
    def: 118,
    spa: 262,
    spd: 182,
    moves: [stat_moves.calm_mind, ghost_moves.shadow_ball, psychic_moves.psychic, cond_moves.hypnosis],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/alakazam.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/alakazam.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/alakazam.mp3"
  },
  {
    name: "Beheeyem",
    level: 88,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 275,
    spe: 120,
    atk: 137,
    def: 181,
    spa: 269,
    spd: 217,
    moves: [bug_moves.signal_beam, psychic_moves.psychic, fighting_moves.hidden_power_fighting],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/beheeyem.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/beheeyem.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/beheeyem.mp3"
  },
  {
    name: "Rapidash",
    level: 84,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 246,
    spe: 225,
    atk: 216,
    def: 166,
    spa: 183,
    spd: 182,
    moves: [fairy_moves.play_rough, stat_moves.morning_sun, psychic_moves.zen_headbutt, ground_moves.high_horsepower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/rapidash-galar.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/rapidash-galar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/rapidash.mp3"
  },
  {
    name: "Raichu",
    level: 82,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 233,
    spe: 228,
    atk: 144,
    def: 129,
    spa: 203,
    spd: 187,
    moves: [electric_moves.thunderbolt, psychic_moves.psyshock, fighting_moves.focus_blast, grass_moves.hidden_power_grass],
    img: "http://play.pokemonshowdown.com/sprites/ani/raichu-alola.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back/raichu-alola.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/raichu.mp3"
  },
  {
    name: "Gothitelle",
    level: 86,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 261,
    spe: 161,
    atk: 99,
    def: 213,
    spa: 242,
    spd: 238,
    moves: [psychic_moves.psychic, ghost_moves.shadow_ball, electric_moves.thunderbolt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gothitelle.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/gothitelle.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gothitelle.mp3"
  },
];
var flying_mons = [
  {
    name: "Talonflame",
    level: 80,
    type: "flying",
    cond: null,
    turns: null,
    hp: 255,
    spe: 248,
    atk: 176,
    def: 160,
    spa: 165,
    spd: 157,
    moves: [fire_moves.flare_blitz, stat_moves.roost,cond_moves.will_o_wisp, flying_moves.brave_bird],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/talonflame.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/talonflame.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/talonflame.mp3"
  },
  {
    name: "Corviknight",
    level: 78,
    type: "flying",
    cond: null,
    turns: null,
    total_hp: 281,
    hp: 281,
    spe: 150,
    atk: 181,
    def: 209,
    spa: 128,
    spd: 178,
    moves: [steel_moves.steel_wing, stat_moves.iron_defense, flying_moves.brave_bird, fighting_moves.body_press],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/corviknight.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/corviknight.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/corviknight.mp3"
  },
  {
    name: "Pelipper",
    level: 87,
    type: "flying",
    cond: null,
    turns: null,
    hp: 246,
    spe: 163,
    atk: 92,
    def: 224,
    spa: 198,
    spd: 172,
    moves: [flying_moves.hurricane, stat_moves.roost, water_moves.scald],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pelipper.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/pelipper.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pelipper.mp3"
  },
  {
    name: "Cramorant",
    level: 84,
    type: "flying",
    hp: 255,
    spe: 191,
    atk: 191,
    def: 141,
    spa: 191,
    spd: 208,
    moves: [water_moves.surf, flying_moves.brave_bird, stat_moves.swords_dance, stat_moves.roost],
    img: "http://play.pokemonshowdown.com/sprites/ani/cramorant.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/cramorant.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/cramorant.mp3"
  },
  {
    name: "Scyther",
    level: 80,
    type: "flying",
    cond: null,
    turns: null,
    total_hp: 243,
    hp: 243,
    spe: 214,
    atk: 222,
    def: 174,
    spa: 134,
    spd: 174,
    moves: [bug_moves.u_turn, flying_moves.dual_wingbeat, stat_moves.swords_dance, stat_moves.roost],
    img: "http://play.pokemonshowdown.com/sprites/ani/scyther.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/scyther.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/scyther.mp3"
  },
  {
    name: "Hawlucha",
    level: 80,
    type: "flying",
    cond: null,
    turns: null,
    hp: 256,
    spe: 235,
    atk: 193,
    def: 166,
    spa: 165,
    spd: 147,
    moves: [rock_moves.stone_edge, fighting_moves.close_combat, flying_moves.brave_bird, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani/hawlucha.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/hawlucha.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/hawlucha.mp3"
  },
];
var dark_mons = [
  {
    name: "Weaville",
    level: 82,
    type: "dark",
    cond: null,
    turns: null,
    hp: 249,
    spe: 252,
    atk: 244,
    def: 154,
    spa: 121,
    spd: 187,
    moves: [ice_moves.icicle_crash, stat_moves.swords_dance, dark_moves.night_slash],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/weavile.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/weavile.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/weavile.mp3"
  },
  {
    name: "Scraft-Tummy",
    level: 82,
    type: "dark",
    cond: null,
    turns: null,
    hp: 241,
    spe: 142,
    atk: 195,
    def: 236,
    spa: 121,
    spd: 236,
    moves: [fighting_moves.high_jump_kick, psychic_moves.zen_headbutt, dark_moves.crunch],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/scrafty.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/scrafty.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/scrafty.mp3"
  },
  {
    name: "Absol",
    level: 84,
    type: "dark",
    cond: null,
    turns: null,
    hp: 246,
    spe: 142,
    atk: 267,
    def: 149,
    spa: 174,
    spd: 149,
    moves: [fighting_moves.close_combat, fairy_moves.play_rough, dark_moves.knock_off, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/absol.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/absol.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/absol.mp3"
  },
  {
    name: "Sableye",
    level: 88,
    type: "dark",
    cond: null,
    turns: null,
    hp: 231,
    spe: 138,
    atk: 182,
    def: 182,
    spa: 165,
    spd: 165,
    moves: [ghost_moves.shadow_ball, dark_moves.dark_pulse, stat_moves.recover, stat_moves.calm_mind],
    img: "http://play.pokemonshowdown.com/sprites/ani/sableye.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/sableye.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sableye.mp3"
  },
  {
    name: "Obstagoon",
    level: 80,
    type: "dark",
    cond: null,
    turns: null,
    hp: 280,
    spe: 198,
    atk: 200,
    def: 208,
    spa: 142,
    spd: 176,
    moves: [normal_moves.facade, fighting_moves.close_combat, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani/obstagoon.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/obstagoon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/obstagoon.mp3"
  },
  {
    name: "Weavile",
    level: 82,
    type: "dark",
    cond: null,
    turns: null,
    hp: 249,
    spe: 252,
    atk: 244,
    def: 154,
    spa: 121,
    spd: 187,
    moves: [ice_moves.ice_shard, ice_moves.icicle_crash, dark_moves.night_slash, fighting_moves.drain_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani/weavile.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/weavile.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/weavile.mp3"
  },
  {
    name: "Malamar",
    level: 80,
    type: "dark",
    cond: null,
    turns: null,
    hp: 269,
    spe: 163,
    atk: 193,
    def: 187,
    spa: 155,
    spd: 166,
    moves: [fighting_moves.superpower, dark_moves.knock_off, stat_moves.calm_mind, stat_moves.recover],
    img: "http://play.pokemonshowdown.com/sprites/ani/malamar.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/malamar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/malamar.mp3"
  },
];

var dragon_mons = [
  {
    name: "Goodra",
    level: 84,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 288,
    spe: 183,
    atk: 216,
    def: 166,
    spa: 233,
    spd: 300,
    moves: [dragon_moves.dragon_tail, electric_moves.thunder, ground_moves.earthquake, poison_moves.sludge_bomb],
    img: "http://play.pokemonshowdown.com/sprites/ani/goodra.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/goodra.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/goodra.mp3"
  },
  {
    name: "Garchomp",
    type: "dragon",
    cond: null,
    turns: null,
    level: 84,
    hp: 304,
    spe: 209,
    atk: 254,
    def: 298,
    spa: 174,
    spd: 182,
    moves: [fire_moves.fire_fang, ground_moves.earthquake, stat_moves.swords_dance, dragon_moves.dragon_claw],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/garchomp.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/garchomp.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/garchomp.mp3"
  },
  {
    name: "Appletun",
    level: 90,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 344,
    spe: 105,
    atk: 158,
    def: 195,
    spa: 231,
    spd: 195,
    moves: [grass_moves.apple_acid, stat_moves.recover, dragon_moves.dragon_pulse],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/appletun.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/appletun.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/appletun.mp3"
  },
  {
    name: "Dragapult",
    type: "dragon",
    cond: null,
    turns: null,
    level: 78,
    hp: 265,
    spe: 267,
    atk: 192,
    def: 162,
    spa: 201,
    spd: 162,
    moves: [dragon_moves.draco_meteor, ghost_moves.shadow_ball, fire_moves.fire_blast, electric_moves.thunderbolt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dragapult.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dragapult.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dragapult.mp3"
  },
  {
    name: "Altaria",
    level: 88,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 275,
    spe: 191,
    atk: 128,
    def: 209,
    spa: 173,
    spd: 235,
    moves: [dragon_moves.draco_meteor, fire_moves.fire_blast, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/altaria.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/altaria.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/altaria.mp3"
  },
  {
    name: "Dragonair",
    level: 88,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 251,
    spe: 173,
    atk: 132,
    def: 247,
    spa: 173,
    spd: 259,
    moves: [dragon_moves.draco_meteor, stat_moves.coil, ice_moves.ice_beam, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dragonair.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dragonair.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dragonair.mp3"
  },
  {
    name: "Druddi-Tummy",
    level: 84,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 267,
    spe: 129,
    atk: 250,
    def: 199,
    spa: 149,
    spd: 199,
    moves: [stat_moves.glare, dragon_moves.dragon_claw, fighting_moves.superpower, dark_moves.sucker_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/druddigon.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/druddigon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dragonair.mp3"
  },
];

var electric_mons = [
  {
    name: "Electivire",
    level: 88,
    type: "electric",
    cond: null,
    turns: null,
    hp: 275,
    spe: 217,
    atk: 267,
    def: 168,
    spa: 217,
    spd: 200,
    moves: [ice_moves.ice_punch, electric_moves.wild_charge, fire_moves.flamethrower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/electivire.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/electivire.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/electivire.mp3"
  }, 
  {
    name: "Pachirisu",
    level: 87,
    type: "electric",
    cond: null,
    turns: null,
    hp: 246,
    spe: 215,
    atk: 83,
    def: 172,
    spa: 128,
    spd: 206,
    moves: [normal_moves.return, electric_moves.thunderbolt, fighting_moves.focus_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pachirisu.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/pachirisu.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pachirisu.mp3"
  },
  {
    name: "Eelektross",
    level: 84,
    type: "electric",
    cond: null,
    turns: null,
    hp: 280,
    spe: 132,
    atk: 241,
    def: 182,
    spa: 225,
    spd: 183,
    moves: [ice_moves.hidden_power_ice, electric_moves.thunderbolt, fire_moves.flamethrower, bug_moves.u_turn],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/eelektross.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/eelektross.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/eelektross.mp3"
  },  
  {
    name: "Luxray",
    level: 84,
    type: "electric",
    cond: null,
    turns: null,
    hp: 272,
    spe: 166,
    atk: 250,
    def: 181,
    spa: 208,
    spd: 181,
    moves: [electric_moves.wild_charge, normal_moves.facade, fighting_moves.superpower],
    img: "http://play.pokemonshowdown.com/sprites/ani/luxray.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/luxray.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/luxray.mp3"
  },
  {
    name: "Togedemaru",
    level: 86,
    type: "electric",
    cond: null,
    turns: null,
    hp: 252,
    spe: 214,
    atk: 218,
    def: 158,
    spa: 118,
    spd: 175,
    moves: [bug_moves.u_turn, electric_moves.zing_zap, steel_moves.iron_head],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/togedemaru.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/togedemaru.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/togedemaru.mp3"
  },
];

var ice_mons = [
  /*
  {
    name: "Tummy-lugg",
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
      m2: ["Body Press", 80, 1, "atk", "fighting"],
     //recover
    },
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/avalugg.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/avalugg.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/avalugg.mp3"
  },
  
  {
    name: "Deli-Tummy",
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
  */
  {
    name: "Mamoswine",
    type: "ice",
    cond: null,
    turns: null,
    level: 82,
    hp: 315,
    spe: 178,
    atk: 300,
    def: 178,
    spa: 162,
    spd: 146,
    moves: [ice_moves.icicle_crash, fighting_moves.superpower, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani/mamoswine.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/mamoswine.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mamoswine.mp3"
  },
  {
    name: "Jynx",
    level: 88,
    type: "ice",
    cond: null,
    turns: null,
    hp: 243,
    spe: 205,
    atk: 88,
    def: 106,
    spa: 239,
    spd: 205,
    moves: [ice_moves.ice_beam, psychic_moves.psychic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/jynx.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/jynx.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/jynx.mp3"
  },
  {
    name: "Froslass",
    level: 86,
    type: "ice",
    cond: null,
    turns: null,
    hp: 261,
    spe: 161,
    atk: 116,
    def: 152,
    spa: 264,
    spd: 204,
    moves: [ghost_moves.shadow_ball, ice_moves.ice_beam, stat_moves.calm_mind],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/froslass.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back-shiny/froslass.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/froslass.mp3"
  },
  {
    name: "Beartic",
    level: 86,
    type: "ice",
    cond: null,
    turns: null,
    hp: 303,
    spe: 135,
    atk: 273,
    def: 187,
    spa: 170,
    spd: 187,
    moves: [ice_moves.icicle_crash, stat_moves.swords_dance, water_moves.water_jet, fighting_moves.superpower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/beartic.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/beartic.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/beartic.mp3"
  },
  {
    name: "Vanilluxe",
    level: 82,
    type: "ice",
    cond: null,
    turns: null,
    hp: 251,
    spe: 177,
    atk: 203,
    def: 187,
    spa: 228,
    spd: 203,
    moves: [stat_moves.recover, ice_moves.blizzard, steel_moves.flash_cannon],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/vanilluxe.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/vanilluxe.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/vanilluxe.mp3"
  },
];

var steel_mons = [
  {
    name: "Aggron",
    level: 79,
    type: "steel",
    cond: null,
    turns: null,
    hp: 240,
    spe: 125,
    atk: 219,
    def: 330,
    spa: 140,
    spd: 140,
    moves: [fighting_moves.body_press, rock_moves.head_smash, steel_moves.iron_head, stat_moves.rock_polish],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/aggron.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/aggron.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/aggron.mp3"
  },
  {
    name: "Metagross",
    level: 82,
    type: "steel",
    cond: null,
    turns: null,
    hp: 265,
    spe: 162,
    atk: 269,
    def: 260,
    spa: 203,
    spd: 195,
    moves: [electric_moves.thunder_punch, steel_moves.meteor_mash, psychic_moves.zen_headbutt, fighting_moves.hammer_arm],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/metagross.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/metagross.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/metagross.mp3"
  },
  {
    name: "Steelix",
    level: 84,
    type: "steel",
    cond: null,
    turns: null,
    hp: 263,
    spe: 99,
    atk: 191,
    def: 284,
    spa: 141,
    spd: 147,
    moves: [rock_moves.headsmash, steel_moves.heavy_slam, ground_moves.earthquake, stat_moves.iron_defense],
    img: "http://play.pokemonshowdown.com/sprites/ani/steelix.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/steelix.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/steelix.mp3"
  },
  {
    name: "Durant",
    level: 78,
    type: "steel",
    cond: null,
    turns: null,
    hp: 219,
    spe: 215,
    atk: 255,
    def: 220,
    spa: 120,
    spd: 120,
    moves: [steel_moves.iron_head, rock_moves.rock_slide, fighting_moves.superpower, bug_moves.x_scissor],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/durant.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/durant.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/durant.mp3"
  },
  {
    name: "Klefki",
    level: 82,
    type: "steel",
    cond: null,
    turns: null,
    hp: 228,
    spe: 170,
    atk: 178,
    def: 196,
    spa: 178,
    spd: 190,
    moves: [fairy_moves.dazzling_gleam, dark_moves.foul_play, steel_moves.flash_cannon, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/klefki.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/klefki.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/klefki.mp3"
  },
  {
    name: "Duraludon",
    level: 84,
    type: "steel",
    hp: 255,
    spe: 191,
    atk: 208,
    def: 241,
    spa: 250,
    spd: 132,
    moves: [dragon_moves.draco_meteor, fighting_moves.body_press, steel_moves.flash_cannon, stat_moves.iron_defense],
    img: "http://play.pokemonshowdown.com/sprites/ani/duraludon.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/duraludon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/duraludon.mp3"
  },
];

var ghost_mons = [
  {
    name: "Dusknoir",
    level: 75,
    type: "ghost",
    cond: null,
    turns: null,
    hp: 291,
    spe: 111,
    atk: 194,
    def: 246,
    spa: 141,
    spd: 246,
    moves: [ice_moves.ice_punch, ghost_moves.poltergeist, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dusknoir.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dusknoir.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dusknoir.mp3"
  },
  {
    name: "Jellicent",
    level: 84,
    type: "ghost",
    cond: null,
    turns: null,
    total_hp: 305,
    hp: 305,
    spe: 149,
    atk: 105,
    def: 166,
    spa: 191,
    spd: 225,
    moves: [ghost_moves.shadow_ball, ice_moves.ice_beam, water_moves.scald], 
    img: "http://play.pokemonshowdown.com/sprites/ani/jellicent.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back/jellicent.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/jellicent.mp3"
  },
  {
    name: "Palossand",
    level: 86,
    type: "ghost",
    cond: null,
    turns: null,
    total_hp: 286,
    hp: 286,
    spe: 109,
    atk: 134,
    def: 238,
    spa: 221,
    spd: 178,
    moves: [ghost_moves.shadow_ball, ground_moves.earth_power, stat_moves.shore_up, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/palossand.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/palossand.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/palossand.mp3"
  },
  {
    name: "Drifblim",
    level: 88,
    type: "ghost",
    cond: null,
    turns: null,
    hp: 407,
    spe: 191,
    atk: 145,
    def: 128,
    spa: 209,
    spd: 145,
    moves: [flying_moves.acrobatics, cond_moves.will_o_wisp, ghost_moves.shadow_ball, electric_moves.thunderbolt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/drifblim.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/drifblim.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/drifblim.mp3"
  },
  {
    name: "Gourgeist",
    type: "ghost",
    cond: null,
    turns: null,
    level: 84,
    hp: 263,
    spe: 164,
    atk: 208,
    def: 253,
    spa: 146,
    spd: 174,
    moves: [ghost_moves.poltergeist, grass_moves.power_whip, rock_moves.rock_slide],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gourgeist.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/gourgeist.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gourgeist.mp3"
  },
  {
    name: "Mismagius",
    level: 82,
    type: "ghost",
    cond: null,
    turns: null,
    hp: 233,
    spe: 219,
    atk: 105,
    def: 145,
    spa: 219,
    spd: 219,
    moves: [ghost_moves.shadow_ball, electric_moves.thunderbolt, fighting_moves.hidden_power_fighting],
    img: "http://play.pokemonshowdown.com/sprites/ani/mismagius.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/mismagius.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mismagius.mp3"
  },
];

var ground_mons = [
  {
    name: "Dugtrio",
    level: 80,
    type: "ground",
    cond: null,
    turns: null,
    hp: 184,
    spe: 238,
    atk: 174,
    def: 126,
    spa: 126,
    spd: 158,
    moves: [ground_moves.earthquake, rock_moves.rock_slide, flying_moves.drill_peck],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/dugtrio.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/dugtrio.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/dugtrio.mp3"
  },
  {
    name: "Donphan",
    level: 80,
    type: "ground",
    cond: null,
    turns: null,
    hp: 184,
    spe: 238,
    atk: 174,
    def: 126,
    spa: 126,
    spd: 158,
    moves: [ground_moves.earthquake, grass_moves.seed_bomb, ice_moves.ice_shard],
    img: "http://play.pokemonshowdown.com/sprites/ani/donphan.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/donphan.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/donphan.mp3"
  },
  {
    name: "Excadrill",
    level: 80,
    type: "ground",
    cond: null,
    turns: null,
    hp: 307,
    spe: 187,
    atk: 262,
    def: 142,
    spa: 126,
    spd: 150,
    moves: [steel_moves.iron_head, stat_moves.swords_dance, rock_moves.rock_slide, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/excadrill.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/excadrill.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/excadrill.mp3"
  },
  {
    name: "Rhypherior",
    level: 82,
    type: "ground",
    cond: null,
    turns: null,
    hp: 323,
    spe: 113,
    atk: 277,
    def: 260,
    spa: 137,
    spd: 137,
    moves: [rock_moves.stone_edge, ground_moves.earthquake, fire_moves.fire_punch, stat_moves.rock_polish],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/rhyperior.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/rhyperior.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/rhyperior.mp3"
  },
  {
    name: "Sandaconda",
    level: 84,
    type: "ground",
    cond: null,
    turns: null,
    hp: 258,
    spe: 167,
    atk: 228,
    def: 258,
    spa: 157,
    spd: 166,
    moves: [stat_moves.coil, rock_moves.stone_edge, cond_moves.glare, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/sandaconda.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/sandaconda.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/sandaconda.mp3"
  },
];

var fighting_mons = [
  {
    name: "Mahamp",
    level: 82,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 282,
    spe: 137,
    atk: 275,
    def: 178,
    spa: 154,
    spd: 187,
    moves: [steel_moves.bullet_punch, fighting_moves.close_combat, normal_moves.facade, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani/machamp.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/machamp.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/machamp.mp3"
  },
  {
    name: "Poliwrath",
    level: 84,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 288,
    spe: 166,
    atk: 208,
    def: 208,
    spa: 166,
    spd: 199,
    moves: [water_moves.liquidation, fighting_moves.close_combat, dark_moves.darkest_lariat, ice_moves.ice_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani/poliwrath.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/poliwrath.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/poliwrath.mp3"
  },
  {
    name: "Blaziken",
    level: 79,
    type: "fighting",
    total_hp: 256,
    hp: 256,
    spe: 172,
    atk: 235,
    def: 156,
    spa: 219,
    spd: 156,
    moves: [rock_moves.stone_edge, fighting_moves.high_jump_kick, fire_moves.flare_blitz],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/blaziken.gif",
    reverse:
      "http://play.pokemonshowdown.com/sprites/ani-back-shiny/blaziken.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/blaziken.mp3"
  },
  {
    name: "Falinks",
    level: 84,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 246,
    spe: 174,
    atk: 216,
    def: 216,
    spa: 166,
    spd: 149,
    moves: [rock_moves.rock_slide, poison_moves.poison_jab, fighting_moves.close_combat],
    img: "http://play.pokemonshowdown.com/sprites/ani/falinks.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/falinks.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/falinks.mp3"
  },
  {
    name: "Hitmonlee",
    level: 84,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 221,
    spe: 194,
    atk: 250,
    def: 137,
    spa: 107,
    spd: 233,
    moves: [dark_moves.sucker_punch, fighting_moves.close_combat, fire_moves.blaze_kick],
    img: "http://play.pokemonshowdown.com/sprites/ani/hitmonlee.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/hitmonlee.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/hitmonlee.mp3"
  },
  {
    name: "Conkeldurr",
    level: 80,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 299,
    spe: 118,
    atk: 350,
    def: 198,
    spa: 134,
    spd: 150,
    moves: [fighting_moves.drain_punch, ice_moves.ice_punch, electric_moves.thunder_punch, stat_moves.bulk_up],
    img: "http://play.pokemonshowdown.com/sprites/ani/conkeldurr.gif",
    reverse: "http://play.pokemonshowdown.com/sprites/ani-back/conkeldurr.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/conkeldurr.mp3"
  }
];
var tummymons = [normal_mons, fighting_mons, steel_mons, 
                 rock_mons, ground_mons, fairy_mons, 
                 psychic_mons, ghost_mons, dark_mons, 
                 bug_mons, electric_mons, grass_mons,
                 water_mons, fire_mons, ice_mons, 
                 flying_mons, poison_mons, dragon_mons];
var caitlyn = [
  {
    name: "Skarmory",
    level: 80,
    type: "steel",
    cond: null,
    turns: null,
    hp: 235,
    spe: 158,
    atk: 174,
    def: 270,
    spa: 110,
    spd: 158,
    moves: [flying_moves.brave_bird, steel_moves.iron_head, fighting_moves.body_press, stat_moves.roost],
    img: "http://play.pokemonshowdown.com/sprites/ani/skarmory.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/skarmory.mp3"
  },
  {
    name: "Aegislash",
    level: 82,
    type: "steel",
    cond: null,
    turns: null,
    hp: 231,
    spe: 105,
    atk: 228,
    def: 393,
    spa: 171,
    spd: 128,
    moves: [steel_moves.iron_head, ghost_moves.shadow_claw, stat_moves.swords_dance, fighting_moves.close_combat],
    img: "http://play.pokemonshowdown.com/sprites/ani/skarmory.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/skarmory.mp3"
  },
  {
    name: "Tummy-wile",
    level: 88,
    type: "steel",
    cond: null,
    turns: null,
    hp: 231,
    spe: 138,
    atk: 200,
    def: 200,
    spa: 147,
    spd: 147,
    moves: [fairy_moves.play_rough, dark_moves.sucker_punch, stat_moves.swords_dance, steel_moves.iron_head],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/mawile-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mawile-mega.mp3"
  },
  {
    name: "Magearna",
    level: 74,
    type: "steel",
    cond: null,
    turns: null,
    hp: 240,
    spe: 139,
    atk: 145,
    def: 213,
    spa: 235,
    spd: 213,
    moves: [steel_moves.flash_cannon, fighting_moves.focus_blast, fairy_moves.fleur_cannon, stat_moves.iron_defense],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/magearna.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/magearna.mp3"
  }
];
//lux
var baron = [
  {
    name: "Tummy-urchin",
    level: 88,
    type: "electric",
    cond: null,
    turns: null,
    hp: 228,
    spe: 77,
    atk: 228,
    def: 217,
    spa: 210,
    spd: 200,
    moves: [water_moves.scald, dark_moves.sucker_punch, electric_moves.rising_voltage],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pincurchin.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pincurchin.mp3"
  },
  {
    name: "Emolga",
    level: 88,
    type: "flying",
    cond: null,
    turns: null,
    hp: 240,
    spe: 232,
    atk: 137,
    def: 156,
    spa: 182,
    spd: 156,
    moves: [electric_moves.volt_switch, flying_moves.air_slash, normal_moves.return, cond_moves.thunder_wave],
    img: "http://play.pokemonshowdown.com/sprites/ani/emolga.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/emolga.mp3"
  },
  {
    name: "Xurkitree",
    level: 84,
    type: "electric",
    cond: null,
    turns: null,
    hp: 288,
    spe: 141,
    atk: 131,
    def: 174,
    spa: 241,
    spd: 199,
    moves: [grass_moves.energy_ball, electric_moves.thunderbolt, fairy_moves.dazzling_gleam, cond_moves.hypnosis],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/xurkitree.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/xurkitree.mp3"
  },
  {
    name: "Amph-Tummies",
    level: 84,
    type: "electric",
    cond: null,
    turns: null,
    hp: 288,
    spe: 141,
    atk: 131,
    def: 174,
    spa: 241,
    spd: 199,
    moves: [fire_moves.fire_punch, electric_moves.thunderbolt, fighting_moves.focus_blast, dragon_moves.dragon_pulse],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ampharos-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ampharos-mega.mp3"
  }
];

var lucian = [
  {
    name: "Barbaracle",
    level: 80,
    type: "rock",
    cond: null,
    turns: null,
    hp: 246,
    spe: 155,
    atk: 214,
    def: 230,
    spa: 133,
    spd: 184,
    moves: [water_moves.liquidation, stat_moves.shell_smash, fighting_moves.cross_chop, rock_moves.stone_edge],
    img: "http://play.pokemonshowdown.com/sprites/ani/barbaracle.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/barbaracle.mp3"
  },
  {
    name: "toxicroak",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    hp: 277,
    spe: 191,
    atk: 226,
    def: 157,
    spa: 193,
    spd: 157,
    moves: [ice_moves.ice_punch, fighting_moves.cross_chop, stat_moves.swords_dance, poison_moves.gunk_shot],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/toxicroak.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/toxicroak.mp3"
  }, 
  {
    name: "Krookodile",
    level: 82,
    type: "ground",
    cond: null,
    turns: null,
    hp: 290,
    spe: 198,
    atk: 239,
    def: 162,
    spa: 154,
    spd: 162,
    moves: [fighting_moves.close_combat, ground_moves.earthquake, rock_moves.stone_edge, dark_moves.crunch],
    img: "http://play.pokemonshowdown.com/sprites/ani/krookodile.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/krookodile.mp3"
  },
  {
    name: "Blast-Tummy",
    level: 82,
    type: "water",
    cond: null,
    turns: null,
    hp: 264,
    spe: 175,
    atk: 183,
    def: 211,
    spa: 187,
    spd: 219,
    moves: [water_moves.scald, ice_moves.ice_beam, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/blastoise-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/blastoise-mega.mp3"
  },
];
//done
// actually lillia
var angela = [
  {
    name: "Marowak",
    level: 84,
    type: "fire",
    cond: null,
    turns: null,
    hp: 238,
    spe: 124,
    atk: 200,
    def: 233,
    spa: 132,
    spd: 182,
    moves: [ghost_moves.shadow_bone, fire_moves.flare_blitz, ground_moves.earthquake, fighting_moves.close_combat],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/marowak-alola.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/marowak.mp3"
  },
  {
    name: "Passimian",
    level: 82,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 298,
    spe: 178,
    atk: 244,
    def: 195,
    spa: 113,
    spd: 146,
    moves: [rock_moves.rock_slide, poison_moves.gunk_shot, fighting_moves.close_combat, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/passimian.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/passimian.mp3"
  },
  {
    name: "Ludicolo",
    level: 86,
    type: "water",
    cond: null,
    turns: null,
    hp: 278,
    spe: 170,
    atk: 125,
    def: 170,
    spa: 204,
    spd: 221,
    moves: [ice_moves.ice_beam, grass_moves.giga_drain, water_moves.scald],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ludicolo.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ludicolo.mp3"
  },
  {
    name: "volcarona",
    level: 76,
    type: "bug",
    cond: null,
    turns: null,
    hp: 254,
    spe: 196,
    atk: 96,
    def: 143,
    spa: 249,
    spd: 204,
    moves: [grass_moves.giga_drain, fire_moves.fire_blast, bug_moves.bug_buzz, stat_moves.quiver_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani/volcarona.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/volcarona.mp3"
  }
];

//actually sona
var thomas = [
  {
    name: "Florges",
    level: 268,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 268,
    spe: 174,
    atk: 114,
    def: 162,
    spa: 236,
    spd: 307,
    moves: [grass_moves.giga_drain, fairy_moves.moonblast, cond_moves.toxic, stat_moves.morning_sun],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/florges.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/florges.mp3"
  },
  {
    name: "Musharna",
    level: 88,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 347,
    spe: 101,
    atk: 101,
    def: 200,
    spa: 239,
    spd: 217,
    moves: [stat_moves.calm_mind, bug_moves.signal_beam, psychic_moves.psybeam, stat_moves.recover],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/musharna.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/musharna.mp3"
  },
  {
    name: "Diancie",
    level: 82,
    type: "fairy",
    cond: null,
    turns: null,
    hp: 216,
    spe: 129,
    atk: 211,
    def: 293,
    spa: 211,
    spd: 293,
    moves: [ground_moves.earth_power, rock_moves.diamond_storm, fairy_moves.moonblast, stat_moves.rock_polish],
    img: "http://play.pokemonshowdown.com/sprites/ani/diancie-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/diancie-mega.mp3"
  },
  
  {
    name: "Hatterene",
    level: 86,
    type: "fairy",
    cond: null,
    type: null,
    hp: 238,
    spe: 99,
    atk: 159,
    def: 213,
    spa: 283,
    spd: 226,
    moves: [psychic_moves.psyshock, fire_moves.mystical_fire, fairy_moves.dazzling_gleam, stat_moves.calm_mind ],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/hatterene.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/hatterene.mp3"
  }
];
//done senna
var olivia = [
  {
    name: "noivern",
    level: 82,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 274,
    spe: 249,
    atk: 119,
    def: 178,
    spa: 206,
    spd: 178,
    moves: [dragon_moves.dragon_claw, flying_moves.hurricane, bug_moves.u_turn, rock_moves.head_smash],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/noivern.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/noivern.mp3"
  },
  {
    name: "toxtricity",
    level: 82,
    type: "poison",
    cond: null,
    turns: null,
    hp: 257,
    spe: 170,
    atk: 165,
    def: 162,
    spa: 234,
    spd: 162,
    moves: [stat_moves.shift_gear, electric_moves.overdrive, poison_moves.sludge_wave, normal_moves.boomburst],
    img:
      "http://play.pokemonshowdown.com/sprites/ani-shiny/toxtricity-gmax.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/toxtricity.mp3"
  },
  {
    name: "salazzle",
    level: 84,
    type: "poison",
    cond: null,
    turns: null,
    hp: 251,
    spe: 245,
    atk: 112,
    def: 149,
    spa: 235,
    spd: 149,
    moves: [poison_moves.sludge_wave, fire_moves.fire_blast, grass_moves.hidden_power_grass, stat_moves.nasty_plot],
    img:
      "http://play.pokemonshowdown.com/sprites/ani-shiny/salazzle.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/salazzle.mp3"
  },
  {
    name: "zygarde",
    level: 82,
    type: "dragon",
    cond: null,
    turns: null,
    hp: 223,
    spe: 236,
    atk: 211,
    def: 164,
    spa: 147,
    spd: 187,
    moves: [stat_moves.dragon_dance, dragon_moves.draco_meteor, ground_moves.thousand_arrows, normal_moves.extreme_speed],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/zygarde-10.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/zygarde-10.mp3"
  }
];
//done yone
var marcie = [
  {
    name: "abomasnow",
    level: 82,
    type: "ice",
    cond: null,
    turns: null,
    hp: 282,
    spe: 146,
    atk: 198,
    def: 170,
    spa: 198,
    spd: 200,
    moves: [grass_moves.wood_hammer, ice_moves.blizzard, ground_moves.earthquake],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/abomasnow-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/abomasnow-mega.mp3"
  },
  {
    name: "frosmoth",
    level: 82,
    type: "ice",
    cond: null,
    turns: null,
    hp: 249,
    spe: 154,
    atk: 111,
    def: 146,
    spa: 252,
    spd: 195,
    moves: [bug_moves.bug_buzz, stat_moves.quiver_dance, ice_moves.ice_beam, grass_moves.giga_drain],
    img: "http://play.pokemonshowdown.com/sprites/ani/frosmoth.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/frosmoth.mp3"
  },
  {
    name: "Lapras",
    level: 86,
    type: "water",
    cond: null,
    turns: null,
    hp: 363,
    spe: 152,
    atk: 151,
    def: 187,
    spa: 195,
    spd: 213,
    moves: [water_moves.sparkling_aria, ice_moves.ice_beam, electric_moves.thunderbolt, cond_moves.toxic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lapras.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lapras.mp3"
  },
  {
    name: "Aurorus",
    level: 84,
    type: "rock",
    cond: null,
    turns: null,
    hp: 343,
    spe: 146,
    atk: 134,
    def: 169,
    spa: 215,
    spd: 203,
    moves: [ice_moves.blizzard, ground_moves.earth_power, rock_moves.stone_edge],
    img: "http://play.pokemonshowdown.com/sprites/ani/aurorus.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/aurorus.mp3"
  },
];
//viktor
var oskii = [
   {
    name: "Pyroar",
    level: 88,
    type: "fire",
    cond: null,
    turns: null,
    hp: 295,
    spe: 237,
    atk: 124,
    def: 177,
    spa: 242,
    spd: 166,
    moves: [normal_moves.hyper_voice, fire_moves.fire_blast, grass_moves.solar_beam],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pyroar.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pyroar.mp3"
  },
  {
    name: "Tummy-geot",
    level: 87,
    type: "flying",
    cond: null,
    turns: null,
    hp: 286,
    spe: 208,
    atk: 189,
    def: 180,
    spa: 172,
    spd: 172,
    moves: [normal_moves.double_edge, flying_moves.drill_peck, bug_moves.u_turn, fire_moves.heat_wave],
    img: "http://play.pokemonshowdown.com/sprites/ani/pidgeot-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pidgeot-mega.mp3"
  },
  {
    name: "Chesnaught",
    level: 82,
    type: "grass",
    cond: null,
    turns: null,
    hp: 278,
    spe: 152,
    atk: 223,
    def: 247,
    spa: 169,
    spd: 170,
    moves: [fighting_moves.drain_punch, grass_moves.wood_hammer],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/chesnaught.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/chesnaught.mp3"
  },
  {
    name: "snorlax",
    level: 82,
    type: "normal",
    cond: null,
    turns: null,
    hp: 297,
    spe: 96,
    atk: 228,
    def: 154,
    spa: 154,
    spd: 228,
    moves: [stat_moves.rest, normal_moves.body_slam, dark_moves.crunch, fighting_moves.body_press],
    img: "http://play.pokemonshowdown.com/sprites/ani/snorlax.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/snorlax.mp3"
  },
]
var evelynn = [
  {
    name: "Gengar",
    level: 227,
    type: "ghost",
    cond: null,
    turns: null,
    hp: 227,
    spe: 222,
    atk: 109,
    def: 142,
    spa: 254,
    spd: 166,
    moves: [poison_moves.sludge_wave, electric_moves.thunderbolt, fighting_moves.focus_blast, ghost_moves.shadowball],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gengar-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gengar-mega.mp3"
  },
  {
    name: "Medicham",
    level: 84,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 238,
    spe: 250,
    atk: 200,
    def: 174,
    spa: 149,
    spd: 174,
    moves: [psychic_moves.zen_headbutt, fighting_moves.high_jump_kick, ice_moves.ice_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani/medicham-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/medicham-mega.mp3"
  },
  {
    name: "Chandelure",
    level: 84,
    type: "ghost",
    cond: null,
    turns: null,
    hp: 238,
    spe: 183,
    atk: 97,
    def: 199,
    spa: 292,
    spd: 199,
    moves: [cond_moves.will_o_wisp, ghost_moves.shadow_ball, fire_moves.fire_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/chandelure.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/chandelure.mp3"
  },
  {
    name: "Claydol",
    level: 82,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 233,
    spe: 170,
    atk: 162,
    def: 252,
    spa: 162,
    spd: 244,
    moves: [stat_moves.calm_mind, ground_moves.earthquake, psychic_moves.psychic, ice_moves.ice_beam],
    img: "http://play.pokemonshowdown.com/sprites/ani/claydol.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/claydol.mp3"
  }
];
//done yasuo
var avery = [
  {
    name: "Houndoom",
    level: 82,
    type: "dark",
    cond: null,
    turns: null,
    hp: 257,
    spe: 203,
    atk: 194,
    def: 129,
    spa: 227,
    spd: 178,
    moves: [dark_moves.dark_pulse, fire_moves.fire_blast, grass_moves.hidden_power_grass, stat_moves.nasty_plot],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/houndoom-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/houndoom-mega.mp3"
  },
  {
    name: "Marshadow",
    type: "fight",
    level: 70,
    cond: null,
    turns: null,
    hp: 242,
    spe: 216,
    atk: 216,
    def: 153,
    spa: 167,
    spd: 167,
    moves: [ghost_moves.spectral_thief, fighting_moves.close_combat, dark_moves.darkest_lariat],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/marshadow.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/marshadow.mp3"
  },
  {
    name: "Bisharp",
    level: 82,
    type: "dark",
    cond: null,
    turns: null,
    hp: 241,
    spe: 162,
    atk: 252,
    def: 211,
    spa: 146,
    spd: 162,
    moves: [steel_moves.iron_head, dark_moves.sucker_punch, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani/bisharp.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/bisharp.mp3"
  },
  {
    name: "Zoroark",
    type: "dark",
    level: 86,
    cond: null,
    turns: null,
    hp: 243,
    spe: 230,
    atk: 230,
    def: 152,
    spa: 256,
    spd: 152,
    moves: [bug_moves.u_turn, dark_moves.dark_pulse, fire_moves.flamethrower],
    img: "http://play.pokemonshowdown.com/sprites/ani/zoroark.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/zoroark.mp3"
  }
];
//done
var vicky = [
  {
    name: "Staraptor",
    level: 81,
    type: "flying",
    cond: null,
    turns: null,
    hp: 270,
    spe: 209,
    atk: 241,
    def: 160,
    spa: 128,
    spd: 128,
    moves: [fighting_moves.close_combat, normal_moves.double_edge, flying_moves.brave_bird],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/staraptor.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/staraptor.mp3"
  },
  {
    name: "Decidueye",
    level: 86,
    type: "grass",
    cond: null,
    turns: null,
    hp: 274,
    spe: 170,
    atk: 2333,
    def: 178,
    spa: 221,
    spd: 221,
    moves: [grass_moves.leaf_blade, ghost_moves.spirit_shackle, stat_moves.roost, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/decidueye.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/decidueye.mp3"
  },
  {
    name: "Flygon",
    level: 80,
    type: "ground",
    cond: null,
    turns: null,
    hp: 259,
    spe: 206,
    atk: 206,
    def: 174,
    spa: 174,
    spd: 174,
    moves: [ground_moves.earthquake, dragon_moves.dragon_claw, stat_moves.dragon_dance, fire_moves.fire_punch],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/flygon.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/flygon.mp3"
  },
  {
    name: "Unfezant",
    level: 84,
    type: "flying",
    cond: null,
    turns: null,
    hp: 271,
    spe: 204,
    atk: 241,
    def: 183,
    spa: 157,
    spd: 141,
    moves: [bug_moves.u_turn, flying_moves.brave_bird, dark_moves.night_slash, stat_moves.roost],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/marshadow.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/marshadow.mp3"
  }
];
var gwen = [
  {
    name: "ambipom",
    level: 86,
    type: "normal",
    cond: null,
    turns: null,
    hp: 269,
    spe: 247,
    atk: 221,
    def: 163,
    spa: 152,
    spd: 163,
    moves: [grass_moves.seed_bomb, fighting_moves.cross_chop, normal_moves.return],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ambipom.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ambipom.mp3"
  },
  {
    name: "Shaymin",
    level: 82,
    type: "grass",
    cond: null,
    turns: null,
    hp: 298,
    spe: 211,
    atk: 169,
    def: 211,
    spa: 211,
    spd: 211,
    moves: [grass_moves.seed_flare, ground_moves.earth_power, psychic_moves.psychic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/shaymin.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shaymin.mp3"
  },
  {
    name: "Shaymin-sky",
    level: 78,
    type: "grass",
    cond: null,
    turns: null,
    hp: 284,
    spe: 243,
    atk: 167,
    def: 161,
    spa: 162,
    spd: 162,
    moves: [grass_moves.seed_flare, ice_moves.hidden_power_ice, flying_moves.air_slash],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/shaymin-sky.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/shaymin-sky.mp3"
  },
  {
    name: "victini",
    level: 78,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 283,
    spe: 201,
    atk: 251,
    def: 201,
    spa: 201,
    spd: 101,
    moves: [electric_moves.bolt_strike, fire_moves.v_create, bug_moves.u_turn, psychic_moves.zen_headbutt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/victini.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/victini.mp3",
  }
];
var rakan = [
  {
    name: "Lopunny",
    level: 87,
    type: "normal",
    cond: null,
    turns: null,
    hp: 255,
    spe: 232,
    atk: 273,
    def: 196,
    spa: 144,
    spd: 217,
    moves: [ice_moves.ice_punch, fighting_moves.jump_kick, fire_moves.fire_punch, normal_moves.return],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lopunny-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lopunny-mega.mp3"
  },
  {
    name: "Mienshao",
    level: 82,
    type: "fighting",
    cond: null,
    turns: null,
    hp: 241,
    spe: 219,
    atk: 252,
    def: 146,
    spa: 203,
    spd: 146,
    moves: [fighting_moves.high_jump_kick, rock_moves.stone_edge, dark_moves.knock_off, stat_moves.swords_dance],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/mienshao.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/mienshao.mp3"
  },
  {
    name: "Delphox",
    level: 84,
    type: "fire",
    cond: null,
    turns: null,
    hp: 263,
    spe: 223,
    atk: 120,
    def: 169,
    spa: 240,
    spd: 216,
    moves: [stat_moves.calm_mind, ghost_moves.shadow_ball, psychic_moves.psyshock, fire_moves.fire_blast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/delphox.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/delphox.mp3"
  },
  {
    name: "Ninetales",
    type: "ice",
    level: 82,
    cond: null,
    turns: null,
    hp: 254,
    spe: 226,
    atk: 114,
    def: 170,
    spa: 180,
    spd: 211,
    moves: [ice_moves.blizzard, grass_moves.energy_ball, fairy_moves.moonblast],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/ninetales-alola.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/ninetales.mp3"
  }
];

var xayah = [
  {
    name: "Tummy-nine",
    type: "fire",
    level: 82,
    cond: null,
    turns: null,
    hp: 282,
    spe: 203,
    atk: 228,
    def: 178,
    spa: 211,
    spd: 178,
    moves: [normal_moves.extreme_speed, fire_moves.flare_blitz, electric_moves.wild_charge],
    img: "http://play.pokemonshowdown.com/sprites/ani/arcanine.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/arcanine.mp3"
  },
  {
    name: "Tsareena",
    level: 84,
    type: "grass",
    cond: null,
    turns: null,
    hp: 258,
    spe: 169,
    atk: 250,
    def: 213,
    spa: 132,
    spd: 213,
    moves: [grass_moves.power_whip, fighting_moves.high_jump_kick, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/tsareena.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/tsareena.mp3"
  },
  {
    name: "Gallade",
    level: 84,
    type: "psychic",
    cond: null,
    turns: null,
    hp: 251,
    spe: 183,
    atk: 258,
    def: 157,
    spa: 157,
    spd: 241,
    moves: [stat_moves.swords_dance, fighting_moves.close_combat, dark_moves.night_slash, psychic_moves.zen_headbutt],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/gallade-mega.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/gallade-mega.mp3"
  },
  {
    name: "pangoro",
    type: "fight",
    level: 86,
    cond: null,
    turns: null,
    hp: 204,
    spe: 149,
    atk: 263,
    def: 183,
    spa: 168,
    spd: 171,
    moves: [poison_moves.gunk_shot, fighting_moves.drain_punch, ice_moves.ice_punch, dark_moves.knock_off],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pangoro.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pangoro.mp3"
  },
];
var morgana = [
  {
    name: "Lurantis",
    level: 86,
    type: "grass",
    cond: null,
    turns: null,
    hp: 261,
    spe: 127,
    atk: 230,
    def: 204,
    spa: 187,
    spd: 204,
    moves: [dark_moves.knock_off, grass_moves.leaf_storm, fighting_moves.superpower],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/lurantis.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/lurantis.mp3"
  },

  {
    name: "Beautifly",
    level: 84,
    type: "bug",
    cond: null,
    turns: null,
    hp: 258,
    spe: 169,
    atk: 250,
    def: 213,
    spa: 132,
    spd: 213,
    moves: [fighting_moves.hidden_power_fighting, bug_moves.bug_buzz, psychic_moves.psychic],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/beautifly.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/beautifly.mp3"
  },
  {
    name: "pheromosa",
    level: 75,
    type: "bug",
    cond: null,
    turns: null,
    hp: 233,
    spe: 274,
    atk: 252,
    def: 100,
    spa: 252,
    spd: 100,
    moves: [dark_moves.throat_chop, fighting_moves.high_jump_kick, poison_moves.poison_jab, bug_moves.x_scissor],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/pheromosa.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/pheromosa.mp3"
  },
  
  {
    name: "Butterfree",
    level: 88,
    type: "bug",
    cond: null,
    turns: null,
    hp: 249,
    spe: 173,
    atk: 84,
    def: 138,
    spa: 209,
    spd: 191,
    moves: [grass_moves.energy_ball, bug_moves.bug_buzz, psychic_moves.pyschic, cond_moves.sleep_poweder],
    img: "http://play.pokemonshowdown.com/sprites/ani-shiny/butterfree-gmax.gif",
    sound: "https://play.pokemonshowdown.com/audio/cries/butterfree-gmax.mp3"
  },
  
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

var enemy_array = sharky;
var current_enemy = sharky[0];
var current_ally = playerTeam[0];
var current_elite = "Sharky";

function display_button() {

}
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
  if (current_elite === "Sharky") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F118535.jpg?v=1614975819765')";
    x.style.backgroundColor = "#89CFF0";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2FPkmnTrainer_000.png?v=1609791576529"
    );
    x.innerHTML =
      "<h3> Greetings I am Sharky, the first out of the 4 you will face but certainly not the weakest. I specialize in solely water type tummymon. Why you may ask? I believe that water is graceful and elegant.. and truly beautiful.  I was raised on the coastline where i interacted with these beautiful water type tummymon for years, and now I am an expert in training and communicating with them. We are in harmony, and theres no way you'll beat us! </h3>";
  } else if (current_elite == "Marcie") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F3119409.jpg?v=1615777950115')";
    x.style.backgroundColor = "#C489F0";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy.png?v=1609791581817"
    );
    x.innerHTML =
      "<h3> Hi challenger! My names Marcie~ the cutest and youngest elite member! I am a master of psychic tummymon! Ghost type freaks me out, and fairy type is just way tooo dainty for a girl like me! Psychic tummymon- is a perfect blend of power, intelligence and beauty! I was a challenger last year, however I got overtaken. So by joining the Elite four I hope that I can prove that I am worthy of being the champion- I wont let u get in my way! </h3>";
  } else if (current_elite == "Oskii") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F203198.jpg?v=1615851603518')";
    x.style.backgroundColor = "#C7AA74";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski.png?v=1609791579445"
    );
    x.innerHTML =
      "<h3>WOah hey! way to interrupt my workout sess! the names Oskii, an expert with the powerful rock tummymon. Not only are rock tummymon the perfect fitness buddies, but I admire how protective they are. If you beat Sharky and Marcie that means that you really have potential! So, not to set the bar high, but I am expecting the best battle out of you!</h3>";
  } else if (current_elite == "Baron") {
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
      "! I see that you have made it this far, which is amazing! My name is Baronette, but you can just call me Baron. I have the most experience on the Elite team, having been here for 3 years now, and thats why I am the very last one you shall challenge- save the best for last! I am sooooo pumped to finally battle someone, so lets get this party started with my beautiful and fierce dragon tummymon! Prove to me that your worthy to become the new champion!";
  } else if (current_elite == "Thomas") {
    y.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F34363.jpg?v=1615922975718')";
    x.style.backgroundColor = "white";
    var image = document.createElement("IMG");
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ftummy.png?v=1609791573862"
    );
    x.innerHTML =
      "<h3>Greetings " +
      name +
      ", I am Thomas, the current champion of the Tummysa Region, also known by my fans as the 'Fantastic Ultimate Battler'! <br> I have been the Champion of the region for a year now, and not a single challenger has been able to beat me yet. My tummymon has been raised with love and care, and I have been able to excell through the strong trust and love I have established with them. Will you be the first one to beat our power of friendship? Let's find out! </h3>";
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
  } else if (x == "Sharky") {
    audio = document.getElementById("s_theme");
  } else if (x == "Marcie") {
    audio = document.getElementById("m_theme");
  } else if (x == "Baron") {
    audio = document.getElementById("b_theme");
  } else if (x == "Oskii") {
    audio = document.getElementById("o_theme");
  } else if (x == "encounter") {
    audio = document.getElementById("encounter");
  }
  audio.volume = 0.1;
  if (x == "Thomas") {
    audio = document.getElementById("t_theme");
    audio.volume = 0.2;
  }

  audio.play();
}

function load_hp(playermon, enemymon) {
  var bar1 = document.getElementById("hpbar1");
  bar1.style.visibility = "visible";
  var bar2 = document.getElementById("hpbar2");
  bar2.style.visibility = "visible";
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
  if (arr == sharky) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ficon1.png?v=1610218688331";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F3.png?v=1609905007042')";
  } else if (arr == marcie) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy%20(2).png?v=1615777814479";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F7.png?v=1609905018553')";
  } else if (arr == oskii) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski%20(4).png?v=1615852335090";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F2.png?v=1609905003589')";
  } else if (arr == baron) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fbaron%20(3).png?v=1615860497532";
    x.style.backgroundImage =
      "url('https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2F6.png?v=1609905014525')";
  } else if ((arr = thomas)) {
    document.getElementById("battleimage").src =
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ftummy%20(3).png?v=1615923329455";
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
  switchout.innerHTML = "Switch Tummymon";
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
            "The enemy tummymon appears to be immune to the attack. ";
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
            "The enemy tummymon appears to be immune to the attack... ";
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
      "You are out of tummymon.... You have lost the battle";
    if (chances > 0 && current_enemy != "Sharky") {
      document.getElementById("battlemessage").innerHTML +=
        ". Try again from previous elite? You have " +
        chances +
        " chances left. Click restart at the bottom of the page to restart <br>";
      var tryagain = document.createElement("BUTTON");
      tryagain.innerHTML = "Try again";
      document.getElementById("battlemessage").appendChild(tryagain);
      var arr = sharky;
      var enemy = "Sharky";
      if (current_enemy == "Oskii") {
        arr = marcie;
        enemy = "Marcie";
      } else if (current_enemy == "Baron") {
        arr = oskii;
        enemy = "Oskii";
      } else if (current_enemy == "Thomas") {
        arr = baron;
        enemy = "Baron";
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
      " tummymon left<br>Please enter the number of the pokemon you would like to send out next";
    document.getElementById("switchdead").style.visibility = "visible";
    // switch tummymon
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
    // display you are out of pokemon
    // restart from previous battle?
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
  if (elite == "Sharky") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2FPkmnTrainer_000.png?v=1609791576529"
    );
    x.innerHTML =
      " <h3> Wow, congratulations " +
      name +
      "! What a fun an exiting battle! Seems like you were capable of breaking my jaws, an act not many trainers are capable of! Though I am only the first out of the four you will face. I wish you luck on your next battle </h3>";
    enemy_array = marcie;
    current_enemy = marcie[0];
    current_ally = playerTeam[0];
    current_elite = "Marcie";
  } else if (elite == "Marcie") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fmarcy.png?v=1609791581817"
    );
    x.innerHTML =
      "<h3> What??? This is impossible. I guess I am not so suited to be champion after all! Your battlestyle is quite impressive, I guess you have my permission to move on.. If you beat me, you can definetly beat the champion! </h3>";
    enemy_array = oskii;
    current_enemy = oskii[0];
    current_ally = playerTeam[0];
    current_elite = "Oskii";
  } else if (elite == "Oskii") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Foski.png?v=1609791579445"
    );
    x.innerHTML =
      "<h3> Oh boy am I sweating!!! Haven't had such an intense battle in a while! Even my dear Tyra couldn't prevent my defeat, haha! You did amazing there, so represent this victory by defeating the last elite and the champion! And hopefully I can challenge you again! </h3>";
    enemy_array = baron;
    current_enemy = baron[0];
    current_ally = playerTeam[0];
    current_elite = "Baron";
  } else if (elite == "Baron") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Fbaron.png?v=1609791567849"
    );
    x.innerHTML =
      "<h3> Oh my gosh that was exhilarating! You absolutely blew me and my dragons out! I haven't encountered such a phenomenal opponent in a while, which makes you, " +
      name +
      " a very worthy candidate of becoming the next champion! So go on, good luck on your last battle, show the champion what you've got! </h3>";
    enemy_array = thomas;
    current_enemy = thomas[0];
    current_ally = playerTeam[0];
    current_elite = "Thomas";
  } else if (elite == "Thomas") {
    image.setAttribute(
      "src",
      "https://cdn.glitch.com/27bb4c34-4938-4841-987f-9b91a0ee26a4%2Ftummy.png?v=1609791573862"
    );
    current_elite = "done";
    x.innerHTML =
      "<h3> Congratulations " +
      name +
      "...  You really proved to me why you should hold the title of Champion of the Tummysa region. It appears that the bond between you and your Tummymon is even stronger than mine! Don't you worry about keeping your responsibilites as champion however, because I'll be back to reclaim my position. I will see you again, and don't let me down! </h3>";
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
