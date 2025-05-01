---
layout: post
title: Titanic
search_exclude: true
permalink: /titanic/
---

<style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 800px; }
    label { display: block; margin-top: 1rem; font-weight: bold; }
    input, select { width: 100%; padding: 0.5rem; margin-top: 0.25rem; }
    button { margin-top: 2rem; padding: 0.75rem 1.5rem; font-size: 1rem; }
    .result { margin-top: 2rem; font-size: 1.25rem; }
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
    <button type="submit">Predict Occupancy</button>
  </form>

  <div class="result" id="result"></div>

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
</script>