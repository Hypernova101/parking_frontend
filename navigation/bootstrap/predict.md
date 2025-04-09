---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/predict
---

<div class="container mt-5">
  <div class="card bg-dark text-white shadow-lg">
    <div class="card-body">
      <h1 class="card-title text-center text-accent mb-4">Parking Availability Predictor</h1>
      <form id="parkingForm">
        <div class="mb-3">
          <label for="pole_id" class="form-label">Pole ID</label>
          <input type="text" class="form-control bg-dark text-white border-secondary" id="pole_id" required>
        </div>
        <div class="mb-3">
          <label for="day_of_week" class="form-label">Day of the Week</label>
          <select id="day_of_week" class="form-select bg-dark text-white border-secondary">
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="hour_of_day" class="form-label">Hour of the Day (0–23)</label>
          <input type="number" class="form-control bg-dark text-white border-secondary" id="hour_of_day" min="0" max="23" required>
        </div>

        <button type="button" id="predictBtn" class="btn btn-accent w-100">Check Availability</button>
      </form>
      <div id="result" class="mt-4 text-center fw-bold fs-5"></div>
    </div>
  </div>
</div>

<script type="module">
  import {
    pythonURI,
    fetchOptions,
  } from "{{ site.baseurl }}/assets/js/api/config.js";

  document
    .getElementById("predictBtn")
    .addEventListener("click", async function () {
      const requestData = {
        pole_id: document.getElementById("pole_id").value,
        day_of_week: parseInt(document.getElementById("day_of_week").value),
        hour_of_day: parseInt(document.getElementById("hour_of_day").value),
      };

      try {
        const response = await fetch(`${pythonURI}/api/parking/predict`, {
          ...fetchOptions,
          method: "POST",
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const percent = data.predicted_parking_availability_percent;
        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML =
          percent >= 50
            ? `<span class="text-success">🚗 Likely Available: ${percent.toFixed(1)}%</span>`
            : `<span class="text-danger">❌ Likely Unavailable: ${percent.toFixed(1)}%</span>`;
      } catch (error) {
        console.error("Error predicting availability", error);
        document.getElementById("result").innerHTML =
          "<span class='text-warning'>An error occurred while predicting.</span>";
      }
    });
</script>
