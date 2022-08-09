
import { GlobalStyle } from './GlobalStyle.js';
import {users} from '../src/MockupDeDados';
import{Homepage} from './pages/Homepage/Homepage';
import { useEffect, useState } from 'react';
import{DetailsPage} from './pages/DetailsPage/DetailsPage';
import axios from 'axios';


function App() {

  const[results, setResults] = useState (users)
  const[image,setImage]= useState('')
  const[name,setName]=useState('')
  const[description,setDescription]=useState('')
  const[query,setQuery]= useState('')
  const[orderParam, setOrderParam] = useState('')
  const[page, setPage]= useState('homepage')
  const[id, setId]= useState(0)

  useEffect(()=>{
 //get lista da API
},[])

  const handleInputImage = (event) => setImage(event.target.value);
  const handleInputName = (event) => setName(event.target.value);
  const handleInputDescription = (event) => setDescription(event.target.value);
  const handleInputQuery=(event)=> setQuery(event.target.value)
  const handleInputOrderParam=(event)=>setOrderParam(event.target.value)
  
  const changePage = (page,id) => {
  setPage(page)
  setId(id)
  }
  

  const addUser = (event) => {
    event.preventDefault()

      const newUser = {
      id: Date.now(),
      name,
      description,
      img: image,
      }
    
      const newUserList=[...results,newUser]
      setResults(newUserList)

      setImage('')
      setName('')
      setDescription('')
    }

    const removeUser = (id) =>{
      const filteredList = results.filter(char =>{
        return (char.id !== id)
      })
      setResults(filteredList)
     }

     const renderPage = () => {
        switch(page){
          case 'homepage':
            return <Homepage 
            results = {results}
            states = {{image, name, description, query, orderParam}}
            handlers={{handleInputImage, handleInputName, handleInputDescription, handleInputQuery,handleInputOrderParam}}
            addUser={addUser}
            removeUser={removeUser}
            changePage={changePage}
            />;
            
            
          case 'detailspage':
            return <DetailsPage
            results = {results}
            id={id}
            changePage={changePage}
            />
          }
     }

  return (
    <div className="App">
      <GlobalStyle/>
      {renderPage()}
      </div>
  );
}

export default App;