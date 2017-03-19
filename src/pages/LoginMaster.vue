<template lang="html">
  <div class="login-wrapper">
      <transition name="rotateY" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  @import "../assets/styles/login.css";
  .rotateY-enter-active, .fade-leave-active {
    transition: All 0.3s ease;
  }
  .rotateY, .fade-leave-active {
    transform: rotateY(90deg);
  }
</style>
