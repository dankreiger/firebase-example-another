import React, { Component } from 'react';
import {
  ErrorImageOverlay,
  ErrorImageWrapper,
  ErrorImageText
} from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageWrapper imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>
            The puppy ate this page and it's broken. Sorry.
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
