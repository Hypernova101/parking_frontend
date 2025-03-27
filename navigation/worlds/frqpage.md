---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /prism/frqpage
---

<header class="heading">
    <h1>Daily Free Response Question</h1>
    <p>Enjoy writing your answer! We have plenty of topics to choose from!</p>
</header>

<div class="main">
    <div class="dropdown">
        <select id="topicSelect">
            <option value="">Select a topic</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="Literature">Literature</option>
        </select>
    </div>

    <button class="generate-btn" onclick="generateQuestion()">Generate Question</button>

    <div class="question-container">
        <h2>Your Question</h2>
        <div id="questionBox">Select a topic and click 'Generate Question' to get started.</div>
    </div>
</div>

<!-- Submit Your Answer Section -->
<div class="form-container submit-answer-container">
    <h2>Submit Your Answer Here</h2>
    <form id="postForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="comment">Comment:</label>
        <textarea id="comment" name="comment" required></textarea>
        <button type="submit">Send Answer</button>
    </form>
</div>

<div id="postIdDisplay" style="display: none; margin-top: 20px; background-color: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 5px; border: 1px solid #c0392b;"></div>

<script type="module">
        async function sendToGeminiAPI(topic) {
        const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDys2Y58wdsK-P1hr3ayHoAjt7MjTrBtkw";
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: `Create a thought-proving short free response question prompt for this topic: ${topic}` }]
                    }]
                })
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Error communicating with Gemini API:', error);
            return "An error occurred while communicating with the AI.";
        }
    }

    async function generateQuestion() {
        const topicSelect = document.getElementById('topicSelect');
        const questionBox = document.getElementById('questionBox');
        const selectedTopic = topicSelect.value;

        if (!selectedTopic) {
            questionBox.textContent = "Please select a topic first!";
            return;
        }

        questionBox.textContent = "Generating question...";

        const question = await sendToGeminiAPI(selectedTopic);
        questionBox.textContent = question;
    }

    // Expose the function to the global scope
    window.generateQuestion = generateQuestion;
</script>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const channelId = 6; // Hardset to Daily Question channel ID
        
        const postData = {
            title: title,
            comment: comment,
            channel_id: channelId
        };

        try {
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });

            if (!response.ok) throw new Error('Failed to add post: ' + response.statusText);
            const result = await response.json();
        } catch (error) {
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
    });
</script>


<div class="form-container crud-container">
    <h2>Manage Posts</h2>

    <!-- Post Cards Section with Edit & Delete Buttons -->
    <div class="crud-section post-list-container">
        <h3>All Posts</h3>
        <div id="postList" class="post-card-container">
            <!-- Posts will be dynamically populated here -->
        </div>
    </div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // Fetch and Display All Posts Automatically
    async function fetchPosts() {
        const postList = document.getElementById('postList');
        postList.innerHTML = '';

        try {
            const response = await fetch(`${pythonURI}/api/posts`, fetchOptions);
            if (!response.ok) throw new Error('Failed to fetch posts');

            const posts = await response.json();
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post-card';
                postElement.innerHTML = `
                    <div class="post-content">
                        <h4>${post.title}</h4>
                        <p>${post.comment}</p>
                        <p><strong>Channel:</strong> ${post.channel_name || 'Unknown'}</p>
                        <p><strong>User:</strong> ${post.user_name || 'Unknown'}</p>
                    </div>
                    <div class="post-actions">
                        <button class="edit-button" data-id="${post.id}" data-comment="${post.comment}">Edit</button>
                        <button class="delete-button" data-id="${post.id}">Delete</button>
                    </div>
                `;
                postList.appendChild(postElement);
            });

            // Attach event listeners to Edit and Delete buttons
            attachEditDeleteListeners();
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    // Attach event listeners to dynamically added Edit and Delete buttons
    function attachEditDeleteListeners() {
        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', function () {
                const postId = this.dataset.id;
                const comment = this.dataset.comment;
                const newComment = prompt('Edit your comment:', comment);
                if (newComment !== null) {
                    updatePost(postId, newComment);
                }
            });
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function () {
                const postId = this.dataset.id;
                if (confirm('Are you sure you want to delete this post?')) {
                    deletePost(postId);
                }
            });
        });
    }

    // Update Post Function
    async function updatePost(postId, comment) {
        try {
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: postId, comment })
            });
            if (!response.ok) throw new Error('Failed to update post');
            alert('Post updated successfully!');
            fetchPosts(); // Refresh posts list
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    // Delete Post Function
    async function deletePost(postId) {
        try {
            const response = await fetch(`${pythonURI}/api/post`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: postId })
            });
            if (!response.ok) throw new Error('Failed to delete post');
            alert('Post deleted successfully!');
            fetchPosts(); // Refresh posts list
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }

    // Fetch posts when the page loads
    document.addEventListener('DOMContentLoaded', fetchPosts);
</script>

<!-- Popup for instructions -->
<div id="popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h2>How to Use the Daily Question FRQ</h2>
        <p>Welcome to the Daily Question FRQ! Here's a step-by-step guide to get you started:</p>
        <ul>
            <li><strong>Select a Topic:</strong> Begin by choosing a topic from the dropdown menu. This will help tailor the question to your area of interest.</li>
            <li><strong>Generate a Question:</strong> Click the "Generate Question" button to receive a thought-provoking question based on your selected topic. The question will appear in the designated area below the button.</li>
            <li><strong>Submit Your Answer:</strong> Use the form provided to submit your answer. Enter a title and your detailed response in the comment section, then click "Send Answer" to submit.</li>
            <li><strong>View Responses:</strong> Navigate to the "All Posts" section to see responses from other users. This is a great way to gain different perspectives and insights.</li>
            <li><strong>Edit or Delete Your Response:</strong> If you wish to make changes to your submission, use the "Edit" button to update your response or the "Delete" button to remove it entirely.</li>
            <li><strong>Engage with the Community:</strong> Take the time to read through others' responses. Engaging with the community can enhance your understanding and provide new ideas.</li>
        </ul>
    </div>
</div>

<!-- Button to reopen the popup -->
<button id="howToUseButton" class="how-to-use-button">How To Use!</button>

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

    .how-to-use-button {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10001;
        background-color: #000;
        color: #fff;
        border: 1px solid red;
        border-radius: 5px;
        padding: 10px 15px;
        cursor: pointer;
        display: none; /* Initially hidden */
    }

    .how-to-use-button:hover {
        background-color: #333;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const popup = document.getElementById('popup');
        const closeBtn = document.querySelector('.popup .close');
        const howToUseButton = document.getElementById('howToUseButton');

        // Function to open the popup
        function openPopup() {
            popup.style.display = 'block';
            howToUseButton.style.display = 'none'; // Hide the button when popup is open
        }

        // Function to close the popup
        function closePopup() {
            popup.style.display = 'none';
            howToUseButton.style.display = 'block'; // Show the button when popup is closed
        }

        // Open the popup when the page loads
        openPopup();

        // Close the popup when the close button is clicked
        closeBtn.addEventListener('click', closePopup);

        // Close the popup when clicking outside of the popup content
        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                closePopup();
            }
        });

        // Reopen the popup when the "How To Use!" button is clicked
        howToUseButton.addEventListener('click', openPopup);
    });
</script>