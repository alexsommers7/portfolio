<script>
  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };
</script>

<script setup>
  const router = useRouter();

  const form = reactive({
    name: '',
    email: '',
    message: '',
  });

  const formSubmit = async () => {
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });

      const nextPage = res.ok ? '/contact-success' : '/contact-failure';
      router.push(nextPage);
    } catch (err) {
      console.error(err);
      router.push('error');
    }
  };
</script>

<template>
  <section class="track" id="contact" data-sidebar="Contact">
    <SectionHeading mainTitle="CONTACT" secondaryTitle="In Need of a Developer? Let's Chat" />

    <form
      name="contact"
      class="form"
      method="POST"
      action="/submit"
      netlify
      netlify-honeypot="bot-field"
      @submit.prevent="formSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="form__field">
        <input
          type="text"
          id="name"
          name="name"
          v-model="form.name"
          required="true"
          placeholder=" "
        />

        <label for="name">Name</label>
      </div>

      <div class="form__field">
        <input
          type="email"
          id="email"
          name="email"
          v-model="form.email"
          required="true"
          placeholder=" "
        />

        <label for="email">Email</label>
      </div>

      <div class="form__field">
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          required="true"
          placeholder=" "
        ></textarea>

        <label for="message">Message</label>
      </div>

      <button class="btn btn--secondary" type="submit">Send</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
  @use '@scss/variables';

  .form {
    max-width: 800px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    background-color: variables.$color-background-light;
    padding: 2rem 2rem 1rem;
    border-radius: variables.$design-border-radius-default;

    &__field {
      margin: 2rem 0;
      width: 100%;
      position: relative;

      input,
      textarea {
        margin: 0 0 1rem;
        color: variables.$color-text-light;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid variables.$color-primary;
        appearance: none; // safari rounds inputs by default
        border-radius: 0;

        &:focus-visible {
          outline: none;
        }
      }

      input,
      label,
      textarea {
        font-family: variables.$font-family-main;
        display: block;
        width: 100%;
        transition:
          top 0.3s ease,
          color 0.3s ease,
          font-size 0.3s ease;
      }

      input,
      textarea {
        z-index: 1;
        outline: none;
        font-size: 1rem;
        padding: 0;
        max-width: 100%;

        &:focus + label,
        &:not(:placeholder-shown) + label {
          top: -33px;
          font-size: 1.2rem;
          color: variables.$color-primary;
        }
      }

      input {
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          box-shadow: 0 0 0 30px variables.$color-background-light inset !important;
          -webkit-box-shadow: 0 0 0 30px variables.$color-background-light inset !important;
          -webkit-text-fill-color: variables.$color-text-light !important;
          background-color: variables.$color-background-light !important;
          background-clip: content-box !important;
        }
      }

      label {
        color: variables.$color-text-light;
        pointer-events: none;
        position: absolute;
        top: -12px;
        left: 1px;
        z-index: 2;
        font-size: 1.4rem;
      }
    }

    button {
      max-width: 10rem;
      margin: 2rem auto;
    }
  }
</style>
