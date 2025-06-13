//import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <h1>FE React JS - Product List</h1>
      
      <ProductList/>
      <Footer/>
      
    </div>
    
  );
}

export default App;
