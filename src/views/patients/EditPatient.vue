<template>
  <base-card>
    <form @submit.prevent="submitForm" v-if="patient">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" v-model.trim="patient.name" required />
      </div>
      <div class="form-control">
        <label for="doctorName">Doctor Name</label>
        <input type="text" v-model.trim="patient.doctorName" required />
      </div>
      <div class="form-control">
        <label for="entryDate">Entry Date</label>
        <input type="text" v-model.trim="patient.entryDate" required />
      </div>
      <div class="form-control">
        <label for="checkoutDate">Checkout Date</label>
        <input type="text" v-model.trim="patient.checkoutDate" required />
      </div>
      <div class="form-control">
        <label for="totalPayment">Total Payment</label>
        <input type="number" v-model.number="patient.totalPayment" required />
      </div>

      <button class="btn" type="submit">Edit patient</button>
    </form>
  </base-card>
</template>

<script>
import services from "@/services/services";

export default {
  props: ["id"],

  data() {
    return {
      patient: null,
    };
  },

  methods: {
    submitForm() {
      const formData = {
        name: this.patient.name,
        doctorName: this.patient.doctorName,
        entryDate: this.patient.entryDate,
        checkoutDate: this.patient.checkoutDate,
        totalPayment: this.patient.totalPayment,
      };
      services.editPatient(this.id, formData);
      this.$router.push("/patients");
    },
  },

  mounted() {
    services.getPatient(this.id).then((res) => {
      this.patient = res.data;
    });
  },
};
</script>
