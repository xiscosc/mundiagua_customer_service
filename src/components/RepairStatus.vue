<template>
    <div>
        <Loading v-if="loading"></Loading>
        <div v-else-if="!loading && !error">
            <RepairCurrentStatus :repair="repair"></RepairCurrentStatus>
            <hr/>
            <RepairDetails :repair="repair"></RepairDetails>
            <hr/>
            <RepairHistory :history="repair.history"></RepairHistory>
        </div>
        <NotFound v-else :error="errors[0]"></NotFound>
    </div>
</template>

<script>
    import RepairHistory from "./RepairHistory";
    import RepairDetails from "./RepairDetails";
    import RepairCurrentStatus from "./RepairCurrentStatus";
    import Loading from "./Loading";
    import NotFound from "./NotFound";
    import axios from "axios";

    export default {
        name: "RepairStatus",
        components: {
            RepairHistory,
            RepairDetails,
            RepairCurrentStatus,
            Loading,
            NotFound
        },
        data() {
            return {
                loading: true,
                error: false,
                repair: {},
                errors: []
            }
        },
        created() {
            axios.get(process.env.VUE_APP_MUNDIAGUA_API_HOST + 'api/v1/repairs/public/status/' + this.$route.params.repairId + '/')
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.repair = response.data;
                    this.loading = false;
                })
                .catch(e => {
                    this.error = true;
                    this.errors.push(e);
                    this.loading = false;
                })
        }
    };
</script>