import React, {Component} from 'react';
import Header from './src/components/Header/index';

class AppClass extends Component {
    state = {
        count: 0
    }

    add = () => {
       this.setState((current) => ({count: current.count + 1}));
    }

    minus = () => {
        this.setState((current) => ({count: current.count - 1}));
    }

    componentDidMount() {
        console.log("3");
    }

    componentDidUpdate() {
        console.log("2");
    }

    render(){
        console.log("1");
        const {count} = this.state;

        return(
            <div>
                <Header />
                <h1>The number is: {count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

export default AppClass;