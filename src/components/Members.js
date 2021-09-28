
import React from "react";

//Members Show you api by using xmlhttprequest


class Members extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLoaded: false,
        error: null,
        quotes: [],
      };
    }
  
    componentDidMount() {
      var xhr = new XMLHttpRequest();
  
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // request succesful
            var response = xhr.responseText,
              json = JSON.parse(response);
  
            this.setState({
              isLoaded: true,
              quotes: json,
            });
          } else {
            // error
            this.setState({
              isLoaded: true,
              error: xhr.responseText,
            });
          }
        }
      });
  
      xhr.open("GET", "https://randomuser.me/api/", true);
      xhr.send();
    }
  
    render() {
      var body;
  
      if (!this.state.isLoaded) {
        // yet loading
        body = <i class="fa fa-spinner" aria-hidden="true"></i>;
      } else if (this.state.error) {
        // error
        body = <div>Error occured: {this.state.error}</div>;
      } else {
        // success
  
        var quotes = this.state.quotes.results[0].picture.medium;
        var Name =
          this.state.quotes.results[0].name.first +
          "" +
          this.state.quotes.results[0].name.last;
        var Email = this.state.quotes.results[0].email;
        body = (
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={quotes} alt="" />
            <div className="card-body">
              <h6 className="card-title">{Name}</h6>
              <p className="card-text small">{Email}</p>
            </div>
          </div>
        );
      }
      return body;
    }
  }
  
  export default Members;