import { Component } from "react";
import React from "react";
import img from "../logo512.png"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className=" navbar bg-dark navbar-expand-sm pt-0 pb-0">
        <div className="container justify-content-between">
          <img
            className="navbar-brand brand-size"
            src={img}
            alt="لوگو"
            title="brand"
          />
          <ul className=" navbar-nav pr-5">
            <li className="nav-item ml-3">
              <a href="/" className="nav-link my-btn text-center">
                <i className="fa fa-home" aria-hidden="true"></i>خانه
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link text-center my-btn-2" href="/product">
                <i className="fa fa-money" aria-hidden="true"></i>
                محصولات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center my-btn-2" href="/call">
                <i className="fa fa-phone" aria-hidden="true"></i> تماس با قالب ساز
              </a>
            </li>
          </ul>
          <div>
            <form className=" d-flex">
              <input
                className="order-1 my-search-text"
                type="text"
                placeholder="جستجو کنید"
                id="search"
              />
              <button
                type="submit"
                className="order-0 btn my-search-btn"
                id="hello"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
