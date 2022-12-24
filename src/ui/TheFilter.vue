<template>
  <BaseBox>
    <template #default>
      <h1>Find A Coach</h1>
      <div>
        <form @submit.prevent>
          <label>
            <input
              type="checkbox"
              name="Frontend"
              value="frontend"
              v-model="checkedFilter"
            />
            Frontend
          </label>

          <label>
            <input
              type="checkbox"
              name="Backend"
              value="backend"
              v-model="checkedFilter"
            />
            Backend
          </label>

          <label>
            <input
              type="checkbox"
              name="Career"
              value="career"
              v-model="checkedFilter"
            />
            Career
          </label>
        </form>
      </div>
    </template>
  </BaseBox>
</template>

<script>
import BaseBox from "@/components/BaseBox.vue";

export default {
  components: { BaseBox },
  data() {
    return {
      checkedFilter: [],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
form label {
  margin-right: 20px;
}
</style>
