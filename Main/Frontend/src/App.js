import "./App.css";

import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Aboutus from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import Documentation from "./components/Documentation/Documentation";
import { ExportToExcel } from './components/Table/ExportToExcel/ExportToExcel';

function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="row mt-5">
          <div className="side-panel col-lg-2 d-none d-xl-block d-lg-block pr-0 ">
            <SidePanel />
          </div>
          <div className="page-body col-lg-10 px-0 ">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/aboutus" component={Aboutus}></Route>
              <Route exact path="/table" component={Table}></Route>
              <Route exact path="/documentation" component={Documentation}></Route>
              <Route exact path="/filedownload" component={ExportToExcel}></Route>
            </Switch>
            <div className="page-footer pt-3 sticky-bottom">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
