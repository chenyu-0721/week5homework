<template>
  <section class="admin">
    <div class="d-flex align-items-center m3248 justify-content-between">
      <div class="d-flex align-items-center">
        <h1>Admin</h1>
        <div class="d-flex">
          <span class="material-symbols-outlined icon"> add </span>
          <h5>Add New Admin</h5>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span class="material-symbols-outlined"> search </span>
        <span class="material-symbols-outlined ml-26"> notifications_active </span>
      </div>
    </div>
    <table id="example" class="table m24" style="width: 95%">
      <thead>
        <tr>
          <th class="d-flex">ID<span class="material-symbols-outlined"> arrow_downward </span></th>
          <th>Name</th>
          <th>Email</th>
          <th>Verified</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.ID">
          <td class="col-2">{{ person.ID }}</td>
          <td class="col-3">{{ person.Name }}</td>
          <td class="col-3">{{ person.Email }}</td>
          <td class="col-2">{{ person.Verified }}</td>
          <td class="text-end">
            <button
              class="material-symbols-outlined tableIcon"
              @click="selectPerson(person)"
              data-bs-toggle="modal"
              data-bs-target="#edit"
            >
              visibility
            </button>
            <button
              class="material-symbols-outlined ms-4 tableIcon"
              @click="selectPerson(person)"
              data-bs-toggle="modal"
              data-bs-target="#edit"
            >
              edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Edit Admin</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h6>Account</h6>
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="selectedPerson.Name"
              class="form-control inputText"
              placeholder="輸入暱稱"
              required
            />
            <label for="Email" class="form-label">Name</label>
            <input
              type="text"
              id="Email"
              v-model="selectedPerson.Email"
              class="form-control inputText"
              placeholder="輸入信箱"
              required
            />
            <hr />
            <h6>Verification</h6>
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <button
                  class="material-symbols-outlined tableIcon"
                  :class="{ 'text-success': selectedPerson.Verified === 'Yes' }"
                >
                  check_circle
                </button>
                <span class="ms-2">Verified</span>
              </div>
              <span class="verDate">2020/4/12</span>
            </div>
            <button class="sendBtn">Send Verification Mail</button>
            <hr />
            <h6>Access Level</h6>
            <select>
              <option>Admin</option>
            </select>
            <hr />
            <h6>Custom Access</h6>
            <div class="d-flex align-items-center">
              <input type="checkbox" id="lecture" name="lecture" class="box" />
              <label class="ms-2 boxLabel" for="lecture">Lecture</label>
            </div>
            <div class="d-flex align-items-center mt-3">
              <input type="checkbox" id="Coupon" name="Coupon" class="box" />
              <label class="ms-2 boxLabel" for="Coupon">Coupon</label>
            </div>
            <div class="d-flex align-items-center mt-3">
              <input type="checkbox" id="Message" name="Message" class="box" />
              <label class="ms-2 boxLabel" for="Message">Message</label>
            </div>
            <div class="d-flex align-items-center mt-3">
              <input type="checkbox" id="Setting" name="Setting" class="box" />
              <label class="ms-2 boxLabel" for="Setting">Setting</label>
            </div>
            <div class="d-flex align-items-center mt-3">
              <input type="checkbox" id="Task Menu" name="Task Menu" class="box" />
              <label class="ms-2 boxLabel" for="Task Menu">Task Menu</label>
            </div>
            <hr />
            <h6>Deactivate Account</h6>
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined warning"> warning </span>
              <span class="text-danger ms-2">This cannot be undone!</span>
            </div>
            <button class="warningbtn">Send Verification Mail</button>
          </div>
          <div class="modal-footer">
            <button class="cancelbtn" data-bs-dismiss="modal">Mark as read</button>
            <button class="updatebtn" data-bs-dismiss="modal">Update</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const people = ref([
  {
    ID: '#1',
    Name: 'Emir Wicks',
    Email: 'emir.wicks@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#2',
    Name: 'Zaina Goldsmith',
    Email: 'zaina.goldsmith@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#3',
    Name: 'Mahima Lopez',
    Email: 'Mahima Lopez',
    Verified: 'Yes'
  },
  {
    ID: '#4',
    Name: 'Pharrell Murray',
    Email: 'pharrell.murray@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#5',
    Name: 'Annika Mcbride',
    Email: 'annika.mcbride@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#6',
    Name: 'Fatimah Clark',
    Email: 'fatimah.clark@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#7',
    Name: 'Klaudia Rhodes',
    Email: 'klaudia.rhodes@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#8',
    Name: 'Tillie Lucero',
    Email: 'Tillie Lucero',
    Verified: 'Yes'
  },
  {
    ID: '#9',
    Name: 'Sabrina Stephenson',
    Email: 'sabrina.stephenson@mail.com',
    Verified: 'Yes'
  },
  {
    ID: '#10',
    Name: 'Annie Smith',
    Email: 'annie.smith@mail.com',
    Verified: 'Yes'
  }
])

const selectedPerson = ref({
  ID: '',
  Name: '',
  Email: '',
  Verified: ''
})

const selectPerson = (person) => {
  selectedPerson.value = { ...person }
}
</script>

<style>
.admin h1 {
  font: normal normal bold 24px/33px Lato;
  color: #212529;
  margin-right: 48px;
}

.admin h5 {
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #212529;
}

.admin .icon {
  color: #198754 !important;
  margin-right: 8px;
}

.admin .m3248 {
  margin: 32px 0px 52px 32px;
}

.admin .ml-26 {
  margin-left: 26px;
  margin-right: 32px;
}

.admin th {
  font: normal normal bold 16px/24px Lato;
  color: #212529;
}

.admin .m24 {
  margin: 24px;
}

.admin td {
  font: normal normal normal 16px/24px Lato;
  color: #212529;
  padding: 10px 0px;
}

.admin .tableIcon {
  color: #212529 !important;
  border: 0px;
  background: #ffffff;
}

.admin h4 {
  font: normal normal bold 24px/33px Lato;
  color: #212529;
  padding: 0px;
}

.admin h6 {
  font: normal normal bold 20px/33px Lato;
  color: #212529;
}

.admin label {
  font: normal normal normal 14px/24px Lato;
  color: #212529;
}

.admin .inputText {
  font: normal normal normal 16px/24px Lato;
  color: #212529;
  background: var(--gray-100) 0% 0% no-repeat padding-box;
  background: #f8f9fa 0% 0% no-repeat padding-box;
  border-radius: 2px;
}

.admin .text-success {
  color: #198754 !important;
}

.admin .verDate {
  font: normal normal normal 14px/33px Lato;
  color: #212529;
}

.admin .modal-content {
  padding: 20px;
}

.admin .sendBtn {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ced4da;
  border-radius: 2px;
  font: normal normal bold 16px/33px Lato;
  color: #ced4da;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 15px;
  height: 51px;
}

.admin select {
  width: 100%;
  height: 51px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #212529;
  border-radius: 2px;
  font: normal normal normal 16px/24px Lato;
  color: #212529;
  margin-bottom: 18px;
}

.admin .box {
  width: 20px;
  height: 20px;
}

.admin .boxLabel {
  font: normal normal normal 16px/24px Lato;
  color: #212529;
}

.admin .warning {
  color: #dc3545 !important;
}

.admin .warningbtn {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 16px;
  height: 51px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dc3545;
  border-radius: 2px;
  font: normal normal bold 16px/33px Lato;
  color: #dc3545;
  text-transform: capitalize;
}

.admin .cancelbtn {
  border: 1px solid var(--success);
  border: 1px solid #198754;
  border-radius: 2px;
  font: normal normal bold 16px/24px Lato;
  letter-spacing: 0px;
  color: #198754;
  background: white;
  padding: 8px 33px;
}

.admin .updatebtn {
  background: var(--success) 0% 0% no-repeat padding-box;
  background: #198754 0% 0% no-repeat padding-box;
  border-radius: 2px;
  font: normal normal bold 16px/24px Lato;
  color: #ffffff;
  padding: 8px 33px;
}
</style>
