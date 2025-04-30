---
layout: post
title: Occupancy Graph
search_exclude: true
permalink: /history/
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Parking Availability Graph</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      background-color: #f9f9f9;
    }
    #chart-container {
      width: 100%;
      max-width: 800px;
      margin: auto;
    }
    input {
      margin-top: 10px;
      padding: 5px;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <h2>Parking Availability Over Time</h2>
  <div id="chart-container">
    <canvas id="parkingChart"></canvas>
    <br />
    <label for="sizeInput">Window Size:</label>
    <input type="number" id="sizeInput" value="3" min="1" max="12"/>
  </div>

  <script>
    const ctx = document.getElementById('parkingChart').getContext('2d');
    let parkingChart;

    async function fetchData(size = 3) {
      const res = await fetch(`/api/fetch_data?size=${size}`);
      const data = await res.json();

      const [headers, ...rows] = data;

      const labels = rows.map(row => row[0]); // Assumes hour or timestamp
      const values = rows.map(row => parseInt(row[1])); // Assumes numeric value in second column

      return { labels, values };
    }

    async function updateChart(size) {
      const { labels, values } = await fetchData(size);

      if (parkingChart) {
        parkingChart.data.labels = labels;
        parkingChart.data.datasets[0].data = values;
        parkingChart.update();
      } else {
        parkingChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Parking Availability',
              data: values,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.3
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
              title: {
                display: false,
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }

    document.getElementById('sizeInput').addEventListener('input', (e) => {
      const newSize = parseInt(e.target.value);
      if (!isNaN(newSize)) {
        updateChart(newSize);
      }
    });

    // Load initial chart
    updateChart(3);
  </script>
</body>
</html>

