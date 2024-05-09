import { Home } from './Pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Cart } from './components/Cart/Cart'
import { Error } from './components/Error/Error'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
//import styles from './App.module.css'


const App = () => {



  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/products/:prodId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  ) 
}

export default App
