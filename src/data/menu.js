import logoImg from "../images/logo.jpg";
import koreanChicken from "../images/korean-fried-chicken.jpg";
import dakgalbi from "../images/dakgalbi.jpg";
import bulgogi from "../images/bulgogi.jpg";
import bibimbap from "../images/bibimbap.jpg";
import japchae from "../images/japchae.jpg";
import tteokbokki from "../images/tteokbokki.jpg";
import kimbap from "../images/kimbap.jpg";
import mandu from "../images/mandu.jpg";
import strawberryMilk from "../images/strawberry-milk.jpg";
const yujaTea = "https://placehold.co/300x200";
import omijaTea from "../images/omija-tea.jpg";
import bananaMilk from "../images/banana-milk.jpg";
import koreanCornDog from "../images/korean-corn-dog.jpg";
import hotteok from "../images/hotteok.jpg";
import bingsu from "../images/bingsu.jpg";
import mochi from "../images/mochi.jpg";

export const logo = logoImg;

export const menu = {
  "Main Dishes": [
    {
      id: 1,
      name: "SEOUL CHICKEN",
      desc: "Crispy chicken with sweet & spicy Korean sauce.",
      price: 12.9,
      image: koreanChicken,
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "DAKGALBI",
      desc: "Spicy Korean stir-fried chicken with vegetables.",
      price: 12.5,
      image: dakgalbi,
    },
    {
      id: 3,
      name: "BULGOGI",
      desc: "Tender Korean marinated beef with a rich savory flavor.",
      price: 13.9,
      image: bulgogi,
      tag: "Chef's Pick",
    },
    {
      id: 4,
      name: "BIBIMBAP",
      desc: "Korean rice bowl with vegetables, egg & signature sauce.",
      price: 11.5,
      image: bibimbap,
    },
    {
      id: 5,
      name: "JAPCHAE",
      desc: "Korean glass noodles with vegetables and sesame.",
      price: 10.9,
      image: japchae,
    },
    {
      id: 6,
      name: "TTEOKBOKKI",
      desc: "Soft rice cakes coated in a bold Korean spicy sauce.",
      price: 8.9,
      image: tteokbokki,
    },
    {
      id: 7,
      name: "KIMBAP",
      desc: "Korean rice rolls filled with vegetables and savory ingredients.",
      price: 7.9,
      image: kimbap,
    },
    {
      id: 8,
      name: "MANDU",
      desc: "Golden Korean dumplings with a savory filling.",
      price: 7.5,
      image: mandu,
    },
  ],

  Drinks: [
    {
      id: 9,
      name: "STRAWBERRY MILK",
      desc: "Creamy Korean-style strawberry milk.",
      price: 5.5,
      image: strawberryMilk,
    },
    {
      id: 10,
      name: "YUJA TEA",
      desc: "Refreshing Korean citrus tea with a sweet, bright flavor.",
      price: 4.9,
      image: yujaTea,
    },
    {
      id: 11,
      name: "OMIJA TEA",
      desc: "Traditional Korean tea with a unique fruity taste.",
      price: 4.9,
      image: omijaTea,
    },
    {
      id: 12,
      name: "BANANA MILK",
      desc: "Smooth and creamy Korean banana milk.",
      price: 5.2,
      image: bananaMilk,
    },
  ],

  Snacks: [
    {
      id: 13,
      name: "KOREAN CORN DOG",
      desc: "Crispy golden Korean corn dog with a cheesy center.",
      price: 6.9,
      image: koreanCornDog,
    },
    {
      id: 14,
      name: "HOTTEOK",
      desc: "Warm Korean sweet pancake with a caramelized filling.",
      price: 6.5,
      image: hotteok,
    },
    {
      id: 15,
      name: "BINGSU",
      desc: "Fluffy shaved ice with sweet Korean toppings.",
      price: 7.9,
      image: bingsu,
    },
    {
      id: 16,
      name: "MOCHI",
      desc: "Soft, chewy bites with a sweet creamy filling.",
      price: 5.9,
      image: mochi,
    },
  ],
};

export const categoryOrder = Object.keys(menu);

export const formatPrice = (value) => `$${value.toFixed(2)}`;