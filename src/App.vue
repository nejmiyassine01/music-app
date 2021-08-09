<template>
  <!-- Header -->
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <app-player></app-player>

  <!-- Auth Modal -->
  <auth-modal />
</template>

<script>
import AppPlayer from './components/Player.vue';
import AppHeader from './components/Header.vue';
import AuthModal from './components/Auth.vue';

export default {
  name: 'App',
  components: {
    AppPlayer,
    AppHeader,
    AuthModal,
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
