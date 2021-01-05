import React from 'react'
import ReactDOM from 'react-dom'
import SignIn from './Login';
import Dashboard from './dashboard/Dashboard';
import { checkStorage } from './scripts/User';


class Main extends React.Component {
    render() {
        //check login and return 
        var userData = checkStorage()
        if(userData === null) {
            return (
                <SignIn />
            )
        } else return (
            <Dashboard userData = {userData} />
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))