import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.myClick = this.myClick.bind(this);
    }

    myClick() {
        let wrapElem = document.getElementsByClassName('wrapper')[0];

        wrapElem.style.backgroundColor = "#F9F5A6FF";
        
        //.style.background-color = "#F9F5A6FF";
    }

    render(){
        return (
            <button onClick={this.myClick} className="cklcker">Изменить дизайн</button>
        )
    }
}

export default Button;