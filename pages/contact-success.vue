<script setup>
  definePageMeta({ sidebarLabel: '' });
</script>

<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div class="form-result-wrapper">
      <h1 class="heading heading--2">Hey, thanks for reaching out. I'll be in touch.</h1>

      <NuxtLink to="/">
        <button class="btn btn--secondary">Return to Home Page</button>
      </NuxtLink>
    </div>
  </transition>
</template>
