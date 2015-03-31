Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detail = $("<div class='detail'>");
  $detail.html(this.detailTemplate({
    name: pokemon.get('name'),
    image_url: pokemon.get('image_url'),
    attack: pokemon.get('attack'),
    defense: pokemon.get('defense'),
    poke_type: pokemon.get('poke_type'),
    moves: pokemon.get('moves')
  }));
  this.$pokeDetail.html($detail);
  var self = this;
  this.$toys = $("<ul class='toys'>");
  pokemon.fetch({
    success: function() {
      self.renderToysList.bind(self)(pokemon.toys());
    }
  });
  this.$pokeDetail.append(this.$toys);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data('id');
  this.renderPokemonDetail(this.pokes.get(id));
};
