---
layout: post
title: Meter Predictor
search_exclude: true
permalink: /history/
---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 800px; }
    label { display: block; margin-top: 1rem; font-weight: bold; }
    input, select { width: 100%; padding: 0.5rem; margin-top: 0.25rem; }
    button { margin-top: 2rem; padding: 0.75rem 1.5rem; font-size: 1rem; }
    .result { margin-top: 2rem; font-size: 1.25rem; }
    canvas { width: 100%; height: 400px; margin-top: 2rem; }
</style>

<body>
  <h1>Titanic Survival Predictor</h1>

  <form id="titanic-form">
    <label>Name
      <input type="text" name="name" required />
    </label>
    <label>Passenger Class
      <select name="pclass">
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3" selected>3rd</option>
      </select>
    </label>
    <label>Sex
      <select name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>
    <label>Age
      <input type="number" name="age" value="25" required />
    </label>
    <label>Siblings/Spouses Aboard
      <input type="number" name="sibsp" value="0" required />
    </label>
    <label>Parents/Children Aboard
      <input type="number" name="parch" value="0" required />
    </label>
    <label>Fare
      <input type="number" name="fare" value="7.25" step="0.01" required />
    </label>
    <label>Embarked
      <select name="embarked">
        <option value="C">Cherbourg</option>
        <option value="Q">Queenstown</option>
        <option value="S" selected>Southampton</option>
      </select>
    </label>
    <label>
      <input type="checkbox" name="alone" /> Traveling Alone?
    </label>
    <button type="submit">Predict Survival</button>
  </form>

  <div class="result" id="result"></div>

  <hr>

  <h2>Hourly Occupancy Prediction</h2>
  <label>Prediction Time Range (Hours)
    <input type="number" id="time-range" value="3" min="1" max="24" />
  </label>
  <button onclick="predictHourlyOccupancy()">Predict Hourly Occupancy</button>

  <canvas id="occupancy-chart"></canvas>

  <script>
    const form = document.getElementById('titanic-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      data.pclass = parseInt(data.pclass);
      data.age = parseFloat(data.age);
      data.sibsp = parseInt(data.sibsp);
      data.parch = parseInt(data.parch);
      data.fare = parseFloat(data.fare);
      data.alone = formData.has('alone');

      try {
        const res = await fetch('/api/titanic/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        resultDiv.innerHTML = `
          Death Probability: <strong>${(result.die * 100).toFixed(2)}%</strong><br>
          Survival Probability: <strong>${(result.survive * 100).toFixed(2)}%</strong>
        `;
      } catch (err) {
        console.error('Error:', err);
        resultDiv.textContent = 'Prediction failed.';
      }
    });

    async function predictHourlyOccupancy() {
      const hourlyResultsDiv = document.getElementById('hourly-results');
      const timeRangeInput = document.getElementById('time-range');
      const hoursToPredict = parseInt(timeRangeInput.value) || 3;

      const now = new Date();
      const startHour = now.getHours();

      hourlyResultsDiv.innerHTML = `Predicting from ${startHour}:00 to ${(startHour + hoursToPredict - 1) % 24}:00...`;

      const samplePassenger = {
        name: "Hourly Sample",
        pclass: 3,
        sex: "male",
        age: 25,
        sibsp: 0,
        parch: 0,
        fare: 7.25,
        embarked: "S",
        alone: true
      };

      const hours = [];
      const deathProbabilities = [];
      const survivalProbabilities = [];

      for (let i = 0; i < hoursToPredict; i++) {
        const hour = (startHour + i) % 24;
        hours.push(`${hour}:00`);

        const passenger = { ...samplePassenger };
        passenger.age = 20 + (hour % 10); // vary age
        passenger.fare = 5 + (hour * 0.5); // vary fare

        try {
          const res = await fetch('/api/titanic/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(passenger)
          });
          const result = await res.json();
          deathProbabilities.push(result.die * 100);
          survivalProbabilities.push(result.survive * 100);
        } catch (err) {
          console.error(`Error at hour ${hour}:`, err);
          // Fallback data in case of error
          deathProbabilities.push(50);  // Assuming 50% failure
          survivalProbabilities.push(50); // Assuming 50% failure
        }
      }

      // Create the graph with the collected data
      const ctx = document.getElementById('occupancy-chart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: hours,
          datasets: [
            {
              label: 'Death Probability (%)',
              data: deathProbabilities,
              borderColor: 'red',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
            },
            {
              label: 'Survival Probability (%)',
              data: survivalProbabilities,
              borderColor: 'green',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 100,
              title: {
                display: true,
                text: 'Probability (%)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Hour of the Day'
              }
            }
          }
        }
      });
    }
  </script>
</body>
