<template>
  <div class="edit">
    <h2>Edit Books</h2>
    <hr class="separator" />
    <form @submit.prevent="saveChanges">
      <label for="title">Title:</label>
      <input v-model="editedBook.title" required />
      <label for="author">Author:</label>
      <input v-model="editedBook.author" required />
      <label for="price">Price:</label>
      <input v-model="editedBook.price" required />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedBook: {
        id: "",
        title: "",
        author: "",
        price: "",
      },
    };
  },
  mounted() {
    if (this.editedBook) {
      this.editedBook = { ...this.$store.state.editedBook };
      console.log(this.editedBook);
    }
  },
  methods: {
    saveChanges() {
      this.$store
        .dispatch("updateBook", this.editedBook)
        .then(() => {
          console.log("Book updated successfully");
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    },
  },
};
</script>

<style scoped>
.edit {
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
.addBook:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: 50px;
  margin-bottom: 10px;
}
.edit form {
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
button {
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
