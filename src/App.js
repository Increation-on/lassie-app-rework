import Header from "./UI/Header/Header";
import Footer from './UI/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ErrorPage from './pages/error/ErrorPage';


const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
