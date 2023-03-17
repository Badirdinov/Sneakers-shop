/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



const arr = []


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [openCart, setOpenCart] = React.useState(false);

  React.useEffect(() => {
    fetch("https://641166d9e96e5254e2d4605d.mockapi.io/items")
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setItems(json);
      })
  }, []);

  const onAddToCart = ( obj) => {
    setCartItems(prev => [...prev, obj])
  }


  return (
    <div className="wrapper clear">
      {openCart && <Drawer items={cartItems} onClose={() => setOpenCart(false)} />}
      <Header onClickCart={() => setOpenCart(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-blog d-flex align-center'>
            <a href="#">
              <img src="/img/search.svg" alt="search" />
            </a>
            <input type="text" placeholder='search...' />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map((sneak) => (
              <Card
                title={sneak.title}
                price={sneak.price}
                image={sneak.image}
                onClickPlus={(obj) => onAddToCart(obj)}
                onClickFavorite={() => console.log("sneak")}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
