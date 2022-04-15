import Header from "./UI/Header/Header";
import Footer from './UI/Footer/Footer';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./ScrollToTop";



const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
