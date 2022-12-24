<template>
  <div class="box">
    <h1>{{ coach.fullName }}</h1>
    <span>${{ coach.price }} / hour</span>
    <div class="badges">
      <BaseBadges v-for="badge in coach.type" :key="badge" :name="badge" />
    </div>
    <div class="detailBtn">
      <BaseButton name="Contact" />
      <BaseButton name="View Details" :isInverted="true" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseBadges from "./BaseBadges.vue";
export default {
  components: { BaseButton, BaseBadges },
  props: ["coach"],
};
</script>

<style scoped>
.box {
  border: 1px solid tomato;
  border-radius: 10px;
  padding: 20px 10px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
}

.box h1 {
  font-size: 25px;
  font-weight: 600;
}

.box span {
  font-size: 15px;
  font-weight: 500;
}

.badges {
  display: flex;
}

.detailBtn {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
