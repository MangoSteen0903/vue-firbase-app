<template>
  <div class="button">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style>
.button {
  cursor: default;
  border: 1px solid white;
  color: white;
  width: 150px;
  padding: 10px 0;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button:hover {
  border: 1px solid orange;
  color: orange;
}
</style>
