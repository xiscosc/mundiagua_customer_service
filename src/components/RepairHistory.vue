<template>
  <div>
    <div class="row">
      <div class="col">
        <h5 class="repair-title-section">Historial de la reparación</h5>
        <ul class="timeline" >
          <RepairHistoryRecord v-for="(record, idx) in history" :key="idx" :record="record"></RepairHistoryRecord>
        </ul>
      </div>
      <div class="col text-right">
        <font-awesome-icon icon="route" size="5x" class="icon-color"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>


<script>
  import RepairHistoryRecord from "./RepairHistoryRecord";
  export default {
    props: ['history'],
    components: {
      RepairHistoryRecord
    }
  }
</script>

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
  border: 3px solid #0061f2;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>