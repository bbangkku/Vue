<template>
  <div>
    <appComponent />
  </div>
</template>

<script>
import appComponent from "../components/propsEmit/appComponent.vue";
export default {
  components: { appComponent },
  name: "PropsEmit",
  data() {
    return {};
  },
};
</script>

<style></style>
