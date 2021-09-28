import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./components/Members";
import Header from "./components/header";
import Banner from "./components/Banner";
import Content from "./components/content";
import Img from "./components/img slider";
import Form from "./components/form";
import AboutUsBar from "./components/about us bar";
import Error404 from "./components/404page";
import Footer from "./components/footer";
//we used router b.c it helps you to be faster
function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <div className=" container mt-5">
              <h5>کاربران سایت</h5>
            </div>
            <hr />
            <div className="container mt-5 d-flex flex-md-row flex-column">
              <Members />
              <Members />
              <Members />
              <Members />
              <Members />
              <Members />
            </div>
            <div className="container d-flex justify-content-center mt-5">
              <button
                onClick={function () {
                  window.location.reload();
                }}
                className="btn my-btn"
              >
                مشاهده بقیه کاربران
              </button>
            </div>
            <Banner />
            <h5 className=" container"> محتوا شماره 2</h5>
            <Content />
            <Content />
          </Route>
          <Route path="/product">
            <Img />
            <Form />
          </Route>
          <Route path="/call">
            <AboutUsBar />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
