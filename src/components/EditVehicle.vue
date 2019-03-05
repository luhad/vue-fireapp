<template>
  <div id="new-vehicle">
    <h3>Edit Vehicle</h3>
    <div class="row">
    <form @submit.prevent="updateVehicle" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="vehicle_id" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="brand" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="version" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="year" required>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'edit-vehicle',
    data () {
      return {
        vehicle_id: null,
        name: null,
        brand: null,
        version: null,
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
            vm.version = doc.data().version
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
      updateVehicle () {
        db.collection('vehicles').where('vehicle_id', '==', this.$route.params.vehicle_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              vehicle_id: this.vehicle_id,
              name: this.name,
              brand: this.brand,
              version: this.version,
              year: this.year
            })
            .then(() => {
              this.$router.push({ name: 'view-vehicle', params: { vehicle_id: this.vehicle_id }})
            });
          })
        })
      }
    }
  }
</script>