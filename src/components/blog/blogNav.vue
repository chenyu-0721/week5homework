<template>
  <section class="blogNav">
    <div class="album">
      <div class="container navDflex">
        <div class="flex-wrap navbar2_bg">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">最新消息</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">特別企劃</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">新品上市</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">鏡框小知識</span>
              </a>
            </li>
          </ul>
        </div>
        <span class="material-symbols-outlined byeticon"> search </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.blogNav {
  background: #650300 0% 0% no-repeat padding-box;
}

.navbar2_span {
  font: normal normal bold 20px/30px Noto Sans;
  letter-spacing: 0px;
  color: #ffffff;
}

.blogNav .material-symbols-outlined {
  font-size: 29px;
  color: #ffffff;
}

.blogNav .navDflex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 550px) {
  .blogNav .byeticon {
    display: none;
  }

  .navbar2_span {
    font: normal normal bold 16px/24px Source Han Sans TW;
  }
  .blogNav .navDflex {
    display: block;
  }

  .blogNav .nav {
    display: flex;
    justify-content: space-between;
  }
}
</style>
