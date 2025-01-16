import { VideoData } from "./types";

export const videoData: VideoData[] = [
  {
    id: "1",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Delicious Toast Recipe",
    description: "Learn how to make the perfect avocado toast!",
    products: [
      {
        id: "p1",
        name: "Artisan Bread",
        price: 4.99,
        image: "/placeholder.svg",
        position: { x: 20, y: 30 },
      },
      {
        id: "p2",
        name: "Organic Avocado",
        price: 2.99,
        image: "/placeholder.svg",
        position: { x: 60, y: 50 },
      },
    ],
  },
  {
    id: "2",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Quick Breakfast Ideas",
    description: "Start your day right with these easy breakfast recipes!",
    products: [
      {
        id: "p3",
        name: "Toaster",
        price: 29.99,
        image: "/placeholder.svg",
        position: { x: 30, y: 40 },
      },
      {
        id: "p4",
        name: "Jam Set",
        price: 12.99,
        image: "/placeholder.svg",
        position: { x: 70, y: 60 },
      },
    ],
  },
  {
    id: "3",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "Gourmet Coffee Brewing",
    description: "Elevate your morning with these coffee brewing techniques!",
    products: [
      {
        id: "p5",
        name: "Coffee Grinder",
        price: 39.99,
        image: "/placeholder.svg",
        position: { x: 25, y: 35 },
      },
      {
        id: "p6",
        name: "Pour-Over Kit",
        price: 24.99,
        image: "/placeholder.svg",
        position: { x: 65, y: 55 },
      },
    ],
  },
  {
    id: "4",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "Healthy Smoothie Recipes",
    description: "Boost your energy with these delicious smoothie ideas!",
    products: [
      {
        id: "p7",
        name: "High-Speed Blender",
        price: 89.99,
        image: "/placeholder.svg",
        position: { x: 35, y: 45 },
      },
      {
        id: "p8",
        name: "Organic Fruit Mix",
        price: 14.99,
        image: "/placeholder.svg",
        position: { x: 75, y: 65 },
      },
    ],
  },
  {
    id: "5",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "Artisanal Sandwich Crafting",
    description: "Create restaurant-quality sandwiches at home!",
    products: [
      {
        id: "p9",
        name: "Gourmet Bread Selection",
        price: 9.99,
        image: "/placeholder.svg",
        position: { x: 40, y: 30 },
      },
      {
        id: "p10",
        name: "Deli Meat Assortment",
        price: 19.99,
        image: "/placeholder.svg",
        position: { x: 70, y: 50 },
      },
    ],
  },
];
