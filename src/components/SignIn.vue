<template>
  <div class='container-fluid sign-in'>
    <div class='navig-bar d-flex justify-content-between'>
      <router-link to='/'>
        <img src='../assets/images/oneburner-logo.png' alt='one burner logo' /> 
      </router-link>
      <div class='d-flex align-items-center right-nav-items'>
        <span class='mr-3'>New Customer?</span>
        <router-link to='/' class='try-btn'>Try for free</router-link>
      </div>
    </div>
    <div class='d-flex align-items-center flex-column'>
      <div class='screen-title'>
        <h2>Sign In</h2>
        <p>Welcome Back!</p>
      </div>
      <form>
        <div class='form-group mb-4'>
          <label for='email' class='d-block'>Email/Username</label>
          <input type='text' id='email' class='d-block w-100' />
        </div>
        <div class='form-group mb-32'>
          <label for='password' class='d-block'>Password</label>
          <input type='password' id='password' class='d-block w-100' />
        </div>
        <button type='submit' class='w-100 text-white mb-32'>Log In</button>
      </form>
      <router-link to='/' class='forgot'>Forgot Password?</router-link>
      <div class='d-flex justify-content-start sign-in-options align-items-center'>
        <p class='mr-4 mb-0'>-Or sign in with:</p>
        <img src='../assets/images/outlook-logo.png' class='mr-4' alt='microsoft outlook logo' /> 
        <img src='../assets/images/linkedin-logo.png' class='mr-4' alt='linkedin logo' /> 
        <img src='../assets/images/google-logo.png' class='mr-4' alt='google logo' /> 

      </div>
      <p class='copyright'>&#xa9; 2020 Oneburner.com. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container, 
  .container-fluid, 
  .container-lg{
    padding-left: 100px;
    padding-right: 100px;
  } 

  .sign-in{
    font-family: 'SofiaPro-Regular';
  }

  .navig-bar{
    margin-bottom: 120px;
  }

  img[alt='one burner logo']{
    height: 90px;
    width: auto;
  }

  .right-nav-items span{
    font-size: 20px;
  }

  .try-btn{
    background-color: #462686;
    color: #ffffff;
    border: none;
    border-radius: 100px;
    padding: 15.7px 33px; 
  }

  .screen-title{
    margin-bottom: 100px;
  }

  .screen-title h2{
    color: #333333;
    font-size: 40px;
  }
  .screen-title p{
    color: rgba(69, 69, 69, 0.8);
    font-size: 20px;
  }

  form{
    width: 560px;
  }

  .mb-32{
    margin-bottom: 32px;
  }

  form input{
    height: 64px;
    border: 2px solid rgba(51, 51, 51, 0.8);
    border-radius: 5px;
    padding: 10px;
  }

  form button{
    background-color: #462686;
    border: none;
    border-radius: 50px;
    height: 64px;
    font-size: 20px;
  }

  .forgot{
    color: #462686;
    font-size: 20px;
    margin-bottom: 80px;
  }

  .sign-in-options{
    width: 560px;
    margin-bottom: 120px;
  }

  .sign-in-options img{
    width: 35px;
    height: 35px;
  }
  .copyright{
    color: #01001d50;
    font-size: 20px;
  }
</style>
