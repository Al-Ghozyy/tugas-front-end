import React from 'react';

const Products = ({ fruits }) => {
  return (
    <div className="products">
      <h2>Daftar Produk Buah</h2>
      <div className="product-list">
        {fruits.map((fruit, index) => (
          <div key={index} className="product">
            <img src={fruit.gambar} alt={fruit.nama} />
            <div className="product-details">
              <h3>{fruit.nama}</h3>
              <p>Harga: Rp {fruit.harga.toLocaleString()}</p>
              <p>Berat: {fruit.berat}</p>
              <p>Terjual: {fruit.terjual} pcs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
