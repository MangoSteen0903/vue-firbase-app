<template>
  <BaseBox>
    <h1 class="title">Register as a coach now!</h1>
    <div class="form">
      <form @submit.prevent>
        <div class="input">
          <label for="firstname"> Firstname </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model="firstName"
          />
        </div>

        <div class="input">
          <label for="lastname"> Lastname </label>
          <input type="text" name="lastname" id="lastname" v-model="lastName" />
        </div>

        <div class="input">
          <label for="description"> Description </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            v-model="description"
          />
        </div>

        <div class="input">
          <label for="rate"> Hourly Rate </label>
          <input type="number" name="rate" id="rate" v-model="rate" />
        </div>
        <div class="checkboxes">
          <span>Areas of Experties</span>
          <label for="frontend">
            <input
              type="checkbox"
              name="frontend"
              id="frontend"
              value="frontend"
              v-model="type"
            />
            Frontend
          </label>

          <label for="backend">
            <input
              type="checkbox"
              name="backend"
              id="backend"
              value="backend"
              v-model="type"
            />
            Backend
          </label>

          <label for="career">
            <input
              type="checkbox"
              name="career"
              id="career"
              value="career"
              v-model="type"
            />
            Career
          </label>
        </div>
        <BaseButton
          @click="submit"
          class="submitBtn"
          name="Submit"
          :isInverted="true"
        />
      </form>
    </div>
  </BaseBox>
</template>

<script>
import { mapActions } from "pinia";
import { useCoachesState } from "@/store/coach";
import BaseBox from "./BaseBox.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseBox, BaseButton },
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      rate: 0,
      type: [],
    };
  },
  methods: {
    ...mapActions(useCoachesState, ["registerCoach"]),
    submit() {
      const coachInfo = {
        firstName: this.firstName,
        lastName: this.lastName,
        desciption: this.description,
        price: this.rate,
        type: [...this.type],
      };
      this.registerCoach(coachInfo);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 800;
}
form {
  display: flex;
  flex-direction: column;
}
.checkboxes {
  display: flex;
  flex-direction: column;
}

.checkboxes span {
  margin-bottom: 10px;
  font-weight: 600;
}
.form {
  margin-top: 30px;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.input label {
  margin-bottom: 5px;
  font-weight: 600;
}

.submitBtn {
  width: 20%;
  margin-top: 20px;
}
</style>
