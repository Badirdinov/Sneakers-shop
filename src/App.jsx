import React from 'react'


function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img className='mr-20' width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className='text-uppercase'> React sneacers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30 d-flex aling-center'>
            <img className='mr-10' width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 rub.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1>Все кроссовки</h1>
        <div className="d-flex">
          <div className='cart'>
            <img width={133} height={112} src="/img/k1.jpg" alt="" />
            <h5 className='mb-10 mt-10'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 rub.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img width={133} height={112} src="/img/k2.jpg" alt="" />
            <h5 className='mb-10 mt-10'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 rub.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img width={133} height={112} src="/img/k3.jpg" alt="" />
            <h5 className='mb-10 mt-10'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 rub.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img width={133} height={112} src="/img/k4.jpg" alt="" />
            <h5 className='mb-10 mt-10'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 rub.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
