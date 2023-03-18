<template>
  <header>
    <nav>
      <h1><router-link to="/employees"> Dashboard </router-link></h1>
      <ul>
        <li><router-link to="/employees">Employees</router-link></li>
        <li><router-link to="/patients">Patients</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    @media (max-width: 460px) {
      padding: 0.5rem;
      font-size: 14px;
    }
    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid #f391e3;
    }
  }

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;

    a {
      color: white;
      margin: 0;
      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 0.5rem;
  }
}
</style>
