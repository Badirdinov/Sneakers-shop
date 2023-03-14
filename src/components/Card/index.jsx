import React from 'react'


function Card(props) {
    return (
        <div className='cart'>
            <div className='favorite'>
                <img src="/img/heart1.svg" alt="Heart" />
            </div>
            <img width={133} height={112} src={props.image} alt="" />
            <h5 className='mb-10 mt-10'>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена</span>
                    <b>{props.price} rub.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;