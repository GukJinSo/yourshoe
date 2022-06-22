import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import CustomChoice from './components/bodies/CustomChoice';
import CustomService from './components/bodies/CustomService';
import Home from './pages/Home';

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Route exact={true} path="/" component={Home}></Route>
      {/* <Route exact={true} path="/guide" component={Guide}></Route> */}
      <Route exact={true} path="/customChoice" component={CustomChoice}></Route>
      <Route
        exact={true}
        path="/CustomService"
        component={CustomService}
      ></Route>
      {/* <Route exact={true} path="/order" component={Order}></Route> */}
      {/* <Route exact={true} path="/contact" component={Contact}></Route> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
