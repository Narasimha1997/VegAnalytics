import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Paper, Typography, Divider, Table, TableHead, TableCell, TableRow, TableBody, TextField} from '@material-ui/core'
import {Delete, Add} from '@material-ui/icons'
import {createProduct, getProductList, updateCost, deleteProduct} from '../scripts/Product';

class ProdctRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product : this.props.row,
            cost : this.props.row.cost,
            quantity : this.props.row.quantity
        }
    }

    deleteProductHandler() {
        deleteProduct(this.state.product.name, () => {
            this.props.deleteHandler()
        })
    }


    updateCostHandler() {
        updateCost(this.state.product.name, this.state.cost)
    }

    render() {
        return (
            <TableRow>
                <TableCell>{this.state.product.name}</TableCell>
                <TableCell>
                    <TextField value = {this.state.quantity} onChange = {(e) => {
                        this.setState({quantity : e.target.value})
                    }}/>
                </TableCell>
                <TableCell><TextField value = {this.state.cost} onChange = {(e) => {
                        this.setState({cost : e.target.value})
                    }}/></TableCell>
                <TableCell><Button variant = "contained" color = "primary" onClick = {() => this.deleteProductHandler()}><Delete /> Delete</Button></TableCell>
                <TableCell><Button variant = "contained" color = "primary" onClick = {() => this.updateCostHandler()}>Update</Button></TableCell>
            </TableRow>
        )
    }

}

class AddNewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            name : '',
            quantity : 0.0,
            cost : 0.0
        }
    }

    render() {
        return (
            <div style = {{margin : '10px auto', padding : '10px'}}>
                <Typography variant = "h6">Add new product : </Typography>
                <Divider />
                <div style = {{marginTop : '10px'}}>
                <TextField value = {this.state.name} onChange = {(e) => {
                        this.setState({name : e.target.value})}} label = "Name" />
                </div>
                <div style = {{marginTop : '10px'}}>
                <TextField value = {this.state.cost} onChange = {(e) => {
                        this.setState({cost : e.target.value})}} label = "cost" />
                </div>
                <div style = {{marginTop : '10px'}}>
                <TextField value = {this.state.quantity} onChange = {(e) => {
                        this.setState({quantity : e.target.value})}} label = "quantity" />
                </div>
                <div style = {{marginTop : '10px'}}>
                   <Button variant = "contained" color = "primary" onClick = {() => {
                       createProduct(this.state.userID, this.state.name, this.state.cost, this.state.quantity)
                   }}><Add /> Add</Button>
                </div>
            </div>
        )
    }

}

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        getProductList(this.props.userData._id, (result) => {
            this.setState({products : result.result})
        })
    }

    handleDelete() {
        this.componentDidMount()
    }

    render() {
        return (
            <div style = {{paddingLeft: '250px', width : '80%', paddingTop : "70px"}}>
                <Paper style = {{padding : '20px'}}>
                    <Typography variant = "h3">Products</Typography>
                    <Typography>List of products in your inventory</Typography>
                    <Divider />
                    <Table>
                        <TableHead>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Update</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.products.map((k, v) => {
                                    return (
                                        <ProdctRow row = {k} deleteHandler = {this.handleDelete} />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    <AddNewProduct userData = {this.props.userData}/>
                </Paper>
            </div>
        )
    }
}

export default ProductList