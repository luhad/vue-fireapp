<template>
  <div id="new-vehicle">
    <h3>New Vehicle</h3>
    <div class="row">
    <form @submit.prevent="saveVehicle" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="vehicle_id" required>
          <label>Vehicle ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="brand" required>
          <label>Brand</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="version" required>
          <label>Version</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="year" required>
          <label>Year</label>
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
      name: 'new-vehicle',
      data () {
        return {
          vehicle_id: null,
          name: null,
          brand: null,
          version: null,
          year: null
        }
      },
      methods: {
        saveVehicle () {
          db.collection('vehicles').add({
            vehicle_id: this.vehicle_id,
            name: this.name,
            brand: this.brand,
            version: this.version,
            year: this.year
          })
          .then(docRef => {
            console.log('Vehicle added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding vehicle: ', error)
          })
        }
      }
    }
</script>