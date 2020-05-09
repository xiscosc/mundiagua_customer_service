<template>
  <div>
    <div class="row mt-4">
      <div class="col-md-12 text-center">
        <font-awesome-icon icon="exclamation-triangle" size="5x" class="icon-color"></font-awesome-icon>
      </div>
    </div>
    <div class="row mt-4" style="display: block; text-align: center">
      <h5 class="repair-title-section">Reparación no encontrada, disculpen las molestias</h5>
      <p class="repair-data">Si el problema persiste contacte con nosotros</p>
      <b-button pill size="sm" to="/" variant="primary" class="repair-button mt-2">Volver al inicio</b-button>
    </div>
    <div class="row mt-4">
      <div class="col-md-12">
        <p class="repair-data error-code">Código de error ({{ error }})</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-code {
  font-size: xx-small;
}
</style>

<script>
  export default {
    props: ['error']
  }
</script>