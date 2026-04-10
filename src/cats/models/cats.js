class Cats {
  constructor(data) {
    this.id = data.id;
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;
    this.breeds = ( data.breeds || [] ).map(breedData => new Breed(breedData));
    this.categories = ( data.categories || [] ).map(categoryData => new Category(categoryData));
  }
}

class Breed {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.temperament = data.temperament;
    this.life_span = data.life_span;
    this.origin = data.origin;
    this.description = data.description;
  }
}

class Category {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
}

export { Cats, Breed, Category };