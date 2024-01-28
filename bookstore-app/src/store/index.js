import Vue from "vue";
import Vuex from "vuex";
import apiClient from "@/services/api"; // Import the apiClient
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    books: [],
    editedBook: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    addBook(state, book) {
      state.books.push(book);
    },

    setBooks(state, books) {
      state.books = books;
    },

    unsetToken(state, token) {
      state.token = token;
    },

    setEditedBook(state, book) {
      state.editedBook = book;
    },

    updateBookInState(state, updatedBook) {
      const index = state.books.findIndex((post) => post.id === updatedBook.id);
      if (index !== -1) {
        Vue.set(state.books, index, updatedBook);
      }
    },

    deleteBookFromState(state, bookId) {
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
  actions: {
    async setToken({ commit }, { email, password }) {
      try {
        const response = await apiClient.post("/login", { email, password });
        const token = response.data.data.token;

        commit("setToken", token);
        console.log(token);

        // Save the token in localStorage
        localStorage.setItem("token", token);
        console.log(localStorage.getItem(token));

        return true;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },

    async register({ commit }, registerData) {
      try {
        let name = registerData.name;
        let email = registerData.email;
        let password = registerData.password;

        const response = await apiClient.post("/register", {
          name,
          email,
          password,
        });
        commit("unsetToken", null);
      } catch (error) {
        console.error("Registration Failed.", error);
        throw error;
      }
    },

    async addBook({ commit }, postBookData) {
      try {
        console.log(postBookData);
        const response = await apiClient.post("/products", postBookData);

        // Assuming the API returns the created post
        const addedBook = response.data;

        // Commit the mutation to add the post to the state
        commit("addBook", addedBook);

        return addedBook; // Return the created post
      } catch (error) {
        console.error("Error creating book:", error);
        throw error;
      }
    },

    async unsetToken({ commit }, { token }) {
      try {
        commit("unsetToken", token);

        const response = await apiClient.post("/logout");
        const message = response.data.message;
        console.log(this.state.token);
        // Save the token in Vuex state
        // Save the token in localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("vuex");

        return true;
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },

    async fetchBooks({ commit }) {
      try {
        const response = await apiClient.get("/products");
        const books = response.data.data;

        // Commit the mutation to set books in the state
        commit("setBooks", books);

        return books; // Return the fetched books
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
    },

    async updateBook({ commit }, updatedBook) {
      try {
        // Make a request to your API to update the book
        const response = await apiClient.post(
          `/products/${updatedBook.id}`,
          updatedBook
        );

        const updatedBookData = response.data;

        // Commit the mutation to update the book in the state
        commit("updateBookInState", updatedBookData);

        return updatedBookData;
      } catch (error) {
        console.error("Error updating post:", error);
        throw error;
      }
    },

    async deleteBook({ commit }, bookID) {
      try {
        // console.log(bookID);
        // Make a request to your API to delete the book
        const response = await apiClient.delete(`/products/${bookID}`);
        // Commit the mutation to delete the book in the state
        commit("deleteBookFromState", bookID);
      } catch (error) {
        console.error("Registration Failed.", error);
        throw error;
      }
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
