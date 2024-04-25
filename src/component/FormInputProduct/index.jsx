import React, { useState } from 'react';
import './index.css';

const FormInputProduct = ({ setListProducts }) => {
  const [idPrd, setIdPrd] = useState('');
  const [titlePrd, setTitlePrd] = useState('');
  const [typePrd, setTypePrd] = useState('');
  const [quantityPrd, setQuantityPrd] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [pricePrd, setPricePrd] = useState('');

  const onIdChange = (e) => setIdPrd(e.target.value);
  const onTitleChange = (e) => setTitlePrd(e.target.value);
  const onTypeChange = (e) => setTypePrd(e.target.value);
  const onQuantityChange = (e) => setQuantityPrd(e.target.value);
  const onImageURLChange = (e) => setImageURL(e.target.value);
  const onPriceChange = (e) => setPricePrd(e.target.value);

  const handleAddProduct = () => {
    setListProducts((prevListPrd) => {
      const newArr = [...prevListPrd];
      newArr.push({
        id: idPrd,
        title: titlePrd,
        type: typePrd,
        quantity: quantityPrd,
        price: pricePrd,
        imageUrl: imageURL,
      });
      return newArr;
    });
  };

  return (
    <div className="form-input-container">
      <div className="form-input">
        <p>Id</p>
        <input onChange={onIdChange} />
      </div>
      <div className="form-input">
        <p>Title</p>
        <input onChange={onTitleChange} />
      </div>
      <div className="form-input">
        <p>Type</p>
        <input onChange={onTypeChange} />
      </div>
      <div className="form-input">
        <p>Quantity</p>
        <input onChange={onQuantityChange} />
      </div>
      <div className="form-input">
        <p>ImageURL</p>
        <input onChange={onImageURLChange} />
      </div>
      <div className="form-input">
        <p>Price</p>
        <input onChange={onPriceChange} />
      </div>
      <button
        onClick={handleAddProduct}
        style={{ height: '30px', fontWeight: 'bold', borderRadius: '10px' }}
      >
        Add new Product
      </button>
    </div>
  );
};

export default FormInputProduct;
