function PlacesYouveBeen() {
  this.places = {};
}

function Place(city, location, landmark) {
  this.name = city;
  this.location = location;
  this.landmark = landmark;
}

PlacesYouveBeen.prototype.addPlace = function(place) {
  this.places[place.name] = place;
};

let addressBook = new PlacesYouveBeen();
let place = new Place("Portland", "Oregon", "Mt Hood");
let place2 = new Place("Seattle", "Washington", "Mt Rainier");

addressBook.addPlace(place);
addressBook.addPlace(place2);