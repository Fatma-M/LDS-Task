<template>
  <base-card>
    <form @submit.prevent="submitForm" v-if="employee">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" v-model.trim="employee.name" required />
      </div>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" v-model.trim="employee.title" required />
      </div>
      <div class="form-control">
        <label for="responsibilities">Responsibilities</label>
        <textarea
          rows="5"
          v-model.trim="employee.responsibilities"
          required></textarea>
      </div>
      <div class="form-control">
        <label for="salary">Salary</label>
        <input type="number" v-model.number="employee.salary" required />
      </div>
      <div class="form-control">
        <label for="place">Place</label>
        <input type="text" v-model.trim="employee.place" required />
      </div>
      <div class="form-control">
        <label for="workingType">Working Type</label>
        <input type="text" v-model.trim="employee.workingType" required />
      </div>
      <div class="form-control">
        <label for="startDate">Start Date</label>
        <input type="text" v-model.trim="employee.startDate" required />
      </div>

      <button class="btn" type="submit">Edit Employee</button>
    </form>
  </base-card>
</template>

<script>
import services from "@/services/services";

export default {
  props: ["id"],
  data() {
    return {
      employee: null,
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.employee.name,
        title: this.employee.title,
        startDate: this.employee.startDate,
        salary: this.employee.salary,
        place: this.employee.place,
        workingType: this.employee.workingType,
        responsibilities: this.employee.responsibilities,
      };
      services.editEmployee(this.id, formData);
      this.$router.push("/employees");
    },
  },

  mounted() {
    services.getEmployee(this.id).then((res) => {
      this.employee = res.data;
    });
  },
};
</script>
