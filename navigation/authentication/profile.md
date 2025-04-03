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
                <label for="newLocations">Enter New Saved Location:</label>
                <input type="text" id="newLocation" placeholder="New Saved Location (e.g. 123 Main St.)">
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
        <h3>My Saved Locations</h3>
        <p>Click on a location to view more details</p>
        <section class="grid grid-cols-2" id="interestsSection"></section>
    </section>

    <section class="grid grid-cols-2" id="interestsSection">
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

document.addEventListener('DOMContentLoaded', () => {
    updateUserInfo();

    const settingsLocationInput = document.getElementById('newLocation');
    if (settingsLocationInput) {
        settingsLocationInput.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const newLoc = settingsLocationInput.value.trim();
                if (!newLoc) return;

                try {
                    const res = await fetch(pythonURI + "/api/savedlocations", {
                        ...fetchOptions,
                        method: 'POST',
                        body: JSON.stringify({ savedlocation: newLoc })
                    });

                    if (!res.ok) throw new Error('Failed to add location');
                    settingsLocationInput.value = '';
                    showError('Location added successfully!', 'green');
                    updateUserInfo();
                } catch (err) {
                    console.error(err);
                    showError('Error adding location');
                }
            }
        });
    }
});


function createInterestCards(locations) {
    const interestsSection = document.getElementById('interestsSection');
    interestsSection.innerHTML = '';
    
    if (!locations || locations.length === 0) {
        const placeholder = ['123 Main St.', '456 Oak Ave.', '789 Pine Dr.'];
        placeholder.forEach((loc) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h4>${loc}</h4>
                <img src="https://placehold.co/300x200/d34e3f/a3adbf/png?text=${encodeURIComponent(loc)}" alt="${loc}">
                <button onclick="deleteInterest('${loc}')">Delete</button>
                <button onclick="editInterest('${loc}')">Edit</button>
            `;
            interestsSection.appendChild(card);
        });
        return;
    }

    locations.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${loc}</h4>
            <img src="https://placehold.co/300x200/d34e3f/a3adbf/png?text=${encodeURIComponent(loc)}" alt="${loc}">
            <button onclick="deleteInterest('${loc}')">Delete</button>
            <button onclick="editInterest('${loc}')">Edit</button>
        `;
        interestsSection.appendChild(card);
    });
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

        const savedLocationsResponse = await fetch(pythonURI + "/api/savedlocations", {
            ...fetchOptions,
            method: 'GET'
        });
        const locationsData = await savedLocationsResponse.json();
        const savedLocations = locationsData ? locationsData.split(',').map(i => i.trim()).filter(i => i) : [];
        createInterestCards(savedLocations);
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateUserInfo);

async function deleteInterest(loc) {
    try {
        const response = await fetch(pythonURI + "/api/savedlocations", {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify({ savedlocation: loc })
        });

        if (!response.ok) throw new Error('Failed to delete location');

        showError('Saved location deleted successfully', 'green');
        updateUserInfo();
    } catch (error) {
        console.error('Error deleting saved location:', error);
        showError('Error deleting saved location');
    }
}

window.deleteInterest = deleteInterest;

async function editInterest(oldLoc) {
    const newLoc = prompt("Edit saved location:", oldLoc);
    if (newLoc && newLoc.trim() !== "") {
        try {
            await fetch(pythonURI + "/api/savedlocations", {
                ...fetchOptions,
                method: 'DELETE',
                body: JSON.stringify({ savedlocation: oldLoc })
            });

            await fetch(pythonURI + "/api/savedlocations", {
                ...fetchOptions,
                method: 'PUT',
                body: JSON.stringify({ savedlocation: newLoc })
            });

            showError('Saved location updated successfully', 'green');
            updateUserInfo();
        } catch (error) {
            console.error('Error editing saved location:', error);
            showError('Error editing saved location');
        }
    }
}

window.editInterest = editInterest;
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