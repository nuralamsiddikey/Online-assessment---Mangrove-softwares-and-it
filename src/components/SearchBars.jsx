import React,{useContext,useState,useEffect} from 'react';
import styles from '../styles/searchbars.module.css'
import { UserContext } from './Table';


const SearchBars = () => {
    const [mainResult, setMainResult] = useState([])
    const value = useContext(UserContext)
    const {users,posts,albums,consData,setUsers} = value
    
//   useEffect(()=>{
       
//             setMainResult(users)
      
//   },[])
   
 
   
   const handleSearch = (e)=>{
    let search = e.target.value
    
    let finalStr = search.replace(/ /g,'')
  
   if(finalStr.length === 0){
        setUsers(consData)
   }else{
   
    const filteredPersons = users.filter(
        person => {
        return (
                person
                .name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
                person
                .email
                .toLowerCase()
                .includes(search.toLowerCase()) ||
                person
                .company.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
        }
)
setUsers(filteredPersons)

   }
                 
   }

    return (
        <div>
            <div className={styles.wrapper}>
                <input 
                        className={styles.input}
                        type="text" 
                        placeholder='Search....'
                        onChange={handleSearch}
                      
                 />
                             
            </div>
        </div>
    );
};

export default SearchBars;