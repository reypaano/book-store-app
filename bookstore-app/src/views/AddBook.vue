<template>
  <div class="addBook">
    <h2>Add a New Book</h2>
    <hr class="separator" />
    <form @submit.prevent="submit">
      <label for="title">Title:</label>
      <input v-model="title" required />
      <label for="author">Author:</label>
      <input v-model="author" required />
      <label for="price">Price:</label>
      <input v-model="price" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      price: "",
    };
  },
  methods: {
    submit() {
      // Dispatch the createPost action and pass the data
      this.$store
        .dispatch("addBook", {
          title: this.title,
          author: this.author,
          price: this.price,
        })
        .then(() => {
          console.log("Book added successfully");

          this.$router.push("/posts");
        });

      this.$router.push("/posts");
    },
  },
};
</script>

<style scoped>
.addBook {
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

.addBook form {
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
button:hover {
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
