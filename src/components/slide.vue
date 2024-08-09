<template>
  <section class="slidebar">
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light h-100" style="max-width: 296px">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/9f843c654f4bbfb95e6ab2eaf0c5a42f2c3c6205/week5/logo-ANSWER.svg"
        />
      </a>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item d-flex align-items-center">
          <span class="material-symbols-outlined"> bar_chart_4_bars </span>
          <a href="#" class="nav-link" aria-current="page"> Dashboard </a>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-symbols-outlined"> forum </span>
          <a class="nav-link link-dark"> Question </a>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-symbols-outlined" :class="{ 'icon-active': $route.path === '/' }">
            assignment
          </span>
          <router-link to="/" class="nav-link">Assignment</router-link>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-symbols-outlined"> video_library </span>
          <a href="#" class="nav-link link-dark"> Course </a>
        </li>
        <li class="d-flex align-items-center">
          <span
            class="material-symbols-outlined"
            :class="{ 'icon-active': $route.path === '/admin' }"
          >
            assignment
          </span>
          <router-link to="/admin" class="nav-link">admin</router-link>
        </li>
        <li class="d-flex align-items-center">
          <span class="material-symbols-outlined"> settings </span>
          <a href="#" class="nav-link link-dark"> Settings </a>
        </li>
      </ul>
      <hr />
      <div class="d-flex align-items-center">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week5/andychen.jpeg?raw=true"
          alt=""
          width="40"
          height="40"
          class="rounded-circle me-2"
        />
        <div class="d-flex flex-column">
          <strong>Andy Chen</strong>
          <p>andy0401@mail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.slidebar {
  height: 100vh;
}

.slidebar img {
  margin: 32px;
}

.slidebar li {
  margin-left: 35px;
}

.slidebar a {
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
}

.slidebar p {
  margin: 0px;
}

.router-link-active {
  color: #198754 !important;
}

.icon-active {
  color: #198754 !important;
}
</style>
