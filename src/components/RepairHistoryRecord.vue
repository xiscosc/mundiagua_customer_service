<template>
    <li>
        <p class="repair-status" >{{ record.status.name }}</p>
        <p class="repair-data float-right-media">{{ record.date | formatDate }}</p>
        <p class="repair-data">{{ record.status.description }}</p>
    </li>
</template>

<script>
    export default {
        name: "RepairHistoryRecord",
        props: ['record']
    }
</script>


<style>
    @media only screen and (max-width: 600px) {
        .float-right-media {
            float: none;
        }
    }

    @media only screen and (min-width: 601px) {
        .float-right-media {
            float: right !important;
        }
    }
</style>