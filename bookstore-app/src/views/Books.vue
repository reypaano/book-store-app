<template>
  <div class="books-container">
    <h2>Books</h2>
    <p v-if="!token" class="warning">Please log in to access posts.</p>
    <div v-if="token">
      <p>This is a protected route. Only accessible when logged in.</p>
      <table v-if="books.length > 0">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.price }}</td>
            <td>
              <button @click="editBook(book)">Edit</button>
              <button @click="deleteBook(book.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <p>No books to show. Try adding one.</p>
      </div>
      <button class="addBtn" @click="addBook">Add Book</button>
    </div>
  </div>
</template>

<script>
import AddBook from "@/views/AddBook.vue";

import { mapActions } from "vuex";

export default {
  components: {
    AddBook,
  },
  methods: {
    ...mapActions(["deleteBook"]),
    async deleteBook(bookID) {
      try {
        await this.$store.dispatch("deleteBook", bookID);
      } catch (error) {
        this.showError = true;
      }
    },

    addBook() {
      this.$router.push("/add-book");
    },

    editBook(book) {
      this.$store.commit("setEditedBook", book);
      // Navigate to the Edit Book page
      this.$router.push("/edit-book");
    },
  },

  computed: {
    token() {
      return this.$store.state.token;
    },
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    // Fetch books when the component is mounted
    this.$store.dispatch("fetchBooks");
  },
};
</script>

<style scoped>
.books-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  height: auto;
  width: auto;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 50px;
  margin-bottom: 10px;
}
p {
  font-size: 25px;
}
.warning {
  color: red;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  font-size: 25px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 15px;
  margin: 10 10 10 10;
}

.addBtn {
  margin-top: 20px;
  border-radius: 20px;
  font-size: 20px;
}
.addBtn:hover {
  background-color: #45a049;
  width: 100%;
}

button:hover {
  background-color: #45a049;
}
</style>
