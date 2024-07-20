import capricciosa from "../assets/images/pizza/capricciosa.png";
import margharita from "../assets/images/pizza/margharita.png";
import pepperoni from "../assets/images/pizza/pepperoni.png";
import tonno from "../assets/images/pizza/tonno.png";
import hawaii from "../assets/images/pizza/hawaii.png";
import { ingredients } from "../constants";

export const pizzaData = [
  {
    id: "1",
    title: "Capricciosa",
    description: "Pizza with ham and cheese",
    price: 12,
    time: 20,
    calories: 150,
    image: capricciosa,
    ingredients: [
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "ham", image: ingredients.ham },
      { name: "mushrooms", image: ingredients.mushrooms },
      { name: "chilli", image: ingredients.chilli },
    ],
  },
  {
    id: "2",
    title: "Margharita",
    description: "Pizza with cheese",
    price: 10,
    time: 20,
    calories: 120,
    image: margharita,
    ingredients: [
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "basil", image: ingredients.basil },
    ],
  },
  {
    id: "3",
    title: "Pepperoni",
    description: "Pizza with pepperoni and cheese",
    price: 15,
    time: 22,
    calories: 180,
    image: pepperoni,
    ingredients: [
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "pepperoni", image: ingredients.pepperoni },
    ],
  },
  {
    id: "4",
    title: "Tonno",
    description: "Pizza with tuna and cheese",
    price: 14,
    time: 18,
    calories: 100,
    image: tonno,
    ingredients: [
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "tuna", image: ingredients.tuna },
      { name: "olives", image: ingredients.olives },
      { name: "onion", image: ingredients.onion },
      { name: "corn", image: ingredients.corn },
    ],
  },
  {
    id: "5",
    title: "Hawaii",
    description: "Pizza with ananas and cheese",
    price: 14,
    time: 18,
    calories: 90,
    image: hawaii,
    ingredients: [
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "ham", image: ingredients.ham },
      { name: "mushrooms", image: ingredients.mushrooms },
      { name: "corn", image: ingredients.corn },
    ],
  },
];
