// include any files you want to be used in all components
// this is the alternative to importing into each individual component
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `,
      },
    },
  },
};
