const products = [
  {
    productName: "Apple iPhone 14",
    img: "https://example.com/iphone14.jpg",
    price: 999.99,
    category: "Electronics",
    brand: "Apple",
    stock: 50,
    description: "The latest iPhone with cutting-edge technology and A15 Bionic chip."
  },
  {
    productName: "Samsung Galaxy S22",
    img: "https://example.com/galaxyS22.jpg",
    price: 799.99,
    category: "Electronics",
    brand: "Samsung",
    stock: 35,
    description: "Flagship smartphone with superior camera quality and fast performance."
  },
  {
    productName: "Sony WH-1000XM4",
    img: "https://example.com/sonyheadphones.jpg",
    price: 349.99,
    category: "Accessories",
    brand: "Sony",
    stock: 100,
    description: "Top-of-the-line noise-cancelling wireless headphones."
  },
  {
    productName: "Nike Air Zoom Pegasus 38",
    img: "https://example.com/nikepegasus.jpg",
    price: 119.99,
    category: "Footwear",
    brand: "Nike",
    stock: 80,
    description: "Comfortable and lightweight running shoes with advanced cushioning."
  },
  {
    productName: "Dell XPS 13",
    img: "https://example.com/dellxps13.jpg",
    price: 1249.99,
    category: "Electronics",
    brand: "Dell",
    stock: 25,
    description: "Ultra-slim and powerful laptop for professionals and students alike."
  },
  {
    productName: "Adidas Ultraboost 21",
    img: "https://example.com/adidasultraboost.jpg",
    price: 180.00,
    category: "Footwear",
    brand: "Adidas",
    stock: 60,
    description: "High-performance running shoes with a stylish design and superior comfort."
  },
  {
    productName: "Canon EOS R5",
    img: "https://example.com/canonr5.jpg",
    price: 3899.99,
    category: "Cameras",
    brand: "Canon",
    stock: 15,
    description: "Mirrorless camera with 8K video recording and cutting-edge features."
  },
  {
    productName: "Apple MacBook Pro 16",
    img: "https://example.com/macbookpro16.jpg",
    price: 2399.99,
    category: "Electronics",
    brand: "Apple",
    stock: 40,
    description: "High-performance laptop with M1 Pro chip and stunning Retina display."
  },
  {
    productName: "Bose SoundLink Revolve+",
    img: "https://example.com/boserevolveplus.jpg",
    price: 299.99,
    category: "Accessories",
    brand: "Bose",
    stock: 70,
    description: "Portable Bluetooth speaker with deep, loud, immersive sound."
  },
  {
    productName: "HP Envy x360",
    img: "https://example.com/hpenvyx360.jpg",
    price: 1049.99,
    category: "Electronics",
    brand: "HP",
    stock: 45,
    description: "Convertible laptop with a touchscreen and fast Intel Core processor."
  },
];


const userinfo = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    role: "user",
    date: new Date('2023-09-25'),
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "mypassword",
    role: "admin",
    date: new Date('2023-09-26'),
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "alicepass",
    role: "user",
    date: new Date('2023-09-27'),
  },
  {
    name: "Bob Williams",
    email: "bob.williams@example.com",
    password: "bobsecure",
    role: "user",
    date: new Date('2023-09-28'),
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "brownsecure",
    role: "user",
    date: new Date('2023-09-29'),
  },
  {
    name: "David Miller",
    email: "david.miller@example.com",
    password: "millerstrong",
    role: "user",
    date: new Date('2023-09-20'),
  },
  {
    name: "Eve Clark",
    email: "eve.clark@example.com",
    password: "evepassword",
    role: "user",
    date: new Date('2023-09-21'),
  },
  {
    name: "Frank Wright",
    email: "frank.wright@example.com",
    password: "wright123",
    role: "user",
    date: new Date('2023-09-22'),
  },
  {
    name: "Grace Lee",
    email: "grace.lee@example.com",
    password: "leestrong",
    role: "user",
    date: new Date('2023-09-23'),
  },
  {
    name: "Henry Martin",
    email: "henry.martin@example.com",
    password: "martinsecure",
    role: "user",
    date: new Date('2023-09-24'),
  },
];
const orders = [
  {
    customerid: "66fac83f9ec5cf1fe866d553",  // Example ObjectId for the user
    customerName: "John Doe",
    address: "123 Main St, Springfield, IL",
    phoneNumber: "03448518323",
    totalPrice: 299.98,
    orderDate: new Date('2024-09-20'),
    orderTime: "11:30:25 AM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a7c",  // Example ObjectId for the product
        productName: "Apple iPhone 14",
        quantity: 1,
        price: 999.99,
       
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d553",
    customerName: "Jane Smith",
    address: "456 Elm St, Denver, CO",
    phoneNumber: "03448598323",
    totalPrice: 599.98,
    orderDate: new Date('2024-09-21'),
    orderTime: "09:15:10 AM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a7d",
        productName: "Samsung Galaxy S22",
        quantity: 1,
        price: 799.99,
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d553",
    customerName: "Michael Johnson",
    address: "789 Oak St, Miami, FL",
    phoneNumber: "03448598563",
    totalPrice: 349.99,
    orderDate: new Date('2024-09-22'),
    orderTime: "01:45:33 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a7e",
        productName: "Sony WH-1000XM4",
        quantity: 2,
        price: 349.99,
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d554",
    customerName: "Alice Davis",
    address: "101 Pine St, Austin, TX",
    phoneNumber: "03412598323",
    totalPrice: 119.99,
    orderDate: new Date('2024-09-23'),
    orderTime: "10:20:05 AM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a7f",
        productName: "Nike Air Zoom Pegasus 38",
        quantity: 1,
        price: 119.99,
        
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d554",
    customerName: "Chris Evans",
    address: "202 Cedar St, Seattle, WA",
    phoneNumber: "03448591323",
    totalPrice: 2399.99,
    orderDate: new Date('2024-09-24'),
    orderTime: "08:40:55 AM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a83",
        productName: "Apple MacBook Pro 16",
        quantity: 1,
        price: 2399.99,
       
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d555",
    customerName: "Laura Wilson",
    address: "303 Birch St, Boston, MA",
    phoneNumber: "03468598323",
    totalPrice: 180.00,
    orderDate: new Date('2024-09-25'),
    orderTime: "03:05:14 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a81",
        productName: "Adidas Ultraboost 21",
        quantity: 2,
        price: 180.00,
       
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d555",
    customerName: "Daniel Brown",
    address: "404 Willow St, Phoenix, AZ",
    phoneNumber: "03428598323",
    totalPrice: 299.99,
    orderDate: new Date('2024-09-26'),
    orderTime: "02:20:10 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a84",
        productName: "Bose SoundLink Revolve+",
        quantity: 1,
        price: 299.99,
       
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d555",
    customerName: "Emily White",
    address: "505 Maple St, San Francisco, CA",
    phoneNumber: "03128598323",
    totalPrice: 1049.99,
    orderDate: new Date('2024-09-27'),
    orderTime: "04:10:44 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a85",
        productName: "HP Envy x360",
        quantity: 1,
        price: 1049.99,
        
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d555",
    customerName: "Kevin Martin",
    address: "606 Aspen St, New York, NY",
    phoneNumber: "03388598323",
    totalPrice: 3899.99,
    orderDate: new Date('2024-09-28'),
    orderTime: "06:35:22 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a82",
        productName: "Canon EOS R5",
        quantity: 1,
        price: 3899.99,
       
      },
    ],
  },
  {
    customerid: "66fac83f9ec5cf1fe866d555",
    customerName: "Sophia Lee",
    address: "707 Walnut St, Chicago, IL",
    phoneNumber: "03418598323",
    totalPrice: 999.99,
    orderDate: new Date('2024-09-29'),
    orderTime: "12:50:33 PM",
    details: [
      {
        productId: "66fac8e8d75aecb87c289a7c",
        productName: "Apple iPhone 14",
        quantity: 1,
        price: 999.99,
        
      },
    ],
  },
];

module.exports = {
  products,
  userinfo,
  orders
};


