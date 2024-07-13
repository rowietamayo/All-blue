var continentObject = {
  "East Blue": {
    "Dawn-Island": [
      "Foosha Village",
      "Mt. Colubo",
      "Gray Terminal",
      "Midway Forest",
      "Goa Kingdom",
    ],
    "Goat-Island": [],
    "Shells Town": [],
    "Shimotsuki Village": [],
    "Organ Island": ["Orange Town"],
    "Island of Rare Animals": [],
    "Gecko Islands": ["Syrup Village"],
    Baratie: [],
    "Conomi Islands": ["Gosa Village", "Cocoyasi Village", "Arlong Park"],
    Loguetown: [],
    "Kumate Island": [],
    "Mirrorball Island": [],
    "Tequila Wolf": [],
    Cozia: [],
    "Oykot Kingdom": [],
    Sixis: [],
  },
  "West Blue": {
    Ohara: [],
    Ilusia: [],
    "Thriller Bark": [],
    Toroa: [],
    "Las Camp": [],
    "Kano Country": [],
  },
  "North Blue": {
    "Germa Kingdom": [],
    "Lvneel Kingdom": [],
    Micqueot: [],
    "Spider Miles": [],
    Flevance: [],
    "Rubeck Island": [],
    "Swallow Island": [],
    "Minion Island": [],
    Rakesh: [],
    Notice: [],
    "Kuen Village": [],
  },
  "South Blue": {
    "Briss Kingdom": [],
    "Karate Island": [],
    Centaurea: [],
    "Torino Kingdom": [],
    Baterilla: [],
    "Black Drum Kingdom": [],
    "Sorbet Kingdom": [],
  },
  "Red line": {
    "Reverse Mountain": [],
    "Twin Cape": [],
    "Mary Geoise": ["Pangaea Castle", "Domain of the Gods"],
    "Red Port": [],
  },
  "Calm Belt": {
    "Amazon Lily": [],
    "Impel Down": [],
    Rusukaina: [],
  },
};
window.onload = function () {
  var continentSel = document.getElementById("continent");
  var islandSel = document.getElementById("island");
  var villageSel = document.getElementById("village");
  for (var x in continentObject) {
    continentSel.options[continentSel.options.length] = new Option(x, x);
  }
  continentSel.onchange = function () {
    //empty villages- and islands- dropdowns
    villageSel.length = 1;
    islandSel.length = 1;
    //display correct values
    for (var y in continentObject[this.value]) {
      islandSel.options[islandSel.options.length] = new Option(y, y);
    }
  };
  islandSel.onchange = function () {
    //empty villages dropdown
    villageSel.length = 1;
    //display correct values
    var z = continentObject[continentSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      villageSel.options[villageSel.options.length] = new Option(z[i], z[i]);
    }
  };
};

//snail

// function changeSnail(event) {
//   var gender = document.getElementById("gender");
//   const submitBtn = document.querySelector("input[type=submit]");

//   if (gender.value === "f") {
//     submitBtn.style.color = "blue";
//     submitBtn.prepend("happy");
//   }
// }

//
