<template>
  <navbar />
  <form @submit.prevent="submission">
    <label>Student Number:</label>
    <input style="margin-bottom: 0.3in" type="stuNum" required v-model="StuNum">
    <label>Email:</label>
    <input style="margin-bottom: 0.3in" type="email" required v-model="email">
    <label>Password:</label>
    <input style="margin-bottom: 0.3in" type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button type="submit">Login</button>
    </div>
    <div class="signup">
      <button>
        <router-link to="/signup">Sign up</router-link>
      </button>
    </div>
    <div class="admin-login">
      <button>
        <router-link to="/ProfLogin">Log in as administrator</router-link>
      </button>
    </div>
  </form>
</template>

<script>
import navbar from '@/views/navbar.vue';
export default {
  components: { navbar },
  data() {
    return {
      StuNum: '',
      email: '',
      password: '',
      terms: false,
      passwordError: '',
      accountCreated: false
    }
  },
  methods: {
    submission() {
      //validate password
      this.passwordError = this.password.length > 7 ? 
      '': 'Password must be at least 8 chars long'

      if(!this.passwordError) {
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('terms accepted: ', this.terms)

        // set accountCreated to true
        this.accountCreated = true

        // navigate to home page
        this.$router.push('/loggedhome')
      }
    }
  }
}
</script>

  
  <style scoped>
  form {
      max-width: 420px;
      margin: 40px auto;
      background: rgb(42, 42, 42);
      text-align: left;
      padding: 50px;
      border-radius: 10px;
  }
  label {
      color: #aaa;
      display: inline-block;
      margin: 25 px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input, select{
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
  }
  input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
  }
  .pill {
      display: inline-block;
      margin: 20px 10px 0 0;
      padding: 6px 12px;
      background: #eee;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
      color: #777;
      cursor: pointer;
  }
  .submit button {
      background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: 5px;
      left: -125px;
      text-decoration: underline;
  }

  .signup button {
      background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: -50px;
      left: 125px;
  }

  .submit {
      text-align: center;
  }
  .signup {
      text-align: center;
  }
  .error {
      color: #ff0000;
      margin-top: 10px;
      font-size: 0.8em;
      font-weight: bold;
  }
  .signup {
    text-align: center;
  }
  .admin-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0.5rem;
}
.admin-login button {
  background: #ffdd00;
  border: 0;
  padding: 10px 20px;
  margin-top: 5px;
  color: rgb(0, 0, 0);
  border-radius: 20px;
}

  </style>
