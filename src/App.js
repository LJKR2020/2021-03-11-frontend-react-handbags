import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                type="button"
                text="To the collection"
                log="Going to the collection!"
                disabled = {false}>
            </Button>
            <Button
                type="button"
                text="Shop all bags"
                log="Going to the bags!"
                disabled = {false}>
            </Button>
            <Button
                type="button"
                text="Pre-orders"
                log="Going to the pre-orders"
                disabled = {true}>
            </Button>
        </nav>
          <main>
              <Product
                  title="Best Seller"
                  image={bag1}
                  alternatief={"Pink bag"}
                  producttitle={"The handy bag"}
                  productprice={"€ 400,-"}>
              </Product>
              <Product
                  title={"Best seller"}
                  image={bag2}
                  alternatief={"Orange bag"}
                  producttitle={"The stylish bag"}
                  productprice={"€ 250,-"}>
              </Product>
              <Product
                  title={"Best seller"}
                  image={bag3}
                  alternatief={"Green bag"}
                  producttitle={"The simple bag"}
                  productprice={"€ 300,-"}>
              </Product>
              <Product
                  title={"Best seller"}
                  image={bag4}
                  alternatief={"Yellow bag"}
                  producttitle={"The trendy bag"}
                  productprice={"€ 150,-"}>
              </Product>
          </main>
          <footer>
              <Tile
              title = {"The brand"}
              paragraf1 = {"Lorem ipsum dolon sit amet, consectetur adipisicing elit. Asperiores aut blanditiis debitis eaque libero molestiae, odio quis quod repellat vero."}
              paragraf2 ={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur consequuntur cumque dicta dignissimos harum nemo nesciunt quis quod, tenetur."}>
              </Tile>
              <Tile
              image = {brand}
              alternatief = {"Box with logo of the brand"}>
              </Tile>
              <Tile
                  image = {ourStory}
                  alternatief = {"Two hugging people"}>
              </Tile>
              <Tile
                  title = {"Our story"}
                  paragraf1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deserunt fuga fugit ipsa itaque molestiae nisi quibusdam. Ad nihil quos recusandae ullam. Ad corporis in iste obcaecati quod reprehenderit, tenetur?"}>
              </Tile>
          </footer>
      </>
  );
}

export default App;



