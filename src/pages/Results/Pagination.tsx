import React from 'react'
import styles from "./style.module.scss"
import { IPaginationProps } from '../../types'

const Pagination = (props:IPaginationProps) => {

    const {pageNumbers,paginationIndex,setPaginationIndex,handlePrevNextBtns,paginationCount} = props
  return (
    <div className={styles.pagContainer}>
        <button
          disabled={paginationIndex === 1}
          onClick={() => handlePrevNextBtns(-1)}
          className={styles.prevBtn}
        >
          Previous
        </button>
        {pageNumbers.length > 6
          ? pageNumbers
              .slice(0, 3)
              .concat(pageNumbers.slice(-3))
              .map((item, index) => (
                <div key={item}>
                  {index === 3 && <span className={styles.dotNota}>...</span>}
                  <span
                    onClick={() => setPaginationIndex(item)}
                    
                    className={`${styles.pagination} ${
                      paginationIndex === item ? styles.active : ""
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))
          : pageNumbers.map((item) => (
              <span
                onClick={() => setPaginationIndex(item)}
                className={`${styles.pagination} ${
                  paginationIndex === item ? styles.active : ""
                }`}
                key={item}
              >
                {item}
              </span>
            ))}
        <button
          disabled={paginationIndex >= paginationCount}
          onClick={() => handlePrevNextBtns(1)}
          className={styles.nextBtn}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination