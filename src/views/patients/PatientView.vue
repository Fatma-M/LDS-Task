<template>
  <div v-if="patient">
    <base-card>
      <p>
        <strong>Patient Name:</strong>
        {{ patient.name }}
      </p>
      <p>
        <strong>Doctor Name:</strong>
        {{ patient.doctorName }}
      </p>
      <p><strong> Entry Date: </strong> {{ patient.entryDate }}</p>
      <p><strong> Checkout Date: </strong> {{ patient.checkoutDate }}</p>
      <p><strong> Total Payment: </strong> {{ patient.totalPayment }}/EGP</p>
      <div>
        <router-link
          :to="{ name: 'edit-patient', params: { id: patient.id } }"
          class="btn"
          >Edit</router-link
        >
        <button class="btn delete-btn" @click="deletePatient(patient.id)">
          Delete
        </button>
      </div>
    </base-card>
  </div>
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

  mounted() {
    services.getPatient(this.id).then((res) => {
      this.patient = res.data;
    });
  },

  methods: {
    deletePatient(id) {
      if (confirm("Are You Sure ?")) {
        services.deletePatient(id);
        this.$router.push("/patients");
      }
    },
  },
};
</script>
