import React, { useState } from 'react';
import './ProductList.css'; 
// import ff from '../Image/1.png.jpg';
// import ff2 from '../Image/2.png.jpg';
import produc1 from '../Image/12.png.jpg';
import produc2 from '../Image/13.png.jpg';
import produc3 from '../Image/14.png.jpg';
import produc4 from '../Image/15.png.jpg';
import produc5 from '../Image/16.png.jpg';
import produc6 from '../Image/6.png.jpg';
import produc7 from '../Image/8.png.jpg';
import produc8 from '../Image/9.png.jpg';
import produc9 from '../Image/10.png.jpg';
// import produc10 from '../Img/Product/images/products/12.png.jpg';
import produc11 from '../Image/11.png.jpg';
import produc12 from '../Image/1.png.jpg';
import produc13 from '../Image/2.png.jpg';
import produc14 from '../Image/3.png.jpg';
import produc15 from '../Image/4.png.jpg';
import produc16 from '../Image/5.png.jpg';

const products = [

  {
    id: 1, name: 'Ready to Cook Breakfast, Diet Food for Weight Loss(1 kg)', price: 400, image: produc1, Quantity: "1kg", Seller: "Srsd products",
    Description: "Sourced from organic farms, this turmeric powder is 100% natural and free from chemicals and pesticides"
  },
  {
    id: 2, name: 'MOTHER DAIRY Pasteurised Cultured Butter  (250 g)', price: 200, image:produc2, Quantity: "250", Seller: "Nandhan products",
    Description: "It has the right amount of salt which is liked by all. Produced under totally hygienic conditions using Mother Dairy wholesome milk.Mother Butter is creamier, tastier and spreads easily"
  },
  {
    id: 3, name: '100 % Pure Green Aloe Vera Gel (Pack of 2)  (240 ml)', price: 298, image: produc3, Quantity: "240g", Seller: "Raja & co",
    Description: "It has the right amount of salt which is liked by all. Produced under totally hygienic conditions using Mother Dairy wholesome milk.Mother Butter is creamier, tastier and spreads easily"
  },
  {
    id: 4, name: 'High In Protein & Fiber Chia Seeds  (250 g)', price: 400, image: produc4, Quantity: "250g", Seller: "Nallan products",
    Description: "These organic chia seeds are nutrient powerhouses, packed with omega-3 fatty acids, fiber, and antioxidants"
  },
  {
    id: 5, name: 'ratch Organic  | 100% Natural hair dye | No Ammonia  (300 g)', price: 200, image: produc5, Quantity: "300g", Seller: "Ost products",
    Description: "It has the right amount of salt which is liked by all. Produced under totally hygienic conditions using Mother Dairy wholesome milk.Mother Butter is creamier, tastier and spreads easily"
  },
  {
    id: 6, name: ' Corn ,Frs Corn In Brine 800 gm || Ready to Use Sweet Corn', price: 250, image: produc6, Quantity: "250g", Seller: "Marwar Spices ",
    Description: "It has the right amount of salt which is liked by all. Produced under totally hygienic conditions using Mother Dairy wholesome milk.Mother Butter is creamier, tastier and spreads easily"
  },
  {
    id: 8, name: ' Organic Red Lentils || Life Red Masoor Dal (Split) , (500 g)  ', price: 250, image:produc7, Quantity: "500g", Seller: "Hrs&co",
    Description: "Grown in chemical-free soil, these organic red lentils are a protein-rich, gluten-free, and heart-healthy legume. They cook quickly and have a mild, earthy flavor, making them ideal for soups, curries, and salads. "
  },

  {
    id: 9, name: ' Srs Foods Organic Turmeric || Haldi Powder  (250 g),organic  ', price: 550, image: produc8, Quantity: "550g", Seller: "Rana products",
    Description: "ourced from organic farms, this turmeric powder is 100% natural and free from chemicals and pesticides. Known for its vibrant yellow color and rich antioxidant properties, it’s an essential ingredient in cooking and traditional medicine."
  },
  {
    id: 10, name: ' HARI srs Whole Leaf Green Tea Plastic Bottle  (200 g)  ', price: 300, image: produc9, Quantity: "300g", Seller: "Hrs&co",
    Description: "Handpicked from organic tea gardens, these green tea leaves are free from artificial fertilizers and chemicals. Loaded with antioxidants, organic green tea supports metabolism, improves digestion, and promotes relaxation."
  },

  {
    id: 11, name: 'Forest Raw Honey Unprocessed, Pure natural organic honey(500 g)  ', price: 650, image: produc11, Quantity: "500g", Seller: "Marwar Spices ",
    Description: "Collected from organic apiaries, this raw honey is unprocessed and free from additives, retaining all of its natural enzymes, vitamins, and minerals. Its smooth texture and rich sweetness make it perfect for teas."
  },
  {
    id: 12, name: 'Red Chilli(100% Organic and Chemical Free 100g)', price: 90, image: produc12, Quantity: "100g", Seller: "Nana products",
    Flavor: "NO ADDED FLAVOUR",
    Description:
      "Skfr Whole Red ChilliesVarious Other Indian Delicacies. It Adds Extra Zing & Zest To The Food. Bharat Chillis Are An Excellent Source Of Molybdenum And Manganese."
  },
  {
    id: 13, name: ' Groundnut 750ml, (Oil PET Bottle and Organic NRS)', price: 250,
    image: produc13, Quantity: "750g", Seller: "Nallan products",
    Flavor: "NO ADDED FLAVOUR",
    Description:
      "Nallan products Cold Pressed Virgin Groundnut for Men & Women/Cooking Oil.Groundnut oil gives the skin a more youthful appearance by preventing the development"
  },
  {
    id: 14, name: 'Coconad 100 percent pure coconut oil ', price: 200,image: produc14, Quantity: "500ml", Seller: "Raja & co",
    Flavor: "NO ADDED FLAVOUR",
    Description: "Nallan products Cold Pressed Virgin Coconad for Men & Women/Cooking Oil.Coconad oil gives the skin a more youthful appearance by preventing the development"
  },
  {
    id: 15, name: 'BLACK PEPPER,Classic Black Pepper 500g', price: 650, image: produc15, Quantity: "500g", Seller: "Nandhan products",
    Flavor: "NO ADDED FLAVOUR",
    Description: "ntroducing our premium quality black pepper! Experience the rich and aromatic flavor of our whole black pepper seeds. Whether you need 1kg, 500g, 100gm, 50 g, 250 g, 200 g, we have got you covered. "
  },
  {
    id: 16, name: 'Dried fruit,CASHEW,PISTA,organic 560g', price: 300, image: produc16, Quantity: "560g", Seller: "Srsd products",
    Description: "Crafted to perfection, this delightful mix features a tantalizing blend of Almonds, Cashews, Raisins, Pistachios, Apricots, and Black Raisins, creating a symphony of taste and health benefits.",
    Flavor: "NO ADDED FLAVOUR"
  },
];

const ProductList = ({ searchTerm, addToCart }) => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) + delta, 1), 
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      handleQuantityChange(product.id, -quantity); 
    }
  };

  return (
 
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className='product-cart-inside'>
                <div className='sss'>
                  <div>{product.name}</div>
                  <div>${product.price}</div>
                  <div className='kk'>
                    <button className='addcart-pluse' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                    <span>{quantities[product.id]}</span>
                    <button className='addcart-pluse' onClick={() => handleQuantityChange(product.id, 1)}>+</button> <br />
                    <button className='addcart-botton' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
  );
};

export default ProductList;
