<template>
  <div v-if="employee">
    <base-card>
      <p>
        <strong> {{ employee.name }} - {{ employee.title }} </strong>
      </p>
      <div>
        <p><strong> Start from: </strong> {{ employee.startDate }}</p>
        <p><strong> Working Type: </strong> {{ employee.workingType }}</p>
      </div>
      <div>
        <p><strong> Salary: </strong> {{ employee.salary }}/EGP</p>
        <p><strong> Place: </strong> {{ employee.place }}</p>
      </div>
      <p>
        <strong> Responsibilities: </strong> {{ employee.responsibilities }}
      </p>
      <div>
        <router-link
          :to="{ name: 'edit-employee', params: { id: employee.id } }"
          class="btn"
          >Edit</router-link
        >
        <button class="btn delete-btn" @click="deleteEmployee(employee.id)">
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
      employee: null,
    };
  },

  mounted() {
    services.getEmployee(this.id).then((res) => {
      this.employee = res.data;
    });
  },

  methods: {
    deleteEmployee(id) {
      if (confirm("Are You Sure ?")) {
        services.deleteEmployee(id);
        this.$router.push("/employees");
      }
    },
  },
};
</script>

<style lang="scss">
.btn {
  all: unset;
  background-color: #3d008d;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #2f0468;
  }

  &.delete-btn {
    background-color: red;

    &:hover {
      background-color: darkred;
    }
  }
}
</style>
