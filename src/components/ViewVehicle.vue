<template>
  <div id="view-vehicle">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{name}}</h4></li>
      <li class="collection-item">Vehicle ID#: {{vehicle_id}}</li>
      <li class="collection-item">Name: {{name}}</li>
      <li class="collection-item">Brand: {{brand}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteVehicle" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-vehicle', params: { vehicle_id: vehicle_id }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'view-vehicle',
    data () {
      return {
        vehicle_id: null,
        name: null,
        version: null,
        brand: null,
        year: null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('vehicles').where('vehicle_id', '==', to.params.vehicle_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.vehicle_id = doc.data().vehicle_id
            vm.name = doc.data().name
            vm.brand = doc.data().brand
            vm.version = doc.data().versio
            vm.year = doc.data().year
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('vehicles').where('vehicle_id', '==', this.$route.params.vehicle_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.vehicle_id = doc.data().vehicle_id
            this.name = doc.data().name
            this.brand = doc.data().brand
            this.version = doc.data().version
            this.year = doc.data().year
          })
        })
      },
      deleteVehicle () {
        if(confirm ('Are you sure u motherfucker?')) {
          db.collection('vehicles').where('vehicle_id', '==', this.$route.params.vehicle_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
              this.$router.push('/')
            })
          })
        }
      }
    }
  }
</script>
