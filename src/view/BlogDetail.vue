<template>
  <Loading :loading="loading" />
  <div class="main-div">
    <div class="left-section">
      <div class="blog-image">
        <img :src="image" alt="" @error="handleImageError" />
      </div>
    </div>
    <div class="right-section">
      <h1>{{ title }}</h1>
      <div class="divider"></div>
      <h2>{{ formatedDate }}</h2>
      <div class="divider"></div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
import api from "../lib/api.js";
import { handleImageError, formatDate } from "../lib/helpers.js";
import Loading from "../utils/Loading.vue";
export default {
  components: { Loading },
  data() {
    return {
      id: "",
      createdAt: "",
      image: "",
      title: "",
      description: "",
      preview: "",
      loading: false,
    };
  },
  computed: {
    formatedDate() {
      return this.createdAt ? formatDate(this.createdAt) : "";
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.loading = true;
    this.api()
      .getPage(this.id)
      .then((response) => {
        Object.keys(response).forEach((key) => {
          this[key] = response[key];
        });
        this.loading = false;
      });
  },
  methods: {
    api,
    handleImageError,
    formatDate,
  },
};
</script>

<style scoped>
.main-div {
  position: fixed;
  display: flex;
  top: 10vh;
  left: 10vw;
  right: 10vw;
  bottom: 10vh;

  & .left-section {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1.5;
    flex-direction: column;
    position: relative;

    & .blog-image {
      width: 100%;
      height: 100%;
    }
  }

  & .right-section {
    height: 100%;
    width: 100%;
    display: flex;
    flex: 2;
    flex-direction: column;
    padding-left: 4vw;
    overflow-y: auto;

    & h1 {
      font-size: 3rem;
    }

    & p {
      margin-top: 4vh;
      font-weight: 300;
      line-height: 30px;
    }
  }
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.divider {
  margin-top: 15px;
  width: 8vw;
  height: 5px;
  background-color: rgb(0, 68, 255);
  border-radius: 10px;
}
</style>
