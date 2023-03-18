<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" v-model.trim="name" required />
      </div>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" v-model.trim="title" required />
      </div>
      <div class="form-control">
        <label for="responsibilities">Responsibilities</label>
        <textarea rows="5" v-model.trim="responsibilities" required></textarea>
      </div>
      <div class="form-control">
        <label for="salary">Salary</label>
        <input type="number" v-model.number="salary" required />
      </div>
      <div class="form-control">
        <label for="place">Place</label>
        <input type="text" v-model.trim="place" required />
      </div>
      <div class="form-control">
        <label for="workingType">Working Type</label>
        <input type="text" v-model.trim="workingType" required />
      </div>
      <div class="form-control">
        <label for="startDate">Start Date</label>
        <input type="text" v-model.trim="startDate" required />
      </div>

      <button class="btn" type="submit">Add Employee</button>
    </form>
  </base-card>
</template>

<script>
import services from "@/services/services";

export default {
  data() {
    return {
      name: "",
      title: "",
      startDate: "",
      salary: null,
      place: "",
      workingType: "",
      responsibilities: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        title: this.title,
        startDate: this.startDate,
        salary: this.salary,
        place: this.place,
        workingType: this.workingType,
        responsibilities: this.responsibilities,
      };

      services.addEmployee(formData);
      this.$router.push("/employees");
    },
  },
};
</script>

<style lang="scss">
.form-control {
  margin: 0.5rem 0;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;

    &:focus {
      background-color: #f0e6fd;
      outline: none;
      border-color: #3d008d;
    }
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
}
</style>
