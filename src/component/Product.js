import React from 'react';

const Products = () => {
  const products = [
    { name: 'Kursi gaming Fantech', price: 'Rp 2.350.000,-' },
    { name: 'Poco X6 Pro', price: 'Rp 4.999.000,-' },
    { name: 'SSD Seagate 1TB', price: 'Rp 2.450.000,-' }
  ];

  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
