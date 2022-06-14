import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Contact from './components/bodies/Contact';
import Custom_choice from './components/bodies/Custom_choice';
import Custom_service from './components/bodies/Custom_service';
import Guide from './components/bodies/Guide';
import Order from './components/bodies/Order';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Route exact={true} path="/" component={Home}></Route>
      <Route exact={true} path="/guide" component={Guide}></Route>
      <Route
        exact={true}
        path="/custom_choice"
        component={Custom_choice}
      ></Route>
      <Route
        exact={true}
        path="/Custom_service"
        component={Custom_service}
      ></Route>
      <Route exact={true} path="/order" component={Order}></Route>
      <Route exact={true} path="/contact" component={Contact}></Route>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
