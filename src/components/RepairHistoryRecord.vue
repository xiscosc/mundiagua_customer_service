<template>
    <li>
        <p class="repair-status" >{{ record.status.name }}</p>
        <p class="repair-data">{{ record.date | formatDate }}</p>
        <p class="repair-data">{{ record.status.description }}</p>
    </li>
</template>

<script>
    export default {
        name: "RepairHistoryRecord",
        props: ['record']
    }
</script>
