import { BrowserRouter } from "react-router-dom";
import './App.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
