const QRCode = require('qrcode');
const React = require('react');
const styles = require('./Preview.css');

class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: false,
      text: props.text,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.showQRCode(this.state.text);
  }

  componentDidMount() {
    this.showQRCode(this.state.text);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  showQRCode(text){
    var canvas = document.getElementById('qrcode-canvas');
    QRCode.toCanvas(canvas, text, (error) => {
      if (error) console.error(error);
    });
  }

  render() {
    const { error, loading, text } = this.state
    if (error) return <div>Can't convert.</div>
    if (loading) return <div> Loading... </div>
    return (
      <main>
        <canvas id="qrcode-canvas"></canvas>
        <div className={styles.text}>{text}</div>
      </main>
    )
  }
}

Preview.propTypes = {
  text: React.PropTypes.string.isRequired,
}

module.exports = Preview;
