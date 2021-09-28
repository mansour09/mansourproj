//footer show you your ip by api using axios      ////warning just you can use it 5000 times in month
import React from "react";
import axios from "axios";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      error: false,
      results: 123,
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://axpi.ipstack.com/93.118.172.197?access_key=182515a42b9a45772b919708076bcd8a"
      )
      .then((res) => {
        this.setState({
          results: res,
          isloaded: true,
          error: false,
        });
      });
  }

  render() {
    var body;
    if (this.state.results.status === 200) {
      body = (
        <div>
          <i className="fa fa-address-book text-white" aria-hidden="true">
            {" "}
            ip : {this.state.results.data.ip}
          </i>
        </div>
      );
    } else
      body = (
        <h6 className="text-white">
          We Used 5000 api and now we cant use geo api
        </h6>
      ); //just we can use 5000 times of this api
    return (
      <nav className="nav justify-content-between bg-dark mt-3">{body}</nav>
    );
  }
}
export default Footer;
