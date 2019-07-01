import React from 'react'
import ReactDOM from 'react-dom'
import  Drawer  from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon  from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import {AppBar, Toolbar, IconButton} from '@material-ui/core/'
import  Typography  from '@material-ui/core/Typography';


var megaStore = "Royal Mart"

class Navigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
       return (
           <AppBar style = {{textAlign : 'left', width  : "100%", position : 'fixed', zIndex  : 100000}}>
             <Toolbar>
                 <IconButton color = "inherit" aria-label = "Menu">
                    
                 </IconButton>
                 <Typography variant = "h6" color = "inherit">{this.props.userData.name}</Typography>
             </Toolbar>
             </AppBar>
       )
   }
}

class SidePanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Drawer variant = "permanent">
               <div style = {{width : '250px'}}>
                   <List style = {{paddingTop : '70px'}}>
                       <ListItem button onClick = {() => {
                           this.props.handler(0)
                       }}> 
                           <ListItemIcon><Icon>more</Icon></ListItemIcon>
                           <ListItemText primary = "Home" secondary = "Update purchase information" />
                       </ListItem>
                       <Divider />
                       <ListItem button onClick = {() => {
                           this.props.handler(2)
                       }}>
                           <ListItemIcon><Icon>insert_chart_outline</Icon></ListItemIcon>
                           <ListItemText primary = "Visualization" secondary = "Visualize the sales in real-time" />
                       </ListItem>
                       <Divider />
                       <ListItem button onClick = {() => {
                           this.props.handler(3)
                       }}>
                           <ListItemIcon><Icon>public</Icon></ListItemIcon>
                           <ListItemText primary = "Configure" secondary = "Configure your store with new products" />
                       </ListItem>
                       <Divider />
                       <ListItem button onClick = {() => {
                           this.props.handler(4)
                       }}>
                           <ListItemIcon><Icon>sentiment_satisfied</Icon></ListItemIcon>
                           <ListItemText primary = "Transaction Details" secondary = "Get a list of all transactions" />
                       </ListItem>
                   </List>
               </div>
            </Drawer>
        )
    }
}

export {SidePanel, Navigator}
