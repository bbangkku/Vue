<template>
  <div>
    <h2>AppParent</h2>
    <input type="text" v-model="appParentData" @input="parentparent" />
    <p>appData: {{ appData }}</p>
    <p>childData: {{ childData }}</p>

    {{ appParentData }}
    <appChildComponent
      :app-data="appData"
      :app-parentdata="appParentData"
      @getChildData="childchild"
    />
  </div>
</template>

<script>
import appChildComponent from "./appChildComponent.vue";
export default {
  components: {
    appChildComponent,
  },
  name: "appParentComponent",
  props: {
    appData: Number,
  },
  data() {
    return {
      appParentData: 0,
      childData: 0,
    };
  },
  methods: {
    childchild(data) {
      this.childData = data;
      this.$emit("get-childdata", this.childData);
    },
    parentparent() {
      this.$emit("get-parentdata", this.appParentData);
    },
  },
};
</script>

<style></style>
