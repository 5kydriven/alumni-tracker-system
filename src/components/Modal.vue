<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="">1. Year Graduated</label>
            <select class="form-select" aria-label="Default select example">
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div>
            <label for="">2. Campus</label>
            <select class="form-select" aria-label="Default select example">
              <option value="SanCarlos">San Carlos Campus</option>
              <option value="Victorias">Victorias Campus</option>
              <option value="Cauyan">Cauyan Campus</option>
            </select>
          </div>
          <div>
            <label for="">3. Course Graduated from</label>
            <select class="form-select" aria-label="Default select example">
              <option value="it">Bachelor of Science in Information Technology</option>
              <option value="elementary">Bachelor in Elementary major in General Education</option>
              <option value="secondary">Bachelor in Secondary major in Biological Science</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>
