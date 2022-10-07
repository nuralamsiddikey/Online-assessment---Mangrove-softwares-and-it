import React,{createContext,useEffect,useState} from 'react'
import styles from '../styles/table.module.css'
import TableHead from './TableHead'
import TableBody from './TableBody'
import SearchBars from './SearchBars'
export const UserContext = createContext();


export const Table=()=> {
    const [consData, setConsData] = useState([])
   const  [users , setUsers] = useState([])
   const   [posts , setPosts] = useState([])
   const   [albums , setAlbums] = useState([])
   
   useEffect(()=>{

         //load users
         fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{
                setUsers(data)
                setConsData(data)
            })

        //load users post
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setPosts(data))

        //load albums
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res=>res.json())
            .then(data=>setAlbums(data))

   },[])



  return (
     <UserContext.Provider value={{users,posts,albums,consData,setUsers}}>
           <div className={styles.container}>
                <div className={styles.wrapper}>
                    <SearchBars/>
                    <table className={styles.table}>
                            <TableHead/>
                            <TableBody/>
                    </table>
                     <p>{users.length}/{consData.length} </p>
                </div>
          </div>
     </UserContext.Provider>
  )
}
