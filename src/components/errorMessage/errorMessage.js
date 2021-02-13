import React from "react";
import {ErrorText} from './ErrorText'
import img from '../errorMessage/error.svg'
const ErrorMessage = ()=>{
    return <ErrorText>
        <div className="error__img">
            <img src={img} alt="error"/>
        </div>
        <span>Something goes wrong ...</span>
    </ErrorText>
}
export default ErrorMessage