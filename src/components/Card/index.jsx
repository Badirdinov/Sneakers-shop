/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../Card/Card.module.scss'


function Card({ title, image, price, onClickFavorite, onClickPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handle = () => {
        onClickPlus({ title, image, price })
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.cart}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart1.svg" alt="Heart" />
            </div>
            <img width={133} height={112} src={image} alt="" />
            <h5 className='mb-10 mt-10'>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена</span>
                    <b>{price} rub.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={handle}
                    src={isAdded ? "/img/buttonCheked.svg" : "/img/buttonPlus.svg"}
                    alt="plus" />
            </div>
        </div>
    )
}

export default Card;