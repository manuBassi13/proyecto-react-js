import './App.css'
import NavBar from './components/NavBar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido'}/>
    </>

  ) 
}

export default App
