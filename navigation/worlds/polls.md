---
layout: post
show_reading_time: false
search_exclude: true
permalink: /prism/polls
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

<header class="heading">
    <h1>Quick Polls</h1>
    <p>Your Community, Your voice!</p>
</header>


<!-- Original poll form (Form 1) -->
<center>
    <div class="form-container submit-answer-container" id="pollForm1">
        <h2 style="text-align: center;">Submit Your Answer Here</h2>
        <form onsubmit="submitPoll('pollForm1'); return false;">
            <label for="addPollInterests1">What is your favorite genre of music?</label>
            <input type="text" id="addPollInterests1" name="interests" placeholder="Enter your interests" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</center>

<!-- Poll Form 2 -->
<center>
    <div class="form-container submit-answer-container" id="pollForm2" style="display:none;">
        <h2 style="text-align: center;">Poll Question 2</h2>
        <form onsubmit="submitPoll('pollForm2'); return false;">
            <label for="addPollInterests2">What is your favorite movie genre?</label>
            <input type="text" id="addPollInterests2" name="interests" placeholder="Enter your interests" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</center>

<!-- Poll Form 3 -->
<center>
    <div class="form-container submit-answer-container" id="pollForm3" style="display:none;">
        <h2 style="text-align: center;">Poll Question 3</h2>
        <form onsubmit="submitPoll('pollForm3'); return false;">
            <label for="addPollInterests3">What is your favorite book genre?</label>
            <input type="text" id="addPollInterests3" name="interests" placeholder="Enter your interests" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</center>

<!-- Poll Form 4 -->
<center>
    <div class="form-container submit-answer-container" id="pollForm4" style="display:none;">
        <h2 style="text-align: center;">Poll Question 4</h2>
        <form onsubmit="submitPoll('pollForm4'); return false;">
            <label for="addPollInterests4">What is your favorite travel destination?</label>
            <input type="text" id="addPollInterests4" name="interests" placeholder="Enter your interests" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</center>

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

    .popup-button {
        display: block;
        width: 200px;
        margin: 10px auto;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
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

<div id="popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h2>How to Use the Polls</h2>
        <p>Welcome to the Polls Page! Here's how it works:</p>
        <ul>
            <li><strong>Submit Answers:</strong> Use each poll form to provide your favorite choices.</li>
            <li><strong>Cycle Forms:</strong> After submitting one form, the next one appears automatically.</li>
            <li><strong>Review Results:</strong> Check your submissions and everyone else’s in the results table.</li>
            <li><strong>Edit or Delete:</strong> If you created a poll entry, you can update or remove it.</li>
        </ul>
    </div>
</div>

<script>
    function showPopup() {
        const popup = document.getElementById('popup');
        const closeBtn = popup.querySelector('.close');
        popup.style.display = 'block';

        closeBtn.onclick = function() {
            popup.style.display = 'none';
        };

        window.onclick = function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        };
    }

    // Show popup on page load
    document.addEventListener("DOMContentLoaded", () => {
        showPopup();
    });
</script>

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    window.addPoll = async function addPoll() {

        var user = await fetch(`${pythonURI}/api/user`, fetchOptions);

        const userData = await user.json();
        console.log("User data", userData);

        const username = userData.name;
        // console.log(username)
        const name = `${username}`;
        const interests = document.getElementById('addPollInterests').value;
        const payload = { name, interests };

        try {
            const response = await fetch(`${pythonURI}/api/poll`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            console.log('Poll created:', data);
            location.reload();
        } catch (error) {
            console.error('Error creating poll:', error);
        }
    }
</script>


<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    // 1) Inline delete function for a given poll ID
    window.deletePollById = async function(id) {
        const payload = { id };
        try {
            const response = await fetch(`${pythonURI}/api/poll`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            console.log(data);
            location.reload();
        } catch (error) {
            console.error('Error deleting poll:', error);
        }
    }

    // 2) For the separate form
    window.deletePollForm = function() {
        const id = document.getElementById('deletePollId').value;
        window.deletePollById(id);
    }

    // 3) Inline update function for a given poll ID
    window.updatePollById = async function(id, newName, newInterests) {
        const payload = { id, name: newName, interests: newInterests };
        try {
            const response = await fetch(`${pythonURI}/api/poll`, {
                ...fetchOptions,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            console.log('Poll updated:', data);
            location.reload();
        } catch (error) {
            console.error('Error updating poll:', error);
        }
    }
</script>

<center>
    <h2>Poll Results</h2>
</center>
<br>

<center>
    <!-- Table with inline editing and inline delete -->
    <table class="submit-answer-container">
        <thead>
            <tr>
                <th>Name</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody id="poll-data">
            <!-- Rows dynamically added here -->
        </tbody>
    </table>
</center>

<div id="dataOutput"></div>

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    // Fetch current user info
    const userResponse = await fetch(`${pythonURI}/api/user`, fetchOptions);
    if (!userResponse.ok) {
        throw new Error('Failed to fetch user info: ' + userResponse.statusText);
    }
    const userData = await userResponse.json();
    const currentUserName = userData.name;  // Used for comparison

    // Fetch poll data and group by name
    try {
        const response = await fetch(`${pythonURI}/api/poll`, fetchOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Fetched polls:', data);

        // Group polls by author name
        const groupedPolls = {};
        data.forEach(item => {
            if (!groupedPolls[item.name]) {
                groupedPolls[item.name] = [];
            }
            groupedPolls[item.name].push(item);
        });

        const pollData = document.getElementById('poll-data');
        pollData.innerHTML = '';

        // For each group, create one table row
        Object.entries(groupedPolls).forEach(([name, polls]) => {
            const row = document.createElement('tr');

            // Name cell (author)
            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            row.appendChild(nameCell);

            // Combined poll results cell
            const resultsCell = document.createElement('td');
            polls.forEach(pollItem => {
                const pollContainer = document.createElement('div');
                pollContainer.style.marginBottom = '10px';

                // Split the poll result into prefix (question) and suffix (answer)
                const fullInterests = pollItem.interests || '';
                const colonIndex = fullInterests.indexOf(':');
                let prefix = fullInterests;
                let suffix = '';
                if (colonIndex !== -1) {
                    prefix = fullInterests.slice(0, colonIndex);
                    suffix = fullInterests.slice(colonIndex + 1).trim();
                }

                // Create a separate element to display the question prefix
                const questionPrompt = document.createElement('label');
                questionPrompt.style.fontWeight = 'bold';
                questionPrompt.textContent = prefix;
                pollContainer.appendChild(questionPrompt);

                // Optionally add a line break:
                pollContainer.appendChild(document.createElement('br'));

                // Create an input field for the user’s answer only
                const interestsInput = document.createElement('input');
                interestsInput.type = 'text';
                interestsInput.value = suffix;
                if (name !== currentUserName) {
                    interestsInput.disabled = true;
                }
                pollContainer.appendChild(interestsInput);

                // If the current user owns the poll item, enable update/delete
                if (name === currentUserName) {
                    const updateButton = document.createElement('button');
                    updateButton.textContent = 'Update';
                    updateButton.style.backgroundColor = 'green';
                    updateButton.style.color = 'white';
                    updateButton.style.border = 'none';
                    updateButton.style.padding = '4px 8px';
                    updateButton.style.marginLeft = '5px';
                    updateButton.style.cursor = 'pointer';
                    updateButton.onclick = () => {
                        // Only the suffix can be changed
                        const updatedSuffix = interestsInput.value.trim();
                        const updatedInterests = prefix + ':' + ' ' + updatedSuffix;
                        window.updatePollById(pollItem.id, name, updatedInterests);
                    };
                    pollContainer.appendChild(updateButton);

                    // Delete button
                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.style.backgroundColor = 'red';
                    deleteButton.style.color = 'white';
                    deleteButton.style.border = 'none';
                    deleteButton.style.padding = '4px 8px';
                    deleteButton.style.marginLeft = '5px';
                    deleteButton.style.cursor = 'pointer';
                    deleteButton.onclick = function() {
                        window.deletePollById(pollItem.id);
                    };
                    pollContainer.appendChild(deleteButton);
                }
                resultsCell.appendChild(pollContainer);
            });
            row.appendChild(resultsCell);
            pollData.appendChild(row);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
</script>

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    // Array of form IDs in the desired cycling order
    const formIds = ['pollForm1', 'pollForm2', 'pollForm3', 'pollForm4'];

    // On page load, check if a form index was saved previously
    const savedFormIndex = localStorage.getItem('currentFormIndex');
    if (savedFormIndex !== null) {
        const parsedIndex = parseInt(savedFormIndex);
        // Hide all forms at first
        formIds.forEach(id => document.getElementById(id).style.display = 'none');
        // Show the saved form if valid
        if (!isNaN(parsedIndex) && formIds[parsedIndex]) {
            document.getElementById(formIds[parsedIndex]).style.display = 'block';
        } else {
            // Default to first form if index is invalid
            document.getElementById(formIds[0]).style.display = 'block';
        }
    }

    // Submits the poll answer from the given form ID and cycles to the next form
    window.submitPoll = async function(formId) {
        const formDiv = document.getElementById(formId);
        const labelElement = formDiv.querySelector('label');
        const originalQuestion = labelElement ? labelElement.innerText : '';
        const input = formDiv.querySelector('input[name="interests"]');
        const userInput = input.value;

        // Transform the question as requested
        function transformQuestion(q) {
            // Example transformation removing "What is your" and "?"
            let result = q.replace(/What is your favorite\s*/i, "Favorite ").replace(/\?$/, "");
            return result.trim();
        }

        const finalQuestion = transformQuestion(originalQuestion);
        const finalInterests = `${finalQuestion}: ${userInput}`;

        const userResponse = await fetch(`${pythonURI}/api/user`, fetchOptions);
        if (!userResponse.ok) {
            throw new Error('Failed to fetch user info: ' + userResponse.statusText);
        }
        const userData = await userResponse.json();
        const username = userData.name;
        const payload = { name: username, question: finalQuestion, interests: finalInterests };

        try {
            const response = await fetch(`${pythonURI}/api/poll`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const currentIndex = formIds.indexOf(formId);
            const nextIndex = (currentIndex < formIds.length - 1) ? currentIndex + 1 : 0;
            localStorage.setItem('currentFormIndex', nextIndex);
            location.reload();
        } catch (error) {
            console.error('Error creating poll:', error);
        }
    }
</script>