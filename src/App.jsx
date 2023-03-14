/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';



const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    image: "/img/k1.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k2.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k3.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k4.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k5.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k6.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k7.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k8.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k9.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k10.png"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k11.png"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    image: "/img/k12.jpg"
  }
]


function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-blog d-flex'>
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder='search...' />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            arr.map((sneak) => (
              <Card title={sneak.title} price={sneak.price} image={sneak.image} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
