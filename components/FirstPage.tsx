import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

function FirstPage() {
    const [subjectsNumber, setSubjectsNumber] = useState(2)
    const [meaning, setMeaning] = useState(1)

  return (
    <div className={styles.main}>
        <div>
            <h3>Quantity</h3> 
            <div className={styles.bar}>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <section className={styles.range_bar}>
                <input
                    type="range"
                    min={2}
                    max={5}
                    step={1}
                    value={subjectsNumber}
                    onChange={event => {
                        setSubjectsNumber(event.target.valueAsNumber)
                    }}
                />
            </section>
        </div>

        <div>
            <h3>Meaning</h3> 
            <div className={styles.meaning_bar}>
                <p>A</p>
                <p>9</p>
                <p>19</p>
                <p>50</p>
                <p>99</p>
                <p>999</p>
            </div>
            <section className={styles.meaning_range_bar}>
                <input
                    type="range"
                    min={1}
                    max={6}
                    step={1}
                    value={meaning}
                    onChange={event => {
                        setMeaning(event.target.valueAsNumber)
                    }}
                />
            </section>
        </div>

        <div>
            <button className={styles.btn}>Increase</button>
            <button className={styles.btn}>Decrease</button>
        </div>

        <button className={styles.btn_play}>Play</button>

    </div>
  )
}

export default FirstPage