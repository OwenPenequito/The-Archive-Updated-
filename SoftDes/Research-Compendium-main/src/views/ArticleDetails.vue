<template>
  <Navbar />
  <div class="Details">
  <div v-if="Article">
    <h1>{{ Article.Title }}</h1>
    <p>{{ Article.Content }}</p>
  </div>
  </div>
</template>

<script>
import Navbar from '@/views/navbar.vue'
export default {
  components: { Navbar },
    props: ['ID'],
    data() {
        return {
            Article: null
        }
    },
    mounted() {
        fetch('http://localhost:8000/docuDetails/view' + this.ID)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
}
</script>

<style>
.Details {
  height: 850px;
  width: 1450px;
  background: #ffffff;
  padding: 25px;
  position: relative;
  top: -10px;
  left: -10px;
}
</style>