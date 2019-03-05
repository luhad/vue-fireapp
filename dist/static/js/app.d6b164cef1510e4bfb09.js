webpackJsonp([1],{McJY:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Vehicles Manager")])],1)])])},staticRenderFns:[]},s=i("VU/8")(null,n,!1,null,null,null).exports,r=i("Sazm"),l=i.n(r),c=(i("3VHS"),l.a.initializeApp({apiKey:"AIzaSyC9xKnqbbTsuR5EuLh0tLK3GMhDN44xiG8",authDomain:"vuejsproject-ff89c.firebaseapp.com",databaseURL:"https://vuejsproject-ff89c.firebaseio.com",projectId:"vuejsproject-ff89c",storageBucket:"vuejsproject-ff89c.appspot.com",messagingSenderId:"201842956050"}).firestore()),o={name:"new-vehicle",data:function(){return{vehicle_id:null,name:null,brand:null,version:null,year:null}},methods:{saveVehicle:function(){var e=this;c.collection("vehicles").add({vehicle_id:this.vehicle_id,name:this.name,brand:this.brand,version:this.version,year:this.year}).then(function(t){console.log("Vehicle added: ",t.id),e.$router.push("/")}).catch(function(e){console.error("Error adding vehicle: ",e)})}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-vehicle"}},[i("h3",[e._v("New Vehicle")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveVehicle(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_id,expression:"vehicle_id"}],attrs:{type:"text",required:""},domProps:{value:e.vehicle_id},on:{input:function(t){t.target.composing||(e.vehicle_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Vehicle ID#")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.brand,expression:"brand"}],attrs:{type:"text",required:""},domProps:{value:e.brand},on:{input:function(t){t.target.composing||(e.brand=t.target.value)}}}),e._v(" "),i("label",[e._v("Brand")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.version,expression:"version"}],attrs:{type:"text",required:""},domProps:{value:e.version},on:{input:function(t){t.target.composing||(e.version=t.target.value)}}}),e._v(" "),i("label",[e._v("Version")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"text",required:""},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}}),e._v(" "),i("label",[e._v("Year")])])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},d=i("VU/8")(o,v,!1,null,null,null).exports,u={name:"edit-vehicle",data:function(){return{vehicle_id:null,name:null,brand:null,version:null,year:null}},beforeRouteEnter:function(e,t,i){c.collection("vehicles").where("vehicle_id","==",e.params.vehicle_id).get().then(function(e){e.forEach(function(e){i(function(t){t.vehicle_id=e.data().vehicle_id,t.name=e.data().name,t.brand=e.data().brand,t.version=e.data().version,t.year=e.data().year})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then(function(t){t.forEach(function(t){e.vehicle_id=t.data().vehicle_id,e.name=t.data().name,e.brand=t.data().brand,e.version=t.data().version,e.year=t.data().year})})},updateVehicle:function(){var e=this;c.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then(function(t){t.forEach(function(t){t.ref.update({vehicle_id:e.vehicle_id,name:e.name,brand:e.brand,version:e.version,year:e.year}).then(function(){e.$router.push({name:"view-vehicle",params:{vehicle_id:e.vehicle_id}})})})})}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-vehicle"}},[i("h3",[e._v("Edit Vehicle")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateVehicle(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_id,expression:"vehicle_id"}],attrs:{type:"text",required:""},domProps:{value:e.vehicle_id},on:{input:function(t){t.target.composing||(e.vehicle_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.brand,expression:"brand"}],attrs:{type:"text",required:""},domProps:{value:e.brand},on:{input:function(t){t.target.composing||(e.brand=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.version,expression:"version"}],attrs:{type:"text",required:""},domProps:{value:e.version},on:{input:function(t){t.target.composing||(e.version=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],attrs:{type:"text",required:""},domProps:{value:e.year},on:{input:function(t){t.target.composing||(e.year=t.target.value)}}})])]),e._v(" "),i("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},m=i("VU/8")(u,h,!1,null,null,null).exports,p={name:"app",components:{Navbar:s,NewVehicle:d,EditVehicle:m}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var f=i("VU/8")(p,_,!1,function(e){i("McJY")},null,null).exports,b=i("/ocq"),g={name:"home",data:function(){return{vehicles:[],loading:!0}},created:function(){var e=this;c.collection("vehicles").orderBy("name").get().then(function(t){e.loading=!1,t.forEach(function(t){var i={id:t.id,vehicle_id:t.data().vehicle_id,name:t.data().name,brand:t.data().brand,version:t.data().version};e.vehicles.push(i)})})}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"home"}},[i("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.vehicles,function(t){return i("li",{key:t.id,staticClass:"collection-item"},[i("div",{staticClass:"chip"},[e._v(e._s(t.name))]),e._v("\n      "+e._s(t.vehicle_id)+": "+e._s(t.name)+" \n       "),i("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-vehicle",params:{vehicle_id:t.vehicle_id}}}},[i("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Vehicles")])])}]},w=i("VU/8")(g,C,!1,null,null,null).exports,y={name:"view-vehicle",data:function(){return{vehicle_id:null,name:null,version:null,brand:null,year:null}},beforeRouteEnter:function(e,t,i){c.collection("vehicles").where("vehicle_id","==",e.params.vehicle_id).get().then(function(e){e.forEach(function(e){i(function(t){t.vehicle_id=e.data().vehicle_id,t.name=e.data().name,t.brand=e.data().brand,t.version=e.data().versio,t.year=e.data().year})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then(function(t){t.forEach(function(t){e.vehicle_id=t.data().vehicle_id,e.name=t.data().name,e.brand=t.data().brand,e.version=t.data().version,e.year=t.data().year})})},deleteVehicle:function(){var e=this;confirm("Are you sure u motherfucker?")&&c.collection("vehicles").where("vehicle_id","==",this.$route.params.vehicle_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-vehicle"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header"},[i("h4",[e._v(e._s(e.name))])]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Vehicle ID#: "+e._s(e.vehicle_id))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Name: "+e._s(e.name))]),e._v(" "),i("li",{staticClass:"collection-item"},[e._v("Brand: "+e._s(e.brand))])]),e._v(" "),i("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),i("button",{staticClass:"btn red",on:{click:e.deleteVehicle}},[e._v("Delete")]),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-vehicle",params:{vehicle_id:e.vehicle_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},V=i("VU/8")(y,x,!1,null,null,null).exports;a.a.use(b.a);var E=new b.a({routes:[{path:"/",name:"Home",component:w},{path:"/new",name:"new-vehicle",component:d},{path:"/:vehicle_id",name:"view-vehicle",component:V},{path:"/edit/:vehicle_id",name:"edit-vehicle",component:m}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:E,template:"<App/>",components:{App:f}})}},["NHnr"]);
//# sourceMappingURL=app.d6b164cef1510e4bfb09.js.map