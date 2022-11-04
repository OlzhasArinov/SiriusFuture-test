import React, { useState } from 'react'
import styles from '../styles/Home.module.css'


function ThirdPage() {
    const [numbers, setNumbers] = useState([])

  return (
    <div className={styles.main_wrapper}>
        <div>
            
        </div>

        {numbers.map((number) => {
            <p>{number}</p>
        })}

    </div>
  )
}

export default ThirdPage