Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $("<li>").html(toy.get("name") + " - Happiness: <strong>" + toy.get("happiness") + "</strong> Price: <strong>" + toy.get("price") + "</strong>");
  $li.data({
    'id': toy.id,
    'pokemon-id': toy.get("pokemon_id")
  }).addClass("toy");
  this.$toys.append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  this.$toyDetail = $("<div class='detail'>");
  this.$toyDetail.html(this.toyTemplate({
    name: toy.get("name"),
    image_url: toy.get("image_url"),
    happiness: toy.get("happiness"),
    price: toy.get("price")
  }));
  this.$el.find('.toy-detail').html(this.$toyDetail);
  this.$selectBox = $('<select>');
  this.$selectBox.data({
    "toy-id": toy.id,
    "pokemon-id": toy.get('pokemon_id')
  });
  this.pokes.each(function(pokemon) {
    var $opt = $('<option>');
    $opt.val(pokemon.id).text(pokemon.get('name'));
    if (pokemon.id === toy.get('pokemon_id')) {
      $opt.attr("selected", true);
    }
    this.$selectBox.append($opt);
  }.bind(this));
  this.$toyDetail.append(this.$selectBox);
  this.$selectBox.on("change", this.reassignToy.bind(this));
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var pokemon = this.pokes.get($(event.currentTarget).data('pokemon-id'));
  var toyId = $(event.currentTarget).data('id');
  this.renderToyDetail(pokemon.toys().get(toyId));
};
