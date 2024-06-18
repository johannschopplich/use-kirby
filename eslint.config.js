import antfu from "@antfu/eslint-config";

export default await antfu({
  stylistic: false,
  vue: {
    // https://github.com/antfu/eslint-config/issues/367
    sfcBlocks: {
      blocks: {
        styles: false,
      },
    },
    vueVersion: 2,
  },
});
