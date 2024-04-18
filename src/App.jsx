import { NavBar } from './components/NavBar/Navbar.jsx'
import { ItemListContainer }  from './components/ItemListContainer/ItemListContainer.jsx'
//import styles from './App.module.css'

const App = () => {

  const itemListContainerProps = {
    greeting: "Welcome to Black Sheep",
    bgBlue: true
  }


  return (
    <>
      <NavBar/>
      <ItemListContainer 
        { ...itemListContainerProps }
      />
        
      
    </>

  ) 
}

export default App
