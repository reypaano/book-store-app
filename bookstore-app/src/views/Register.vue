<template>
  <div class="register">
    <h2>Register</h2>
    <hr class="separator" />
    <form @submit.prevent="submit">
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="form.name" />
      <label for="email">E-mail:</label>
      <input type="email" name="email" v-model="form.email" />
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="form.password" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["register"]),
    async submit() {
      try {
        console.log(this.form);
        await this.register(this.form);
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.register {
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
.register:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.register form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
}
h2 {
  font-size: 50px;
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 200;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  margin-top: 20px;
  height: 70px;
  width: 50%;
  border-radius: 30px;
  font-size: 20px;
}
button[type="submit"]:hover {
  background-color: #45a049;
  width: 100%;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 15px;
  width: 100%;
  height: 30px;
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
