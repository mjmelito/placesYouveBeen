/*Business Logic*/

function PlacesYouveBeen() {
  this.places = {};
  this.currentId = 0;
}

function Place(city, location, landmark) {
  this.name = city;
  this.location = location;
  this.landmark = landmark;
}

PlacesYouveBeen.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

PlacesYouveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

let addressBook = new PlacesYouveBeen();
let place = new Place("Portland", "Oregon", "Mt Hood");
let place2 = new Place("Seattle", "Washington", "Mt Rainier");

addressBook.addPlace(place);
addressBook.addPlace(place2);

/*UI Logic*/

function entryHandler(event) {
  event.preventDefault();
  const city = document.querySelector("input[name='city']").value;
  const state = document.querySelector("input[name='state']").value;
  const landmark = document.querySelector("input[name='landmark']").value;

  entryReader(city, state, landmark);
  displayEntry(addressBook);
  
}

function entryReader(city, state, landmark) {
  let place = new Place(city, state, landmark);
  addressBook.addPlace(place);
}

document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("btn");
  submit.addEventListener("click", entryHandler);
});

function displayEntry(addressBook) {
  let i = 1;
  while (addressBook.places[i] !== undefined) {
    let archive = document.querySelector(".archive");
    let entry = document.createElement("h4");
    entry.setAttribute("class", "entry");
    entry.append(addressBook.places[i].name);
    archive.after(entry);
    i++;
  }
  
}