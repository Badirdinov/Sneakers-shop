import React from 'react'

const Header = (props) => {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img className='mr-20' width={40} height={40} src="/img/logo.png" alt="" />
                <div>
                    <h3 className='text-uppercase'> React sneacers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li
                    className='mr-30 d-flex aling-center cu-p'
                    onClick={props.onClickCart}
                >
                    <img
                        className='mr-10'
                        width={18}
                        height={18}
                        src="/img/cart.svg"
                        alt=""
                    />
                    <span>1205 rub.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/love.svg" alt="" />
                </li>
                <li>
                    <img className='ml-15' width={18} height={18} src="/img/user.svg" alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header