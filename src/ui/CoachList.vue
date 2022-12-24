<template>
  <BaseBox>
    <template #default>
      <div class="buttons">
        <BaseButton @click="refresh" name="Refresh" />
        <router-link to="/register">
          <BaseButton name="Register as Coach" :isInverted="true" />
        </router-link>
      </div>
      <div>
        <CoachElement
          v-for="coach in getCoach"
          :key="coach.id"
          :coach="coach"
        />
      </div>
    </template>
  </BaseBox>
</template>

<script>
import BaseBox from "@/components/BaseBox.vue";
import BaseButton from "@/components/BaseButton.vue";
import CoachElement from "@/components/CoachElement.vue";
import { useCoachesState } from "@/store/coach";
import { mapActions, mapState } from "pinia";

export default {
  components: { BaseBox, CoachElement, BaseButton },
  computed: {
    ...mapState(useCoachesState, ["getCoach"]),
  },
  methods: {
    ...mapActions(useCoachesState, ["retrieveCoaches"]),
    refresh() {
      console.log("refresh");
      this.retrieveCoaches();
    },
  },
  mounted() {
    this.retrieveCoaches();
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
</style>
