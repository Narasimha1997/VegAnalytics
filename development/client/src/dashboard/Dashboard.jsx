import React from 'react'
import ReactDOM from 'react-dom'
import {Navigator, SidePanel} from './Sidebar'
import SignIn from '../Login';
import Home from './Home';
import ProductList from './Products';
import Visualization from './Visualization';
import TransactionListContainer from './txinfo';



class MainArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <main><div><this.props.component userData = {this.props.userData}/></div></main>
        )
    }
}


class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            component : Home
        }
        this.handler = this.handler.bind(this)
    }

    handler(choice) {
        switch(choice) {
            case 0 : this.setState({component : Home}); break;
            case 2 : this.setState({component : Visualization}); break;
            case 3 : this.setState({component : ProductList}); break;
            case 4 : this.setState({component : TransactionListContainer}); break;
            default : break;
        }
    }

    render() {
        return (
            <div>
                <Navigator userData = {this.props.userData}/>
                <div>
                    <SidePanel handler = {this.handler}/>
                    <MainArea component = {this.state.component} userData = {this.props.userData}/>
                </div>
            </div>
        )
    }
}



export default Dashboard;