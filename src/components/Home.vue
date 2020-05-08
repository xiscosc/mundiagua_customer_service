<template>
  <div>
    <div class="d-flex flex-row text-left justify-content-between">
      <div class="p-2">
        <h5 class="repair-title-section">Consulta de reparaciones</h5>
        <b-form inline>
          <label class="sr-only" for="inline-form-input-username">Número de reparación</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0" :prepend="repairType">
            <b-input
              id="inline-form-input-username"
              v-model="repairId"
              :prepend="repairId"
              placeholder="Número de reparación"
            ></b-input>
          </b-input-group>

          <b-button @click="checkRepair" variant="primary" class="repair-button">Continuar</b-button>
        </b-form>
      </div>
      <div class="p-2 min-width-460-md">
        <font-awesome-icon icon="file-medical-alt" size="5x" style="color: navy"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repairId: ""
    };
  },
  methods: {
    checkRepair() {
      this.$router.push({
        name: "repair-status",
        params: { repairId: this.repairId }
      });
    }
  },
  computed: {
    repairType() {
      var brand = "";
      if (this.repairId) {
        switch (this.repairId.charAt(0).toLowerCase()) {
          case "a":
            brand = "ATH";
            break;
          case "x":
            brand = "Idegis";
            break;
          case "e":
            brand = "Motor";
            break;
          default:
            brand = "";
            break;
        }
      }

      return brand;
    }
  }
};
</script>