<template>
  <div>
    <h2>App</h2>
    <input type="text" v-model="appData" />
    <p>parentData: {{ pData }}</p>
    <p>childData: {{ cData }}</p>

    {{ appData }}
    <appParentComponent
      :app-data="appData"
      @get-childdata="childdata"
      @get-parentdata="parentdata"
    />
  </div>
</template>

<script>
import appParentComponent from "./appParentComponent.vue";
export default {
  components: {
    appParentComponent,
  },
  name: "appComponent",
  data() {
    return {
      appData: 0,
      pData: 0,
      cData: 0,
    };
  },
  methods: {
    childdata(data) {
      this.cData = data;
    },
    parentdata(data) {
      this.pData = data;
    },
  },
};
</script>

<style></style>
