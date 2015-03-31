Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon (attrs);
  pokemon.save(null, {
    success: function () {
      callback(pokemon);
    }
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  this.createPokemon(this.$pokeForm.serializeJSON(), function(pokemon) {
    this.pokes.add(pokemon);
    this.addPokemonToList(pokemon);
    this.renderPokemonDetail(pokemon);
  }.bind(this));
  event.preventDefault();
};
