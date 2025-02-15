<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div class="form-result-wrapper">
      <h1 class="heading heading--2">
        <strong>Whoops, looks like something went wrong.</strong>
      </h1>

      <h2>Please try again</h2>

      <NuxtLink to="/">
        <button class="btn btn--secondary">Return to Home Page</button>
      </NuxtLink>
    </div>
  </transition>
</template>

<style lang="scss">
  .form-result-wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1,
    h2 {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    h2 {
      font-weight: 400;
    }
  }
</style>
