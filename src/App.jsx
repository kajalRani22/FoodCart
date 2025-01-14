import Header from './components/Header';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route 
        path="/"
        element={<Home />} />
<Route path="/cart"
element={<CardDetails/>}
/>
       
      </Routes>
      <Toaster />
      
    </>
  )
}

export default App
