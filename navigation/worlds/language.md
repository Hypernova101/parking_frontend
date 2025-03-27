---
layout: post
show_reading_time: false
search_exclude: true
permalink: /prism/language
---

<header class="heading">
    <h1>Code Pallete</h1>
    <p>Sharing and displaying different coding languages!</p>
</header>

<script>
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

    document.addEventListener("DOMContentLoaded", () => {
        showPopup();
    });
</script>

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

<!-- Main content area with two columns -->
<div class="main">

    <!-- Left Column: CRUD Functions (Vertical) -->
    <div class="left-column">

        <!-- Submit, Update, and Delete forms inside one table -->
        <div class="container">
            <h2>Submit, Update, and Delete a Language</h2>
            <form id="crud-form">
                <label for="language-id">Language ID</label>
                <input type="number" id="language-id" placeholder="Enter ID" required />

                <label for="language-name">Language Name</label>
                <input type="text" id="language-name" placeholder="Enter name" required />

                <label for="language-creator">Creator Name</label>
                <input type="text" id="language-creator" placeholder="Enter creator" required />

                <label for="language-popularity">Popularity (1-100)</label>
                <input type="number" id="language-popularity" placeholder="Enter popularity" min="1" max="100" required />

                <div class="form-actions">
                    <button type="button" onclick="submitLanguage()">Submit</button>
                    <button type="button" onclick="updateLanguage()">Update</button>
                    <button type="button" onclick="deleteLanguage()">Delete</button>
                </div>
            </form>
        </div>

    </div>

    <!-- Right Column: CodePalette Table -->
    <div class="right-column">
        <div class="table-container">
            <h2>Language List</h2>
            <table id="languages-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Popularity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table rows will be populated dynamically -->
                </tbody>
            </table>
        </div>
    </div>

</div>

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    // Function to submit new language
    window.submitLanguage = async function submitLanguage() {
        const id = document.getElementById('language-id').value;
        const name = document.getElementById('language-name').value;
        const creator = document.getElementById('language-creator').value;
        const popularity = document.getElementById('language-popularity').value;

        if (!id || !name || !creator || !popularity) {
            alert('Please fill out all fields');
            return;
        }

        try {
            const response = await fetch(`${pythonURI}/api/language`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, name, creator, popularity })
            });

            if (response.ok) {
                alert('Language submitted successfully');
                fetchLanguages();
            } else {
                alert('Error submitting language');
            }
        } catch (error) {
            console.error('Error submitting language:', error);
            alert('Error submitting language');
        }
    };

    // Function to update a language
    window.updateLanguage = async function updateLanguage() {
        const id = document.getElementById('language-id').value;
        const name = document.getElementById('language-name').value;
        const creator = document.getElementById('language-creator').value;
        const popularity = document.getElementById('language-popularity').value;

        const payload = { id, name, creator, popularity };

        try {
            const response = await fetch(`${pythonURI}/api/language`, {
                ...fetchOptions,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Language updated successfully');
                fetchLanguages();
            } else {
                alert('Error updating language');
            }
        } catch (error) {
            console.error('Error updating language:', error);
            alert('Error updating language');
        }
    };

    // Function to delete a language
    window.deleteLanguage = async function deleteLanguage() {
        const id = document.getElementById('language-id').value;

        try {
            const response = await fetch(`${pythonURI}/api/language`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            if (response.ok) {
                alert('Language deleted successfully');
                fetchLanguages();
            } else {
                alert('Error deleting language');
            }
        } catch (error) {
            console.error('Error deleting language:', error);
            alert('Error deleting language');
        }
    };

    // Function to fetch and display the list of languages
    async function fetchLanguages() {
        try {
            const response = await fetch(`${pythonURI}/api/language`, fetchOptions);

            if (response.ok) {
                const data = await response.json();
                const tableBody = document.getElementById('languages-table').getElementsByTagName('tbody')[0];
                tableBody.innerHTML = '';

                data.forEach(language => {
                    const row = tableBody.insertRow();
                    row.insertCell(0).innerText = language.id;
                    row.insertCell(1).innerText = language.name;
                    row.insertCell(2).innerText = language.creator;
                    row.insertCell(3).innerText = language.popularity;

                    const actionsCell = row.insertCell(4);
                    const selectButton = document.createElement('button');
                    selectButton.innerText = 'Select';
                    selectButton.onclick = () => {
                        document.getElementById('language-id').value = language.id;
                        document.getElementById('language-name').value = language.name;
                        document.getElementById('language-creator').value = language.creator;
                        document.getElementById('language-popularity').value = language.popularity;
                    };
                    actionsCell.appendChild(selectButton);
                });
            } else {
                alert('Error fetching languages');
            }
        } catch (error) {
            alert('Error fetching languages');
        }
    }

    window.onload = fetchLanguages;
</script>

<!-- Popup for instructions -->
<div id="popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h2>How to Use the Code Palette</h2>
        <p>Welcome to the Code Palette! Here's how it works:</p>
        <ul>
            <li><strong>Submit, Update, and Delete a Language:</strong> Use the form on the left to submit, update, or delete a programming language. Fill in the required fields and click the corresponding button.</li>
            <li><strong>Language List:</strong> View the list of programming languages on the right. Use the search bar to filter languages.</li>
            <li><strong>Select a Language:</strong> Click the "Select" button next to a language to populate the form with its details for updating or deleting.</li>
            <li><strong>Adjust Popularity:</strong> Adjust the popularity to show how much you like a coding language!</li>
            <li><strong>Go Crazy:</strong> Add more languages, update existing ones, or delete the ones you don't like!</li>
        </ul>
    </div>
</div>

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
