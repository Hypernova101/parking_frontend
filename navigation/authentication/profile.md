---
layout: post
permalink: /profile
#menu: nav/home.html
search_exclude: true
show_reading_time: false
---

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
        background-color: #1a1a1a;
        color: #ffffff;
    }

    .container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 2rem;
    }

    .page-header {
        text-align: center;
        margin-bottom: 2rem;
        padding: 2rem 0;
        border-bottom: 2px solid #e53e3e;
    }

    .page-header h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #e53e3e;
        margin-bottom: 0.5rem;
    }

    .page-header p {
        color: #a0aec0;
        font-size: 1.1rem;
    }

    .profile {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        background-color: #2d3748;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .profile img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid #e53e3e;
        margin-right: 2rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .profile div h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 0.5rem;
    }

    .card {
        background-color: #2d3748;
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #e53e3e;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #e53e3e;
        padding-bottom: 0.5rem;
    }

    form div {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #a0aec0;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid #4a5568;
        background-color: #1a202c;
        color: #ffffff;
        margin-bottom: 1rem;
    }

    input[type="text"]:focus,
    input[type="password"]:focus {
        outline: none;
        border-color: #e53e3e;
        box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.2);
    }

    .file-icon {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #e53e3e;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .file-icon:hover {
        background-color: #c53030;
    }

    #profile-message {
        margin-top: 1rem;
        padding: 0.75rem;
        border-radius: 4px;
        font-weight: 500;
    }

    .grid {
        display: grid;
        gap: 16px;
        margin-bottom: 24px;
    }

    .grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .card img {
        width: 100%;
        border-radius: 8px;
        transition: transform 0.3s ease-in-out;
    }

    .card img:hover {
        transform: scale(1.05);
    }

    .card p {
        margin-top: 8px;
    }

    ul {
        list-style: none;
    }

    ul li {
        margin: 8px 0;
    }

    .input-field {
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: 2px solid #e53e3e;
        border-radius: 6px;
        background-color: #1a1a1a;
        color: #ffffff;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .input-field:focus {
        outline: none;
        border-color: #fc8181;
        box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.2);
    }

    textarea.input-field {
        resize: vertical;
        min-height: 100px;
    }

    .btn-primary {
        background-color: #e53e3e;
        color: white;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #c53030;
    }

    #newPostForm {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #newPostForm label {
        color: #a0aec0;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        display: block;
    }

    .posts-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 500px;
        overflow-y: auto;
    }

    .message-bubble {
        background-color: #2d3748;
        padding: 1rem;
        border-radius: 8px;
        margin: 0;
        border-left: 3px solid #e53e3e;
    }

    .post-title {
        font-weight: bold;
        color: #e53e3e;
        margin-bottom: 0.5rem;
    }

    .post-comment {
        color: #ffffff;
    }

    .theme-switch-wrapper {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
    }

    .theme-switch {
        display: inline-block;
        padding: 10px 20px;
        background-color: #2d3748;
        border: 2px solid #e53e3e;
        border-radius: 20px;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .theme-switch:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .theme-icon {
        font-size: 16px;
    }

    .web-container {
        position: relative;
        width: 100%;
        height: 500px;
        margin-bottom: 24px;
    }

    .web-node {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #f6e05e; /* Default yellow shade */
        color: #1a202c;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }

    .web-node:hover {
        transform: scale(1.1);
    }

    .web-line {
        position: absolute;
        width: 2px;
        background-color: #ffffff; /* White line */
    }
</style>

<header class="heading">
    <h1>Prism</h1>
    <p>You can control your settings from here!</p>
</header>

<div class="theme-switch-wrapper">
    <button class="theme-switch" id="themeToggle">
        <span class="theme-icon">🌙</span>
        <span class="theme-text">Switch Theme</span>
    </button>
</div>

<div class="container">
    <section class="profile">
        <img src="https://placehold.co/150x150" alt="Profile Picture" id="profilePicture">
        <div>
            <h2 id="username">User Name</h2>
        </div>
    </section>

    <section class="card">
        <h3>Profile Settings</h3>
        <form>
            <div>
                <label for="newUid">Enter New UID:</label>
                <input type="text" id="newUid" placeholder="New UID">
            </div>
            <div>
                <label for="newName">Enter New Name:</label>
                <input type="text" id="newName" placeholder="New Name">
            </div>
            <div>
                <label for="newPassword">Enter New Password:</label>
                <input type="password" id="newPassword" placeholder="New Password">
            </div>
            <div>
                <label for="newInterests">Enter New Interests:</label>
                <input type="text" id="newInterests" placeholder="New Interests (e.g., Soccer, Reading)">
            </div>
            <div>
                <label for="newFollowers">Enter New Followers:</label>
                <input type="text" id="newFollowers" placeholder="New Followers (e.g., toby, bobby)">
            </div>
            <br>
            <label for="profilePictureUpload" class="file-icon">
                Upload Profile Picture <i class="fas fa-upload"></i>
            </label>
            <input type="file" id="profilePictureUpload" accept="image/*" style="display: none;">
            <p id="profile-message" style="color: red;"></p>
        </form>
    </section>

    <section class="grid grid-cols-2">
        <div class="card">
            <h3>User Stats</h3>
            <p>Followers: 120</p>
            <p>Following: 75</p>
            <p>Posts: 34</p>
        </div>
        <div class="card">
            <h3>Bio/About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec felis vel metus.</p>
        </div>
    </section>

    <section class="card">
        <h3>My Interests</h3>
        <p>Click on an interest to view more details</p>
        <section class="grid grid-cols-2" id="interestsSection"></section>
    </section>

    <section class="grid grid-cols-2" id="interestsSection">
    </section>

    <section class="card">
        <h3>My Following</h3>
        <p>Click on a person you are following to view more details</p>
        <section class="grid grid-cols-2" id="followersSection"></section>
    </section>

    <section class="card">
        <h3>My Followers</h3>
        <p>Click on a follower to view more details</p>
        <div class="web-container" id="myFollowersWeb"></div>
    </section>

    <section class="card">
        <h3>Create New Post</h3>
        <form id="newPostForm">
            <div>
                <label for="postTitle">Title</label>
                <input type="text" id="postTitle" name="postTitle" class="input-field" placeholder="Enter post title">
            </div>
            <div>
                <label for="postComment">Comment</label>
                <textarea id="postComment" name="postComment" class="input-field" placeholder="Enter your comment" rows="4"></textarea>
            </div>
            <button type="button" onclick="createPost()" class="btn btn-primary">Create Post</button>
        </form>
    </section>

    <section class="card">
        <h3>Recent Posts</h3>
        <div id="recentPosts" class="posts-container">
        </div>
    </section>

    <section class="card">
        <h3>Activity Feed</h3>
        <ul>
            <li>User1 liked your post</li>
            <li>User2 commented on your photo</li>
            <li>User3 started following you</li>
        </ul>
    </section>
    <br>
</div>

<script type="module">
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

function createInterestCards(interests) {
    const interestsSection = document.getElementById('interestsSection');
    interestsSection.innerHTML = '';
    
    if (!interests || interests.length === 0) {
        const placeholderInterests = ['Gaming', 'Reading', 'Music', 'Art'];
        placeholderInterests.forEach((interest, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h4>${interest}</h4>
                <img src="https://placehold.co/300x200/d34e3f/a3adbf/png?text=${interest}" alt="${interest}">
                <button onclick="deleteInterest('${interest}')">Delete</button>
                <button onclick="editInterest('${interest}')">Edit</button>
            `;
            interestsSection.appendChild(card);
        });
        return;
    }

    interests.forEach(interest => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${interest}</h4>
            <img src="https://placehold.co/300x200/d34e3f/a3adbf/png?text=${interest}" alt="${interest}">
            <button onclick="deleteInterest('${interest}')">Delete</button>
            <button onclick="editInterest('${interest}')">Edit</button>
        `;
        interestsSection.appendChild(card);
    });
}

function createFollowerCards(followers) {
    const followersSection = document.getElementById('followersSection');
    followersSection.innerHTML = '';
    
    if (!followers || followers.length === 0) {
        const placeholderFollowers = ['Gaming', 'Reading', 'Music', 'Art'];
        placeholderFollowers.forEach((follower, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h4>${follower}</h4>
                <img src="https://placehold.co/300x200/218f66/a3adbf/png?text=${interest}" alt="${interest}">
            `;
            followersSection.appendChild(card);
        });
        return;
    }

    followers.forEach(follower => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${follower}</h4>
            <img src="https://placehold.co/300x200/218f66/a3adbf/png?text=${follower}" alt="${follower}">
        `;
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
        const response = await fetch(pythonURI + "/api/mutual_connections", fetchOptions);
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

const yellowShades = ['#f6e05e', '#ecc94b', '#d69e2e', '#b7791f', '#975a16'];

function createWebNode(name, x, y) {
    const node = document.createElement('div');
    node.className = 'web-node';
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.backgroundColor = yellowShades[Math.floor(Math.random() * yellowShades.length)];
    node.textContent = name;
    return node;
}

function createWebLine(x1, y1, x2, y2) {
    const line = document.createElement('div');
    line.className = 'web-line';
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.width = `${Math.hypot(x2 - x1, y2 - y1)}px`;
    line.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;
    return line;
}

function createMyFollowerCards(followers) {
    createMyFollowerWeb(followers);
}

async function updateUserInfo() {
    try {
        const response = await fetch(pythonURI + "/api/user", {
            ...fetchOptions,
            method: 'GET'
        });
        const data = await response.json();
        
        document.getElementById('username').textContent = data.name || 'User Name';
        
        if (data.pfp) {
            document.getElementById('profilePicture').src = data.pfp;
        }
        
        const interestsResponse = await fetch(pythonURI + "/api/interests", {
            ...fetchOptions,
            method: 'GET'
        });
        const interestsData = await interestsResponse.json();
        const interests = interestsData ? interestsData.split(',').map(i => i.trim()).filter(i => i) : [];
        createInterestCards(interests);

        const followers = data.followers ? data.followers.split(',').map(i => i.trim()).filter(i => i) : [];
        createFollowerCards(followers);

        const myFollowersResponse = await fetch(pythonURI + "/api/following", {
            ...fetchOptions,
            method: 'GET'
        });
        const myFollowersData = await myFollowersResponse.json();
        const myFollowers = myFollowersData ? myFollowersData : [];
        createMyFollowerCards(myFollowers);

    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateUserInfo);

async function fetchProfilePicture() {
    try {
        const response = await fetch(pythonURI + "/api/id/pfp", fetchOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch profile picture');
        }
        const data = await response.json();
        if (data && data.pfp) {
            document.getElementById('profilePicture').src = `data:image/jpeg;base64,${data.pfp}`;
        }
    } catch (error) {
        console.error('Error fetching profile picture:', error);
        showError('Error fetching profile picture');
    }
}

function setPlaceholders(userData) {
    const uidInput = document.getElementById('newUid');
    const nameInput = document.getElementById('newName');
    const interestsInput = document.getElementById('newInterests');
    const followersInput = document.getElementById('newFollowers');

    if (userData.uid) uidInput.placeholder = userData.uid;
    if (userData.name) nameInput.placeholder = userData.name;
    if (userData.followers) followersInput.placeholder = userData.followers;
}

async function updateProfile(field, value) {
    try {
        if (field === 'interests' && value) {
            const response = await fetch(pythonURI + "/api/user", fetchOptions);
            const userData = await response.json();
            const currentInterests = userData.interests ? userData.interests.split(',').map(i => i.trim()) : [];
            const newInterests = value.split(',').map(i => i.trim());
            const combinedInterests = [...new Set([...currentInterests, ...newInterests])];
            value = combinedInterests.join(', ');

            const updateResponse = await fetch(pythonURI + "/api/interests", {
                ...fetchOptions,
                method: 'PUT',
                body: JSON.stringify({ interests: value })
            });

            if (!updateResponse.ok) {
                throw new Error('Failed to update interests');
            }

            showError('Interests updated successfully', 'green');
            updateUserInfo();
            return;
        }

        if (field === 'followers' && value) {
            const response = await fetch(pythonURI + "/api/user", fetchOptions);
            const userData = await response.json();
            const currentFollowers = userData.followers ? userData.followers.split(',').map(i => i.trim()) : [];
            const newFollowers = value.split(',').map(i => i.trim());
            const combinedFollowers = [...new Set([...currentFollowers, ...newFollowers])];
            value = combinedFollowers.join(', ');

            const updateResponse = await fetch(pythonURI + "/api/user", {
                ...fetchOptions,
                method: 'PUT',
                body: JSON.stringify({ followers: value })
            });

            if (!updateResponse.ok) {
                const errorData = await updateResponse.json();
                throw new Error(errorData.message || 'Failed to update followers');
            }

            showError('Followers updated successfully', 'green');
            updateUserInfo();
            return;
        }

        const response = await fetch(pythonURI + "/api/user", {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify({
                [field]: value
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

        showError('Profile updated successfully', 'green');
        updateUserInfo();
    } catch (error) {
        console.error('Error updating profile:', error);
        showError(error.message || 'Error updating profile');
    }
}

async function deleteInterest(interest) {
    try {
        const response = await fetch(pythonURI + "/api/interests", {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify({ interest: interest })
        });

        if (!response.ok) {
            throw new Error('Failed to delete interest');
        }

        showError('Interest deleted successfully', 'green');
        updateUserInfo();
    } catch (error) {
        console.error('Error deleting interest:', error);
        showError('Error deleting interest');
    }
}

window.deleteInterest = deleteInterest;

async function editInterest(oldInterest) {
    const newInterest = prompt("Edit interest:", oldInterest);
    if (newInterest && newInterest.trim() !== "") {
        try {
            // Delete the old interest
            await fetch(pythonURI + "/api/interests", {
                ...fetchOptions,
                method: 'DELETE',
                body: JSON.stringify({ interest: oldInterest })
            });

            // Add the new interest
            const response = await fetch(pythonURI + "/api/interests", {
                ...fetchOptions,
                method: 'PUT',
                body: JSON.stringify({ interests: newInterest })
            });

            if (!response.ok) {
                throw new Error('Failed to edit interest');
            }

            showError('Interest edited successfully', 'green');
            updateUserInfo();
        } catch (error) {
            console.error('Error editing interest:', error);
            showError('Error editing interest');
        }
    }
}

window.editInterest = editInterest;

async function uploadProfilePicture(file) {
    try {
        const base64String = await convertToBase64(file);
        const response = await fetch(pythonURI + "/api/id/pfp", {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify({ pfp: base64String })
        });

        if (!response.ok) {
            throw new Error('Failed to upload profile picture');
        }

        showError('Profile picture updated successfully', 'green');
        fetchProfilePicture();
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        showError('Error uploading profile picture');
    }
}

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

function showError(message, color = 'red') {
    const messageElement = document.getElementById('profile-message');
    messageElement.style.color = color;
    messageElement.textContent = message;
    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);
}

async function displayCurrentInterests() {
    try {
        const response = await fetch(pythonURI + "/api/user", fetchOptions);
        const userData = await response.json();
        if (userData.interests) {
            const formattedInterests = userData.interests.split(',').map(i => i.trim()).filter(i => i).join(', ');
            document.getElementById('newInterests').placeholder = `Current interests: ${formattedInterests}`;
        }
    } catch (error) {
        console.error('Error fetching current interests:', error);
    }
}

async function displayCurrentFollowers() {
    try {
        const response = await fetch(pythonURI + "/api/user", fetchOptions);
        const userData = await response.json();
        if (userData.followers) {
            const formattedFollowers = userData.followers.split(',').map(i => i.trim()).filter(i => i).join(', ');
            document.getElementById('newFollowers').placeholder = `Current follower: ${formattedFollowers}`;
        }
    } catch (error) {
        console.error('Error fetching current followers:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProfilePicture();
    displayCurrentInterests();
    displayCurrentFollowers();

    const profilePictureInput = document.getElementById('profilePictureUpload');
    profilePictureInput.addEventListener('change', (e) => {
        if (e.target.files[0]) {
            uploadProfilePicture(e.target.files[0]);
        }
    });

    const inputs = ['newUid', 'newName', 'newPassword', 'newInterests', 'newFollowers'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('change', (e) => {
            if (e.target.value) {
                updateProfile(id.replace('new', '').toLowerCase(), e.target.value);
                e.target.value = '';
            }
        });
    });

    const themeToggle = document.querySelector('.theme-switch');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.body.classList.add(savedTheme + '-theme');
    
    // Update initial button text
    updateThemeButtonText(savedTheme);

    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Remove old theme class and add new one
        root.classList.remove(currentTheme + '-theme');
        root.classList.add(newTheme + '-theme');
        
        // Save preference
        localStorage.setItem('site-theme', newTheme);
        
        // Update button text
        updateThemeButtonText(newTheme);
    });

    function updateThemeButtonText(theme) {
        const themeText = themeToggle.querySelector('.theme-text');
        themeText.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`;
    }
});

window.onload = function() {
    fetchPosts();
};

async function fetchPosts() {
    const channelData = {
        channel_id: 7 
    };

    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(channelData)
        });

        if (!response.ok) {
            throw new Error('Failed to get posts: ' + response.statusText);
        }

        const posts = await response.json();
        const postsContainer = document.getElementById('recentPosts');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('message-bubble');
            
            const titleElement = document.createElement('div');
            titleElement.classList.add('post-title');
            titleElement.textContent = post.title;
            
            const commentElement = document.createElement('div');
            commentElement.classList.add('post-comment');
            commentElement.textContent = post.comment;
            
            postElement.appendChild(titleElement);
            postElement.appendChild(commentElement);
            postsContainer.appendChild(postElement);
        });

    } catch (error) {
        console.error('Error fetching posts:', error);
        const postsContainer = document.getElementById('recentPosts');
        postsContainer.innerHTML = '<p style="color: #e53e3e;">Error loading posts. Please try again later.</p>';
    }
}

async function createPost() {
    const title = document.getElementById('postTitle').value.trim();
    const comment = document.getElementById('postComment').value.trim();
    
    if (!title || !comment) {
        alert('Please fill in both title and comment fields');
        return;
    }

    const postData = {
        title: title,
        comment: comment,
        channel_id: 7,
    };

    try {
        const response = await fetch(`${pythonURI}/api/post`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Failed to create post: ' + response.statusText);
        }

        document.getElementById('newPostForm').reset();
        alert('Post created successfully!');
        
        // Refresh posts after creating a new one
        await fetchPosts();
        
    } catch (error) {
        console.error('Error creating post:', error);
        alert('Failed to create post. Please try again.');
    }
}

window.createPost = createPost;
</script>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    
    // Check initial theme
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Update theme
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('site-theme', newTheme);
        updateThemeUI(newTheme);
    });
    
    function updateThemeUI(theme) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        themeText.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`;
    }
});
</script>