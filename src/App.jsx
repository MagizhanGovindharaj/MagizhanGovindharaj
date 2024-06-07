import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'
import Login from './Components/Login'
import Table from './Components/Table'
import Movie from './Components/Movie'
import Navbar from './Components/Navbar'
import ProductDetails from './Components/ProductDetails'

function App() {
  return(
    <BrowserRouter>
    <Navbar links={["Home","Signup","Login","Movie"]} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Form/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/signup/:pid" element={<Login/>}/>
        <Route path="/login/:pid" element={<Table/>}/>
        <Route path="/table/:pid" element={<ProductDetails/>}/>
        <Route path='*' element={<h1>Ooops Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
