<template>
  <div :style="buttonStyle">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "isInverted"],
  computed: {
    buttonStyle() {
      const normalBtn = {
        border: "1px solid tomato",
        color: "tomato",
      };
      const invertedBtn = {
        backgroundColor: "tomato",
        color: "white",
      };
      return this.isInverted ? invertedBtn : normalBtn;
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}

span {
  font-size: 15px;
}
</style>
