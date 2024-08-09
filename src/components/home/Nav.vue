<template>
  <section class="nav justify-content-between">
    <div class="d-flex align-items-center">
      <h1>Assignment</h1>
      <select>
        <option>All Courses</option>
      </select>
    </div>
    <div class="d-flex align-items-center">
      <span class="material-symbols-outlined"> search </span>
      <span class="material-symbols-outlined ml-26"> notifications_active </span>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  margin: 34px;
}

.nav h1 {
  font: normal normal bold 24px/33px Lato;
  color: #212529;
  margin-right: 50px;
  margin-bottom: 0;
}

.nav select {
  font: normal normal bold 16px/24px Lato;
  color: #212529;
  border: none;
}

.nav .ml-26 {
  margin-left: 26px;
}
</style>
