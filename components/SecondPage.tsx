import React, { useState } from 'react'
import styles from '../styles/Home.module.css'


function SecondPage() {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'Card 3'},
        {id: 2, order: 1, text: 'Card 1'},
        {id: 3, order: 2, text: 'Card 2'},
        {id: 4, order: 4, text: 'Card 4'},
    ])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, card: { id: number; order: number; text: string }): void {
        setCurrentCard(card)
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
        e.target.style.background = 'transparent'
    }
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, card: { id: number; order: number; text: string; }): void {
        e.preventDefault()
        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                return{...c, order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return{...c, order: card.order}
            }
        }))
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

  return (
    <div className={styles.container}>
        {cardList.sort(sortCards).map(card => 
            <div
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, card)}
                draggable={true} 
                className={styles.card}
            >
                {card.text}
            </div>    
        )}
    </div>
  )
}

export default SecondPage