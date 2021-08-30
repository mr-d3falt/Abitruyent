import React from 'react';

function index(){
	return (
	<>
	<div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="Menyu/index.html" class="sign-in-form">
            <h2 class="title">Daxil ol&nbsp;</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Ad" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Parol" />
            </div>
            <input type="submit" value="Daxil ol" class="btn solid" />
            <p class="social-text">Sosial şəbəkədə biz</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
				 <a href="#" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
					 <a href="#" class="social-icon">
                <i class="fab fa-telegram"></i>
              </a>
            
            </div>
          </form>
          <form action="Menyu/index.html" class="sign-up-form">
            <h2 class="title">Qeydiyyat</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Ad" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Parol" />
            </div>
            <input type="submit" class="btn" value="Daxil ol" />
            <p class="social-text">Sosial şəbəkələrdə biz</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
			
					 <a href="#" class="social-icon">
                <i class="fab fa-telegram"></i>
              </a>
            
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <button class="btn transparent" id="sign-up-btn">
              Qeydiyyat
            </button>
          </div>
          <img src="Qeydiyyat/img/elm.png" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
           
            <button class="btn transparent" id="sign-in-btn">
              Daxil ol
            </button>
          </div>
          <img src="Qeydiyyat/img/elm2.png" class="image" alt="" />
        </div>
      </div>
    </div>

    <script src="Qeydiyyat/app.js"></script>
   </>
    )
}