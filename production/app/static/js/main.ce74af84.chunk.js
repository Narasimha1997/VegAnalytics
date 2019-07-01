(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,a){t.exports=a(127)},127:function(t,e,a){"use strict";a.r(e);var n=a(8),r=a(7),l=a(11),c=a(10),i=a(12),o=a(0),s=a.n(o),u=a(9),m=a.n(u),p=a(196),d=a(186),h=a(206),v=a(201),f=a(197),E=a(204),y=a(198),b=a(95),g=a(182),D=a(94),j=a.n(D),O=a(51),k=a(4),x=a(90),I=function(){function t(e,a){Object(n.a)(this,t),this.route=e,this.callback=a}return Object(r.a)(t,[{key:"collect",value:function(t){var e=this;console.log(t),fetch(x.host+this.route,{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){e.callback(t)})}}]),t}(),w=function(){function t(){Object(n.a)(this,t)}return Object(r.a)(t,[{key:"add",value:function(t,e){localStorage.setItem(t,e)}},{key:"delete",value:function(t){localStorage.removeItem(t)}},{key:"get",value:function(t){localStorage.getItem(t)}},{key:"check",value:function(t){return null!=localStorage.getItem(t)}}]),t}();var C=a(34),S=a(205),P=a(176),T=a(129),_=a(177),L=a(179),A=a(180),M=a(178),N=a(172),q=a(174),W=a(175),J=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(N.a,{style:{textAlign:"left",width:"100%",position:"fixed",zIndex:1e5}},s.a.createElement(q.a,null,s.a.createElement(W.a,{color:"inherit","aria-label":"Menu"}),s.a.createElement(O.a,{variant:"h6",color:"inherit"},this.props.userData.name)))}}]),e}(s.a.Component),U=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement(S.a,{variant:"permanent"},s.a.createElement("div",{style:{width:"250px"}},s.a.createElement(P.a,{style:{paddingTop:"70px"}},s.a.createElement(T.a,{button:!0,onClick:function(){t.props.handler(0)}},s.a.createElement(_.a,null,s.a.createElement(M.a,null,"more")),s.a.createElement(L.a,{primary:"Home",secondary:"Update purchase information"})),s.a.createElement(A.a,null),s.a.createElement(T.a,{button:!0,onClick:function(){t.props.handler(2)}},s.a.createElement(_.a,null,s.a.createElement(M.a,null,"insert_chart_outline")),s.a.createElement(L.a,{primary:"Visualization",secondary:"Visualize the sales in real-time"})),s.a.createElement(A.a,null),s.a.createElement(T.a,{button:!0,onClick:function(){t.props.handler(3)}},s.a.createElement(_.a,null,s.a.createElement(M.a,null,"public")),s.a.createElement(L.a,{primary:"Configure",secondary:"Configure your store with new products"})),s.a.createElement(A.a,null),s.a.createElement(T.a,{button:!0,onClick:function(){t.props.handler(4)}},s.a.createElement(_.a,null,s.a.createElement(M.a,null,"sentiment_satisfied")),s.a.createElement(L.a,{primary:"Transaction Details",secondary:"Get a list of all transactions"})))))}}]),e}(s.a.Component),F=a(181),H=a(183),R=a(200),Q=a(185),z=a(187),V=a(188);function B(t,e){new I("/product/getProducts",function(t){t.error||e(t)}).collect({userID:t})}function Y(t,e,a){new I("/transaction/getN",function(t){t.error||a(t.result)}).collect({userID:t,N:parseInt(e)})}var G=a(92),K=a.n(G),X=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,products:[],cost:0,quantity:0,selected:"",productID:"",lastTx:null},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.setState({products:e.result}),Y(t.state.userID,1,function(e){t.setState({lastTx:e[0]})})})}},{key:"submitTx",value:function(){for(var t=0,e=0;e<this.state.products.length;e++)if(this.state.products[e]._id===this.state.productID){t+=this.state.products[e].cost*this.state.quantity;break}var a=t+this.state.lastTx.totalCost,n=new Date,r=n.getUTCDate().toString(),l=(n.getUTCMonth()+1).toString(),c=n.getUTCFullYear().toString();!function(t,e,a,n,r,l,c,i){new I("/transaction/create",function(t){t.error||alert("Transaction created")}).collect({userID:t,productID:e,cost:parseFloat(a)+.001,quantity:parseFloat(n)+.001,totalCost:parseFloat(r)+.001,date:l,month:c,year:i})}(this.state.userID,this.state.productID,t,this.state.quantity,a,r,l,c)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(F.a,{style:{width:"100%"}},s.a.createElement(g.a,{container:!0,spacing:3},s.a.createElement(g.a,{item:!0,xs:8},s.a.createElement("div",{style:{margin:"20px auto",textAlign:"left",padding:"10px"}},s.a.createElement(O.a,{variant:"primary"},"Update Sales information : "),s.a.createElement(A.a,null),s.a.createElement("div",null,s.a.createElement("p",null,"Product"),s.a.createElement(H.a,null,s.a.createElement(R.a,{value:this.state.productID,onChange:function(e){t.setState({productID:e.target.value})}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name+" Price : "+t.cost)}))),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(H.a,null,s.a.createElement(v.a,{id:"outlined-name",label:"Quantity",value:this.state.quantity,onChange:function(e){t.setState({quantity:e.target.value})},margin:"normal",variant:"outlined"}))),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.submitTx()}},s.a.createElement(M.a,null,s.a.createElement(z.a,null)),"  Add"),",")))),s.a.createElement(g.a,{item:!0,xs:4},s.a.createElement("div",{style:{height:"400px",width:"100%"}},s.a.createElement("img",{src:K.a}))))))}}]),e}(s.a.Component),Z=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,products:[],tx:null,productName:""},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"prepareResult",value:function(){for(var t=0;t<this.state.products.length;t++)if(this.state.tx.productID===this.state.products[t]._id){this.setState({productName:this.state.products[t].name});break}}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.setState({products:e.result}),Y(t.state.userID,1,function(e){t.setState({tx:e[0]}),t.prepareResult()})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(F.a,{style:{margin:"20px auto"}},s.a.createElement("div",{style:{padding:"20px",textAlign:"left"}},s.a.createElement(O.a,null,"Amount earned today : "),s.a.createElement(O.a,null,s.a.createElement(V.a,null)," ",this.state.totalAmount," Rs"),s.a.createElement(A.a,null),s.a.createElement(O.a,null,"Recent Transaction Detail : "),null!==this.state.tx&&s.a.createElement("p",null,this.state.productName," , Quantity : ",this.state.tx.quantity,", Amount : ",this.state.tx.cost))))}}]),e}(s.a.Component),$=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={totalQuantity:500,maxQuantity:{product:"Tomato",quantity:32,price:640}},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(F.a,{style:{margin:"20px auto"}},s.a.createElement("div",{style:{padding:"20px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h5"},"Export Data  : "),s.a.createElement(A.a,null),s.a.createElement("a",{target:"__blank",href:"http://localhost:5000/export/products.csv"},s.a.createElement(d.a,{variant:"contained",color:"primary"},"Download Products")),s.a.createElement("a",{target:"__blank",href:"http://localhost:5000/export/transactions.csv"},s.a.createElement(d.a,{variant:"contained",color:"primary"},"Download Transactions")))))}}]),e}(s.a.Component),tt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{paddingLeft:"250px",width:"80%",paddingTop:"70px"}},s.a.createElement("div",{style:{marginLeft:""}},s.a.createElement(g.a,{container:!0,spacing:3},s.a.createElement(g.a,{item:!0,xs:7},s.a.createElement(X,{userData:this.props.userData})),s.a.createElement(g.a,{item:!0,xs:5},s.a.createElement(Z,{userData:this.props.userData}),s.a.createElement($,{userData:this.props.userData})))))}}]),e}(s.a.Component),et=a(189),at=a(190),nt=a(192),rt=a(193),lt=a(194),ct=a(191),it=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={product:a.props.row,cost:a.props.row.cost,quantity:a.props.row.quantity},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"deleteProductHandler",value:function(){var t,e,a=this;t=this.state.product.name,e=function(){a.props.deleteHandler()},console.log(t),new I("/product/delete",function(t){console.log(t),t.error||e()}).collect({objectID:t})}},{key:"updateCostHandler",value:function(){!function(t,e){var a=parseFloat(e);new I("/product/updatePrice",function(t){console.log(t),t.error||alert("Product updated ")}).collect({objectID:t,cost:a})}(this.state.product.name,this.state.cost)}},{key:"render",value:function(){var t=this;return s.a.createElement(et.a,null,s.a.createElement(at.a,null,this.state.product.name),s.a.createElement(at.a,null,s.a.createElement(v.a,{value:this.state.quantity,onChange:function(e){t.setState({quantity:e.target.value})}})),s.a.createElement(at.a,null,s.a.createElement(v.a,{value:this.state.cost,onChange:function(e){t.setState({cost:e.target.value})}})),s.a.createElement(at.a,null,s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.deleteProductHandler()}},s.a.createElement(ct.a,null)," Delete")),s.a.createElement(at.a,null,s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateCostHandler()}},"Update")))}}]),e}(s.a.Component),ot=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,name:"",quantity:0,cost:0},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{style:{margin:"10px auto",padding:"10px"}},s.a.createElement(O.a,{variant:"h6"},"Add new product : "),s.a.createElement(A.a,null),s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(v.a,{value:this.state.name,onChange:function(e){t.setState({name:e.target.value})},label:"Name"})),s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(v.a,{value:this.state.cost,onChange:function(e){t.setState({cost:e.target.value})},label:"cost"})),s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(v.a,{value:this.state.quantity,onChange:function(e){t.setState({quantity:e.target.value})},label:"quantity"})),s.a.createElement("div",{style:{marginTop:"10px"}},s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){var e,a,n,r;e=t.state.userID,a=t.state.name,n=t.state.cost,r=t.state.quantity,new I("/product/create",function(t){t.error||alert("Product create")}).collect({userID:e,name:a,cost:parseFloat(n)+.001,quantity:parseFloat(r)+.001})}},s.a.createElement(z.a,null)," Add")))}}]),e}(s.a.Component),st=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={products:[]},a.handleDelete=a.handleDelete.bind(Object(C.a)(a)),a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;B(this.props.userData._id,function(e){t.setState({products:e.result})})}},{key:"handleDelete",value:function(){this.componentDidMount()}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{style:{paddingLeft:"250px",width:"80%",paddingTop:"70px"}},s.a.createElement(b.a,{style:{padding:"20px"}},s.a.createElement(O.a,{variant:"h3"},"Products"),s.a.createElement(O.a,null,"List of products in your inventory"),s.a.createElement(A.a,null),s.a.createElement(nt.a,null,s.a.createElement(rt.a,null,s.a.createElement(at.a,null,"Product Name"),s.a.createElement(at.a,null,"Quantity"),s.a.createElement(at.a,null,"Cost"),s.a.createElement(at.a,null,"Delete"),s.a.createElement(at.a,null,"Update")),s.a.createElement(lt.a,null,this.state.products.map(function(e,a){return s.a.createElement(it,{row:e,deleteHandler:t.handleDelete})}))),s.a.createElement(ot,{userData:this.props.userData})))}}]),e}(s.a.Component),ut=a(202),mt=a(195),pt=a(69),dt=a.n(pt);a(87),a(88);function ht(t,e,a,n,r){new I("/transaction/perMonth",function(t){t.error||r(t.result)}).collect({userID:t,productID:e,month:parseInt(a),year:n})}function vt(t,e,a,n,r){new I("/transaction/monthWise",function(t){t.error||r(t.result)}).collect({userID:t,month:a,year:n,productID:e})}var ft=a(39),Et=(a(124),["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),yt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={month:1,year:2018,productID:"",userID:a.props.userData._id,products:[],data:null},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var e={label:"Sales in "+Et[this.state.month-1],values:{}},a=0;a<t.length;a++){var n=t[a]._id;e.values[n]=t[a].count}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),ht(t.state.userID,t.state.productID,t.state.month,t.state.year,function(e){t.computeDataPoints(e)})})}},{key:"updateList",value:function(){var t=this;ht(this.state.userID,this.state.productID,this.state.month,this.state.year,function(e){t.computeDataPoints(e)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h4"},"Month-wise sales :"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(R.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},Et.map(function(t,e){return s.a.createElement(Q.a,{value:e},t)})),s.a.createElement(R.a,{value:this.state.productID,onChange:function(e){t.setState({productID:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateList()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ft.b,{xtitle:"days",ytitile:"profit",data:this.state.data.values,download:!0})))))}}]),e}(s.a.Component),bt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,month:1,data:null,products:{}},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({products:e})}},{key:"computeDataPoints",value:function(t,e){for(var a={label:"Distribution of sales in "+Et[this.state.month-1]+" in percentage",values:{}},n=0;n<t.length;n++){var r=this.state.products[t[n]._id];a.values[r]=t[n].profit/e}this.setState({data:a})}},{key:"updateProportions",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.month,a=this.state.year,n=function(t){r.computeDataPoints(t.result,t.total)},new I("/transaction/proportionMonth",function(t){t.error||n(t.result)}).collect({userID:t,month:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.prepareProductList(e.result),t.updateProportions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h5"},"Contribution of each product to total profit"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(R.a,{value:this.state.month,onChange:function(e){return t.setState({month:parseInt(e.target.value)})}},Et.map(function(t,e){return s.a.createElement(Q.a,{value:e},t)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateProportions()},ostyle:{marginLeft:"30px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement(ft.c,{download:!0,data:this.state.data.values})))}}]),e}(s.a.Component),gt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={productID1:"",productID2:"",month:1,year:2018,products:[],data1:{},data2:{},userID:a.props.userData._id,productList:{}},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({productList:e})}},{key:"computeDataPoints",value:function(t,e){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var a={label:"Sales in "+Et[this.state.month-1],values:{}},n=0;n<t.length;n++){var r=t[n]._id;a.values[r]=t[n].count}switch(e){case 0:this.setState({data1:a});break;case 1:this.setState({data2:a})}}},{key:"updateTransactions",value:function(){var t=this;ht(this.state.userID,this.state.productID1,this.state.month,this.state.year,function(e){ht(t.state.userID,t.state.productID2,t.state.month,t.state.year,function(a){t.computeDataPoints(e,0),t.computeDataPoints(a,1)})})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.prepareProductList(e.result),t.setState({products:e.result}),t.setState({productID1:e.result[0]._id,productID2:e.result[0]._id}),t.updateTransactions()})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h4"},"Month-wise sales comparision :"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(R.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},Et.map(function(t,e){return s.a.createElement(Q.a,{value:e},t)})),s.a.createElement(R.a,{value:this.state.productID1,onChange:function(e){t.setState({productID1:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name)})),s.a.createElement(R.a,{value:this.state.productID2,onChange:function(e){t.setState({productID2:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateTransactions()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ft.b,{data:[{name:this.state.productList[this.state.productID1],data:this.state.data1.values},{name:this.state.productList[this.state.productID2],data:this.state.data2.values}],download:!0,ytitle:"Profit",xtitle:"days"})))))}}]),e}(s.a.Component),Dt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a.layout=[{i:"a",x:0,y:0,w:6,h:11},{i:"b",x:6,y:0,w:5,h:11},{i:"c",x:0,y:11.2,w:11,h:9}],a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(dt.a,{className:"layout",layout:this.layout,cols:12,rowHeight:30,width:1200},s.a.createElement("div",{key:"a"},s.a.createElement(yt,{userData:this.props.userData})),s.a.createElement("div",{key:"b"},s.a.createElement(bt,{userData:this.props.userData})),s.a.createElement("div",{key:"c"},s.a.createElement(gt,{userData:this.props.userData})))}}]),e}(s.a.Component),jt=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ot=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,productID:"",products:[],txSummary:[],year:2018},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"updateTable",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.productID,a=this.state.year,n=function(t){r.setState({txSummary:t})},new I("/transaction/perProductSummary",function(t){t.error||n(t.result)}).collect({userID:t,productID:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),t.updateTable()})}},{key:"render",value:function(){var t=this;return s.a.createElement(F.a,{style:{margin:"20px auto",padding:"20px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h4"},"Product Summary"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(R.a,{style:{marginRight:"30px"},value:this.state.productID,onChange:function(e){return t.setState({productID:e.target.value})}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",onClick:function(){return t.updateTable()},color:"primary"},"Display")),s.a.createElement("p",null,"The table below shows the summary of all the transactions per month, you can also view the transactions per day by clicking on the table entry"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{marginTop:"20px",textAlign:"center"}},s.a.createElement(nt.a,null,s.a.createElement(rt.a,null,s.a.createElement(at.a,null,"Month"),s.a.createElement(at.a,null,"Profit"),s.a.createElement(at.a,null,"Quantities sold"),s.a.createElement(at.a,null,"Total Transactions"),s.a.createElement(at.a,null,"Average Transactions")),s.a.createElement(lt.a,null,this.state.txSummary.map(function(t,e){return s.a.createElement(et.a,null,s.a.createElement(at.a,null,jt[parseInt(t._id)-1]),s.a.createElement(at.a,null,t.profit),s.a.createElement(at.a,null,t.quantity),s.a.createElement(at.a,null,t.transactions),s.a.createElement(at.a,null,(t.transactions/31).toFixed(0)))})))))}}]),e}(s.a.Component),kt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(Ot,{userData:this.props.userData}))}}]),e}(s.a.Component),xt=a(93),It=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={month:1,year:2018,productID:"",userID:a.props.userData._id,products:[],data:null},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var e={label:"Transactions in "+It[this.state.month-1],values:{}},a=0;a<t.length;a++){var n=t[a]._id;e.values[n]=t[a].count}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),vt(t.state.userID,t.state.productID,t.state.month,t.state.year,function(e){t.computeDataPoints(e)})})}},{key:"updateList",value:function(){var t=this;vt(this.state.userID,this.state.productID,this.state.month,this.state.year,function(e){t.computeDataPoints(e)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h4"},"Month-wise transactions per product :"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(R.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},It.map(function(t,e){return s.a.createElement(Q.a,{value:e},t)})),s.a.createElement(R.a,{value:this.state.productID,onChange:function(e){t.setState({productID:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(Q.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateList()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ft.b,Object(xt.a)({download:!0,xtitle:"days",ytitle:"Transactions",data:this.state.data.values},"download",!0))))))}}]),e}(s.a.Component),Ct=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,month:1,data:null,products:{}},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({products:e})}},{key:"computeDataPoints",value:function(t){for(var e={label:"Distribution of transactions in "+It[this.state.month-1]+" in percentage",values:{}},a=0;a<t.length;a++){var n=this.state.products[t[a]._id];e.values[n]=t[a].counts}this.setState({data:e})}},{key:"updateProportions",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.month,a=this.state.year,n=function(t){r.computeDataPoints(t),console.log(t.result)},new I("/transaction/productProportion",function(t){t.error||n(t.result)}).collect({userID:t,month:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.prepareProductList(e.result),t.updateProportions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(O.a,{variant:"h5"},"Contribution of each product to Transactions"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(R.a,{value:this.state.month,onChange:function(e){return t.setState({month:parseInt(e.target.value)})}},It.map(function(t,e){return s.a.createElement(Q.a,{value:e},t)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateProportions()},ostyle:{marginLeft:"30px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement(ft.c,{download:!0,data:this.state.data.values})))}}]),e}(s.a.Component),St=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,data:[]},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){for(var e=[],a=0;a<t.length;a++){var n=It[parseInt(t[a]._id)-1];e.push([n,t[a].transactions])}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t,e,a,n=this;t=this.state.userID,e=this.state.year,a=function(t){console.log(t),n.computeDataPoints(t)},new I("/transaction/yearWise",function(t){t.error||a(t.result)}).collect({userID:t,year:e})}},{key:"render",value:function(){return s.a.createElement(F.a,{style:{width:"100%",height:"100%",padding:"10px"}},s.a.createElement(O.a,{variant:"h5"},"Yearwise transactions :"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(ft.a,{download:!0,data:this.state.data,xticks:"Months",yticks:"Transaction"})))}}]),e}(s.a.Component),Pt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a.layout=[{i:"a",x:0,y:0,w:6,h:11},{i:"b",x:6,y:0,w:5,h:11},{i:"c",x:0,y:11.2,w:11,h:9}],a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(dt.a,{className:"layout",layout:this.layout,cols:12,rowHeight:30,width:1200},s.a.createElement("div",{key:"a"},s.a.createElement(St,{userData:this.props.userData})),s.a.createElement("div",{key:"b"},s.a.createElement(Ct,{userData:this.props.userData})),s.a.createElement("div",{key:"c"},s.a.createElement(wt,{userData:this.props.userData})))}}]),e}(s.a.Component),Tt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={tabClicked:0},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{style:{paddingLeft:"250px",paddingTop:"50px",width:"80%",textAlign:"center"}},s.a.createElement(ut.a,{indicatorColor:"primary",style:{width:"700px"},textColor:"primary",value:this.state.tabClicked,onChange:function(e,a){return t.setState({tabClicked:a})}},s.a.createElement(mt.a,{label:"Price"}),s.a.createElement(mt.a,{label:"Summary"}),s.a.createElement(mt.a,{label:"Transactions"})),0===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(Dt,{userData:this.props.userData})),1===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(kt,{userData:this.props.userData})),2===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(Pt,{userData:this.props.userData})))}}]),e}(s.a.Component),_t=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={userID:a.props.userData._id,N:20,productList:{},data:[]},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({productList:e})}},{key:"getNTransactions",value:function(){var t=this;Y(this.state.userID,this.state.N,function(e){t.setState({data:e})})}},{key:"componentWillMount",value:function(){var t=this;B(this.state.userID,function(e){t.prepareProductList(e.result),t.getNTransactions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(F.a,{style:{margin:"20px",padding:"30px"}},s.a.createElement(O.a,{variant:"h5"},"Transaction List"),s.a.createElement(A.a,null),s.a.createElement("p",null,"Select the number of transactions you want to display, last 20 transactions are displayed by default."),s.a.createElement(v.a,{id:"outlined-name",label:"Number of transactions:",value:this.state.N,onChange:function(e){t.setState({N:e.target.value})},margin:"normal",variant:"outlined"}),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.getNTransactions()}},"Update"),s.a.createElement(A.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(nt.a,null,s.a.createElement(rt.a,null,s.a.createElement(at.a,null,"Product Name "),s.a.createElement(at.a,null,"Total Price "),s.a.createElement(at.a,null,"Quantity Purchased "),s.a.createElement(at.a,null,"Date "),s.a.createElement(at.a,null,"Total Revenue till now ")),s.a.createElement(lt.a,null,this.state.data.map(function(e,a){return s.a.createElement(et.a,null,s.a.createElement(at.a,null,t.state.productList[e.productID]),s.a.createElement(at.a,null,e.cost),s.a.createElement(at.a,null,e.quantity),s.a.createElement(at.a,null,e.date+"/"+e.month+"/"+e.year),s.a.createElement(at.a,null,e.totalCost))})))))}}]),e}(s.a.Component),Lt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{paddingLeft:"250px",paddingTop:"50px",width:"80%"}},s.a.createElement(_t,{userData:this.props.userData}))}}]),e}(s.a.Component),At=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("div",null,s.a.createElement(this.props.component,{userData:this.props.userData})))}}]),e}(s.a.Component),Mt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={component:tt},a.handler=a.handler.bind(Object(C.a)(a)),a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"handler",value:function(t){switch(t){case 0:this.setState({component:tt});break;case 2:this.setState({component:Tt});break;case 3:this.setState({component:st});break;case 4:this.setState({component:Lt})}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(J,{userData:this.props.userData}),s.a.createElement("div",null,s.a.createElement(U,{handler:this.handler}),s.a.createElement(At,{component:this.state.component,userData:this.props.userData})))}}]),e}(s.a.Component),Nt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={email:"",password:"",message:""},a.classes={props:t},a}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement(g.a,{container:!0,component:"main",style:{height:"100vh"}},s.a.createElement(h.a,null),s.a.createElement(g.a,{item:!0,xs:!1,sm:4,md:7,style:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),s.a.createElement(g.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},s.a.createElement("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",width:"90%",margin:"30px auto"}},s.a.createElement(p.a,null,s.a.createElement(j.a,null)),s.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign in"),s.a.createElement("div",{style:{width:"100%"},noValidate:!0},s.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:this.state.email,onChange:function(e){t.setState({email:e.target.value})},id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),s.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:this.state.password,onChange:function(e){t.setState({password:e.target.value})},autoComplete:"current-password"}),s.a.createElement(f.a,{control:s.a.createElement(E.a,{value:"remember",color:"primary"}),label:"Remember me"}),s.a.createElement(d.a,{fullWidth:!0,variant:"contained",color:"primary",className:this.classes.submit,onClick:function(){var e,a,n;e=t.state.email,a=t.state.password,n=function(e){null==e?t.setState({message:"Login failed, incorrect email or password"}):m.a.render(s.a.createElement(Mt,{userData:e}),document.getElementById("root"))},new I("/user/auth",function(t){if(console.log(t),t.error||0===t.result.length)n(null);else{var e=JSON.stringify(t.result[0]);console.log(e),(new w).add("login",e),n(t.result[0])}}).collect({email:e,password:a})}},"Sign In"),s.a.createElement(g.a,{container:!0},s.a.createElement(g.a,{item:!0,xs:!0},s.a.createElement(y.a,{href:"#",variant:"body2"},"Forgot password?")),s.a.createElement(g.a,{item:!0},s.a.createElement(y.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),s.a.createElement("p",null,this.state.message)))))}}]),e}(s.a.Component),qt=Object(k.a)({root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{},form:{width:"100%"},submit:{}})(Nt),Wt=function(t){function e(){return Object(n.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=function(){var t=new w;return console.log(t.check("login")),t.check("login")?JSON.parse(localStorage.getItem("login")):null}();return null===t?s.a.createElement(qt,null):s.a.createElement(Mt,{userData:t})}}]),e}(s.a.Component);m.a.render(s.a.createElement(Wt,null),document.getElementById("root"))},90:function(t){t.exports={host:""}},92:function(t,e,a){t.exports=a.p+"static/media/basket.f0c09e4d.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.ce74af84.chunk.js.map