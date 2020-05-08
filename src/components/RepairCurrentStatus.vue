<template>
    <div class="row">
      <div class="col-sm">
        <h5 class="repair-title-section">Consulta {{ repair.online_id }}</h5>
        <h1 class="repair-title">{{ repair.status.name }}</h1>
        <b-card-text>{{ repair.status.description }}</b-card-text>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['repair']
    }
</script>