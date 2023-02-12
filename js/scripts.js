function PlacesYouveBeen() {
  this.places = {};
}

function Place(name, location, landmark) {
  this.name = name;
  this.location = location;
  this.landmark = landmark;
}

PlacesYouveBeen.prototype.addPlace = function(place) {
  this.places[place.name] = place;
};

let addressBook = new PlacesYouveBeen();
let place = new Place("Portland", "Oregon", "Mt Hood");
let place2 = new Place("Seattle", "Washington", "Mt Rainier");