import React from 'react';
//import logo from './logo.svg';
import './App.css';

fetch('http://localhost:3000');

class App1 extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl- icon'></i>
        <div className="logo_name">Abitruyent</div>
        <i className='bx bx-menu' id="btn" ></i>
    </div>
    <ul className="nav-list">
      <li>
          <i className="bx bx-search" ></i>
         <input type="text" placeholder="Axtar...">
         <span className="tooltip">Axtar</span>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-grid-alt'></i>
          <span className="links_name">İmtahanlar</span>
        </a>
         <span className="tooltip">İmtahanlar</span>
      </li>
      <li>
       <a href="#">
         <i className='bx bx-user' ></i>
         <span className="links_name">Profil</span>
       </a>
       <span className="tooltip">Profil</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-chat' ></i>
         <span className="links_name">Əlaqə</span>
       </a>
       <span className="tooltip">Əlaqə</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-pie-chart-alt-2' ></i>
         <span className="links_name">Nəticələr</span>
       </a>
       <span className="tooltip">Nəticələr</span>
    </li>
  
     <li className="profile">
         <div className="profile-details">
           <img src="profil2.png" alt="profileImg">
           <div className="name_job">
             <div className="name">Ibrahim</div>
             <div className="job"></div>
           </div>
         </div>
         <i className='bx bx-log-out' id="log_out" ></i>
     </li>
    </ul>
  </div>
  <section className="home-section">
      <div className="text">İmtahanlar</div>
  </section>

  <script src="js/script.js"></script>
    );
  }
}

export default App;