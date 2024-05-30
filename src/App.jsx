import { Home } from './Pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Cart } from './components/Cart/Cart'
import { Error } from './components/Error/Error'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Layout } from './components/Layout/Layout'
import { Dashboard } from './components/Dashboard/Dashboard'
import { useEffect } from 'react'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { AccessError } from './components/Error/AccessError.jsx'
import CartContextProvider from './context/CartContext.jsx'
//import styles from './App.module.css'


const App = () => {

  useEffect(() => {
    const llamadaABack = false
    llamadaABack ? localStorage.setItem("isAuth", "true") 
    : localStorage.setItem("isAuth", "false")
  })


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/products/:prodId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/accessError' element={<AccessError/>}/>
            <Route path='*' element={<Error/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='dashboard' element={<Dashboard/>}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  ) 
}

export default App
