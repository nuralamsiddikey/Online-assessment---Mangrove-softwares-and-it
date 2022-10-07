import React,{useContext} from 'react'
import styles from '../styles/tableBody.module.css'
import { UserContext } from './Table';

export default function TableBody() {
    const value = useContext(UserContext);
    const users = value.users
    const posts = value.posts
    const albums = value.albums

   const post = (id)=>{
        const userId = id
        let counter = 0
        posts.map(data=>{
             if(data.userId === userId){
                counter++
             }
        })
        return counter
   }


   const album = (id)=>{
         const userId = id
         let counter = 0
         albums.map((data)=>{
              if(data.userId === userId){
                  counter++
              }
         })
         return counter
   }

  return (
  
         <tbody>
             {
                users.map((data,index)=>(
                     <tr key={index} className={styles.tr}>
                         <td className={styles.td}>{data.id}</td>
                         <td className={styles.td}>{data.name}</td>
                         <td className={styles.td}>{data.email}</td>
                         <td className={styles.td}>{data.company.name}</td>
                         <td className={styles.td}>{post(data.id)}</td>
                         <td className={styles.td}>{album(data.id)}</td>
                     </tr>
                ))
             }
         </tbody>
  
  )
}
