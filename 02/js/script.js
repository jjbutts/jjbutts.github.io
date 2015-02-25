// Dirty Talk Generator for sexually inhibited men

// Get HTML Elements
var button = document.getElementById("button");
var verb = document.getElementById("verb");
var adj = document.getElementById("adj");
var body = document.getElementById("body");

// Arrays of words
var verbArray = ["kiss", "nibble", "grab", "squeeze", "cuddle", "caress", "motorboat", "love", "suck", "bite", "pinch", "hug", "stroke", "lick", "tickle", "massage", "ravage", "tease", "feel", "plunder", "diddle", "spit on", "pull", "finger", "spank", "unveil","pleasure", "eat", "taste", "smell", "stimulate", "submit to", "dominate", "caress", "ride", "hump", 

'poke'];
var bodyArray = ["lips", "mouth", "tongue", "ears", "boobies", "butt cheeks", "thighs", "calves", "neck", "feet", "smile", "cheeks", "hair", "nipples", "ass", "toes", "fingers", "waist", "hooha", "vulva", "areolas", "bunghole", "sweater zeppelins", "melons", "ta-tas", "coochie", "cha-cha", "titties", "pink taco", "taint","asscrack","underboob", "genitals", "saddlebags","underlip", "jugs", "cooter", "muffin","rack", "clitoris", "breasts", "va-jay-jay", "nips", "hooters", "rump"];
var adjArray = ["beautiful", "sexy", "big", "voluptuous", "perfect", "irresistable", "shapely", "pretty", "smooth", "dirty", "nasty", "round", "tasty", "hot", "gorgeous", "slender", "soft", "wet", "moist", "perky", "bouncy", "firm", "fat", "sweaty", "pink", "fucking", "goddamn","poor", "stinky", "stinky", "tender", "bangin'", "sopping", "dry", "throbbing", "sweet", "luscious", "mouthwatering", "breathtaking", "raunchy", "naked", "sassy", "sultry", "slippery", "greasy", "quivering", "silky", "juicy", "kissable", "titilating", "inviting", "tantalizing"];

// Get random __ functions
function getRandomVerb() {
	var randNum = Math.floor(Math.random() * verbArray.length);
	return verbArray[randNum];
}

function getRandomBody() {
	var randNum = Math.floor(Math.random() * bodyArray.length);
	return bodyArray[randNum];
}

function getRandomAdj() {
	var randNum = Math.floor(Math.random() * adjArray.length);
	return adjArray[randNum];
}

button.onclick = function () {
	verb.innerHTML = getRandomVerb();
	adj.innerHTML = getRandomAdj();
	body.innerHTML = getRandomBody() + ".";
};

