import { NavBar } from './components/NavBar/Navbar.jsx'
import { ItemListContainer }  from './components/ItemListContainer/ItemListContainer.jsx'
import { Footer } from './components/Footer/Footer.jsx'

//import styles from './App.module.css'


const App = () => {

  const itemListContainerProps = {
    greeting: "Welcome to Black Sheep",
    bgGrey: true
  }


  return (
    <>
      <NavBar/>
      <ItemListContainer 
        { ...itemListContainerProps }
      />
      <Footer/>
      
    </>

  ) 
}

export default App
