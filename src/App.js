import "./App.css"; 
import React, { Component } from "react";
import { BrowserRouter as Router ,Link,Route,Switch} from 'react-router-dom';
import axios from "axios";


//this is our header

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {return (
    <nav className=" navbar bg-dark navbar-expand-sm pt-0 pb-0">
    <div className="container justify-content-between">
        <img className="navbar-brand brand-size" src="logo192.png" alt="لوگو" title="brand"/>
        <ul className=" navbar-nav pr-5">
            <li className="nav-item ml-3"><Link to = '/'  className="nav-link my-btn text-center"><i className="fa fa-home"
                        aria-hidden="true"></i>خانه
                </Link></li>
            <li className="nav-item ml-3">
                <a className="nav-link text-center my-btn-2" href="/product"><i className="fa fa-money" aria-hidden="true"></i>
                    محصولات</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-center my-btn-2" href="/call"><i className="fa fa-phone" aria-hidden="true">
                    </i> تماس با اهنگساز</a>
            </li>
        </ul>
        <div>
            <form className=" d-flex">
                <input className="order-1 my-search-text" type="text" placeholder="جستجو کنید" id="search"/>
                <button type="submit" className="order-0 btn my-search-btn" id='hello'><i className="fa fa-search"
                        aria-hidden="true"></i>
                </button>
            </form>
        </div>
    </div>

</nav>)}

}



//Members Show you api by using xmlhttprequest
class Members extends React.Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            isLoaded: false,
            error: null,
            quotes: []
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
                    quotes: json
                   });          
                } else {
                    // error
                  this.setState({
                    isLoaded: true,
                    error: xhr.responseText
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
          body = <i className="fa fa-spinner" aria-hidden="true"></i>;
        } else if (this.state.error) {
            // error
          body = <div>Error occured: { this.state.error }</div>
        } else {
            // success
 
            var quotes = this.state.quotes.results[0].picture.medium;
 var Name = this.state.quotes.results[0].name.first + '' +this.state.quotes.results[0].name.last ;
 var Email = this.state.quotes.results[0].email;
            body = <div className="card text-white bg-dark">
              <img className="card-img-top" src={quotes} alt=""/>
              <div className="card-body">
                <h6 className="card-title">{Name}</h6>
                <p className="card-text small">{Email}</p>
              </div>
            </div>
        }
        return body;
      } 
}

//footer show you your ip by api using axios      ////warning just you can use it 5000 times in month

class Footer extends React.Component{
  constructor(props){
    super(props);
   this.state={
     isloaded: false ,
     error: false,
     results :123
   }
  }
  componentDidMount (){
    axios.get('http://api.ipstack.com/93.118.172.197?access_key=182515a42b9a45772b919708076bcd8a').then(res=>{
      this.setState({
        results:res,
        isloaded:true,
        error:false
       });    
    })
  }

 render(){
   var body
if(this.state.results.status===200){
  body= <div><i className="fa fa-address-book text-white" aria-hidden="true"> ip : {this.state.results.data.ip}</i></div>
 }
 else body= <h6 className="text-white">We Used 5000 api and now we cant use geo api</h6> //just we can use 5000 times of this api
  return <nav className="nav justify-content-between bg-dark mt-3">
    {body}
  </nav>
} 
}

///show you your content

function Content(){
  return(
    <div className="container mt-5">  
      <div className="bg-white d-flex shadow flex-sm-row align-content-start">
            <div className="d-flex flex-sm-row flex-column">
            <a href="#/" className="btn my-btn order-3 order-sm-0"> ادامه مطلب</a>
              <div className="order-1 order-sm-0 mr-2">
               <p> 
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              </div>
                    <div className="order-0 d-flex justify-content-center">
                      <img src="https://miro.medium.com/max/375/0*h7xD-B7vanLQYWfp.jpg" alt="عکسی بود که دیگه نیست" title="عکس طبیعت"/>
                      </div>
              </div>
      </div>
    </div>
  )
}


//this banner is for Advertise

function Banner (){
return(
  
<div className="container mt-5 mb-5">
  <a href="#/"><img src="http://r3d-dl.online/music/sadeghmokhtasarbanner.jpg" alt="تبلیغ"className="shadow blur w-100" title="کلید کنید"/></a> 
  </div>
)

} 



//error 404 is for page not found

function Error404(){
  return(
  <div className="container mt-5 flex-column">
   <h1 className="text-danger justify-content-center d-flex" >404</h1>
   <h2 className="text-warning justify-content-center d-flex">باور کن چیزی پیدا نکردم دکمه پایینو بزن مشکل رفع شه</h2>
   <a href="/"className="btn btn-outline-danger d-flex justify-content-center">کلیک کن</a>
  </div>

  )
}



//we used router b.c it helps you to be faster

function App(){
    return (
        <main>
            <Router>
            <Header/>
                <Switch>
                <Route path="/"exact>
                    <div className=" container mt-5"><h5>کاربران سایت</h5>
                    </div>
                    <hr/>
                    <div  className="container mt-5 d-flex flex-md-row flex-column" >
                   <Members/><Members/><Members/><Members/><Members/><Members/>
                  </div>
                  <div className="container d-flex justify-content-center mt-5"><button onClick={function (){window.location.reload();}} className="btn my-btn">مشاهده بقیه کاربران</button></div>
                  <Banner/>
                  <h5 className=" container"> محتوا شماره 2</h5>
                  <Content/>
                  <Content/>
               </Route>
               <Route path="/product">
                 <h1>هنوز تکمیل نشده</h1>

               </Route>
                <Route path="/call">
                <h1>هنوز تکمیل نشده</h1>
                </Route>
               <Route path="*">
                   <Error404/>
               </Route>
               
               </Switch>
               <Footer/>
            </Router>

        </main>
    )
}

export default App;