const logoImg = "https://placehold.co/300x200";

const koreanChicken = "https://placehold.co/300x200";
const dakgalbi = "https://placehold.co/300x200";
const bulgogi = "https://placehold.co/300x200";
const bibimbap = "https://placehold.co/300x200";
const japchae = "https://placehold.co/300x200";
const tteokbokki = "https://placehold.co/300x200";
const kimbap = "https://placehold.co/300x200";
const mandu = "https://placehold.co/300x200";

export const logo = logoImg;

export const menuData = [
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
];

export const menu = {
  "Main Dishes": menuData,
};

export const categoryOrder = Object.keys(menu);

export const formatPrice = (value) => `$${value.toFixed(2)}`;

export default logoImg;