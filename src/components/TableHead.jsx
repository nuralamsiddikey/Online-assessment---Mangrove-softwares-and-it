import React from 'react'
import styles from '../styles/tableHead.module.css'

export default function TableHead() {
  return (
 
   
           <thead className={styles.thead}>
          
             <th className={styles.th}>Id</th>
             <th className={styles.th}>Name</th>
             <th className={styles.th}>Email</th>
             <th className={styles.th}>Company</th>
             <th className={styles.th}>Posts</th>
             <th className={styles.th}>Albums</th>
        </thead>
   
   
  )
}
