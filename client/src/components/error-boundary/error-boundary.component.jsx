import React from "react";
import { ErrorImageOverlay, ErrorImageText, ErrorImageContainer } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // Process the error.

        return { hasErrored: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png">
                        <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
                    </ErrorImageContainer>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;