<template>
  <MainContent>
    <template #default>
      <RegisterForm />
    </template>
  </MainContent>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import MainContent from "@/layout/MainContent.vue";

export default { components: { MainContent, RegisterForm } };
</script>
