import React, {Component} from "react";

import ErrorMessage from "../../components/errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error:false
    }

    componentDidCatch(error,info){
        console.log(error)
    }

    render(){
        if(this.state.error){
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary