<template>
  <div class="container">
    <div class="add-link">
      <router-link :to="{ name: 'add-patient' }" class="btn"
        >Add Patient <i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
    <ul class="list">
      <base-card>
        <li v-for="patient in patientsList" :key="patient.id">
          <p class="text">
            {{ patient.name }}
          </p>
          <p class="actions">
            <router-link
              :to="{ name: 'patient-details', params: { id: patient.id } }">
              <i class="fa-regular fa-eye"></i>
            </router-link>
            <router-link
              :to="{ name: 'edit-patient', params: { id: patient.id } }">
              <i class="fa-regular fa-pen-to-square"></i>
            </router-link>
          </p>
        </li>
      </base-card>
    </ul>
  </div>
</template>

<script>
import services from "@/services/services";

export default {
  data() {
    return {
      patientsList: [],
    };
  },

  mounted() {
    services.getPatients().then((res) => {
      this.patientsList = res.data;
    });
  },
};
</script>
