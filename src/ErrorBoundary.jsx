import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error);
    console.log("Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fallback">
          <h2>Weather Widget Out of Order</h2>
          <p>Something went wrong, but the rest of the dashboard still works.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
