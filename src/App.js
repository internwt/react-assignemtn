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
    <div class="container">
      <div className="top">
        <div className="product_image_section">
          <img className="product_image" src={productImage} alt="product_image" />
        </div>
      </div>
      <div className="product_details_mid_section">
        <div className="product_name_section">
          <h1 >Amisa</h1>
          <h1>Organic Spelt Cripsy Spelt Flakes</h1>
        </div>
        <div className="product_price_section">
          <span className="product_weight">250g</span>
          <span className="product_price">€1.99</span>
        </div>
        <div className="product_btn_control_section">
          <button onClick={handleDecQuantity}>-</button>
          <span>{counter}</span>
          <button onClick={handleIncQuantity}>+</button>
          <button>update Cart</button>
        </div>
        <hr />

        <div className="product_detail_section">
          <div className="product_delivery_details">
            <span>Delivered in:  </span>
            <span>2 days</span>
          </div>
          <div className="product_delivery_details">
            <span> Next day delivery:</span>
            <span> order by 2:00pm</span>
          </div>
          <div className="product_delivery_details">
            <span> Delivery by:</span>
            <span>Stove</span>
          </div>
        </div>

        <div>
          About the product
          <div className="product_about_section">
            <span style={{ width: "712px" }}>{turnCateStr ? string.substring(0, 140) + "...." : string}</span>
            <p className="product_read_section" onClick={() => setTurnCateStr(turnCateStr ? false : true)}>Read {turnCateStr ? "More +" : "Less -"}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default App;
