import React from 'react';
//import logo from './logo.svg';
import './App.css';

fetch('http://localhost:3000');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange = (event)=> {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event)=> {
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email: this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
      .then(response=>response.json())
      .then(data=>{
        if (data ==='succcess'){
          this.push('home.html');
        }
      })
  }


  render() {
    const{onRouteChange} = this.props;
    return (
      <div className="App">
      <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form /*action="home.html"*/ className="sign-in-form">
            <h2 className="title">Daxil ol&nbsp;</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              
              <input 
              type="email"
              placeholder="Email"
              onChange={this.onEmailChange}
               />
              

            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              
              <input 
              type="password" 
              placeholder="Parol"
              onChange={this.onPasswordChange}
               />
            </div>
            
            <input 
            //onClick ={()=> onRouteChange('home.html')}
            onClick = {this.onSubmitSignIn}
            type="submit" 
            value="Daxil ol" 
            className="btn solid" />
            
            <p className="social-text">Sosial şəbəkədə biz</p>
            <div className="social-media">
              <a href="!#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
         <a href="!#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
           <a href="!#" className="social-icon">
                <i className="fab fa-telegram"></i>
              </a>
            
            </div>
          </form>
          <form action="home.html" className="sign-up-form">
            <h2 className="title">Qeydiyyat</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Ad" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Parol" />
            </div>
            <input type="submit" className="btn" value="Daxil ol" />
            <p className="social-text">Sosial şəbəkələrdə biz</p>
            <div className="social-media">
              <a href="!#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="!#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
      
           <a href="!#" className="social-icon">
                <i className="fab fa-telegram"></i>
              </a>
            
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <button className="btn transparent" id="sign-up-btn">
              Qeydiyyat
            </button>
          </div>
          <img src="img/elm.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
           
            <button className="btn transparent" id="sign-in-btn">
              Daxil ol
            </button>
          </div>
          <img src="img/elm2.png" className="image" alt="" />
        </div>
      </div>
    </div>

    <script src="js/app.js"></script>
      
      </div>
    );
  }
}

export default App;
