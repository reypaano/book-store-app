<template>
  <div class="login">
    <h2>Login</h2>
    <hr class="separator" />
    <form @submit.prevent="login">
      <label for="email">E-mail:</label>
      <input type="text" v-model="email" required />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import apiClient from "@/services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["setToken"]),
    async login() {
      try {
        await this.setToken({ email: this.email, password: this.password });
        // Redirect to the posts route
        this.$router.push("/posts");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: auto;
  width: 500px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: 50px;
  margin-bottom: 10px;
}

.login form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-size: 20px;
  font-weight: 200;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 30px;
  height: 70px;
  width: 50%;
  font-size: 20px;
}
button[type="submit"]:hover {
  background-color: #45a049;
  width: 100%;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
}
.separator {
  width: 80%;
  margin: 20px 0;
  border: 1px solid #ddd;
}

#error {
  color: red;
}
</style>
