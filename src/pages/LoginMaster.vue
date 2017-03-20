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
  .rotateY-enter-active, .rotateY-leave-active {
    transition: All 0.3s ease;
  }
  .rotateY-enter, .rotateY-leave-active {
    transform: rotateY(90deg);
  }
</style>
