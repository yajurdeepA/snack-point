const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000; // You can change this to any port you prefer

// Enable CORS for all routes (adjust the options as needed for your environment)
app.use(cors());

// Sample data for products
const categories = [
  {
    id: 1,
    name: "Biryani",
    image: "../assets/images/categories/biryani_cropped.png",
  },
  {
    id: 2,
    name: "Mutton",
    image: "../assets/images/categories/mutton_resized.jpg",
  },
  {
    id: 3,
    name: "Chicken",
    image: "../assets/images/categories/chicken_resized.jpg",
  },
];

const products = [
  {
    id: 1,
    name: "Biryani 65",
    description:
      "Chicken 65 Biryani is a special kind of biryani where the cooked rice is layered with chicken 65 masala and other spices, and dum cooked with perfection. Chicken 65 Biryani is different from regular biryani. If you see the whole process it will look lengthy, but it is worth trying. ",
    price: 14.95,
    category: "Biryani",
    image: "../assets/images/items/chicken-biryani-006.jpg",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description:
      "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. ",
    price: 15.95,
    category: "Biryani",
    image: "../assets/images/items/chicken-biryani.webp",
  },
  {
    id: 3,
    name: "Mutton Biryani",
    description:
      "Mutton biryani is a classic dish made by layering rice over slow cooked mutton gravy.",
    price: 18.95,
    category: "Biryani",
    image: "../assets/images/items/Mutton-Biryani.webp",
  },
  {
    id: 4,
    name: "Mutton Curry",
    description:
      "Mutton curry is a dish of slow cooked mutton or lamb in a spicy gravy. ",
    price: 20.95,
    category: "Mutton",
    image: "../assets/images/items/mutton-curry.webp",
  },
  {
    id: 5,
    name: "Goat Curry",
    description:
      "Curry goat is a popular dish made with goat meat, curry powder, and other spices. The meat is slow-cooked in a stew-like sauce that often includes onions, garlic, ginger root, and scallions. Curry goat is often served with rice and peas or other vegetables.",
    price: 21.95,
    category: "Mutton",
    image: "../assets/images/items/goat-curry.jpg",
  },
  {
    id: 6,
    name: "Mutton Rogan Josh",
    description:
      "Mutton Rogan Josh is an Indian lamb curry that originated in Kashmir. This Mutton Rogan Josh recipe is a delicacy with intense flavours that you can't make just once.",
    price: 22.95,
    category: "Mutton",
    image: "../assets/images/items/mutton-rogan-josh.webp",
  },
  {
    id: 7,
    name: "Tawa Chicken",
    description:
      "Tawa Chicken is nothing but bize-size chicken pieces cooked on an iron Tawa with a host of spices and lime juice. This recipe is so simple yet high on flavour. It requires only minimal ingredients. This can be an ideal meal for a weeknight dinner.",
    price: 20.95,
    category: "Chicken",
    image: "../assets/images/items/tawa-chicken.jpg",
  },
  {
    id: 8,
    name: "Punjabi Chicken Curry",
    description:
      "Punjabi chicken curry features a thick gravy with a nice spicy flavor that's not too hot.",
    price: 18.95,
    category: "Chicken",
    image: "../assets/images/items/punjabi-chicken-curry.jpg",
  },
  {
    id: 9,
    name: "Kadai Chicken",
    description:
      "It is plain old chicken simmered with ghee/ mustard oil, plenty of tomatoes, ginger, garlic & coarsely crushed whole spices.",
    price: 19.95,
    category: "Chicken",
    image: "../assets/images/items/Kadai-Chicken.jpg",
  },
];

app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});
// Route to get products by category
app.get("/products", (req, res) => {
  const category = req.query.category;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    // If there are no matching products, respond with a 404 Not Found status code
    res
      .status(404)
      .json({ message: "No products found for the given category" });
  } else {
    // If there are matching products, respond with a 200 OK status code
    res.status(200).json(filteredProducts);
  }
});

app.get("/product", (req, res) => {
  const id = req.query.id;
  const filteredProducts = products.filter((product) => product.id == id);

  if (filteredProducts.length === 0) {
    // If there are no matching products, respond with a 404 Not Found status code
    res.status(404).json({ message: "No product found" });
  } else {
    // If there are matching products, respond with a 200 OK status code
    res.status(200).json(filteredProducts);
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
