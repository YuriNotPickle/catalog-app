<template>
  <div class="header" @click="this.$router.push('/')">
    <p>CATALOG APP</p>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 7vw;
  right: 7vw;
  top: 4vh;
  height: 2vh;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  & p {
    font-size: 1.2rem;
  }
}
</style>
