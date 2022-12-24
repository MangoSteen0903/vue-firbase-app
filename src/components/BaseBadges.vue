<template>
  <div :style="textColor">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    textColor() {
      switch (this.name) {
        case "Frontend":
          return { backgroundColor: "#DC3535" };
        case "Backend":
          return { backgroundColor: "#F49D1A" };
        case "Career":
          return { backgroundColor: "#FED049" };
        default:
          return {};
      }
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

div span {
  font-size: 15px;
  color: white;
}
</style>
