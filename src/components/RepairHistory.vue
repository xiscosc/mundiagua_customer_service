<template>
  <div>
    <div class="d-flex flex-row text-left justify-content-between">
      <div class="p-2">
        <h5 class="repair-title-section">Historial de la reparación</h5>
        <ul class="timeline">
          <li>
            <p class="repair-status" href="#">Recepcionada</p>
            <p class="float-right repair-data">20-02-2020 14:43</p>
            <p
              class="repair-data"
            >Su maquinaria se encuentra en nuestras instalaciones a la espera de la reapzación del presupuesto</p>
          </li>
          <li>
            <p class="repair-status" href="#">Recepcionada</p>
            <p class="float-right repair-data">20-02-2020 14:43</p>
            <p
              class="repair-data"
            >Su maquinaria se encuentra en nuestras instalaciones a la espera de la reapzación del presupuesto</p>
          </li>
          <li>
            <p class="repair-status" href="#">Recepcionada</p>
            <p class="float-right repair-data">20-02-2020 14:43</p>
            <p
              class="repair-data"
            >Su maquinaria se encuentra en nuestras instalaciones a la espera de la reapzación del presupuesto</p>
          </li>
        </ul>
      </div>
      <div class="p-2">
        <font-awesome-icon icon="route" size="5x" style="color: navy"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>


<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}

ul.timeline:before {
  content: " ";
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}

ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}

ul.timeline > li:before {
  content: " ";
  background: white;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid navy;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>