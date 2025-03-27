---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /prism/ourteam
---

<div id="team-cards" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

<script>
async function fetchTeamInfo() {
    try {
        const url = `${pythonURI}/api/members`;
        const response = await fetch(url);
        const data = await response.json();
        const teamData = data.students;
        displayTeamInfo(teamData);
    } catch (error) {
        console.error('Error fetching team info:', error);
    }
}

function displayTeamInfo(teamData) {
    const container = document.getElementById('team-cards');

    teamData.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';

        const name = document.createElement('h3');
        name.textContent = `${member.FirstName} ${member.LastName}`;
        card.appendChild(name);

        const dob = document.createElement('p');
        dob.textContent = `Date of Birth: ${member.DOB}`;
        card.appendChild(dob);

        const email = document.createElement('p');
        email.innerHTML = `Email: <a href="mailto:${member.Email}">${member.Email}</a>`;
        card.appendChild(email);

        const residence = document.createElement('p');
        residence.textContent = `Residence: ${member.Residence}`;
        card.appendChild(residence);

        const cars = document.createElement('p');
        cars.textContent = `Cars Owned: ${member.Owns_Cars.join(', ')}`;
        card.appendChild(cars);

        container.appendChild(card);
    });
}

fetchTeamInfo();
</script>

<style>
#team-cards {
    font-family: 'Arial', sans-serif;
    margin: 20px auto;
}

.team-card {
    background: linear-gradient(145deg, #1e1e2f, #252535);
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s;
}

.team-card:hover {
    transform: scale(1.05);
}

.team-card h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #00d4ff;
}

.team-card p {
    margin: 5px 0;
    font-size: 1em;
}

.team-card a {
    color: #00d4ff;
    text-decoration: none;
}

.team-card a:hover {
    text-decoration: underline;
}
</style>
