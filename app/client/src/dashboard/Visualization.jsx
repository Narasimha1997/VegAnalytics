import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Tabs, Tab, AppBar} from '@material-ui/core'
import PriceLayout from './visualizations/Pricing';
import PriceTableLayout from './visualizations/Table';
import TransactionLayout from './visualizations/Transaction';


class Visualization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabClicked : 0
        }
    }

    render() {
        return (
            <div style = {{paddingLeft : '250px', paddingTop : '50px', width : '80%', textAlign : 'center'}}>
                <Tabs indicatorColor = "primary" style = {{width : '700px'}} textColor = "primary" value = {this.state.tabClicked} onChange = {(e, v) => this.setState({tabClicked : v})}>
                    <Tab label="Price" />
                    <Tab label="Summary" />
                    <Tab label="Transactions" />
                </Tabs>
                {this.state.tabClicked === 0 && <div><PriceLayout userData = {this.props.userData} /></div>}
                {this.state.tabClicked === 1 && <div><PriceTableLayout userData = {this.props.userData} /></div>}
                {this.state.tabClicked === 2 && <div><TransactionLayout userData = {this.props.userData} /></div>}
            </div>
        )
    }
}

export default Visualization