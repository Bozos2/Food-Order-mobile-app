import capricciosa from "../assets/images/pizza/capricciosa.png";
import margharita from "../assets/images/pizza/margharita.png";
import pepperoni from "../assets/images/pizza/pepperoni.png";
import tonno from "../assets/images/pizza/tonno.png";
import hawaii from "../assets/images/pizza/hawaii.png";

import bacon from "../assets/images/burgers/bacon-burger.png";
import doubleSalad from "../assets/images/burgers/big-salad-burger.png";
import chicken from "../assets/images/burgers/chicken-burger.png";
import classic from "../assets/images/burgers/classic-burger.png";

import iceMix from "../assets/images/ice-cream/ice-mix.png";
import iceHazelnut from "../assets/images/ice-cream/ice-hazelnut.png";
import iceStrawberry from "../assets/images/ice-cream/ice-strawberry.png";
import icePistachio from "../assets/images/ice-cream/ice-pistachio.png";

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

export const burgerData = [
  {
    id: "6",
    title: "Bacon",
    description: "Burger with bacon and cheese",
    price: 14,
    time: 12,
    calories: 250,
    image: bacon,
    ingredients: [
      { name: "beef", image: ingredients.burgerMeat },
      { name: "lettuce", image: ingredients.salad },
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "bacon", image: ingredients.bacon },
    ],
  },
  {
    id: "7",
    title: "Double Salad",
    description: "Burger with double salad",
    price: 16,
    time: 15,
    calories: 190,
    image: doubleSalad,
    ingredients: [
      { name: "beef", image: ingredients.burgerMeat },
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "onion", image: ingredients.onion },
      { name: "lettuce", image: ingredients.salad },
    ],
  },
  {
    id: "8",
    title: "Classic",
    description: "Pizza with tomato and lettuce",
    price: 10,
    time: 12,
    calories: 200,
    image: classic,
    ingredients: [
      { name: "beef", image: ingredients.burgerMeat },
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "onion", image: ingredients.onion },
      { name: "lettuce", image: ingredients.salad },
      { name: "cucumber", image: ingredients.cucumber },
    ],
  },
  {
    id: "9",
    title: "Chicken",
    description: "Burger with chicken and mayonese",
    price: 14,
    time: 12,
    calories: 160,
    image: chicken,
    ingredients: [
      { name: "chicken", image: ingredients.chicken },
      { name: "tomato", image: ingredients.tomato },
      { name: "cheese", image: ingredients.cheese },
      { name: "mayonese", image: ingredients.mayonese },
      { name: "lettuce", image: ingredients.salad },
    ],
  },
];

export const IceCreamData = [
  {
    id: "10",
    title: "Mix",
    description: "Big mix ice cream",
    price: 12,
    time: 2,
    calories: 120,
    image: iceMix,
    ingredients: [
      { name: "vanilla", image: ingredients.vanilla },
      { name: "strawberry", image: ingredients.strawberry },
      { name: "hazel", image: ingredients.hazel },
    ],
  },
  {
    id: "11",
    title: "Hazelnut",
    description: "Ice cream with hazelnut",
    price: 6,
    time: 2,
    calories: 90,
    image: iceHazelnut,
    ingredients: [{ name: "hazelnut", image: ingredients.hazel }],
  },
  {
    id: "12",
    title: "Strawberry",
    description: "Ice cream with strawberry",
    price: 6,
    time: 2,
    calories: 110,
    image: iceStrawberry,
    ingredients: [{ name: "strawberry", image: ingredients.strawberry }],
  },
  {
    id: "13",
    title: "Pistachio",
    description: "Ice cream with pistachio",
    price: 7,
    time: 3,
    calories: 120,
    image: icePistachio,
    ingredients: [{ name: "pistachio", image: ingredients.pistachio }],
  },
];

export const combinedData = [...pizzaData, ...burgerData, ...IceCreamData];
