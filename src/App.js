import React from 'react';
import './App.css';
import Button from "./components/Button";

import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <button type="button" onClick={() => console.log("To the collection")}>
                to the collection
            </button>
            <button type="button" onClick={() => console.log("Shop all bags")}>
                shop all bags
            </button>
            <button type="button" onClick={() => console.log("Pre-orders")}>
                pre-orders
            </button>
        </nav>
          <main>
              <article>
                  <span></span>
                  <img src={"./assets/bag_1.png"} alt={"bag1"}/>
              </article>
          </main>
      </>
  );
}

export default App;



