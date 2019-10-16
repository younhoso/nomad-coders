import React, {Component} from 'react';
import Header from './src/components/Header/index';

class AppClass extends Component {
    state = {
        count: 0
    }

    add = () => {
       const {count} = this.state;
       this.setState({count: count + 1});
    }

    minus = () => {
        const {count} = this.state;
        this.setState({count: count - 1});
    }

    render(){
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