<template>
  <div class="container">
    <div class="add-link">
      <router-link :to="{ name: 'add-employee' }" class="btn"
        >Add Employee <i class="fa-solid fa-plus"></i
      ></router-link>
    </div>
    <ul class="list">
      <base-card>
        <li v-for="employee in employeesList" :key="employee.id">
          <p class="text">
            {{ employee.name }} - <strong> {{ employee.title }} </strong>
          </p>
          <p class="actions">
            <router-link
              :to="{ name: 'employee-details', params: { id: employee.id } }">
              <i class="fa-regular fa-eye"></i>
            </router-link>
            <router-link
              :to="{ name: 'edit-employee', params: { id: employee.id } }">
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
      employeesList: [],
    };
  },
  computed: {},
  methods: {},
  mounted() {
    services.getEmployees().then((res) => {
      this.employeesList = res.data;
    });
  },
};
</script>

<style lang="scss">
.container {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    &:not(:last-of-type) {
      border-bottom: 1px solid #aaa;
    }

    .text {
      text-align: left;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;

      i {
        cursor: pointer;
        margin-left: 10px;

        &:hover {
          scale: 1.2;
        }

        &.fa-pen-to-square:hover {
          color: green;
        }

        &.fa-eye:hover {
          color: darkblue;
        }
      }
    }
  }
}
</style>
