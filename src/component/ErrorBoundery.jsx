import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service
    console.error("Error caught in boundary:", error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      // You can customize this UI as per your needs
      return <div>Error occurred: {this.state.error?.message}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
