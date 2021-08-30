import React from 'react';

function index(){
	return (
<>
<div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl- icon'></i>
        <div class="logo_name">Abitruyent</div>
        <i class='bx bx-menu' id="btn" ></i>
    </div>
    <ul class="nav-list">
      <li>
          <i class="bx bx-search" ></i>
         <input type="text" placeholder="Axtar..."/>
         <span class="tooltip">Axtar</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-grid-alt'></i>
          <span class="links_name">İmtahanlar</span>
        </a>
         <span class="tooltip">İmtahanlar</span>
      </li>
      <li>
       <a href="#">
         <i class='bx bx-user' ></i>
         <span class="links_name">Profil</span>
       </a>
       <span class="tooltip">Profil</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-chat' ></i>
         <span class="links_name">Əlaqə</span>
       </a>
       <span class="tooltip">Əlaqə</span>
     </li>
     <li>
       <a href="#">
         <i class='bx bx-pie-chart-alt-2' ></i>
         <span class="links_name">Nəticələr</span>
       </a>
       <span class="tooltip">Nəticələr</span>
		</li>
  
     <li class="profile">
         <div class="profile-details">
           <img src="profil2.png" alt="profileImg"/>
           <div class="name_job">
             <div class="name">Ibrahim</div>
             <div class="job"></div>
           </div>
         </div>
         <i class='bx bx-log-out' id="log_out" ></i>
     </li>
    </ul>
  </div>
  <section class="home-section">
      <div class="text">İmtahanlar</div>
  </section>

 <script src="script.js"></script>   
</>
 )
}