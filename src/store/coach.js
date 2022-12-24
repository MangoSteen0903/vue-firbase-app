import { db } from "@/main";
import { onValue, ref, set } from "firebase/database";
import { defineStore } from "pinia";

export const useCoachesState = defineStore("coaches", {
  state: () => ({
    coaches: [],
    id: 0,
  }),
  getters: {
    getCoach() {
      return this.coaches;
    },
  },
  actions: {
    async registerCoach(info) {
      await set(ref(db, "coaches/" + this.id), info);
      this.id += 1;
    },
    setEmptyArray() {
      this.coaches = [];
      this.id = 0;
    },
    setFullName() {
      this.coaches.map((element) => {
        const fullName = element.firstName + " " + element.lastName;
        element.fullName = fullName;
        element.type = element.type.map((badge) =>
          badge.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          })
        );
      });
    },

    async retrieveCoaches() {
      const coachRef = ref(db, "coaches/");
      onValue(coachRef, (snapshot) => {
        const data = snapshot.val();
        this.setEmptyArray();
        data.map((element) => {
          this.coaches.push(element);
          this.id += 1;
        });
        this.setFullName();
      });
    },
  },
});
