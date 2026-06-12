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
  subtitle?: string;
  tab: "naan-burger" | "naandwich" | "burger" | "side" | "dessert" | "boisson";
  items: Product[];
}

export const menuData: Category[] = [
  {
    "id": "naan-burgers",
    "title": "Naan Burgers",
    "subtitle": "Servis avec frites ou potatoes + boisson 33cl",
    "tab": "naan-burger",
    "items": [
      {
        "id": "nb-geant",
        "name": "Géant",
        "category": "Naan Burgers",
        "description": "Pain naan, 2 steaks, cheddar, salade, oignons, sauce Giant.",
        "price": null,
        "image": "/images/GEANT-768x768.webp"
      },
      {
        "id": "nb-big-pepper",
        "name": "BIG pepper",
        "category": "Naan Burgers",
        "description": "Pain naan, 2 steaks, cheddar, bacon fumé de bœuf, œuf, sauce pepper.",
        "price": null,
        "image": "/images/BIG-PEPPER-768x768.webp",
        "badge": "Populaire"
      },
      {
        "id": "nb-big-max",
        "name": "BIG max",
        "category": "Naan Burgers",
        "description": "Pain naan, 2 steaks, cheddar, oignons, salade, cornichons, sauce Big Max.",
        "price": null,
        "image": "/images/BIG-MAX-768x768.webp"
      },
      {
        "id": "nb-tower",
        "name": "Tower",
        "category": "Naan Burgers",
        "description": "Pain naan, fried chicken, cheddar, galette de pomme de terre, salade, sauce Chicken Max, sauce Tinger.",
        "price": null,
        "image": "/images/TOWER-768x768.webp"
      },
      {
        "id": "nb-master-naan",
        "name": "Master Naan",
        "category": "Naan Burgers",
        "description": "Pain naan, steak, fried chicken, cheddar, œuf, tranche de poulet fumé, sauce barbecue, sauce pepper.",
        "price": null,
        "image": "/images/MASTER-NAAN-768x768.webp",
        "badge": "Signature"
      },
      {
        "id": "nb-naan-180",
        "name": "NAAN 180",
        "category": "Naan Burgers",
        "description": "Pain naan, 2 steaks, cheddar, emmental, tomates, oignons, sauce ketchup, sauce Chicken Max.",
        "price": null,
        "image": "/images/NAAN-180-768x768.webp"
      }
    ]
  },
  {
    "id": "naandwichs",
    "title": "Naandwichs",
    "subtitle": "Servis avec frites ou potatoes + boisson 33cl",
    "tab": "naandwich",
    "items": [
      {
        "id": "nd-tandoori",
        "name": "Tandoori",
        "category": "Naandwichs",
        "description": "Poulet mariné au tandoori, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/TANDOORI-copie-768x598.webp"
      },
      {
        "id": "nd-chicken-du-chef",
        "name": "chicken du chef",
        "category": "Naandwichs",
        "description": "Poulet mariné au curry, crème fraîche, champignons, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/CHICKEN-DU-CHEF--768x598.webp",
        "badge": "Signature"
      },
      {
        "id": "nd-chicken-mixte",
        "name": "chicken mixte",
        "category": "Naandwichs",
        "description": "Poulet mariné au tandoori, poulet mariné au curry, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/CHICKEN-MIXTE-copie-768x598.webp"
      },
      {
        "id": "nd-chicken-tha-",
        "name": "chicken thaÏ",
        "category": "Naandwichs",
        "description": "Poulet mariné, sauce thaï, poivrons, oignons, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/CHICKEN-THAI-copie-768x598.webp"
      },
      {
        "id": "nd-farmer",
        "name": "farmer",
        "category": "Naandwichs",
        "description": "Escalope de poulet, tranche de poulet fumé, champignons, sauce gruyère, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/FARMER-copie-768x598.webp"
      },
      {
        "id": "nd-radical",
        "name": "radical",
        "category": "Naandwichs",
        "description": "2 steaks, cordon bleu, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/RADICAL-copie-768x598.webp"
      },
      {
        "id": "nd-tornado",
        "name": "tornado",
        "category": "Naandwichs",
        "description": "2 steaks, fried chicken, œuf, tranche de poulet fumé, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/TORNADO-copie-768x598.webp"
      },
      {
        "id": "nd-crousty",
        "name": "crousty",
        "category": "Naandwichs",
        "description": "Fried chicken, galette de pomme de terre, cheddar, crudités et sauce au choix.",
        "price": null,
        "image": "/images/CROUSTY-copie-768x598.webp"
      },
      {
        "id": "nd-texas",
        "name": "texas",
        "category": "Naandwichs",
        "description": "3 steaks, tranche de poulet fumé, œuf, boursin, crudités et sauce au choix.",
        "price": null,
        "image": "/images/TEXAS-copie-768x598.webp"
      },
      {
        "id": "nd-super-trio",
        "name": "super trio",
        "category": "Naandwichs",
        "description": "Escalope de poulet, tranche de poulet fumé, cheddar, Boursin, crudités et sauce au choix.",
        "price": null,
        "image": "/images/SUPER-TRIO-copie-768x598.webp"
      }
    ]
  },
  {
    "id": "burgers",
    "title": "Nos Burgers",
    "subtitle": "Servis avec frites ou potatoes + boisson 33cl",
    "tab": "burger",
    "items": [
      {
        "id": "bg-big-square",
        "name": "BIG SQUARE",
        "category": "Nos Burgers",
        "description": "Pain sésame, 2 steaks, cheddar, salade, oignons, cornichons, sauce Big Max.",
        "price": null,
        "image": "/images/BIG-SQUARE-copie-768x768.webp",
        "badge": "Signature"
      },
      {
        "id": "bg-double-cheese",
        "name": "double cheese",
        "category": "Nos Burgers",
        "description": "Pain simple, 2 steaks, cheddar, oignons, cornichons, ketchup, moutarde.",
        "price": null,
        "image": "/images/DOUBLE-CHEESE-copie-768x768.webp",
        "badge": "Populaire"
      },
      {
        "id": "bg-big-chick",
        "name": "BIG CHICK",
        "category": "Nos Burgers",
        "description": "Pain sésame, 2 fried chickens, tranche de cheddar, salade, oignons, cornichons, sauce Big Square",
        "price": null,
        "image": "/images/BIGCHICK_1.webp"
      },
      {
        "id": "bg-max-chicken",
        "name": "max chicken",
        "category": "Nos Burgers",
        "description": "Pain sésame, steak de poulet pané, cheddar, salade, sauce Max Chicken.",
        "price": null,
        "image": "/images/MAXCHICKEN_6.webp"
      },
      {
        "id": "bg-g-square",
        "name": "g-square",
        "category": "Nos Burgers",
        "description": "Pain simple, 2 steaks, cheddar, salade, oignons, sauce G-Square.",
        "price": null,
        "image": "/images/G-SQUARE-copie-768x768.webp"
      },
      {
        "id": "bg-fish",
        "name": "fish",
        "category": "Nos Burgers",
        "description": "Pain simple, poisson pané, cheddar, sauce Fish.",
        "price": null,
        "image": "/images/FISH-copie-768x768.webp"
      }
    ]
  },
  {
    "id": "smash-burgers",
    "title": "Smash Burgers",
    "subtitle": "Servis avec frites ou potatoes + boisson 33cl",
    "tab": "burger",
    "items": [
      {
        "id": "sb-classique",
        "name": "Classique",
        "category": "Smash Burgers",
        "description": "Potato buns, 2 steaks smashés, cheddar, tomates, salade, sauce Smash.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Classique-copie-1-300x200.png",
        "badge": "Populaire"
      },
      {
        "id": "sb-chicken-square",
        "name": "Chicken Square",
        "category": "Smash Burgers",
        "description": "Potato buns, fried chicken, cheddar, salade, sauce Times Square.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Chicken-Square-copie-1-300x200.png"
      },
      {
        "id": "sb-times-square",
        "name": "Times Square",
        "category": "Smash Burgers",
        "description": "Potato buns, 2 steaks smashés, bacon fumé de bœuf, cheddar, oignons, cornichons, moutarde américaine, ketchup.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Time-Square-copie-1-300x200.png",
        "badge": "Signature"
      },
      {
        "id": "sb-manhattan",
        "name": "Manhattan",
        "category": "Smash Burgers",
        "description": "Potato buns, 2 steaks smashés, cheddar, salade iceberg, sauce Manhattan.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Manhattan-copie-300x200.png"
      }
    ]
  },
  {
    "id": "tingers",
    "title": "Tingers",
    "subtitle": "Servis avec frites ou potatoes + boisson 33cl",
    "tab": "burger",
    "items": [
      {
        "id": "tg-tinger",
        "name": "Tinger",
        "category": "Tingers",
        "description": "Fried chicken, cheddar, salade, sauce Tinger, mayonnaise.",
        "price": null,
        "image": "/images/Tinger-copie-1-768x512.webp"
      },
      {
        "id": "tg-tinger-tower",
        "name": "Tinger Tower",
        "category": "Tingers",
        "description": "Fried chicken, galette de pomme de terre, cheddar, salade, sauce Tinger, mayonnaise.",
        "price": null,
        "image": "/images/Tinger-Tower-copie-1-768x512.webp"
      }
    ]
  },
  {
    "id": "ptits-plaisirs",
    "title": "P'tits Plaisirs",
    "subtitle": "Petits burgers et plaisirs salés à la carte",
    "tab": "burger",
    "items": [
      {
        "id": "pp-cheese-burger",
        "name": "Cheese Burger",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, steak, cheddar, ketchup, moutarde, oignon, cornichon",
        "price": null,
        "image": "/images/CHEESE-BURGER-CHEDDAR-SEUL-768x768.webp"
      },
      {
        "id": "pp-little-g-square",
        "name": "Little g-square",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, steak, cheddar, sauce Géant, salade, oignon",
        "price": null,
        "image": "/images/LITTLE-G-SQUARE-CHEDDAR-SEUL-768x768.webp"
      },
      {
        "id": "pp-hamburger",
        "name": "Hamburger",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, steak, ketchup, moutarde, oignon, cornichon",
        "price": null,
        "image": "/images/Hamburger-seul-768x768.webp"
      },
      {
        "id": "pp-crispy-chicken",
        "name": "Crispy Chicken",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, steak, emmental, salade, oignons frits et sauce Salt n&#8217; Pepper",
        "price": null,
        "image": "/images/CRISPYCHICKEN_2.webp"
      },
      {
        "id": "pp-crispy-beef",
        "name": "Crispy Beef",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, steak, emmental, salade, oignons frits et sauce Salt n&#8217; Pepper.",
        "price": null,
        "image": "/images/CRISPYBEEF.webp"
      },
      {
        "id": "pp-golden-chick",
        "name": "Golden Chick",
        "category": "P'tits Plaisirs",
        "description": "Pain simple, 2 fried chickens, cheddar, salade, oignons, cornichons, sauce Big Square.",
        "price": null,
        "image": "/images/GOLDCHICKEN.webp"
      }
    ]
  },
  {
    "id": "menus-speciaux",
    "title": "Menus Spéciaux & Twice",
    "subtitle": "Des formules gourmandes et double burgers",
    "tab": "burger",
    "items": [
      {
        "id": "ms-menu-gourmand",
        "name": "MENU GOURMAND",
        "category": "Menus Spéciaux & Twice",
        "description": "Naandwich au choix (hors Tornado) + un burger au choix ( Cheese Burger, Little G-Square, Max Chicken, Crispy Chicken, Crispy Beef, Golden Chick ) + Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/MENU-NAAN-TWICE-300x300.png"
      },
      {
        "id": "ms-menu-twice",
        "name": "MENU twice",
        "category": "Menus Spéciaux & Twice",
        "description": "Crunchy Naan Burger + Yankee Naan Burger + Frites + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T1-300x300.png"
      },
      {
        "id": "ms-double-cheese-x-2",
        "name": "double cheese x 2",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T2-300x300.png"
      },
      {
        "id": "ms-max-chicken---double-cheese",
        "name": "Max Chicken + Double Cheese",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T3-300x300.png"
      },
      {
        "id": "ms-big-square---max-chicken",
        "name": "Big Square + Max Chicken",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T4-300x300.png"
      },
      {
        "id": "ms-g-square---max-chicken",
        "name": "G Square + Max Chicken",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T5-300x300.png"
      },
      {
        "id": "ms-crispy-chicken---max-chicken",
        "name": "Crispy Chicken + Max Chicken",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T6-300x300.png"
      },
      {
        "id": "ms-big-square---cheese-burger",
        "name": "Big Square + Cheese Burger",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T7-300x300.png"
      },
      {
        "id": "ms-g-square---double-cheese",
        "name": "G Square + Double Cheese",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T8-300x300.png"
      },
      {
        "id": "ms-g-square-x-2",
        "name": "G Square x 2",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T9-300x300.png"
      },
      {
        "id": "ms-golden-chick---crispy-beef",
        "name": "Golden Chick + Crispy Beef",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/T10-300x300.png"
      },
      {
        "id": "ms-g-square---crispy-chicken",
        "name": "G Square + Crispy Chicken",
        "category": "Menus Spéciaux & Twice",
        "description": "Frites ou Potatoes + Boisson 33cl",
        "price": null,
        "image": ""
      }
    ]
  },
  {
    "id": "salades",
    "title": "Nos Salades",
    "subtitle": "Servies avec Cheese Naan + boisson 33cl",
    "tab": "side",
    "items": [
      {
        "id": "sl-tandoori",
        "name": "Tandoori",
        "category": "Nos Salades",
        "description": "Poulet tandoori, olives vertes, tomates cerises, oignons rouges, salade iceberg, vinaigrette au choix.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Caesar-copie-300x200.png"
      },
      {
        "id": "sl-c-sar",
        "name": "César",
        "category": "Nos Salades",
        "description": "Poulet crispy, copeaux de parmesan, croûtons, tomates cerises, salade iceberg, vinaigrette au choix.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Chef-copie-300x200.png"
      },
      {
        "id": "sl-chef",
        "name": "Chef",
        "category": "Nos Salades",
        "description": "Poulet crispy, bacon de bœuf, copeaux d&#8217;emmental, tomates cerises, potatoes, oignons frits, salade iceberg, vinaigrette au choix.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/NUGGETSENFANT-300x300.png"
      }
    ]
  },
  {
    "id": "sides",
    "title": "Sides & Accompagnements",
    "subtitle": "Frites, Cheese Naan et Tex-Mex à grignoter",
    "tab": "side",
    "items": [
      {
        "id": "sd-frites",
        "name": "Frites ou Potatoes",
        "category": "Sides",
        "description": "Portion de frites dorées ou potatoes croustillantes.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/PETITE-FRITE-300x300.png"
      },
      {
        "id": "sd-frites-cheddar",
        "name": "Frites Cheddar ou Potatoes",
        "category": "Sides",
        "description": "Frites ou potatoes nappées de cheddar fondu chaud.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/PETITE-FRITE-300x300.png"
      },
      {
        "id": "sd-frites-cheddar-bacon",
        "name": "Frites Cheddar Bacon ou Potatoes",
        "category": "Sides",
        "description": "Frites ou potatoes avec cheddar fondu chaud et éclats de bacon de bœuf grillé.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/PETITE-FRITE-300x300.png"
      },
      {
        "id": "sd-cheese-naan",
        "name": "Cheese Naan",
        "category": "Sides",
        "description": "Galette de pain naan maison cuite au four tandoor et fourrée de fromage.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/TANDOORI-copie-300x233.png"
      },
      {
        "id": "sd-mozza-sticks",
        "name": "Mozza Sticks x4",
        "category": "Sides",
        "description": "Bâtonnets de mozzarella croustillants et fondants.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/X4-MOZZA-STICK-300x300.png"
      },
      {
        "id": "sd-bouchees-camembert",
        "name": "Bouchées Camembert x4",
        "category": "Sides",
        "description": "Bouchées croustillantes fourrées au camembert fondant.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/X4-BOUCHEE-CAMEMBERT-300x300.png"
      },
      {
        "id": "sd-chili-cheese",
        "name": "Chili Cheese x4",
        "category": "Sides",
        "description": "Bouchées épicées fourrées de fromage fondu et piments jalapenos.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/X4CHILI-CHEESE-300x300.png"
      }
    ]
  },
  {
    "id": "fried-chicken",
    "title": "Fried Chicken",
    "subtitle": "Tenders et nuggets croustillants à partager",
    "tab": "side",
    "items": [
      {
        "id": "fc-tenders-tasty",
        "name": "Tenders Tasty",
        "category": "Fried Chicken",
        "description": "Aiguillettes de poulet marinées, panées et frites.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Tinger-copie-1-300x200.png"
      },
      {
        "id": "fc-nuggets",
        "name": "Nuggets",
        "category": "Fried Chicken",
        "description": "Beignets de poulet croustillants.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/NUGGETSENFANT-300x300.png"
      },
      {
        "id": "fc-tenders-spicy",
        "name": "Tenders Spicy",
        "category": "Fried Chicken",
        "description": "Aiguillettes de poulet épicées, panées et frites.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/Tinger-copie-1-300x200.png"
      }
    ]
  },
  {
    "id": "kids-menu",
    "title": "Menu Kids",
    "subtitle": "Servi avec frites + Capri-Sun + 1 surprise",
    "tab": "burger",
    "items": [
      {
        "id": "km-cheese-burger",
        "name": "Menu Cheese Burger",
        "category": "Menu Kids",
        "description": "Cheese burger simple + portion de frites + boisson Capri-Sun + jouet surprise.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2025/06/CHEESE-BURGER-CHEDDAR-SEUL-300x300.png"
      },
      {
        "id": "km-nuggets",
        "name": "Menu Nuggets",
        "category": "Menu Kids",
        "description": "4 Nuggets + portion de frites + boisson Capri-Sun + jouet surprise.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/03/NUGGETSENFANT-300x300.png"
      }
    ]
  },
  {
    "id": "desserts",
    "title": "Desserts & Douceurs",
    "subtitle": "Croffles croustillants, churros et crèmes gourmandes",
    "tab": "dessert",
    "items": [
      {
        "id": "ds-croffle-pistachio",
        "name": "Croffle Pistachio",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/nutellaparty-300x300.png"
      },
      {
        "id": "ds-croffle-nutella-party",
        "name": "Croffle Nutella Party",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/fraiseparty-300x300.png"
      },
      {
        "id": "ds-croffle-choco-fraise",
        "name": "Croffle Choco Fraise",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/saltedcaramelcroffle-300x300.png"
      },
      {
        "id": "ds-croffle-salted-caramel",
        "name": "Croffle Salted Caramel",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/chocowhitecroffle-300x300.png"
      },
      {
        "id": "ds-croffle-choco-white",
        "name": "Croffle Choco White",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/churrossucre-300x300.png"
      },
      {
        "id": "ds-churros",
        "name": "Churros",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2026/04/churrosnutella-300x300.png"
      },
      {
        "id": "ds-churros-nutella",
        "name": "Churros Nutella",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/TIRAMISU-CARAMEL-DAIM-300x300.png"
      },
      {
        "id": "ds-tiramisu-caramel-daim",
        "name": "Tiramisu Caramel Daim",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/TIRAMISU-NUTELLA-300x300.png"
      },
      {
        "id": "ds-tiramisu-nutella",
        "name": "Tiramisu Nutella",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/CREAMY-MANGUE--300x300.png"
      },
      {
        "id": "ds-creamy-mangue",
        "name": "Creamy Mangue",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/CREAMY-BANANE--300x300.png"
      },
      {
        "id": "ds-creamy-banane",
        "name": "Creamy Banane",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/CREAMY-FRAISE-300x300.png"
      },
      {
        "id": "ds-creamy-fraise",
        "name": "Creamy Fraise",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/CREAMY-PARIS-BREST-300x300.png"
      },
      {
        "id": "ds-creamy-paris-brest",
        "name": "Creamy Paris-Brest",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/CREAMY-PISTACHE--300x300.png"
      },
      {
        "id": "ds-creamy-pistache",
        "name": "Creamy Pistache",
        "category": "Desserts",
        "description": "BOISSONS BOISSONS MILKSHAKES TOPPING CHANTILLY et éclats de cacahuètes",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/Caramel-300x300.png"
      },
      {
        "id": "ds-fanta",
        "name": "FANTA",
        "category": "Desserts",
        "description": "Orange, Citron, Exotique, Fruit du Dragon",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/width2674-300x300.png"
      },
      {
        "id": "ds-sprite",
        "name": "Sprite",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/7Up-canette-33cl-mojito-300x300.png"
      },
      {
        "id": "ds-hawai",
        "name": "Hawai",
        "category": "Desserts",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/20221130021327_thumb-300x300.png"
      }
    ]
  },
  {
    "id": "boissons",
    "title": "Boissons & Milkshakes",
    "subtitle": "Milkshakes onctueux et rafraîchissements",
    "tab": "boisson",
    "items": [
      {
        "id": "bs-milkshake-caramel",
        "name": "Milkshake Caramel",
        "category": "Boissons",
        "description": "Milkshake onctueux au caramel, nappage chantilly et éclats de cacahuètes.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/Caramel-300x300.png"
      },
      {
        "id": "bs-milkshake-fraise",
        "name": "Milkshake Fraise",
        "category": "Boissons",
        "description": "Milkshake onctueux à la fraise, nappage chantilly et éclats de cacahuètes.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/Fraise-300x300.png"
      },
      {
        "id": "bs-milkshake-chocolat",
        "name": "Milkshake Chocolat",
        "category": "Boissons",
        "description": "Milkshake onctueux au chocolat, nappage chantilly et éclats de cacahuètes.",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/Chocolat-300x300.png"
      },
      {
        "id": "bs-chocolat",
        "name": "CHOCOLAT",
        "category": "Boissons",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/coca-cola-verre-2-300x300.png"
      },
      {
        "id": "bs-coca-cola-en-verre",
        "name": "COCA-COLA EN VERRE",
        "category": "Boissons",
        "description": "Classique, Zero",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/schweppes-agrumes-300x300.png"
      },
      {
        "id": "bs-schweppes",
        "name": "SCHWEPPES",
        "category": "Boissons",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/orangina-4-300x300.png"
      },
      {
        "id": "bs-orangina",
        "name": "Orangina",
        "category": "Boissons",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/3168930162711-2-removebg-preview-300x300.png"
      },
      {
        "id": "bs-lipton",
        "name": "LIPTON",
        "category": "Boissons",
        "description": "Pastèque, Framboise",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/oasis-1-300x300.png"
      },
      {
        "id": "bs-oasis",
        "name": "OASIS",
        "category": "Boissons",
        "description": "Tropical, Pomme Framboise, Pomme Poire",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2023/11/fanta-1-300x300.png"
      },
      {
        "id": "bs-7up",
        "name": "7UP",
        "category": "Boissons",
        "description": "Mojito",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/fuze-tea-300x300.png"
      },
      {
        "id": "bs-fuze-tea",
        "name": "Fuze Tea",
        "category": "Boissons",
        "description": "Pêche, Citron Vert et Menthe",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/hawai-2-300x300.png"
      },
      {
        "id": "bs-tropico",
        "name": "Tropico",
        "category": "Boissons",
        "description": "Tropical, Orange Ananas, Fraise Kiwi",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/capri-sun--300x300.png"
      },
      {
        "id": "bs-capri-sun",
        "name": "Capri-Sun",
        "category": "Boissons",
        "description": "",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/melon_peche-removebg-preview-300x300.png"
      },
      {
        "id": "bs-chill",
        "name": "Chill",
        "category": "Boissons",
        "description": "Melon Pêche",
        "price": null,
        "image": "https://www.restaurant-times-square.com/wp-content/uploads/2024/08/perrier-canette-300x300.png"
      }
    ]
  }
];
