(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,a){"use strict";a.r(e);var n=a(9),r=a(7),l=a(12),i=a(11),c=a(13),o=a(0),s=a.n(o),u=a(8),m=a.n(u),p=a(196),d=a(185),h=a(206),v=a(201),f=a(197),E=a(204),y=a(198),b=a(94),g=a(181),D=a(93),O=a.n(D),j=a(51),k=a(90),x=function(){function t(e,a){Object(n.a)(this,t),this.route=e,this.callback=a}return Object(r.a)(t,[{key:"collect",value:function(t){var e=this;console.log(t),fetch(k.host+this.route,{headers:{"Content-Type":"application/json",Accept:"application/json"},mode:"cors",method:"post",body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){e.callback(t)})}}]),t}(),I=function(){function t(){Object(n.a)(this,t)}return Object(r.a)(t,[{key:"add",value:function(t,e){localStorage.setItem(t,e)}},{key:"delete",value:function(t){localStorage.removeItem(t)}},{key:"get",value:function(t){localStorage.getItem(t)}},{key:"check",value:function(t){return null!=localStorage.getItem(t)}}]),t}();var w=a(34),C=a(205),S=a(175),P=a(128),T=a(176),L=a(178),_=a(179),A=a(177),N=a(171),M=a(173),q=a(174),J=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(N.a,{style:{textAlign:"left",width:"100%",position:"fixed",zIndex:1e5}},s.a.createElement(M.a,null,s.a.createElement(q.a,{color:"inherit","aria-label":"Menu"}),s.a.createElement(j.a,{variant:"h6",color:"inherit"},this.props.userData.name)))}}]),e}(s.a.Component),Q=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement(C.a,{variant:"permanent"},s.a.createElement("div",{style:{width:"250px"}},s.a.createElement(S.a,{style:{paddingTop:"70px"}},s.a.createElement(P.a,{button:!0,onClick:function(){t.props.handler(0)}},s.a.createElement(T.a,null,s.a.createElement(A.a,null,"more")),s.a.createElement(L.a,{primary:"Home",secondary:"Update purchase information"})),s.a.createElement(_.a,null),s.a.createElement(P.a,{button:!0,onClick:function(){t.props.handler(2)}},s.a.createElement(T.a,null,s.a.createElement(A.a,null,"insert_chart_outline")),s.a.createElement(L.a,{primary:"Visualization",secondary:"Visualize the sales in real-time"})),s.a.createElement(_.a,null),s.a.createElement(P.a,{button:!0,onClick:function(){t.props.handler(3)}},s.a.createElement(T.a,null,s.a.createElement(A.a,null,"public")),s.a.createElement(L.a,{primary:"Configure",secondary:"Configure your store with new products"})),s.a.createElement(_.a,null),s.a.createElement(P.a,{button:!0,onClick:function(){t.props.handler(4)}},s.a.createElement(T.a,null,s.a.createElement(A.a,null,"sentiment_satisfied")),s.a.createElement(L.a,{primary:"Transaction Details",secondary:"Get a list of all transactions"})))))}}]),e}(s.a.Component),W=a(180),U=a(182),H=a(200),F=a(184),R=a(186),z=a(187),V=a(188),B=a(92),G=a.n(B),Y=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={itemsSample:[{name:"Tomato",id:"Tom331",price:20},{name:"Onion",id:"Oni312",price:30}],quantity:0,selected:"Tom331"},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(W.a,{style:{width:"100%"}},s.a.createElement(g.a,{container:!0,spacing:3},s.a.createElement(g.a,{item:!0,xs:8},s.a.createElement("div",{style:{margin:"20px auto",textAlign:"left",padding:"10px"}},s.a.createElement(j.a,{variant:"primary"},"Update Sales information : "),s.a.createElement(_.a,null),s.a.createElement("div",null,s.a.createElement("p",null,"Product"),s.a.createElement(U.a,null,s.a.createElement(H.a,{value:this.state.selected,onChange:function(e){t.setState({selected:e.target.value})}},this.state.itemsSample.map(function(t,e){return s.a.createElement(F.a,{value:t.id},t.name+" Price : "+t.price)}))),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(U.a,null,s.a.createElement(v.a,{id:"outlined-name",label:"Quantity",value:this.state.quantity,onChange:function(e){t.setState({quantity:e.target.value})},margin:"normal",variant:"outlined"}))),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(d.a,{variant:"contained",color:"primary"},s.a.createElement(A.a,null,s.a.createElement(R.a,null)),"  Add"),",")))),s.a.createElement(g.a,{item:!0,xs:4},s.a.createElement("div",{style:{height:"400px",width:"100%"}},s.a.createElement("img",{src:G.a}))))))}}]),e}(s.a.Component),K=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={totalAmount:9541.5,recentTransaction:{product:"Tomato",quantity:32,price:640}},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(W.a,{style:{margin:"20px auto"}},s.a.createElement("div",{style:{padding:"20px",textAlign:"left"}},s.a.createElement(j.a,null,"Amount earned today : "),s.a.createElement(j.a,null,s.a.createElement(z.a,null)," ",this.state.totalAmount," Rs"),s.a.createElement(_.a,null),s.a.createElement(j.a,null,"Recent Transaction Detail : "),s.a.createElement("p",null,this.state.recentTransaction.product," , Quantity : ",this.state.recentTransaction.quantity,", Amount : ",this.state.recentTransaction.price))))}}]),e}(s.a.Component),X=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={totalQuantity:500,maxQuantity:{product:"Tomato",quantity:32,price:640}},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(W.a,{style:{margin:"20px auto"}},s.a.createElement("div",{style:{padding:"20px",textAlign:"left"}},s.a.createElement(j.a,null,"Quantity sold : "),s.a.createElement(j.a,null,s.a.createElement(z.a,null)," ",this.state.totalQuantity," Rs"),s.a.createElement(_.a,null),s.a.createElement(j.a,null,s.a.createElement(V.a,null)," Maximum Sold Quantity of the day : "),s.a.createElement("p",null,this.state.maxQuantity.product," , Quantity : ",this.state.maxQuantity.quantity,", Amount : ",this.state.maxQuantity.price))))}}]),e}(s.a.Component),Z=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{paddingLeft:"250px",width:"80%",paddingTop:"70px"}},s.a.createElement("div",{style:{marginLeft:""}},s.a.createElement(g.a,{container:!0,spacing:3},s.a.createElement(g.a,{item:!0,xs:7},s.a.createElement(Y,{userData:this.props.userData})),s.a.createElement(g.a,{item:!0,xs:5},s.a.createElement(K,{userData:this.props.userData}),s.a.createElement(X,{userData:this.props.userData})))))}}]),e}(s.a.Component),$=a(189),tt=a(190),et=a(192),at=a(193),nt=a(194),rt=a(191);function lt(t,e){new x("/product/getProducts",function(t){t.error||e(t)}).collect({userID:t})}var it=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={product:a.props.row,cost:a.props.row.cost,quantity:a.props.row.quantity},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"deleteProductHandler",value:function(){var t,e,a=this;t=this.state.product.name,e=function(){a.props.deleteHandler()},console.log(t),new x("/product/delete",function(t){console.log(t),t.error||e()}).collect({objectID:t})}},{key:"updateCostHandler",value:function(){!function(t,e){var a=parseFloat(e);new x("/product/updatePrice",function(t){console.log(t),t.error||alert("Product updated ")}).collect({objectID:t,cost:a})}(this.state.product.name,this.state.cost)}},{key:"render",value:function(){var t=this;return s.a.createElement($.a,null,s.a.createElement(tt.a,null,this.state.product.name),s.a.createElement(tt.a,null,s.a.createElement(v.a,{value:this.state.quantity,onChange:function(e){t.setState({quantity:e.target.value})}})),s.a.createElement(tt.a,null,s.a.createElement(v.a,{value:this.state.cost,onChange:function(e){t.setState({cost:e.target.value})}})),s.a.createElement(tt.a,null,s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.deleteProductHandler()}},s.a.createElement(rt.a,null)," Delete")),s.a.createElement(tt.a,null,s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateCostHandler()}},"Update")))}}]),e}(s.a.Component),ct=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={products:[]},a.handleDelete=a.handleDelete.bind(Object(w.a)(a)),a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;lt(this.props.userData._id,function(e){t.setState({products:e.result})})}},{key:"handleDelete",value:function(){this.componentDidMount()}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{style:{paddingLeft:"250px",width:"80%",paddingTop:"70px"}},s.a.createElement(b.a,{style:{padding:"20px"}},s.a.createElement(j.a,{variant:"h3"},"Products"),s.a.createElement(j.a,null,"List of products in your inventory"),s.a.createElement(_.a,null),s.a.createElement(et.a,null,s.a.createElement(at.a,null,s.a.createElement(tt.a,null,"Product Name"),s.a.createElement(tt.a,null,"Quantity"),s.a.createElement(tt.a,null,"Cost"),s.a.createElement(tt.a,null,"Delete"),s.a.createElement(tt.a,null,"Update")),s.a.createElement(nt.a,null,this.state.products.map(function(e,a){return s.a.createElement(it,{row:e,deleteHandler:t.handleDelete})})))))}}]),e}(s.a.Component),ot=a(202),st=a(195),ut=a(69),mt=a.n(ut);a(87),a(88);function pt(t,e,a,n,r){new x("/transaction/perMonth",function(t){t.error||r(t.result)}).collect({userID:t,productID:e,month:parseInt(a),year:n})}function dt(t,e,a,n,r){new x("/transaction/monthWise",function(t){t.error||r(t.result)}).collect({userID:t,month:a,year:n,productID:e})}var ht=a(40),vt=(a(123),["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),ft=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={month:1,year:2018,productID:"",userID:a.props.userData._id,products:[],data:null},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var e={label:"Sales in "+vt[this.state.month-1],values:{}},a=0;a<t.length;a++){var n=t[a]._id;e.values[n]=t[a].count}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),pt(t.state.userID,t.state.productID,t.state.month,t.state.year,function(e){t.computeDataPoints(e)})})}},{key:"updateList",value:function(){var t=this;pt(this.state.userID,this.state.productID,this.state.month,this.state.year,function(e){t.computeDataPoints(e)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h4"},"Month-wise sales :"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(H.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},vt.map(function(t,e){return s.a.createElement(F.a,{value:e},t)})),s.a.createElement(H.a,{value:this.state.productID,onChange:function(e){t.setState({productID:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(F.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateList()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ht.b,{xtitle:"days",ytitile:"profit",data:this.state.data.values,download:!0})))))}}]),e}(s.a.Component),Et=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,month:1,data:null,products:{}},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({products:e})}},{key:"computeDataPoints",value:function(t,e){for(var a={label:"Distribution of sales in "+vt[this.state.month-1]+" in percentage",values:{}},n=0;n<t.length;n++){var r=this.state.products[t[n]._id];a.values[r]=t[n].profit/e}this.setState({data:a})}},{key:"updateProportions",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.month,a=this.state.year,n=function(t){r.computeDataPoints(t.result,t.total)},new x("/transaction/proportionMonth",function(t){t.error||n(t.result)}).collect({userID:t,month:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.prepareProductList(e.result),t.updateProportions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h5"},"Contribution of each product to total profit"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(H.a,{value:this.state.month,onChange:function(e){return t.setState({month:parseInt(e.target.value)})}},vt.map(function(t,e){return s.a.createElement(F.a,{value:e},t)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateProportions()},ostyle:{marginLeft:"30px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement(ht.c,{data:this.state.data.values})))}}]),e}(s.a.Component),yt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={productID1:"",productID2:"",month:1,year:2018,products:[],data1:{},data2:{},userID:a.props.userData._id,productList:{}},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({productList:e})}},{key:"computeDataPoints",value:function(t,e){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var a={label:"Sales in "+vt[this.state.month-1],values:{}},n=0;n<t.length;n++){var r=t[n]._id;a.values[r]=t[n].count}switch(e){case 0:this.setState({data1:a});break;case 1:this.setState({data2:a})}}},{key:"updateTransactions",value:function(){var t=this;pt(this.state.userID,this.state.productID1,this.state.month,this.state.year,function(e){pt(t.state.userID,t.state.productID2,t.state.month,t.state.year,function(a){t.computeDataPoints(e,0),t.computeDataPoints(a,1)})})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.prepareProductList(e.result),t.setState({products:e.result}),t.setState({productID1:e.result[0]._id,productID2:e.result[0]._id}),t.updateTransactions()})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h4"},"Month-wise sales comparision :"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(H.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},vt.map(function(t,e){return s.a.createElement(F.a,{value:e},t)})),s.a.createElement(H.a,{value:this.state.productID1,onChange:function(e){t.setState({productID1:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(F.a,{value:t._id},t.name)})),s.a.createElement(H.a,{value:this.state.productID2,onChange:function(e){t.setState({productID2:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(F.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateTransactions()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ht.b,{data:[{name:this.state.productList[this.state.productID1],data:this.state.data1.values},{name:this.state.productList[this.state.productID2],data:this.state.data2.values}],ytitle:"Profit",xtitle:"days"})))))}}]),e}(s.a.Component),bt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a.layout=[{i:"a",x:0,y:0,w:6,h:11},{i:"b",x:6,y:0,w:5,h:11},{i:"c",x:0,y:11.2,w:11,h:9}],a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(mt.a,{className:"layout",layout:this.layout,cols:12,rowHeight:30,width:1200},s.a.createElement("div",{key:"a"},s.a.createElement(ft,{userData:this.props.userData})),s.a.createElement("div",{key:"b"},s.a.createElement(Et,{userData:this.props.userData})),s.a.createElement("div",{key:"c"},s.a.createElement(yt,{userData:this.props.userData})))}}]),e}(s.a.Component),gt=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Dt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={userID:a.props.userData._id,productID:"",products:[],txSummary:[],year:2018},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"updateTable",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.productID,a=this.state.year,n=function(t){r.setState({txSummary:t})},new x("/transaction/perProductSummary",function(t){t.error||n(t.result)}).collect({userID:t,productID:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),t.updateTable()})}},{key:"render",value:function(){var t=this;return s.a.createElement(W.a,{style:{margin:"20px auto",padding:"20px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h4"},"Product Summary"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(H.a,{style:{marginRight:"30px"},value:this.state.productID,onChange:function(e){return t.setState({productID:e.target.value})}},this.state.products.map(function(t,e){return s.a.createElement(F.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",onClick:function(){return t.updateTable()},color:"primary"},"Display")),s.a.createElement("p",null,"The table below shows the summary of all the transactions per month, you can also view the transactions per day by clicking on the table entry"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{marginTop:"20px",textAlign:"center"}},s.a.createElement(et.a,null,s.a.createElement(at.a,null,s.a.createElement(tt.a,null,"Month"),s.a.createElement(tt.a,null,"Profit"),s.a.createElement(tt.a,null,"Quantities sold"),s.a.createElement(tt.a,null,"Total Transactions"),s.a.createElement(tt.a,null,"Average Transactions")),s.a.createElement(nt.a,null,this.state.txSummary.map(function(t,e){return s.a.createElement($.a,null,s.a.createElement(tt.a,null,gt[parseInt(t._id)-1]),s.a.createElement(tt.a,null,t.profit),s.a.createElement(tt.a,null,t.quantity),s.a.createElement(tt.a,null,t.transactions),s.a.createElement(tt.a,null,(t.transactions/31).toFixed(0)))})))))}}]),e}(s.a.Component),Ot=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(Dt,{userData:this.props.userData}))}}]),e}(s.a.Component),jt=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={month:1,year:2018,productID:"",userID:a.props.userData._id,products:[],data:null},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){t.sort(function(t,e){var a=t._id,n=e._id;return a<n?-1:a>n?1:0});for(var e={label:"Transactions in "+jt[this.state.month-1],values:{}},a=0;a<t.length;a++){var n=t[a]._id;e.values[n]=t[a].count}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.setState({products:e.result,productID:e.result[0]._id}),dt(t.state.userID,t.state.productID,t.state.month,t.state.year,function(e){t.computeDataPoints(e)})})}},{key:"updateList",value:function(){var t=this;dt(this.state.userID,this.state.productID,this.state.month,this.state.year,function(e){t.computeDataPoints(e)})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h4"},"Month-wise transactions per product :"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(H.a,{value:this.state.month,style:{marginLeft:"20px auto"},onChange:function(e){t.setState({month:parseInt(e.target.value)+1})}},jt.map(function(t,e){return s.a.createElement(F.a,{value:e},t)})),s.a.createElement(H.a,{value:this.state.productID,onChange:function(e){t.setState({productID:e.target.value})},style:{marginLeft:"40px"}},this.state.products.map(function(t,e){return s.a.createElement(F.a,{value:t._id},t.name)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.updateList()},style:{marginLeft:"40px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement("div",null,s.a.createElement(ht.b,{xtitle:"days",ytitle:"Transactions",data:this.state.data.values,download:!0})))))}}]),e}(s.a.Component),xt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,month:1,data:null,products:{}},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({products:e})}},{key:"computeDataPoints",value:function(t){for(var e={label:"Distribution of transactions in "+jt[this.state.month-1]+" in percentage",values:{}},a=0;a<t.length;a++){var n=this.state.products[t[a]._id];e.values[n]=t[a].counts}this.setState({data:e})}},{key:"updateProportions",value:function(){var t,e,a,n,r=this;t=this.state.userID,e=this.state.month,a=this.state.year,n=function(t){r.computeDataPoints(t),console.log(t.result)},new x("/transaction/productProportion",function(t){t.error||n(t.result)}).collect({userID:t,month:e,year:a})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.prepareProductList(e.result),t.updateProportions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px",textAlign:"left"}},s.a.createElement(j.a,{variant:"h5"},"Contribution of each product to Transactions"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{margin:"20px auto"}},s.a.createElement(H.a,{value:this.state.month,onChange:function(e){return t.setState({month:parseInt(e.target.value)})}},jt.map(function(t,e){return s.a.createElement(F.a,{value:e},t)})),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){return t.updateProportions()},ostyle:{marginLeft:"30px"}},"Update")),s.a.createElement("div",null,null!==this.state.data&&s.a.createElement(ht.c,{data:this.state.data.values})))}}]),e}(s.a.Component),It=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={userID:a.props.userData._id,year:2018,data:[]},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"computeDataPoints",value:function(t){for(var e=[],a=0;a<t.length;a++){var n=jt[parseInt(t[a]._id)-1];e.push([n,t[a].transactions])}this.setState({data:e})}},{key:"componentWillMount",value:function(){var t,e,a,n=this;t=this.state.userID,e=this.state.year,a=function(t){console.log(t),n.computeDataPoints(t)},new x("/transaction/yearWise",function(t){t.error||a(t.result)}).collect({userID:t,year:e})}},{key:"render",value:function(){return s.a.createElement(W.a,{style:{width:"100%",height:"100%",padding:"10px"}},s.a.createElement(j.a,{variant:"h5"},"Yearwise transactions :"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(ht.a,{data:this.state.data,xticks:"Months",yticks:"Transaction"})))}}]),e}(s.a.Component),wt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a.layout=[{i:"a",x:0,y:0,w:6,h:11},{i:"b",x:6,y:0,w:5,h:11},{i:"c",x:0,y:11.2,w:11,h:9}],a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(mt.a,{className:"layout",layout:this.layout,cols:12,rowHeight:30,width:1200},s.a.createElement("div",{key:"a"},s.a.createElement(It,{userData:this.props.userData})),s.a.createElement("div",{key:"b"},s.a.createElement(xt,{userData:this.props.userData})),s.a.createElement("div",{key:"c"},s.a.createElement(kt,{userData:this.props.userData})))}}]),e}(s.a.Component),Ct=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={tabClicked:0},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{style:{paddingLeft:"250px",paddingTop:"50px",width:"80%",textAlign:"center"}},s.a.createElement(ot.a,{indicatorColor:"primary",style:{width:"700px"},textColor:"primary",value:this.state.tabClicked,onChange:function(e,a){return t.setState({tabClicked:a})}},s.a.createElement(st.a,{label:"Price"}),s.a.createElement(st.a,{label:"Summary"}),s.a.createElement(st.a,{label:"Transactions"})),0===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(bt,{userData:this.props.userData})),1===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(Ot,{userData:this.props.userData})),2===this.state.tabClicked&&s.a.createElement("div",null,s.a.createElement(wt,{userData:this.props.userData})))}}]),e}(s.a.Component),St=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={userID:a.props.userData._id,N:20,productList:{},data:[]},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"prepareProductList",value:function(t){for(var e={},a=0;a<t.length;a++)e[t[a]._id]=t[a].name;this.setState({productList:e})}},{key:"getNTransactions",value:function(){var t,e,a,n=this;t=this.state.userID,e=this.state.N,a=function(t){n.setState({data:t})},new x("/transaction/getN",function(t){t.error||a(t.result)}).collect({userID:t,N:parseInt(e)})}},{key:"componentWillMount",value:function(){var t=this;lt(this.state.userID,function(e){t.prepareProductList(e.result),t.getNTransactions()})}},{key:"render",value:function(){var t=this;return s.a.createElement(W.a,{style:{margin:"20px",padding:"30px"}},s.a.createElement(j.a,{variant:"h5"},"Transaction List"),s.a.createElement(_.a,null),s.a.createElement("p",null,"Select the number of transactions you want to display, last 20 transactions are displayed by default."),s.a.createElement(v.a,{id:"outlined-name",label:"Number of transactions:",value:this.state.N,onChange:function(e){t.setState({N:e.target.value})},margin:"normal",variant:"outlined"}),s.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){t.getNTransactions()}},"Update"),s.a.createElement(_.a,null),s.a.createElement("div",{style:{marginTop:"20px"}},s.a.createElement(et.a,null,s.a.createElement(at.a,null,s.a.createElement(tt.a,null,"Product Name "),s.a.createElement(tt.a,null,"Total Price "),s.a.createElement(tt.a,null,"Quantity Purchased "),s.a.createElement(tt.a,null,"Date "),s.a.createElement(tt.a,null,"Total Revenue till now ")),s.a.createElement(nt.a,null,this.state.data.map(function(e,a){return s.a.createElement($.a,null,s.a.createElement(tt.a,null,t.state.productList[e.productID]),s.a.createElement(tt.a,null,e.cost),s.a.createElement(tt.a,null,e.quantity),s.a.createElement(tt.a,null,e.date+"/"+e.month+"/"+e.year),s.a.createElement(tt.a,null,e.totalCost))})))))}}]),e}(s.a.Component),Pt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:{paddingLeft:"250px",paddingTop:"50px",width:"80%"}},s.a.createElement(St,{userData:this.props.userData}))}}]),e}(s.a.Component),Tt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("div",null,s.a.createElement(this.props.component,{userData:this.props.userData})))}}]),e}(s.a.Component),Lt=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(l.a)(this,Object(i.a)(e).call(this,t))).state={component:Z},a.handler=a.handler.bind(Object(w.a)(a)),a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"handler",value:function(t){switch(t){case 0:this.setState({component:Z});break;case 2:this.setState({component:Ct});break;case 3:this.setState({component:ct});break;case 4:this.setState({component:Pt})}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(J,{userData:this.props.userData}),s.a.createElement("div",null,s.a.createElement(Q,{handler:this.handler}),s.a.createElement(Tt,{component:this.state.component,userData:this.props.userData})))}}]),e}(s.a.Component),_t={root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{},form:{width:"100%"},submit:{}},At=function(t){function e(){var t;return Object(n.a)(this,e),(t=Object(l.a)(this,Object(i.a)(e).call(this))).state={email:"",password:"",message:""},t}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=_t;return s.a.createElement(g.a,{container:!0,component:"main",className:e.root},s.a.createElement(h.a,null),s.a.createElement(g.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),s.a.createElement(g.a,{item:!0,xs:12,sm:8,md:5,component:b.a,elevation:6,square:!0},s.a.createElement("div",{className:e.paper},s.a.createElement(p.a,{className:e.avatar},s.a.createElement(O.a,null)),s.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),s.a.createElement("div",{className:e.form,noValidate:!0},s.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:this.state.email,onChange:function(e){t.setState({email:e.target.value})},id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),s.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:this.state.password,onChange:function(e){t.setState({password:e.target.value})},autoComplete:"current-password"}),s.a.createElement(f.a,{control:s.a.createElement(E.a,{value:"remember",color:"primary"}),label:"Remember me"}),s.a.createElement(d.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){var e,a,n;e=t.state.email,a=t.state.password,n=function(e){null==e?t.setState({message:"Login failed, incorrect email or password"}):m.a.render(s.a.createElement(Lt,{userData:e}),document.getElementById("root"))},new x("/user/auth",function(t){if(console.log(t),t.error||0===t.result.length)n(null);else{var e=JSON.stringify(t.result[0]);console.log(e),(new I).add("login",e),n(t.result[0])}}).collect({email:e,password:a})}},"Sign In"),s.a.createElement(g.a,{container:!0},s.a.createElement(g.a,{item:!0,xs:!0},s.a.createElement(y.a,{href:"#",variant:"body2"},"Forgot password?")),s.a.createElement(g.a,{item:!0},s.a.createElement(y.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),s.a.createElement("p",null,this.state.message)))))}}]),e}(s.a.Component),Nt=function(t){function e(){return Object(n.a)(this,e),Object(l.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=function(){var t=new I;return console.log(t.check("login")),t.check("login")?JSON.parse(localStorage.getItem("login")):null}();return null===t?s.a.createElement(At,null):s.a.createElement(Lt,{userData:t})}}]),e}(s.a.Component);m.a.render(s.a.createElement(Nt,null),document.getElementById("root"))},90:function(t){t.exports={host:"http://localhost:5000"}},92:function(t,e,a){t.exports=a.p+"static/media/basket.f0c09e4d.jpg"},99:function(t,e,a){t.exports=a(126)}},[[99,1,2]]]);
//# sourceMappingURL=main.13013845.chunk.js.map