<template>
  <div class="blog">
    <img :src="image" alt="" @error="handleImageError" />
    <div class="transparent">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="user-info">
        <p>{{ formatedDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { handleImageError, formatDate } from "../lib/helpers.js";
export default {
  props: ["image", "title", "description", "createdAt"],
  computed: {
    formatedDate() {
      return this.createdAt ? formatDate(this.createdAt) : "";
    },
  },
  methods: {
    handleImageError,
    formatDate,
  },
};
</script>

<style scoped lang="scss">
.blog {
  position: relative;
  display: flex;
  height: 40vh;
  border-radius: 10px;
  cursor: pointer;

  & img {
    display: flex;
    width: 100%;
    height: 40vh;
    border-radius: 10px;
    object-fit: cover;
  }

  & .transparent {
    position: absolute;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 2% 10%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.732)
    );

    & p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: 300;
      font-size: 1rem;
    }

    & h1 {
      margin-bottom: 1vh;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 1.7rem;
    }

    & .user-info {
      margin-top: 2vh;
      width: 100%;
      display: flex;
      align-items: center;

      & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>