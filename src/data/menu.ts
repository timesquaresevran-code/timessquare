export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number | null;
  image: string;
  badge?: "Signature" | "Nouveau" | "Populaire";
}

export interface Category {
  id: string;
  title: string;
  items: Product[];
}

export const menuData: Category[] = [
  {
    id: "naan-burgers",
    title: "Naan Burgers",
    items: [
      {
        id: "nb-geant",
        name: "Géant",
        category: "Naan Burgers",
        description: "Pain naan, 2 steaks, cheddar, salade, oignons, sauce Giant.",
        price: null,
        image: ""
      },
      {
        id: "nb-big-pepper",
        name: "Big Pepper",
        category: "Naan Burgers",
        description: "Pain naan, 2 steaks, cheddar, bacon fumé de bœuf, œuf, sauce pepper.",
        price: null,
        image: "",
        badge: "Populaire"
      },
      {
        id: "nb-big-max",
        name: "Big Max",
        category: "Naan Burgers",
        description: "Pain naan, 2 steaks, cheddar, oignons, salade, cornichons, sauce Big Max.",
        price: null,
        image: ""
      },
      {
        id: "nb-tower",
        name: "Tower",
        category: "Naan Burgers",
        description: "Pain naan, fried chicken, cheddar, galette de pomme de terre, salade, sauce Chicken Max, sauce Tinger.",
        price: null,
        image: ""
      },
      {
        id: "nb-master-naan",
        name: "Master Naan",
        category: "Naan Burgers",
        description: "Pain naan, steak, fried chicken, cheddar, œuf, tranche de poulet fumé, sauce barbecue, sauce pepper.",
        price: null,
        image: "",
        badge: "Signature"
      },
      {
        id: "nb-naan-180",
        name: "Naan 180",
        category: "Naan Burgers",
        description: "Pain naan, 2 steaks, cheddar, emmental, tomates, oignons, sauce ketchup, sauce Chicken Max.",
        price: null,
        image: ""
      }
    ]
  },
  {
    id: "naandwichs",
    title: "Naandwichs",
    items: [
      {
        id: "nd-tandoori",
        name: "Tandoori",
        category: "Naandwichs",
        description: "Poulet mariné au tandoori, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-chicken-du-chef",
        name: "Chicken du Chef",
        category: "Naandwichs",
        description: "Poulet mariné au curry, crème fraîche, champignons, cheddar, crudités et sauce au choix.",
        price: null,
        image: "",
        badge: "Signature"
      },
      {
        id: "nd-chicken-mixte",
        name: "Chicken Mixte",
        category: "Naandwichs",
        description: "Poulet mariné au tandoori, poulet mariné au curry, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-chicken-thai",
        name: "Chicken Thaï",
        category: "Naandwichs",
        description: "Poulet mariné, sauce thaï, poivrons, oignons, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-farmer",
        name: "Farmer",
        category: "Naandwichs",
        description: "Escalope de poulet, tranche de poulet fumé, champignons, sauce gruyère, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-radical",
        name: "Radical",
        category: "Naandwichs",
        description: "2 steaks, cordon bleu, cheddar, crudités et sauce au choix.",
        price: null,
        image: "",
        badge: "Populaire"
      },
      {
        id: "nd-tornado",
        name: "Tornado",
        category: "Naandwichs",
        description: "2 steaks, fried chicken, œuf, tranche de poulet fumé, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-crousty",
        name: "Crousty",
        category: "Naandwichs",
        description: "Fried chicken, galette de pomme de terre, cheddar, crudités et sauce au choix.",
        price: null,
        image: ""
      },
      {
        id: "nd-texas",
        name: "Texas",
        category: "Naandwichs",
        description: "3 steaks, tranche de poulet fumé, œuf, boursin, crudités et sauce au choix.",
        price: null,
        image: "/images/texas.webp"
      },
      {
        id: "nd-super-trio",
        name: "Super Trio",
        category: "Naandwichs",
        description: "Escalope de poulet, tranche de poulet fumé, cheddar, Boursin, crudités et sauce au choix.",
        price: null,
        image: "/images/super_trio.webp"
      }
    ]
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        id: "bg-hamburger",
        name: "Hamburger",
        category: "Burgers",
        description: "Pain simple, steak, oignons, cornichons, ketchup, moutarde.",
        price: null,
        image: "/images/hamburger.webp"
      },
      {
        id: "bg-cheese-burger",
        name: "Cheese Burger",
        category: "Burgers",
        description: "Pain simple, steak, cheddar, oignons, cornichons, ketchup, moutarde.",
        price: null,
        image: "/images/cheese_burger.webp"
      },
      {
        id: "bg-double-cheese",
        name: "Double Cheese",
        category: "Burgers",
        description: "Pain simple, 2 steaks, cheddar, oignons, cornichons, ketchup, moutarde.",
        price: null,
        image: "/images/double_cheese.webp",
        badge: "Populaire"
      },
      {
        id: "bg-big-square",
        name: "Big Square",
        category: "Burgers",
        description: "Pain sésame, 2 steaks, cheddar, salade, oignons, cornichons, sauce Big Max.",
        price: null,
        image: "/images/big_square.webp",
        badge: "Signature"
      },
      {
        id: "bg-big-chick",
        name: "Big Chick",
        category: "Burgers",
        description: "Pain sésame, 2 fried chickens, tranche de cheddar, salade, oignons, cornichons, sauce Big Square.",
        price: null,
        image: "/images/big_chick.webp"
      },
      {
        id: "bg-max-chicken",
        name: "Max Chicken",
        category: "Burgers",
        description: "Pain sésame, steak de poulet pané, cheddar, salade, sauce Max Chicken.",
        price: null,
        image: "/images/max_chicken.webp"
      },
      {
        id: "bg-g-square",
        name: "G-Square",
        category: "Burgers",
        description: "Pain simple, 2 steaks, cheddar, salade, oignons, sauce G-Square.",
        price: null,
        image: "/images/g_square.webp"
      },
      {
        id: "bg-little-g-square",
        name: "Little G-Square",
        category: "Burgers",
        description: "Pain simple, steak, cheddar, salade, oignons, sauce G-Square.",
        price: null,
        image: "/images/little_g_square.webp"
      },
      {
        id: "bg-fish",
        name: "Fish",
        category: "Burgers",
        description: "Pain simple, poisson pané, cheddar, sauce Fish.",
        price: null,
        image: "/images/fish.webp"
      }
    ]
  },
  {
    id: "smash-burgers",
    title: "Smash Burgers",
    items: [
      {
        id: "sb-classique",
        name: "Classique",
        category: "Smash Burgers",
        description: "Potato buns, 2 steaks smashés, cheddar, tomates, salade, sauce Smash.",
        price: null,
        image: "/images/classique.webp",
        badge: "Populaire"
      },
      {
        id: "sb-chicken-square",
        name: "Chicken Square",
        category: "Smash Burgers",
        description: "Potato buns, fried chicken, cheddar, salade, sauce Times Square.",
        price: null,
        image: "/images/chicken_square.webp"
      },
      {
        id: "sb-times-square",
        name: "Times Square",
        category: "Smash Burgers",
        description: "Potato buns, 2 steaks smashés, bacon fumé de bœuf, cheddar, oignons, cornichons, moutarde américaine, ketchup.",
        price: null,
        image: "/images/times_square.webp",
        badge: "Signature"
      },
      {
        id: "sb-manhattan",
        name: "Manhattan",
        category: "Smash Burgers",
        description: "Potato buns, 2 steaks smashés, cheddar, salade iceberg, sauce Manhattan.",
        price: null,
        image: "/images/manhattan.webp"
      }
    ]
  },
  {
    id: "tinger",
    title: "Tinger",
    items: [
      {
        id: "tg-tinger",
        name: "Tinger",
        category: "Tinger",
        description: "Fried chicken, cheddar, salade, sauce Tinger, mayonnaise.",
        price: null,
        image: "/images/tinger.webp"
      },
      {
        id: "tg-tinger-tower",
        name: "Tinger Tower",
        category: "Tinger",
        description: "Fried chicken, galette de pomme de terre, cheddar, salade, sauce Tinger, mayonnaise.",
        price: null,
        image: "/images/tinger_tower.webp"
      }
    ]
  }
];
