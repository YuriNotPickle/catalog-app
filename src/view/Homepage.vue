<template>
  <Loading :loading="isLoading"></Loading>
  <div class="homepage">
    <h1 class="heading">Explore</h1>
    <div class="divider"></div>
    <div class="blogs">
      <PublicBlog
        v-for="blog in currentPosts"
        :image="blog.image"
        :title="blog.title"
        :description="blog.description"
        :created-at="blog.createdAt"
        @click="openPage(blog.id)"
      ></PublicBlog>
    </div>
    <div class="pagination-block">
      <vue-awesome-paginate
        v-model="choosePage"
        :total-items="allPosts.length"
        :items-per-page="itemsPerPage"
        @change="changePage"
      />
    </div>
  </div>
</template>

<script>
import PublicBlog from "../components/PublicBlog.vue";
import Loading from "../utils/Loading.vue";
import "vue-awesome-paginate/dist/style.css";
import { paginationStore } from "../store/pagination.js";
import { mapState } from "pinia";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    PublicBlog,
    Loading,
  },

  computed: {
    ...mapState(paginationStore, [
      "allPosts",
      "currentPage",
      "pages",
      "itemsPerPage",
    ]),
    currentPosts() {
      return this.pages[this.currentPage - 1];
    },
    choosePage: {
      get() {
        return this.currentPage;
      },
      set(e) {
        paginationStore().changePage(e);
      },
    },
  },

  created() {
    this.isLoading = true;
  },

  mounted() {
    paginationStore().getPosts();
    this.isLoading = false;
  },

  methods: {
    openPage(id) {
      this.$router.push({
        name: "blog",
        params: {
          id: id,
        },
      });
    },
    changePage(e) {
      paginationStore().changePage(e);
    },
  },
};
</script>

<style lang="scss">
.homepage {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10vh;
  left: 15vw;
  right: 15vw;
  bottom: 10vh;
}
.heading {
  font-size: 4rem;
  letter-spacing: 0.4rem;
  color: white;
  margin-bottom: 5px;
}
.divider {
  margin: 15px 0;
  width: 8vw;
  height: 8px;
  background-color: rgb(0, 68, 255);
  border-radius: 10px;
}

.blogs {
  overflow-y: auto;
  top: 24vh;
  right: 15vw;
  left: 15vw;
  column-gap: 2vw;
  row-gap: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  bottom: 10vh;
}

.pagination-block {
  margin-top: 16px;
  & .pagination-container {
    column-gap: 10px;
  }

  & .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }

  & .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  & .active-page {
    background-color: rgb(0, 68, 255);
    border: 1px solid rgb(0, 68, 255);
    color: white;
  }

  & .active-page:hover {
    background-color: rgb(0, 68, 255);
  }

  & .back-button:active,
  & .next-button:active {
    background-color: #c4c4c4;
  }
}
</style>
