<template>
    <div>
      <ProfNavbar />
      <form @submit.prevent="submitForm">
        <div>
          <label for="research-title">Research Title:</label>
          <input type="text" id="research-title" required v-model="form.researchTitle" />
        </div>
        <div>
          <label for="publication-date">Publication Date:</label>
          <input type="date" id="publication-date" required v-model="form.publicationDate" />
        </div>
        <div>
          <label for="author">Author:</label>
          <input type="text" id="author" required v-model="form.author" />
        </div>
        <div>
          <label for="department">Department:</label>
          <input type="text" id="department" required v-model="form.department" />
        </div>
        <div>
          <label for="keywords">Keywords:</label>
          <input type="text" id="keywords" required v-model="form.keywords" />
        </div>
        <div>
          <label for="keywords">content:</label>
          <input type="text" id="content" required v-model="form.content" />
        </div>
        <div style="position: relative;">
          <label for="doi">DOI:</label>
          <input type="text" id="doi" required v-model="form.doi" />
        </div>
        <button class="publish-button" type="submit">Publish</button>

      </form>
    </div>
  </template>
  
  <script>
import ProfNavbar from './ProfNavbar.vue';
  
  export default {
    name: "AddingArticles",
    components: { ProfNavbar },
    data() {
      return {
        form: {
          researchTitle: '',
          publicationDate: '',
          author: '',
          department: '',
          keywords: '',
          doi: '',
        },
        showModal: false,
      };
    },
    methods: {
      submitForm() {
        console.log(this.form);
        // Do something with the form data, e.g. submit to a server
        this.showModal = true;
      },
      hideModal() {
        this.showModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    max-width: 100%;
    max-height: 100%;
    margin: 1in;
    background: rgb(42, 42, 42);
    text-align: left;
    padding: 50px;
    border-radius: 10px;
  }
  
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  input,
  select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  
  .publish-button {
      background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
  }
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #b9b4b4;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.modal p {
  color: #000000;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}
  </style>
  
