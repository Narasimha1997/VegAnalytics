import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Table, Typography, Divider, Select, MenuItem, TableHead, TableCell, TableBody, Card, TableRow} from '@material-ui/core'
import { getProductList } from '../../scripts/Product';
import { perProductSummary } from '../../scripts/vis';

var months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


class PerProductSummary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            productID : '',
            products : [],
            txSummary : [],
            year : 2018
        }
    }

    updateTable() {
        perProductSummary(this.state.userID, this.state.productID, this.state.year, (result) => {
            this.setState({txSummary : result})
        })
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.setState({products : result.result, productID : result.result[0]._id})
            this.updateTable()
        })
    }

    render() {
        return (
            <Card style = {{margin : '20px auto', padding : '20px', textAlign : 'left'}}>
                <Typography variant = "h4">Product Summary</Typography>
                <Divider />
                <div style = {{marginTop : '20px'}}>
                    <Select style = {{marginRight : '30px'}} value = {this.state.productID} onChange = {(e) => this.setState({productID : e.target.value})}>
                        {
                            this.state.products.map((k, v) => {
                                return (
                                    <MenuItem value = {k._id}>{k.name}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    <Button variant = "contained" onClick = {() => this.updateTable()} color = "primary">Display</Button>
                </div>
                <p>The table below shows the summary of all the transactions per month, you can also view the transactions per day by clicking on the table entry</p>
                <Divider />
                <div style = {{marginTop : '20px', textAlign : 'center'}}>
                    <Table>
                        <TableHead>
                            <TableCell>Month</TableCell>
                            <TableCell>Profit</TableCell>
                            <TableCell>Quantities sold</TableCell>
                            <TableCell>Total Transactions</TableCell>
                            <TableCell>Average Transactions</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.txSummary.map((k, v) => {
                                    return (
                                    <TableRow>
                                        <TableCell>{months[parseInt(k._id) - 1]}</TableCell>
                                        <TableCell>{k.profit}</TableCell>
                                        <TableCell>{k.quantity}</TableCell>
                                        <TableCell>{k.transactions}</TableCell>
                                        <TableCell>{(k.transactions / 31).toFixed(0)}</TableCell>
                                    </TableRow> )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </Card>
        )
    }
}

class PriceTableLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <PerProductSummary userData = {this.props.userData} />
            </div>
        )
    }
}

export default PriceTableLayout