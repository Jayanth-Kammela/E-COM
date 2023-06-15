import React from 'react'
import Products from './Components/Products'
import { Route, Routes } from 'react-router-dom'
import ProductById from './Components/ProductById'
import Cart from './Components/Cart'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='ecom/product' element={<Products />} />
        <Route path='/ecom/product/:id' element={<ProductById />} />
        <Route path='/ecom/cart' element={<Cart />} />
      </Routes>
    </React.Fragment>
  )
}

export default App