Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var pokeLi = $("<li>").html(pokemon.get('name') + " - " + pokemon.get('poke_type'));
  pokeLi.data('id', pokemon.id).addClass('poke-list-item');
  this.$pokeList.append(pokeLi);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  this.pokes.fetch({
    success: function () {
      this.pokes.each(function(pokemon){
        this.addPokemonToList(pokemon);
      }.bind(this));
    }.bind(this)
  });
};
