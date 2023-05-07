<template>
  <div>
    <h2>AppChild</h2>
    <input type="text" v-model="appChildData" @input="postChildData" />
    <p>appData: {{ appData }}</p>
    <p>ParentData: {{ appParentdata }}</p>
    <p>childData: {{ appChildData }}</p>
  </div>
</template>

<script>
export default {
  name: "appChildComponent",
  data() {
    return {
      appChildData: 0,
    };
  },
  props: {
    appData: Number,
    appParentdata: Number,
  },
  methods: {
    postChildData() {
      this.$emit("getChildData", this.appChildData);
    },
  },
};
</script>

<style></style>
