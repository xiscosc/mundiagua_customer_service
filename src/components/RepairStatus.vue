<template>
  <div>
    <Loading v-if="loading"></Loading>
    <div v-else-if="!loading && !error">
      <RepairCurrentStatus></RepairCurrentStatus>
      <hr />
      <RepairDetails></RepairDetails>
      <hr />
      <RepairHistory></RepairHistory>
    </div>
    <NotFound v-else></NotFound>
  </div>
</template>

<script>
import RepairHistory from "./RepairHistory";
import RepairDetails from "./RepairDetails";
import RepairCurrentStatus from "./RepairCurrentStatus";
import Loading from "./Loading";
import NotFound from "./NotFound";
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
      }
  }
};
</script>