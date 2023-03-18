<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" v-model.trim="name" required />
      </div>
      <div class="form-control">
        <label for="doctorName">Doctor Name</label>
        <input type="text" v-model.trim="doctorName" required />
      </div>

      <div class="form-control">
        <label for="entryDate">Entry Date</label>
        <input type="text" v-model.trim="entryDate" required />
      </div>
      <div class="form-control">
        <label for="checkoutDate">Checkout Date</label>
        <input type="text" v-model.trim="checkoutDate" required />
      </div>
      <div class="form-control">
        <label for="totalPayment">Total Payment</label>
        <input type="number" v-model.number="totalPayment" required />
      </div>

      <button class="btn" type="submit">Add Patient</button>
    </form>
  </base-card>
</template>

<script>
import services from "@/services/services";

export default {
  data() {
    return {
      name: "",
      doctorName: "",
      entryDate: "",
      totalPayment: null,
      checkoutDate: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        doctorName: this.doctorName,
        entryDate: this.entryDate,
        checkoutDate: this.checkoutDate,
        totalPayment: this.totalPayment,
      };

      services.addPatient(formData);
      this.$router.push("/patients");
    },
  },
};
</script>
