import React, { useState, useEffect, useRef } from 'react';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import './index.scss';
import sampleData from '../sampledata.js';
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';

function App() {
  const [productID, setProductID] = useState('37316');
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${productID}/details`)
      .then((results) => results.data)
      .then((results) => setProduct(results))
      .catch((err) => console.log(err));
  }, [productID]);

  const ratingRef = useRef();
  return (
    <CookiesProvider>
      <div className="wholeAppWrapper">
        <Overview productID={productID} setProductID={setProductID} ratingRef={ratingRef} />
        <div ref={ratingRef}><Ratings /></div>
        <Related productID={productID} setProduct={setProductID} />
        <Questions productID={productID} product={product} />
      </div>
    </CookiesProvider>
  );
}

export default App;
