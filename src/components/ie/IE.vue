<template>
  <div class="ie-message">
    <aside class="modal">
      <div class="modal__text">
        <p class="modal__heading"><strong>IE had a good run, but its time is up.</strong></p>

        <p>
          The Internet Explorer 11 desktop application will be retired and go out of support on June
          15, 2022, for certain versions of Windows 10. In light of this, AlexSommers.com does not
          work on this browser.
        </p>

        <p>Please download one of these alternatives to proceed:</p>

        <div class="modal__downloads">
          <div class="download">
            <a
              href="https://www.microsoft.com/en-us/edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconEdge />
              Microsoft Edge</a
            >
          </div>

          <div class="download">
            <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
              <IconChrome />
              Chrome</a
            >
          </div>

          <div class="download">
            <a
              href="https://www.mozilla.org/en-US/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFirefox />
              Firefox</a
            >
          </div>

          <div class="modal__edge">
            <p>Already have Microsoft Edge downloaded?</p>

            <button class="btn btn--primary" @click="redirectToEdge">
              <strong>Proceed with Microsoft Edge</strong>
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
  import IconFirefox from '@/assets/icons/firefox.svg';
  import IconChrome from '@/assets/icons/chrome.svg';
  import IconEdge from '@/assets/icons/microsoft-edge.svg';

  export default {
    name: 'IE',
    methods: {
      redirectToEdge() {
        window.location = 'microsoft-edge:' + window.location;

        setTimeout(function () {
          window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 200);
      },
    },
    components: {
      IconFirefox,
      IconChrome,
      IconEdge,
    },
  };
</script>

<style scoped lang="scss">
  @import '@/scss/_ie';
</style>
