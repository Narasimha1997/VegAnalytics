import React from 'react'
import ReactDOM from 'react-dom'
import { getProductList, getN } from '../scripts/Product';
import { Typography , Card, Divider, TextField, Button, Table, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';

class TransacionList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            N : 20,
            productList : {},
            data : []
        }
    }

    prepareProductList(products) {
        var list = {}
        for(var i = 0; i < products.length; i ++) {
            list[products[i]._id] = products[i].name
        }

        this.setState({productList : list})
    }

    getNTransactions() {
        getN(this.state.userID, this.state.N, (result) => {
            this.setState({data : result})
        })
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.prepareProductList(result.result)
            this.getNTransactions()
        })
    }

    render() {
        return (
            <Card style = {{margin : '20px', padding : '30px'}}>
                <Typography variant = "h5">Transaction List</Typography>
                <Divider />
                <p>Select the number of transactions you want to display, last 20 transactions are displayed by default.</p>
                <TextField
                    id="outlined-name"
                    label="Number of transactions:"
                    value={this.state.N}
                    onChange = {(e) => {this.setState({N : e.target.value})}}
                    margin="normal"
                    variant="outlined"
                />
                <Button variant = "contained" color = "primary" onClick = {() => {
                    this.getNTransactions()
                }}>Update</Button>
                <Divider />
                <div style = {{marginTop : '20px'}}>
                    <Table>
                        <TableHead>
                            <TableCell>Product Name </TableCell>
                            <TableCell>Total Price </TableCell>
                            <TableCell>Quantity Purchased </TableCell>
                            <TableCell>Date </TableCell>
                            <TableCell>Total Revenue till now </TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.data.map((k, v) => {
                                    return (<TableRow>
                                        <TableCell>{this.state.productList[k.productID]}</TableCell>
                                        <TableCell>{k.cost}</TableCell>
                                        <TableCell>{k.quantity}</TableCell>
                                        <TableCell>{k.date + "/" + k.month + "/" + k.year}</TableCell>
                                        <TableCell>{k.totalCost}</TableCell>
                                    </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </Card>
        )
    }
}


class TransactionListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div style = {{paddingLeft : '250px', paddingTop : '50px', width : '80%'}}>
                <TransacionList userData = {this.props.userData} />
            </div>
        )
    }
}


export default TransactionListContainer