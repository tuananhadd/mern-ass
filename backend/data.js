import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike air',
      slug: 'nike-air',
      category: 'Shoes',
      image: '/images/p1.jpg',
      price: 200,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Nike Jordan',
      slug: 'nike-Jordan',
      category: 'Shoes',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality product the world',
    },
    {
      // _id: '3',
      name: 'Nike Jordan x',
      slug: 'nike-Jordan-x',
      category: 'Shoes',
      image: '/images/p3.jpg',
      price: 150,
      countInStock: 10,
      brand: 'Nike',
      rating: 1.5,
      numReviews: 10,
      description: 'high quality shoes the year',
    },
  ],
};
export default data;
