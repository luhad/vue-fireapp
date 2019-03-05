<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Vehicles</h4></li>
      <li v-for="vehicle in vehicles" v-bind:key="vehicle.id" class="collection-item">
        <div class="chip">{{vehicle.name}}</div>
        {{vehicle.vehicle_id}}: {{vehicle.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-vehicle', params: { vehicle_id: vehicle.vehicle_id }}"><i class="fa fa-eye"></i></router-link>
        
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'home',
    data () {
      return {
        vehicles: [],
        loading: true
      }
    },
    created () {
      db.collection('vehicles').orderBy('name').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'vehicle_id': doc.data().vehicle_id,
            'name': doc.data().name,
            'brand': doc.data().brand,
            'version': doc.data().version
          }
          this.vehicles.push(data)
        })
      })
    }
  }
</script>