import React,{Component} from 'react';
import './child.css';
class Child extends React.Component {

    constructor(){
        super();

        this.state={
            number: 0
        };
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }

    sub=()=>{
        this.setState({number:this.state.number-1})
    }

    reset=()=>{
        this.setState({number:0});
    }



    render() {
        return <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.add}>Increment</button>
            <button onClick={this.sub}>Decrement</button>
            <br />
            <br />
            <button onClick={this.reset}>Reset</button>
            
        </div>
    }
}

export default Child;