<template>
  <div id="nav">
    <router-link to="/posts">Books</router-link> |
    <span v-if="isLoggedIn">
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function () {
      return this.$store.state.token;
    },
  },
  methods: {
    ...mapActions(["unsetToken"]),
    async logout() {
      try {
        await this.unsetToken({ token: null });
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  font-size: 35px;
  color: #2c3e50;
  padding: 10px;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
