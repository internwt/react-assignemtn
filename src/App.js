import { useState } from 'react'
import productImage from "./assets/groceries_1UVT6zNottAHfy2RqFP9.webp"
import { string } from './constant'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  const [turnCateStr, setTurnCateStr] = useState(true)

  const handleIncQuantity = () => {
    if (counter < 10) {
      setCounter(counter + 1)

    }
  }

  const handleDecQuantity = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div class="container">
      <div class="top">
        <div class="header-row">
          <img src={productImage} alt="product" />
        </div>
      </div>
      <div class="bottom">
        <div className="product-name-description">
          <h2 style={{ color: "#666714" }}>Amisa</h2>
          <h2>Organic Spelt Cripsy Spelt Flakes</h2>
        </div>
        <div class="product-row">
          <div class="product-name-col">
            <span class="product-weight-col">250g</span>
          </div>
          <div class="product-amount-col">
            <span class="product-size-col">€1.99</span>
          </div>
        </div>
        <div class="product-row">
          <div class="product-quantity-col">
            <div class="wrapper">
              <span className="minus" onClick={handleDecQuantity}>-</span>
              <span className="num">{counter}</span>
              <span className="plus" onClick={handleIncQuantity}>+</span>
            </div>
          </div>
          <div class="product-update-cart-btn">
            <span >Update cart</span>
          </div>
        </div>
        <hr />
        <div className="product-details-row">
          <div class="product-row">
            <div class="product-name-col">
              <span class="transaction-name">Delivered in:</span>
            </div>
            <div class="transaction-amount-col">
              <span class="product-delivery-name">2 days</span>
            </div>
          </div>
          <div class="product-row">
            <div class="product-name-col">
              <span class="transaction-name">Next day delivery:</span>
            </div>
            <div class="transaction-amount-col">
              <span class="product-delivery-name">Order by 2:00PM</span>
            </div>
          </div>
          <div class="product-row">
            <div class="product-name-col">
              <span class="transaction-name">Delivery by:</span>
            </div>
            <div class="transaction-amount-col">
              <span class="product-delivery-name">Stove</span>
            </div>
          </div>
        </div>
        <hr />
        <div className='product-footer-section'>
          <h3>About the product</h3>
          <div className="product-about-us">{turnCateStr ? string.substring(0, 140) + "...." : string}
          </div>
          <p className="product-read-more-btn" onClick={() => setTurnCateStr(!turnCateStr)}>{turnCateStr ? "Read more  +" : "Read Less -"}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
