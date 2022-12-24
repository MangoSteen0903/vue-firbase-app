<template>
  <div class="background">
    <h1>{{ title }}</h1>
    <div class="buttons">
      <router-link to="/">
        <LinkButton name="All Coaches" />
      </router-link>
      <LinkButton name="Requests" />
    </div>
  </div>
</template>

<script>
import LinkButton from "@/components/LinkButton.vue";

export default {
  props: ["title"],
  components: { LinkButton },
};
</script>

<style scoped>
.background {
  width: 88.6%;
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;
  background-color: tomato;
}
.buttons {
  display: flex;
}
.background h1 {
  font-size: 24px;
  color: white;
  font-weight: 600;
}
</style>
