import burger from "@/assets/hero-burger.jpg";
import pizza from "@/assets/hero-pizza.jpg";
import ghost from "@/assets/item-ghost-burger.jpg";
import volcano from "@/assets/item-volcano-pizza.jpg";
import fatboy from "@/assets/item-fatboy.jpg";
import pasta from "@/assets/item-pasta.jpg";
import steak from "@/assets/item-steak.jpg";
import chicken from "@/assets/item-chicken.jpg";
import dessert from "@/assets/item-dessert.jpg";
import drink from "@/assets/item-drink.jpg";

export const categories = [
  "Signature Burgers",
  "Premium Pizza",
  "Pasta",
  "Steak",
  "Fried Chicken",
  "Desserts",
  "Mocktails & Drinks",
] as const;

export type Category = (typeof categories)[number];

export interface MenuItem {
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  tag?: "New" | "Hot" | "Signature";
}

export const menu: MenuItem[] = [
  { name: "Fat Boy Burger", category: "Signature Burgers", price: 590, description: "Triple beef stack, cheddar, secret sauce, brioche bun.", image: fatboy, tag: "Signature" },
  { name: "Ghost Naga Chicken", category: "Signature Burgers", price: 450, description: "Crispy chicken with ghost-naga heat, jalapeño, sriracha mayo.", image: ghost, tag: "Hot" },
  { name: "Classic Cheese Melt", category: "Signature Burgers", price: 390, description: "Juicy beef patty, double cheddar, smoked mayo, fresh greens.", image: burger },
  { name: "Cheesy Volcano Pizza", category: "Premium Pizza", price: 850, description: "Bubbling mozzarella core with pepperoni and chili oil.", image: volcano, tag: "Signature" },
  { name: "Napoli Meat Feast", category: "Premium Pizza", price: 950, description: "Pepperoni, sausage, beef, fire-roasted peppers.", image: pizza, tag: "Hot" },
  { name: "Margherita Royale", category: "Premium Pizza", price: 690, description: "San marzano tomato, fresh basil, buffalo mozzarella.", image: pizza },
  { name: "Alfredo Chicken Pasta", category: "Pasta", price: 520, description: "Creamy parmesan alfredo with grilled chicken & herbs.", image: pasta, tag: "Signature" },
  { name: "Spicy Arrabbiata", category: "Pasta", price: 480, description: "Penne in fiery tomato sauce, chili flakes, parmesan.", image: pasta },
  { name: "Premium Beef Steak", category: "Steak", price: 1290, description: "Grilled tenderloin with rosemary butter on dark slate.", image: steak, tag: "New" },
  { name: "Crispy Chicken Bucket", category: "Fried Chicken", price: 690, description: "8 pieces of golden hand-breaded fried chicken.", image: chicken },
  { name: "Spicy Wings", category: "Fried Chicken", price: 420, description: "Buffalo glazed wings with blue cheese dip.", image: chicken, tag: "Hot" },
  { name: "Molten Lava Cake", category: "Desserts", price: 290, description: "Dark chocolate lava with vanilla bean ice cream.", image: dessert, tag: "Signature" },
  { name: "Berry Cheesecake", category: "Desserts", price: 320, description: "Creamy cheesecake topped with mixed berry compote.", image: dessert },
  { name: "Tropical Sunset", category: "Mocktails & Drinks", price: 220, description: "Mango, passionfruit, citrus over ice with mint.", image: drink, tag: "New" },
  { name: "Golden Glow Mojito", category: "Mocktails & Drinks", price: 240, description: "Mint, lime, ginger ale, brown sugar swirl.", image: drink },
];

export const branches = [
  {
    city: "Dinajpur",
    name: "Dinajpur Branch",
    address: "Captain Tower, Ganeshtala, Dinajpur",
    hours: "11:00 AM — 11:00 PM",
    phone: "01749-281818",
    map: "https://www.google.com/maps?q=Ganeshtala+Dinajpur+Bangladesh&output=embed",
  },
  {
    city: "Bogura",
    name: "Bogura Branch",
    address: "Sydney Tower (3rd Floor), Bogura",
    hours: "11:00 AM — 11:30 PM",
    phone: "01749-281818",
    map: "https://www.google.com/maps?q=Sydney+Tower+Bogura+Bangladesh&output=embed",
  },
  {
    city: "Rangpur",
    name: "Rangpur Branch",
    address: "RAMC Shopping Complex, Rangpur",
    hours: "11:00 AM — 11:00 PM",
    phone: "01749-281818",
    map: "https://www.google.com/maps?q=RAMC+Shopping+Complex+Rangpur+Bangladesh&output=embed",
  },
];
