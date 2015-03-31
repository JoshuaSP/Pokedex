Pokedex.RootView.prototype.reassignToy = function (event) {
  var oldPokemonId = this.$selectBox.data("pokemon-id");
  var toyId = this.$selectBox.data("toy-id");
  var newPokemonId = this.$selectBox.val();

  var oldPokemonToys = this.pokes.get(oldPokemonId).toys();
  var toy = oldPokemonToys.get(toyId);
  toy.set('pokemon_id', newPokemonId);
  var newPokemon = this.pokes.get(newPokemonId)

  toy.save({}, {
    success: function() {
      oldPokemonToys.remove(toy);
      this.$toyDetail.html("");
      this.renderToysList(oldPokemonToys);
    }.bind(this)
  });
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
  this.$toys.html("");
  toys.each(function(toy) {
    this.addToyToList(toy);
  }.bind(this));
};
