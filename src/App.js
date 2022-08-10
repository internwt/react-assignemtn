import { useState } from 'react'
import productImage from "./assets/groceries_1UVT6zNottAHfy2RqFP9.webp"
import { string } from './constant'
import './App.scss';

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
    <div className="App">
      <div className="product_image_header">
        <div className="product_image_section">
          <img className="product_image" src={productImage} />
        </div>
      </div>
      <div className="product_details_mid_section">
        <div className="product_name_section">
          <h1 className="product_title">Amisa</h1>
          <h1>Organic Spelt Cripsy Spelt Flakes</h1>
        </div>
        <div className="product_price_section">
          <p>250g</p>
          <p>€ 1.99</p>
        </div>
        <div className="product_btn_controll_section">
          <button onClick={handleDecQuantity}>-</button>
          <p>{counter}</p>
          <button onClick={handleIncQuantity}>+</button>
          <button>update Cart</button>
        </div>
        <div className="product_detail_section">
          <p>Delivered in:  2 days</p>
          <p> Next day delivery:  order by 2:00pm</p>
          <p> Delivery by:   Stove</p>
        </div>
        <div className="product_about_section">
          About the product
          <p>{turnCateStr ? string.substring(0, 140) + "...." : string}</p>
          <p onClick={() => setTurnCateStr(turnCateStr ? false : true)}>Read {turnCateStr ? "More" : "Less"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
