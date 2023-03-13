import React from 'react'

const Drawer = () => {
    return (
        <div  className="overlay">
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between '>Карзина <img className='cu-p removeBtn' src="/img/btnRemove.svg" alt="Remove" /></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center">
                        <div className='cartItemImg' style={{ backgroundImage: 'url(/img/k2.jpg)' }}>

                        </div>
                        <div className='mr-20'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 rub.</b>
                        </div>
                        <img className='removeBtn' src="/img/btnRemove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem d-flex align-center">
                        <div className='cartItemImg' style={{ backgroundImage: 'url(/img/k2.jpg)' }}>

                        </div>
                        <div className='mr-20'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 rub.</b>
                        </div>
                        <img className='removeBtn' src="/img/btnRemove.svg" alt="Remove" />
                    </div>
                </div>
                <div className='cartTotalBlog'>
                    <ul>
                        <li className='d-flex mb-20'>
                            <span>itogo</span>
                            <div></div>
                            <b>21 498 rub.</b>
                        </li>
                        <li className='d-flex'>
                            <span>nalog 5%</span>
                            <div></div>
                            <b>1074 rub.</b>
                        </li>
                    </ul>
                    <button className='greenBtn' >Оформить заказ <img src="/img/arrow.svg" alt="arrow" /> </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;