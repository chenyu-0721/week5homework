<template>
  <section class="banner d-flex">
    <div class="bannerLeft col-md-5">
      <select>
        <option>All (4)</option>
      </select>

      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex gap-3 w-320 active"
          aria-current="true"
        >
          <div class="d-flex flex-column w-100">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-0">Chapter Assignment 2</h5>
              <h5 class="">4 hrs ago</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h4 class="mb-0">Please check this file…</h4>
              <h6 class="">Emily Wang</h6>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex gap-3 w-320"
          aria-current="true"
        >
          <div class="d-flex flex-column w-100">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-0">Chapter Assignment 1</h5>
              <h5 class="">Chapter Assignment 1</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h4 class="mb-0">My Homework</h4>
              <h6 class="">David Xu</h6>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex gap-3 w-320"
          aria-current="true"
        >
          <div class="d-flex flex-column w-100">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-0">Final Assignment</h5>
              <h5 class="">18 hrs ago</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h4 class="mb-0">Have a problem with this…</h4>
              <h6 class="">Tony Wei</h6>
            </div>
          </div>
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex gap-3 w-320"
          aria-current="true"
        >
          <div class="d-flex flex-column w-100">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-0">Final Assignment</h5>
              <h5 class="">Final Assignment</h5>
            </div>
            <div class="d-flex w-100 justify-content-between">
              <h4 class="mb-0">Did I do it right?</h4>
              <h6 class="">Did I do it right?</h6>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="bannerRight col-md-6">
      <small class="d-flex justify-content-end comment">2 comments</small>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="d-flex align-items-center pb-2 w-100 m1216 bg-light border-bottom">
              <div class="d-flex flex-column w-100">
                <h5 class="mb-0">Chapter Assignment 2 / HTML&CSS</h5>
                <h4 class="mb-0">Please check this file for me, thanks!</h4>
              </div>
              <span class="material-symbols-outlined"> more_vert </span>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-start">
                <div class="d-flex align-items-center">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week5/emilywang.jpeg?raw=true"
                    alt=""
                    width="40"
                    height="40"
                    class="rounded-circle me-2"
                  />
                </div>
                <div>
                  <div class="d-flex flex-column">
                    <strong class="emily">Emily Wang</strong>
                    <small class="date">10:38 AM (4 hours ago)</small>
                  </div>
                  <p class="content">
                    Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                    question: Why in the following code the height of the
                    <span class="bg-light">div</span> is bigger than the height of the
                    <span class="bg-light">img</span> ? There is a gap below the image, but it
                    doesn’t seems to be a padding/margin. What is the gap or extra space below
                    image?
                  </p>
                  <button class="zip">
                    <span class="material-symbols-outlined me-2"> attach_file </span>
                    HW-2-David.zip
                  </button>
                  <div class="border-bottom mt-3"></div>
                </div>
              </div>
              <div class="d-flex align-items-start mt-3" v-if="reply">
                <div class="d-flex align-items-center">
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week5/andychen.jpeg?raw=true"
                    alt=""
                    width="40"
                    height="40"
                    class="rounded-circle me-2"
                  />
                </div>
                <div>
                  <div class="d-flex flex-row justify-content-between">
                    <div class="d-flex flex-column">
                      <strong class="emily">Andy Chen (You)</strong>
                      <small class="date">13:24 AM (1 hours ago)</small>
                    </div>
                    <div>
                      <span class="material-symbols-outlined me-3"> star </span>
                      <span class="material-symbols-outlined me-2"> ink_marker </span>
                    </div>
                  </div>
                  <p class="content">
                    Hi David, by default, an image is rendered inline, like a letter so it sits on
                    the same line that a, b, c and d sit on. There is space below that line for the
                    descenders you find on letters like g, j, p and q. You can: 　
                    <br />
                    • adjust the <span class="bg-light"> vertical-align</span> of the image to
                    position it elsewhere (e.g. the <span class="bg-light">middle</span> ) or 　
                    <br />
                    • change the <span class="bg-light">display</span> so it isn’t inline.
                  </p>
                </div>
              </div>
            </div>
            <div v-if="!reply">
              <div class="row">
                <div class="col">
                  <div class="card">
                    <div class="d-flex align-items-center pb-2 w-100 m1216 bg-light border-bottom">
                      <select class="bg-light me-3">
                        <option>Body Text</option>
                      </select>
                      <span class="material-symbols-outlined me-3"> format_bold </span>
                      <span class="material-symbols-outlined me-3"> format_italic </span>
                      <span class="material-symbols-outlined me-3"> format_list_bulleted </span>
                      <span class="material-symbols-outlined me-3"> format_list_numbered </span>
                      <span class="material-symbols-outlined me-3"> image </span>
                      <span class="material-symbols-outlined me-3"> link </span>
                      <span class="material-symbols-outlined me-3"> code </span>
                    </div>
                    <div class="input-wrapper">
                      <textarea
                        class="h-263 custom-placeholder"
                        rows="5"
                        placeholder="Reply an answer…"
                      ></textarea>
                      <div class="button-group">
                        <button class="cancel" @click="handleCancelClick">Cancel</button>
                        <button class="reply2">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center" v-if="reply">
        <div class="mt-4">
          <span class="material-symbols-outlined me-4"> chevron_left </span>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
        <div class="mt-4">
          <button class="whitebtn">Mark as read</button>
          <button class="greenbtn" @click="handleReplyClick">Reply</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const reply = ref(false)

const handleReplyClick = () => {
  reply.value = !reply.value
}

const handleCancelClick = () => {
  reply.value = !reply.value
}
</script>

<style>
.banner {
  margin-top: 30px;
}

.bannerLeft .active {
  background: #f8f9fa !important;
  border: 1px solid #ced4da !important;
}

.bannerLeft .list-group-item {
  border-radius: 0px !important;
}

.bannerRight select {
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
  border: none;
}

.bannerLeft select {
  font: normal normal bold 16px/24px Lato;
  color: #212529;
  border: none;
  margin-left: 33px;
}

.bannerRight h5,
.bannerLeft h5 {
  font: normal normal normal 12px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
}

.bannerRight h4,
.bannerLeft h4 {
  font: normal normal bold 16px/24px Lato;
  color: #212529;
}

.bannerRight h6,
.bannerLeft h6 {
  font: normal normal normal 12px/24px Lato;
  color: #6c757d;
}

.bannerLeft .list-group {
  margin-left: 33px;
  margin-top: 6px;
}

.bannerRight {
  margin-left: 20px;
  margin-top: 9px;
}

.bannerRight .material-symbols-outlined {
  color: #212529;
}

.bannerRight .m1216 {
  padding: 12px 27px 0px 16px;
}

.bannerRight .card {
  border-radius: 0px;
  border: 1px solid #ced4da;
}

.bannerRight .emily {
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
}

.bannerRight .date {
  font: normal normal normal 12px/24px Lato;
  letter-spacing: 0px;
  color: #6c757d;
}

.bannerRight .content {
  margin: 16px 32px 16px 0px;
  font: normal normal normal 14px/21px Lato;
  color: #212529;
}

.content span {
  color: #198754;
}

.bannerRight .zip {
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border: 1px solid #ced4da;
  border-radius: 2px;
  padding: 11px 16px 10px 14px;
  display: flex;
  align-items: center;
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
}

.whitebtn {
  border: 1px solid var(--success);
  border: 1px solid #198754;
  border-radius: 2px;
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #198754;
  padding: 8px 33px;
  margin-right: 20px;
}

.greenbtn {
  font: normal normal bold 16px/24px Lato;
  color: #ffffff;
  background: var(--success) 0% 0% no-repeat padding-box;
  background: #198754 0% 0% no-repeat padding-box;
  border-radius: 2px;
  padding: 8px 33px;
}

.comment {
  font: normal normal normal 12px/24px Lato;
  color: #6c757d;
}

.h-263 {
  height: 263px;
}

.input-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.custom-placeholder {
  width: 100%;
  height: 263px;
  top: 0px;
  padding-left: 30px;
  box-sizing: border-box;
}

.button-group {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.cancel {
  border: 1px solid var(--success);
  border: 1px solid #198754;
  border-radius: 2px;
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #198754;
  padding: 8px 33px;
}

.reply2 {
  background: var(--success) 0% 0% no-repeat padding-box;
  background: #198754 0% 0% no-repeat padding-box;
  border-radius: 2px;
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 8px 33px;
}

.action-btn:hover {
  background-color: #145a3e;
}
</style>
