import React from 'react'
import { ITitleProps } from '../../types'
import styles from "./style.module.scss"

const Title = (props:ITitleProps) => {
    const {text} = props
  return (
    <div className={styles.title}>
        <h4>{text}</h4>
    </div>
  )
}

export default Title