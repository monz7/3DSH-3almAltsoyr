<script setup>
import { RouterView } from 'vue-router';



</script>

<template>
  <RouterView />
</template>

<style>
/* Scrollbar Global */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0A0A0A;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff8800;
}

</style>
