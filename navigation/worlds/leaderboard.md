---
layout: post
search_exclude: true
show_reading_time: false
permalink: /prism/leaderboard
---

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    async function checkAuthorization() {
        try {
            const response = await fetch(`${pythonURI}/api/id`, fetchOptions);

            if (response.status === 401) {
                window.location.href = "{{site.baseurl}}/login";
            } else if (response.ok) {
                const contentElements = document.querySelectorAll('.content');
                contentElements.forEach(element => {
                    element.style.display = "block";
                });
            }
        } catch (error) {
            console.error("Authorization check failed:", error);
            window.location.href = "{{site.baseurl}}/login";
        }
    }

    checkAuthorization();
</script>

<div class="content">
    <header class="heading">
        <h1>Leaderboard</h1>
        <p>Reflecting Progress 1 Step at a Time</p>
    </header>

    <br>

    <section>
        <h2>Leaderboard of Top Interests</h2>
        <div class="search-bar">
            <input type="text" id="search-interests" placeholder="Search interests...">
        </div>
        <p>Discover the most popular interests across the community based on collective engagement and participation.</p>
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th onclick="sortTable('leaderboard-interests', 0)">Rank</th>
                    <th onclick="sortTable('leaderboard-interests', 1)">Interest</th>
                    <th onclick="sortTable('leaderboard-interests', 2)">Count</th>
                </tr>
            </thead>
            <tbody id="leaderboard-interests">
                <!-- Data will be populated here by JavaScript -->
            </tbody>
        </table>
    </section>

    <section>
        <h2>Affinity Leaderboard</h2>
        <div class="search-bar">
            <input type="text" id="search-users" placeholder="Search users...">
        </div>
        <p>See which users share the most interests with others, fostering meaningful connections and collaboration.</p>
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th onclick="sortTable('leaderboard-users', 0)">Rank</th>
                    <th onclick="sortTable('leaderboard-users', 1)">Username</th>
                    <th onclick="sortTable('leaderboard-users', 2)">Shared Interests</th>
                </tr>
            </thead>
            <tbody id="leaderboard-users">
                <!-- Data will be populated here by JavaScript -->
            </tbody>
        </table>
    </section>

    <section id="followersSection">
        <h2>Followers</h2>
        <!-- Follower cards will be populated here by JavaScript -->
    </section>

    <section id="myFollowersWeb">
        <h2>My Follower Web</h2>
        <!-- Follower web will be populated here by JavaScript -->
    </section>
</div>

<!-- Popup for instructions -->
<div id="popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h2>How to Use the Leaderboard</h2>
        <p>Welcome to the Prism Leaderboard! Here's how it works:</p>
        <ul>
            <li><strong>Leaderboard of Top Interests:</strong> Discover the most popular interests across the community based on collective engagement and participation. Use the search bar to filter interests.</li>
            <li><strong>Affinity Leaderboard:</strong> See which users share the most interests with others, fostering meaningful connections and collaboration. Use the search bar to filter users.</li>
            <li><strong>Followers:</strong> View your followers and their connections.</li>
            <li><strong>My Follower Web:</strong> Visualize your follower network and mutual connections.</li>
        </ul>
        <p>Use the search bars to quickly find specific interests or users.</p>
    </div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    async function fetchTopUsers() {
        try {
            const response = await fetch(`${pythonURI}/api/leaderboard/top_users?user_id=1`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch top users");

            const topUsers = await response.json();
            const usersBody = document.getElementById("leaderboard-users");
            usersBody.innerHTML = "";
            topUsers.top_users.forEach((user, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${user.username}</td>
                    <td>${user.shared_interests.join(", ")}</td>
                `;
                usersBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching top users:", error);
        }
    }

    async function fetchTopInterests() {
        try {
            const response = await fetch(`${pythonURI}/api/leaderboard/top_interests`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch top interests");

            const topInterests = await response.json();

            const interestsBody = document.getElementById("leaderboard-interests");
            interestsBody.innerHTML = "";
            topInterests.top_interests.forEach((interest, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${interest.interest}</td>
                    <td>${interest.count}</td>
                `;
                interestsBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching top interests:", error);
        }
    }

    function sortTable(tableId, columnIndex) {
        const table = document.getElementById(tableId);
        const rows = Array.from(table.rows).slice(1);
        const isAscending = table.rows[0].cells[columnIndex].classList.toggle('sort-asc');
        table.rows[0].cells[columnIndex].classList.toggle('sort-desc', !isAscending);

        rows.sort((rowA, rowB) => {
            const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
            const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

            if (cellA < cellB) return isAscending ? -1 : 1;
            if (cellA > cellB) return isAscending ? 1 : -1;
            return 0;
        });

        rows.forEach(row => table.appendChild(row));
    }

    function filterTable(inputId, tableId) {
        const input = document.getElementById(inputId);
        const filter = input.value.toLowerCase();
        const table = document.getElementById(tableId);
        const rows = table.getElementsByTagName('tr');

        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            let match = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].innerText.toLowerCase().includes(filter)) {
                    match = true;
                    break;
                }
            }
            rows[i].style.display = match ? '' : 'none';
        }
    }

    document.getElementById('search-interests').addEventListener('input', () => filterTable('search-interests', 'leaderboard-interests'));
    document.getElementById('search-users').addEventListener('input', () => filterTable('search-users', 'leaderboard-users'));

    document.addEventListener("DOMContentLoaded", async () => {
        await fetchTopUsers();
        await fetchTopInterests();
        const followers = await fetchFollowers();
        createFollowerCards(followers);
        createMyFollowerWeb(followers);
        showPopup();
    });

    async function fetchFollowers() {
        try {
            const response = await fetch(`${pythonURI}/api/followers?user_id=1`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch followers");

            const followersData = await response.json();
            return followersData.followers;
        } catch (error) {
            console.error("Error fetching followers:", error);
            return [];
        }
    }

    function createFollowerCards(followers) {
        const followersSection = document.getElementById('followersSection');
        followersSection.innerHTML = '';
        
        if (!followers || followers.length === 0) {
            const placeholderFollowers = ['No followers yet'];
            placeholderFollowers.forEach(follower => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<h4>${follower}</h4>`;
                followersSection.appendChild(card);
            });
            return;
        }

        followers.forEach(follower => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h4>${follower}</h4>`;
            followersSection.appendChild(card);
        });
    }

    async function createMyFollowerWeb(followers) {
        const webContainer = document.getElementById('myFollowersWeb');
        webContainer.innerHTML = '';

        const centerX = webContainer.clientWidth / 2;
        const centerY = webContainer.clientHeight / 2;
        const radius = 150;

        if (!followers || followers.length === 0) {
            const placeholderFollowers = ['No followers yet'];
            placeholderFollowers.forEach((follower, index) => {
                const angle = (index / placeholderFollowers.length) * 2 * Math.PI;
                const x = centerX + radius * Math.cos(angle) - 50;
                const y = centerY + radius * Math.sin(angle) - 50;
                const node = createWebNode(follower, x, y);
                webContainer.appendChild(node);
            });
            return;
        }

        const followerPositions = {};

        followers.forEach((follower, index) => {
            const angle = (index / followers.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle) - 50;
            const y = centerY + radius * Math.sin(angle) - 50;
            const node = createWebNode(follower, x, y);
            webContainer.appendChild(node);
            followerPositions[follower] = { x: x + 50, y: y + 50 };

            if (index > 0) {
                const prevAngle = ((index - 1) / followers.length) * 2 * Math.PI;
                const prevX = centerX + radius * Math.cos(prevAngle);
                const prevY = centerY + radius * Math.sin(prevAngle);
                const line = createWebLine(prevX, prevY, x + 50, y + 50);
                webContainer.appendChild(line);
            }
        });

        if (followers.length > 1) {
            const firstAngle = 0;
            const firstX = centerX + radius * Math.cos(firstAngle);
            const firstY = centerY + radius * Math.sin(firstAngle);
            const lastAngle = ((followers.length - 1) / followers.length) * 2 * Math.PI;
            const lastX = centerX + radius * Math.cos(lastAngle);
            const lastY = centerY + radius * Math.sin(lastAngle);
            const line = createWebLine(lastX, lastY, firstX, firstY);
            webContainer.appendChild(line);
        }

        await fetchMutualConnections(followerPositions);
    }

    async function fetchMutualConnections(followerPositions) {
        try {
            const response = await fetch(pythonURI + "/api/mutual_connections?user_id=1", fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch mutual connections');
            }
            const mutualConnections = await response.json();
            const webContainer = document.getElementById('myFollowersWeb');

            for (const [follower, connections] of Object.entries(mutualConnections)) {
                connections.forEach(connection => {
                    if (followerPositions[follower] && followerPositions[connection]) {
                        const line = createWebLine(
                            followerPositions[follower].x,
                            followerPositions[follower].y,
                            followerPositions[connection].x,
                            followerPositions[connection].y
                        );
                        webContainer.appendChild(line);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching mutual connections:', error);
        }
    }

    function createWebNode(follower, x, y) {
        const node = document.createElement('div');
        node.className = 'web-node';
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.innerHTML = `<span>${follower}</span>`;
        return node;
    }

    function createWebLine(x1, y1, x2, y2) {
        const line = document.createElement('div');
        line.className = 'web-line';
        line.style.width = `${Math.hypot(x2 - x1, y2 - y1)}px`;
        line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        return line;
    }

    function showPopup() {
        const popup = document.getElementById('popup');
        const closeBtn = document.querySelector('.popup .close');

        popup.style.display = 'block';

        closeBtn.onclick = function() {
            popup.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        };
    }
</script>

<style>
    .popup {
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .popup-content {
        background-color: #000;
        color: #fff;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid red;
        border-radius: 10px;
        width: 80%;
        max-width: 600px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        animation: fadeIn 0.5s;
    }

    .popup .close {
        color: #fff;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .popup .close:hover,
    .popup .close:focus {
        color: red;
        text-decoration: none;
        cursor: pointer;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>