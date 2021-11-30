import React from 'react';
import './CardViewer.css';
class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        front: true,
        index: 0,
    };
  }
  flip = () => this.setState({ front: !this.state.front});
  next = () => {
    if (this.state.index < this.props.cards.length - 1) {
      this.setState({
        index: this.state.index + 1,
        front: true,
      });
    }
  };
  prev = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
        front: true,
      });
    }
  };
  render() {    
    return (
      <div>
        <h2>Card Viewer</h2>
        {this.state.index + 1}/{this.props.cards.length}
        <div className="card" onClick={this.flip}>
          {this.props.cards[this.state.index][this.state.front ? 'front' : 'back']}
        </div>
        <br />
        <button
          disabled={this.state.index == 0}
          onClick={this.prev}
        >
          Previous
        </button>
        <button
          disabled={this.state.index == this.props.cards.length - 1}
          onClick={this.next}
        >
            Next 
        </button>
        <hr />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
  }
}
export default CardViewer;