import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";
import SearchBar from "./DeviceforSale/SearchBar";
import Contacts from "./Contacts/Contacts";
import RepairForm from "./RepairuyourDevice/RepairForm";
import Application from "./Application/application";
import FourOFour from "./four04";
import Research from "./Research/Research";
import Button from "@material-ui/core/Button";

export default function App() {
  const [datas, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then(
        (body) => {
          return body.map((data) => {
            return {
              name: data.product_name,
              description: data.product_description,
              picture: data.product_picture,
              url: data.product_url,
              price: data.product_price,
            };
          });
        },
        () => {}
      );
    //setdata(fetchdata)
    fetchdata.then((data) => {
      setdata(data);
    });
  }, []);

  return (
    <Router>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light nav-pills nav-fill"
          style={{
            backgroundImage:
              "url(" + "https://i.imgur.com/7T9364v.gif?noredirect" + ")",
          }}
        >
          <div className="App">
            <ul className="nav flex-row">
              <h1 className="text-white ">
                Welcome to the Era of Edge Computing
              </h1>

              <Button variant="outlined" color="primary">
                <NavLink
                  to="/shopping"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Device for Sale
                </NavLink>
              </Button>
              <Button variant="outlined" color="primary">
                <NavLink
                  to="/repair"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Repair your device
                </NavLink>
              </Button>
              <Button variant="outlined" color="primary">
                <NavLink
                  to="/application"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Application
                </NavLink>
              </Button>
              <Button variant="outlined" color="primary">
                <NavLink
                  to="/research"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Research
                </NavLink>
              </Button>
              <Button variant="outlined" color="primary">
                <NavLink
                  to="/contact"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Contact us
                </NavLink>
              </Button>
            </ul>
          </div>
        </nav>
      </header>
      <footer>
        <div className="p-3 mb-2 bg-dark">
          <Switch>
            <Route exact path="/">
              <SearchBar datas={datas} />
            </Route>

            <Route path="/shopping">
              <SearchBar datas={datas} />
            </Route>

            <Route path="/repair">
              <RepairForm datas={datas} />
            </Route>

            <Route path="/application">
              <Application />
            </Route>

            <Route path="/research">
              <Research />
            </Route>

            <Route path="/contact">
              <Contacts />
            </Route>

            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </div>
      </footer>
    </Router>
  );
}
