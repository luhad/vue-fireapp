<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NewVehicle from './components/NewVehicle';
import EditVehicle from './components/EditVehicle';
export default {
  name: 'app',
  components: {
    Navbar,
    NewVehicle,
    EditVehicle
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
