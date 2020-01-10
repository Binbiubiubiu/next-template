module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    // 'order/order': ['custom-properties', 'declarations'],
    // 'order/properties-alphabetical-order': true,
    // 'order/properties-order': [],
    // 'plugin/rational-order': [
    //   true,
    //   {
    //     'border-in-box-model': false,
    //     'empty-line-between-groups': false,
    //   },
    // ],
  },
};
