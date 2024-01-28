import axios from "axios";
const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateBooks: (state) => state.books,
  StateUser: (state) => state.user,
};
const actions = {
  async Register({ dispatch }, form) {
    await axios.post("register", form);
    let UserForm = new FormData();
    UserForm.append("username", form.username);
    UserForm.append("password", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, User) {
    await axios.post("login", User);
    await commit("setUser", User.get("name"));
  },

  async CreateBook({ dispatch }, book) {
    await axios.post("book", book);
    await dispatch("GetBooks");
  },

  async GetBooks({ commit }) {
    let response = await axios.get("books");
    commit("setBooks", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, name) {
    state.user = name;
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  LogOut(state) {
    state.user = null;
    state.posts = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
