<template>
  <div id="app">
    <div class="container-fluid containermundiagua">
      <div class="row">
        <div class="col-12 p-0 text-center">
          <img src="./assets/logo_blue.png" class="img-fluid head-image noprint" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <b-card class="text-center m-0 d-flex flex-column" style="background-color: #f3f4f7;">
            <router-view></router-view>
            <hr />
            <app-contact></app-contact>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .containermundiagua {
    padding: 5%;
    padding-top: 0.5%;
  }

  .head-image {
    max-width: 45%;
  }
}
@media only screen and (min-width: 601px) {
  .containermundiagua {
    padding: 20%;
    padding-top: 0.5%;
    padding-bottom: 3%;
  }

  .head-image {
    max-width: 19%;
  }
}

@media print {
   .noprint {
      visibility: hidden;
   }
}

html {
  height: 100%;
}

body {
  background-image: linear-gradient(135deg,#0061f2,rgba(105,0,199,.8));
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.repair-data {
  color: rgb(59, 58, 58);
  margin-bottom: 2px;
  font-size: small;
  font-style: italic;
}

.repair-title {
  color: navy;
}

.repair-status {
  color: navy;
  margin-bottom: 2px;
}

.repair-title-section {
  color: rgb(56, 56, 56);
}

.repair-button {
  background-color: navy;
  border-color: navy;
}
</style>
