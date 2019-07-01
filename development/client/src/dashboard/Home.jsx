import React from 'react'
import ReactDOM from 'react-dom'
import { Card, Grid, Divider, FormControl, MenuItem, Select, TextField, Button, Icon, Typography } from '@material-ui/core'
import {Add, Money, TrendingUp} from '@material-ui/icons'
import {getProductList, getN, createTransaction} from '../scripts/Product'

import basket from './assets/basket.jpg'

class AddSales extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            products : [],
            cost : 0.0,
            quantity : 0.0,
            selected : '',
            productID : '',
            lastTx : null
        }
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.setState({products : result.result})
            getN(this.state.userID, 1, (result) => {
                this.setState({lastTx : result[0]})
            })
        })
    }

    submitTx() {
        var cost = 0
        for(var i = 0; i < this.state.products.length; i++) {
            if(this.state.products[i]._id === this.state.productID) {
                cost += this.state.products[i].cost * this.state.quantity
                break
            } 
        }
        
        var updatedCost = cost + this.state.lastTx.totalCost
        var date = new Date()
        var day =  date.getUTCDate().toString()
        var month = (date.getUTCMonth() + 1).toString()
        var year = (date.getUTCFullYear()).toString()

        createTransaction(this.state.userID, this.state.productID, cost, this.state.quantity, updatedCost, day, month, year)
        
    }

    render() {
        return (
            <div>
                <Card style = {{width : "100%"}}>
                    <Grid container spacing = {3}>
                        <Grid item xs = {8}>
                           <div style = {{margin : "20px auto", textAlign : 'left', padding : '10px'}}>
                               <Typography variant = "primary">Update Sales information : </Typography>
                               <Divider />
                               <div>
                                   <p>Product</p>
                                   <FormControl>
                                       <Select value = {this.state.productID} onChange = {(e) => {
                                           this.setState({productID : e.target.value})
                                       }}>
                                           {
                                               this.state.products.map((k, v) => {
                                                   return (
                                                       <MenuItem value = {k._id}>{k.name + " Price : "+ k.cost}</MenuItem>
                                                   )
                                               })
                                           }
                                       </Select>
                                   </FormControl>
                                   <div style = {{marginTop : '20px'}}>
                                       <FormControl>
                                       <TextField
                                            id="outlined-name"
                                            label="Quantity"
                                            value={this.state.quantity}
                                            onChange = {(e) => {this.setState({quantity : e.target.value})}}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                       </FormControl>
                                   </div>
                                   <div style = {{marginTop : '20px'}}>
                                       <Button variant = "contained" color = "primary" onClick = {() => {
                                           this.submitTx()
                                       }}><Icon><Add></Add></Icon>  Add</Button>,
                                   </div>
                               </div>
                           </div>
                        </Grid>
                        <Grid item xs = {4}>
                            <div style = {{height : '400px',width : "100%"}}>
                                <img src = {basket} />
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}

class ShowTotalSales extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            products : [],
            tx : null,
            productName : ''
        }
    }

    prepareResult() {
        for(var i = 0; i < this.state.products.length; i++) {
            if(this.state.tx.productID === this.state.products[i]._id) {
                this.setState({productName : this.state.products[i].name})
                break;
            }
        }
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.setState({products : result.result})
            getN(this.state.userID, 1, (result) => {
                this.setState({tx : result[0]})
                this.prepareResult()
            })
        })
    }



    render() {
        return (
            <div>
                <Card style = {{margin : '20px auto'}}>
                    <div style = {{padding : '20px', textAlign : 'left'}}>
                        <Typography>Amount earned today : </Typography>
                        <Typography><Money /> {this.state.totalAmount} Rs</Typography>
                        <Divider />
                        <Typography>Recent Transaction Detail : </Typography>
                        {
                            (this.state.tx !== null) && (
                                <p>{this.state.productName} , Quantity : {this.state.tx.quantity}, Amount : {this.state.tx.cost}</p>
                            )
                        }
                    </div>
                </Card>
            </div>
        )
    }
}

class ShowTotalQuantity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalQuantity : 500.0,
            maxQuantity : {
                product : "Tomato",
                quantity : 32.0,
                price : 20.0 * 32.0
            }
        }
    }

    render() {
        return (
            <div>
                <Card style = {{margin : '20px auto'}}>
                    <div style = {{padding : '20px', textAlign : 'left'}}>
                        <Typography variant = "h5">Export Data  : </Typography>
                        <Divider />
                        <a target = "__blank" href = "http://localhost:5000/export/products.csv"><Button variant = "contained" color = "primary">Download Products</Button></a>
                        <a target = "__blank" href = "http://localhost:5000/export/transactions.csv"><Button variant = "contained" color = "primary">Download Transactions</Button></a>
                    </div>
                </Card>
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div style = {{paddingLeft : '250px', width : '80%', paddingTop : "70px"}}>
                <div style = {{marginLeft : ''}}>
                <Grid container spacing = {3}>
                    <Grid item xs = {7}>
                        <AddSales userData = {this.props.userData}/>
                    </Grid>
                    <Grid item xs = {5}>
                        <ShowTotalSales userData = {this.props.userData}/>
                        <ShowTotalQuantity userData = {this.props.userData}/>
                    </Grid>
                </Grid>
                </div>
            </div>
        )
    }
}

export default Home