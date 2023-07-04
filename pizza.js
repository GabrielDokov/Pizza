class Pizza {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class PizzaRestaurant {
  constructor() {
    this.pizzas = [];
  }
  preparePizza(name, ingredients) {
    if (ingredients.length === 0) {
      throw Error("Invalid ingredients");
    } else {
      const pizza = new Pizza(name, ingredients);
      this.pizzas.push(pizza);
      return pizza;
    }
  }

  hasPizza(name) {
    return this.pizzas.some((pizza) => pizza.name === name);
  }

  getPizzaCount() {
    return this.pizzas.length;
  }
}

module.exports = { Pizza, PizzaRestaurant };
