const React = require('react');
const Preview = require('./Preview')

const fn = ({term, display, actions}) => {
  let match = term.match(/^qrcode\s(.+)/);
  if (match) {
    display({
      title: 'To QR Code',
      getPreview: () => <Preview text={match[1]} />
    });
  };
};

module.exports = {
  fn,
  name: 'Create a QR Code',
  keyword: 'qrcode'
}
