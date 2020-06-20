import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //Create a Ref to select the image (like querySelector in DOM in vanilla javascript)
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    //add an event listener to the object using vanilla javascript. 'load' is emitted once
    //the image is loaded successfully.
    //After the image is loaded, a callback function is loaded
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    //spans:spans can be written as spans only (ES2015)
    this.setState({ spans });
  };
  render() {
    //   const {description , urls} = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
