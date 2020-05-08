<template>
    <div class="d-flex flex-row text-left justify-content-between">
      <div class="p-2">
        <h5 class="repair-title-section">Detalles de la reparación</h5>
        <p class="repair-data">Identificador {{ repair.private_id }}</p>
        <p class="repair-data">Reparación {{ repair.type }}</p>
        <p class="repair-data">Modelo {{ repair.model }}</p>
        <p class="repair-data">{{ repair.warranty | warrantySpanish }} Garantía</p>
        <p class="repair-data">Entrada el {{ repair.date | formatDate }}</p>
      </div>
      <div class="p-2 min-width-460-md">
        <font-awesome-icon icon="tasks" size="5x" style="color: navy"></font-awesome-icon>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['repair']
  }
</script>