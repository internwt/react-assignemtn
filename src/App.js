import { useState } from 'react'
import productImage from "./assets/groceries_1UVT6zNottAHfy2RqFP9.webp"
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0)

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
      <div>
        <h1>Amisa</h1>
        <h1>Organic Spelt Cripsy Spelt Flakes</h1>
      </div>
      <div>
        <p>250g</p>
        <p>€ 1.99</p>
      </div>
      <div>
        <button onClick={handleDecQuantity}>-</button>
        <p>{counter}</p>
        <button onClick={handleIncQuantity}>+</button>
        <button>update Cart</button>
      </div>
      <div>
        Delivered in:  2 days
        Next day delivery:  order by 2:00pm
        Delivery by:   Stove
      </div>
      <div>
        About the product
        <p>Lightly toasted flakes drizzled in honey and barley malt Organic, Spelt & delightful,Drizzled in honey .... </p>
      </div>
      <p>Read more</p>
    </div>
  );
}

export default App;
