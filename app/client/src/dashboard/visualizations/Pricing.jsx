import React from 'react'
import ReactDOM from 'react-dom'
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Card, Divider, Button, Typography, Select, MenuItem } from '@material-ui/core';
import { getProductList } from '../../scripts/Product';
import { perMonth, proprtionPerMonth } from '../../scripts/vis';

import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'

var months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


class ProfitPerDay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month : 1,
            year : 2018,
            productID : '',
            userID : this.props.userData._id,
            products : [],
            data : null
        }
    }

    computeDataPoints(result) {
        result.sort(function(a, b){
            var keyA = a._id,
                keyB = b._id;
            
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
        var data = {label : 'Sales in ' + months[this.state.month - 1], values : {}}
        for(var i = 0; i < result.length; i++) {
            var key = result[i]._id
            data.values[key] = result[i].count
        }
        this.setState({data : data})
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.setState({products : result.result, productID : result.result[0]._id})
            perMonth(this.state.userID, this.state.productID, this.state.month, this.state.year, (result) => {
                this.computeDataPoints(result)
            })
        })
    }

    updateList() {
        perMonth(this.state.userID, this.state.productID, this.state.month, this.state.year, (result) => {
            this.computeDataPoints(result)
        })
    }

    render() {
        return (
            <div>
                <Card style = {{width : '100%', height : '100%', padding  : '10px', textAlign : 'left'}}>
                    <Typography variant = "h4">Month-wise sales :</Typography>
                    <Divider />
                    <div style = {{margin : '20px auto'}}>
                        <Select value = {this.state.month} style = {{marginLeft : '20px auto'}} onChange = {(e) => {
                            this.setState({month : parseInt(e.target.value) + 1 })
                        }}>
                            {
                                months.map((k,v) => {
                                    return (
                                        <MenuItem value = {v}>{k}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <Select value = {this.state.productID} onChange = {(e) => {
                            this.setState({productID: e.target.value})
                        }} style = {{marginLeft : '40px'}}>
                            {
                                this.state.products.map((k,v) => {
                                    return (
                                        <MenuItem value = {k._id}>{k.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <Button variant = "contained" color = "primary" onClick = {() => {
                            this.updateList()
                        }} style = {{marginLeft : '40px'}}>Update</Button>
                    </div>
                    <div>
                        {
                            (this.state.data !== null) && (
                                <div>
                                   <LineChart xtitle = "days" ytitile = "profit" data = {this.state.data.values} download = {true} />
                                </div>
                            )
                        }
                    </div>
                </Card>
            </div>        
        )
    }
}


class PieChartDistribution extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID : this.props.userData._id,
            year : 2018,
            month : 1,
            data : null,
            products : {}
        }
    }

    prepareProductList(products) {
        var list = {}
        for(var i = 0; i < products.length; i ++) {
            list[products[i]._id] = products[i].name
        }

        this.setState({products : list})
    }

    computeDataPoints(result, total) {
         var data = {label : "Distribution of sales in " + months[this.state.month - 1] + " in percentage" , values : {}}

         for(var i = 0; i < result.length; i++) {
             var key = this.state.products[result[i]._id]
             data.values[key] = (result[i].profit / total) 
         }
         this.setState({data : data})
    } 

    updateProportions() {
        proprtionPerMonth(this.state.userID, this.state.month, this.state.year, (result) => {
            this.computeDataPoints(result.result, result.total)
        })
    }

    componentWillMount() {
       getProductList(this.state.userID, (result) => {
           this.prepareProductList(result.result)
           this.updateProportions()
       })
    }

    render() {
        return (
            <Card style = {{width : '100%', height : '100%', padding : '10px', textAlign : 'left'}}>
                <Typography variant = "h5">Contribution of each product to total profit</Typography>
                <Divider />
                <div style = {{margin : '20px auto'}}>
                    <Select value = {this.state.month} onChange = {(e) => this.setState({month : parseInt(e.target.value)})}>
                        {
                            months.map((k, v) => {
                                return (
                                    <MenuItem value = {v}>{k}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    <Button variant = "contained" color = "primary" onClick = {() => this.updateProportions()}  ostyle = {{marginLeft : '30px'}}>Update</Button>
                </div>
                <div>
                    {
                        (this.state.data !== null) && (
                            <PieChart download = {true} data = {this.state.data.values} />
                        )
                    }
                </div>
            </Card>
        )
    }
}

class PriceComparision extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            productID1 : '', productID2 : '',
            month : 1,
            year : 2018,
            products : [],
            data1 : {},
            data2 : {},
            userID : this.props.userData._id,
            productList : {}
        }
    }

    prepareProductList(products) {
        var list = {}
        for(var i = 0; i < products.length; i ++) {
            list[products[i]._id] = products[i].name
        }

        this.setState({productList : list})
    }

    computeDataPoints(result , id) {
        result.sort(function(a, b){
            var keyA = a._id,
                keyB = b._id;
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
        var data = {label : 'Sales in ' + months[this.state.month - 1], values : {}}
        for(var i = 0; i < result.length; i++) {
            var key = result[i]._id
            data.values[key] = result[i].count
        }
        switch(id) {
            case 0 : this.setState({data1 : data}); break;
            case 1 : this.setState({data2 : data}); break;
            default : ;
        }
    }

    updateTransactions() {
        perMonth(this.state.userID, this.state.productID1, this.state.month, this.state.year, (result1) => {
            perMonth(this.state.userID, this.state.productID2, this.state.month, this.state.year, (result2) => {
                this.computeDataPoints(result1, 0)
                this.computeDataPoints(result2, 1)
            })
        })
    }

    componentWillMount() {
        getProductList(this.state.userID, (result) => {
            this.prepareProductList(result.result)
            this.setState({products : result.result})
            this.setState({productID1 : result.result[0]._id, productID2 : result.result[0]._id})
            this.updateTransactions()
        })
    }

    render() {
        return (
            <div>
                <Card style = {{width : '100%', height : '100%', padding  : '10px', textAlign : 'left'}}>
                    <Typography variant = "h4">Month-wise sales comparision :</Typography>
                    <Divider />
                    <div style = {{margin : '20px auto'}}>
                        <Select value = {this.state.month} style = {{marginLeft : '20px auto'}} onChange = {(e) => {
                            this.setState({month : parseInt(e.target.value) + 1 })
                        }}>
                            {
                                months.map((k,v) => {
                                    return (
                                        <MenuItem value = {v}>{k}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <Select value = {this.state.productID1} onChange = {(e) => {
                            this.setState({productID1: e.target.value})
                        }} style = {{marginLeft : '40px'}}>
                            {
                                this.state.products.map((k,v) => {
                                    return (
                                        <MenuItem value = {k._id}>{k.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <Select value = {this.state.productID2} onChange = {(e) => {
                            this.setState({productID2: e.target.value})
                        }} style = {{marginLeft : '40px'}}>
                            {
                                this.state.products.map((k,v) => {
                                    return (
                                        <MenuItem value = {k._id}>{k.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                        <Button variant = "contained" color = "primary" onClick = {() => {
                            this.updateTransactions()
                        }} style = {{marginLeft : '40px'}}>Update</Button>
                    </div>
                    <div>
                        {
                            (this.state.data !== null) && (
                                <div>
                                   <LineChart data = {[
                                       {"name" : this.state.productList[this.state.productID1], "data" : this.state.data1.values},
                                       {"name" : this.state.productList[this.state.productID2], "data": this.state.data2.values}
                                   ]} download = {true} ytitle = "Profit" xtitle = "days" />
                                </div>
                            )
                        }
                    </div>
                </Card>
            </div>        
        )
    }
}

class PriceLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.layout = [
            {i: 'a', x: 0, y: 0, w: 6, h: 11},
            {i: 'b', x: 6, y: 0, w: 5, h: 11},
            {i: 'c', x: 0, y: 11.2, w: 11, h: 9}
          ];
    }

    render() {
        return (
            <GridLayout className="layout" layout= {this.layout} cols={12} rowHeight={30} width={1200}>
              <div key="a"><ProfitPerDay  userData = {this.props.userData} /></div>
              <div key="b"><PieChartDistribution userData = {this.props.userData} /></div>
              <div key="c"><PriceComparision userData = {this.props.userData} /></div>
            </GridLayout>
        )
    }
}

export default PriceLayout