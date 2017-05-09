console.log("hey");
var dogFood = document.getElementById("dogFood");
var array1 = []
var array2 = []
var brand1 = ""
var brand2 = ""
var array3 = []
var array4 = []
var chuckwagontypes = []
var purinatypes = []
var chuckwagonall = []
var chuckwagonstd = []
var chuckwagonallnatural = {};
var chuckwagonstandard = {};
var purinapup = []
var purinastd = []
var chuckwagonastandard58oz = {}
var chuckwagonalstandard72oz = {}
var	chuckwagonallnatural32oz = {}
var	chuckwagonallnatural64oz = {}
var	purinapuppy16oz = {}
var	purinapuppy24oz = {}
var	purinastandard58oz = {}
var	purinastandard72oz = {}
function populate(products, type){
	for(x in products){
		let card = `<section class="cards" id="${x}">
						<h2>${brand1} - ${type}</h2>
						<h4>${products[x].name}</h4>
						<h4>${products[x].price}</h4>
					</section>`
		dogFood.innerHTML += card;			
	}
};
function stage1(one, two){
	brand1 = one[0].name;
	brand2 = two[0].name;
	chuckwagontypes.push(one[0].types);
	purinatypes.push(two[0].types);
	chuckwagonallnatural = chuckwagontypes[0];
	chuckwagonstandard = chuckwagontypes[1];
	chuckwagonstandard58oz = chuckwagonallnatural[1].volumes[0];
	chuckwagonstandard72oz = chuckwagonallnatural[1].volumes[1];
	chuckwagonallnatural32oz = chuckwagonallnatural[0].volumes[0];
	chuckwagonallnatural64oz = chuckwagonallnatural[0].volumes[1];
	console.log(chuckwagonallnatural32oz);
	console.log(chuckwagonstandard58oz);
	console.log(chuckwagonallnatural64oz);
	console.log(chuckwagonstandard72oz);
	chuckwagonall.push(chuckwagonallnatural32oz);
	chuckwagonstd.push(chuckwagonstandard58oz);
	chuckwagonall.push(chuckwagonallnatural64oz);
	chuckwagonstd.push(chuckwagonstandard72oz);
	purinapuppy = purinatypes[0];
	purinastandard = purinatypes[1];
	purinapuppy16oz = purinapuppy[0].volumes[0];
	purinapuppy24oz = purinapuppy[0].volumes[1];
	purinastandard58oz = purinapuppy[1].volumes[0];
	purinastandard72oz = purinapuppy[1].volumes[1];
	console.log(purinapuppy16oz);
	console.log(purinapuppy24oz);
	console.log(purinastandard58oz);
	console.log(purinastandard72oz);
	purinapup.push(purinapuppy16oz);
	purinapup.push(purinapuppy24oz);
	purinastd.push(purinastandard58oz);
	purinastd.push(purinastandard72oz);
};
console.log("load message running");
var loader = new XMLHttpRequest();
loader.addEventListener("load", function(){
	foodArray = JSON.parse(loader.responseText);
	array1.push(foodArray.dog_brands[0]);
	array2.push(foodArray.dog_brands[1]);
	stage1(array1, array2);
	populate(chuckwagonall, "All Natural");
	populate(chuckwagonstd, "Standard");
	populate(purinapup, "Purina Puppy");
	populate(purinastd, "Purina Standard");
	var chuckwagontypes = []
	purinatypes = []
	chuckwagonall = []
	chuckwagonstd = []
	chuckwagonallnatural = {};
	chuckwagonstandard = {};
	purinapup = []
	purinastd = []
	chuckwagonastandard58oz = {}
	chuckwagonalstandard72oz = {}
	chuckwagonallnatural32oz = {}
	chuckwagonallnatural64oz = {}
	purinapuppy16oz = {}
	purinapuppy24oz = {}
	purinastandard58oz = {}
	purinastandard72oz = {}
	catfood();
});
loader.open("GET", "petfood.json");
loader.send();
function catfood() {
var newloader = new XMLHttpRequest();
newloader.addEventListener("load", function(){
	catfoodArray = JSON.parse(newloader.responseText);
	array3.push(catfoodArray.cat_brands[0]);
	array4.push(catfoodArray.cat_brands[1]);
	stage1(array3, array4);
	populate(chuckwagonall, "Cat Natural");
	populate(chuckwagonstd, "Cat Standard");
	populate(purinapup, "Purina Kitten");
	populate(purinastd, "Purina Cat Standard");
});
newloader.open("GET", "catfood.json");
newloader.send();
};











