const React = require('react');
const Preview = require('./Preview')

const fn = ({term, display, actions}) => {
  console.log(term);
  display({
    title: 'To QR Code',
    getPreview: () => <Preview text={term} />
  });
};

module.exports = {
  fn
}
