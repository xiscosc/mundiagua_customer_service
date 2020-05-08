<template>
  <div>
    <div class="d-flex flex-row text-left justify-content-between">
      <div class="p-2">
        <h5 class="repair-title-section">Reparación no encontrada, disculpen las molestias</h5>
        <p class="repair-data">Si el problema persiste contacte con nosotros</p>
        <b-button size="sm" to="/" variant="primary" class="repair-button">Volver al inicio</b-button>
      </div>
      <div class="p-2 min-width-460-md">
        <font-awesome-icon icon="exclamation-triangle" size="5x" style="color: navy"></font-awesome-icon>
      </div>
    </div>
    <div class="d-flex flex-row text-left justify-content-between">
      <div class="p-2">
        <p class="repair-data error-code">Código de error: 502 Bad gateway</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-code {
  font-size: xx-small;
}
</style>