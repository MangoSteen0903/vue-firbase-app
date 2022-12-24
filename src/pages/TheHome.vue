<template>
  <MainContent>
    <TheFilter />
    <CoachList />
  </MainContent>
</template>

<script>
import MainContent from "@/layout/MainContent.vue";
import CoachList from "@/ui/CoachList.vue";
import TheFilter from "@/ui/TheFilter.vue";

export default { components: { MainContent, TheFilter, CoachList } };
</script>
