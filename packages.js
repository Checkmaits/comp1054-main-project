const packages = [
  {
    id: 48943,
    name: "Silver Comet Package",
    description:
      "A basic space tour experience, including a brief orbit around Earth and a glimpse of the moon.",
    length: 4,
    price: 24999.99,
    image: "moon-space.jpeg",
    features: [
      "Orbit around Earth",
      "Close encounter with the moon",
      "Lessons in space travel history",
      "5-star breakfast, lunch, and dinner for the duration of the trip",
    ],
  },
  {
    id: 18944,
    name: "Golden Nebula Package",
    description:
      "Explore the wonders of our solar system with a guided tour to Mars and a close encounter with the asteroid belt.",
    length: 8,
    price: 49999.99,
    image: "mars-space.jpeg",
    features: [
      "Orbit around Earth",
      "Up-close visit to the moon",
      "Guided tour of Mars and the asteroid belt",
      "Lessons in space travel history",
      "5-star breakfast, lunch, and dinner for the duration of the trip",
    ],
  },
  {
    id: 28945,
    name: "Platinum Orion Package",
    description:
      "Venture beyond our solar system and visit some of the nearest exoplanets, experiencing the vastness of interstellar space.",
    length: 10,
    price: 74999.99,
    image: "gasgiant-space.jpeg",
    features: [
      "Orbit around Earth",
      "Up-close visit to the moon",
      "Guided tour of Mars and the asteroid belt",
      "Visit to the nearest exoplanets",
      "Lessons in space travel history",
      "5-star breakfast, lunch, and dinner for the duration of the trip",
    ],
  },
  {
    id: 38946,
    name: "Diamond Galaxy Package",
    description:
      "Embark on an unforgettable journey to distant galaxies, witnessing cosmic phenomena and celestial wonders.",
    length: 12,
    price: 99999.99,
    image: "milkyway-space.jpeg",
    features: [
      "Orbit around Earth",
      "Up-close visit to the moon",
      "Guided tour of Mars and the asteroid belt",
      "Visit to the nearest exoplanets",
      "Visit to distant galaxies",
      "Lessons in space travel history",
      "5-star breakfast, lunch, and dinner for the duration of the trip",
    ],
  },
  {
    id: 92347,
    name: "Ultimate Cosmic Expedition Package",
    description:
      "The pinnacle of space tourism, offering a comprehensive tour of the cosmos, including visits to multiple galaxies and unique astronomical events.",
    length: 20,
    price: 347893.99,
    image: "exoplanets-space.jpeg",
    features: [
      "Orbit around Earth",
      "Up-close visit to the moon",
      "Guided tour of Mars and the asteroid belt",
      "Visit to the nearest exoplanets",
      "Visit to distant galaxies",
      "Visit to multiple galaxies",
      "Witness unique astronomical events",
      "Lessons in space travel history",
      "5-star breakfast, lunch, and dinner for the duration of the trip",
    ],
  },
];

const getPackage = (id) => packages.find((p) => p.id === parseInt(id));

module.exports = { packages, getPackage };
