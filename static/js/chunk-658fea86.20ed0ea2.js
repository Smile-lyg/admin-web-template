(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-658fea86"],{"295d":function(t,a,e){},"304f":function(t,a,e){},"7e7b":function(t,a,e){"use strict";e("295d")},"817d9":function(t,a,e){"use strict";e("b237")},9406:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e(t.currentRole,{tag:"component"})],1)},n=[],s=e("5530"),r=(e("caad"),e("2532"),e("2f62")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("github-corner",{staticClass:"github-corner"}),e("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),e("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[e("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("raddar-chart")],1)]),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("pie-chart")],1)]),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart")],1)])],1),e("el-row",{attrs:{gutter:8}},[e("el-col",{staticStyle:{"padding-right":"8px","margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:12},xl:{span:12}}},[e("transaction-table")],1),e("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:6}}},[e("todo-list")],1),e("el-col",{staticStyle:{"margin-bottom":"30px"},attrs:{xs:{span:24},sm:{span:12},md:{span:12},lg:{span:6},xl:{span:6}}},[e("box-card")],1)],1)],1)},o=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("newVisitis")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v(" New Visits ")]),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":102400,duration:2600}})],1)])]),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("messages")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v(" Messages ")]),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":81212,duration:3e3}})],1)])]),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("purchases")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-money"},[e("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v(" Purchases ")]),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":9280,duration:3200}})],1)])]),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel",on:{click:function(a){return t.handleSetLineChartData("shoppings")}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[e("svg-icon",{attrs:{"icon-class":"shopping","class-name":"card-panel-icon"}})],1),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v(" Shoppings ")]),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":13600,duration:3600}})],1)])])],1)},d=[],h=e("ec1b"),u=e.n(h),p={components:{CountTo:u.a},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},m=p,f=(e("817d9"),e("2877")),g=Object(f["a"])(m,l,d,!1,null,"6723c96e",null),v=g.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},x=[],y=e("313e"),C=e.n(y);e("53ca"),e("ac1f"),e("00b4"),e("5319"),e("4d63"),e("2c3e"),e("25f0"),e("d3b7"),e("4d90"),e("1276"),e("159b");function w(t,a,e){var i,n,s,r,c,o=function o(){var l=+new Date-r;l<a&&l>0?i=setTimeout(o,a-l):(i=null,e||(c=t.apply(s,n),i||(s=n=null)))};return function(){for(var n=arguments.length,l=new Array(n),d=0;d<n;d++)l[d]=arguments[d];s=this,r=+new Date;var h=e&&!i;return i||(i=setTimeout(o,a)),h&&(c=t.apply(s,l),s=l=null),c}}var S={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=w((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};e("817d");var _={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.expectedData,e=t.actualData;this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["expected","actual"]},series:[{name:"expected",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"actual",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},D=_,$=Object(f["a"])(D,b,x,!1,null,null,null),E=$.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},z=[];e("817d");var R=3e3,k={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},radar:{radius:"66%",center:["50%","42%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,95,132,.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"Sales",max:1e4},{name:"Administration",max:2e4},{name:"Information Technology",max:2e4},{name:"Customer Support",max:2e4},{name:"Development",max:2e4},{name:"Marketing",max:2e4}]},legend:{left:"center",bottom:"10",data:["Allocated Budget","Expected Spending","Actual Spending"]},series:[{type:"radar",symbolSize:0,areaStyle:{normal:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1}},data:[{value:[5e3,7e3,12e3,11e3,15e3,14e3],name:"Allocated Budget"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"Expected Spending"},{value:[5500,11e3,12e3,15e3,12e3,12e3],name:"Actual Spending"}],animationDuration:R}]})}}},T=k,L=Object(f["a"])(T,O,z,!1,null,null,null),A=L.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},N=[];e("817d");var F={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},B=F,H=Object(f["a"])(B,j,N,!1,null,null,null),W=H.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},I=[];e("817d");var P=6e3,M={mixins:[S],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:P},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:P},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:P}]})}}},V=M,Y=Object(f["a"])(V,G,I,!1,null,null,null),q=Y.exports,J={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},X={name:"DashboardAdmin",components:{PanelGroup:v,LineChart:E,RaddarChart:A,PieChart:W,BarChart:q},data:function(){return{lineChartData:J.newVisitis}},methods:{handleSetLineChartData:function(t){this.lineChartData=J[t]}}},K=X,Q=(e("7e7b"),Object(f["a"])(K,c,o,!1,null,"1159f072",null)),U=Q.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-editor-container"},[e("div",{staticClass:" clearfix"},[e("div",{staticClass:"info-container"},[e("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),e("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])]),e("div",[e("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},tt=[],at={name:"DashboardEditor",data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(s["a"])({},Object(r["b"])(["name","avatar","roles"]))},et=at,it=(e("9cd4"),Object(f["a"])(et,Z,tt,!1,null,"f2b782e4",null)),nt=it.exports,st={name:"Dashboard",components:{adminDashboard:U,editorDashboard:nt},data:function(){return{currentRole:"adminDashboard"}},computed:Object(s["a"])({},Object(r["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},rt=st,ct=Object(f["a"])(rt,i,n,!1,null,null,null);a["default"]=ct.exports},"9cd4":function(t,a,e){"use strict";e("304f")},b237:function(t,a,e){}}]);