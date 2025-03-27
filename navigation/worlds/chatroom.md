---
layout: post
search_exclude: true
show_reading_time: false
permalink: /prism/topicchatroom
---

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

<header class="heading">
    <h1>Random Chatroom</h1>
    <p>Chat Across The World!</p>
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
    import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';
    window.editMessage = async function (postId) {
        // Get the current message text from the DOM
        const messageElement = document.querySelector(`#chat-${postId} .message-content p strong`);
        if (!messageElement) {
            alert("Message not found.");
            return;
        }
        const currentMessage = messageElement.textContent;

        // Open a prompt with the existing message pre-filled
        const newComment = prompt("Edit your message:", currentMessage);
        if (newComment !== null && newComment.trim() !== "") {
            const postData = {
                id: postId,
                message: newComment, // Only include the updated comment field
            };
            try {
                const response = await fetch(`${pythonURI}/api/chat`, {
                    ...fetchOptions,
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });
                if (!response.ok) {
                    throw new Error("Failed to update post: " + response.statusText);
                }
                // Backend returns the updated post data
                const result = await response.json();
                console.log("Post updated successfully:", result);
                // Update the message content in the DOM
                messageElement.textContent = newComment;
            } catch (error) {
                console.error("Error updating post:", error);
                alert("Failed to edit the post.");
            }
        }
    };
    window.deleteMessage = async function (postId) {
        const confirmDelete = confirm("Are you sure you want to delete this message?");
        if (confirmDelete) {
            const postData = {
                id: postId,
            };
            try {
                const response = await fetch(`${pythonURI}/api/chat`, {
                    ...fetchOptions,
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });
                if (!response.ok) {
                    throw new Error("Failed to delete post: " + response.statusText);
                }
                console.log("Post deleted successfully");
                // Remove the message element from the DOM
                const messageElement = document.getElementById(`chat-${postId}`);
                if (messageElement) {
                    messageElement.remove();
                }
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("Failed to delete the post.");
            }
        }
    };
    let selectedChannelId = null;
    async function sendMessage() {
        const chatBox = document.getElementById('chatBox');
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if (message) {
            // Temporary placeholder element until the backend confirms the post ID
            const tempId = `temp-${Date.now()}`;
            const messageElement = document.createElement('div');
            messageElement.className = 'chat-message';
            messageElement.id = tempId;
            messageElement.innerHTML = `
                <div class="message-content">
                    <p><strong>${message}</strong></p>
                    <button class="edit-button" onclick="editMessage('${tempId}')">Edit</button>
                    <button class="delete-button" onclick="deleteMessage('${tempId}')">Delete</button>
                </div>
            `;
            chatBox.appendChild(messageElement);
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
            // Send data to the backend
            const postData = {
                message: message,
                channel_id: selectedChannelId,
            };
            try {
                const response = await fetch(`${pythonURI}/api/chat`, {
                    ...fetchOptions,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
                if (!response.ok) {
                    throw new Error('Failed to add post: ' + response.statusText);
                }
                // Backend returns the post data with the generated ID
                const result = await response.json();
                const postId = result.id; // Assuming `result.id` contains the new post ID
                // Update the temporary message element with the correct post ID
                const tempElement = document.getElementById(tempId);
                tempElement.id = `post-${postId}`;
                tempElement.querySelector('.edit-button').setAttribute('onclick', `editMessage(${postId})`);
                tempElement.querySelector('.delete-button').setAttribute('onclick', `deleteMessage(${postId})`);
                console.log('Message posted successfully:', result);
            } catch (error) {
                console.error('Error adding post:', error);
                // Remove the temporary message element if the request fails
                document.getElementById(tempId).remove();
            }
            const channelId = document.getElementById('channel_id').value;
            fetchData(channelId);
        }
    }
    window.sendMessage = sendMessage;
    async function sendToGeminiAPI(interest1, interest2) {
        const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDNHLzvRAVXpdW7mf32lWdxjWoVwxvpD-c";
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: `Create a random question to get two people talking based on their interests. For example, if one interest was F1 Cars, and another interest was Engineering, a possible question you could make is "What are your opinions on the Engines of F1 Cars?". The two interests are ${interest1} and ${interest2}. Just include the question, NOTHING else.` }]
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
    async function createChannel(channelName) {
        const groupId = 3; // Replace with the appropriate group_id
        const attributes = {
            description: "Channel created with AI-generated question."
        };
        try {
            const response = await fetch(`${pythonURI}/api/channel`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: channelName,
                    group_id: groupId,
                    attributes: attributes
                })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Channel created successfully:', data);

            // Automatically fetch and update the channels after a new channel is created
            await fetchChannels('Random Chatroom');

        } catch (error) {
            console.error('Error creating channel:', error);
            alert('An error occurred while creating the channel.');
        }
    }
    async function updateAIQuestionAndCreateChannel(interest1, interest2) {
        const aiQuestionElement = document.getElementById('aiQuestion');
        aiQuestionElement.textContent = "Generating question...";
        const newQuestion = await sendToGeminiAPI(interest1, interest2);
        aiQuestionElement.textContent = newQuestion;
        if (newQuestion && newQuestion !== "An error occurred while communicating with the AI.") {
            await createChannel(newQuestion);
        } else {
            alert("Failed to generate a valid question.");
        }
    }
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ section_name: "Prism" }) // Adjust the section name as needed
            });

            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }

            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');

            // Clear previous options and add default selection
            groupSelect.innerHTML = '';

            groups.forEach((group, index) => {
                const option = document.createElement('option');
                option.value = group.name; // Use group name for payload
                option.textContent = group.name;
                if (index === 0) {
                    option.selected = true; // Ensure the first option is selected
                }
                groupSelect.appendChild(option);
            });

            // Automatically fetch channels for the first group
            if (groups.length > 0) {
                console.log("hi")
                console.log(groups[0].name)
                fetchChannels(groups[0].name);
            }
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }
    async function fetchChannels(groupName) {
        try {
            const response = await fetch(`${pythonURI}/api/channels/filter`, {
                ...fetchOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ group_name: groupName })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch channels: ' + response.statusText);
            }
            const channels = await response.json();
            const channelSelect = document.getElementById('channel_id');
            channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
            channels.forEach(channel => {
                const option = document.createElement('option');
                option.value = channel.id;
                option.textContent = channel.name;
                channelSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    }
    document.getElementById('group_id').addEventListener('change', function() {
        const groupName = this.value;
        if (groupName) {
            fetchChannels(groupName);
            console.log(groupName)
        } else {
            document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        }
    });
    /**
     * Handle form submission for selection
     * Select Button: Computer fetches and displays posts
     */
    document.getElementById('selectionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const groupId = document.getElementById('group_id').value;
        const channelId = document.getElementById('channel_id').value;
        selectedChannelId = document.getElementById('channel_id').value;
        if (groupId && channelId) {
            fetchData(channelId);
        } else {
            alert('Please select both group and channel.');
        }
    });
    async function displayCurrentInterests() {
        try {
            const response = await fetch(pythonURI + "/api/user", fetchOptions);
            const userData = await response.json();
            console.log(userData)
            if (userData.interests) {
                const formattedInterests = userData.interests.split(',').map(i => i.trim()).filter(i => i).join(', ');
                const interestList = formattedInterests.split(", ")
                console.log(interestList[0])
                document.getElementById('interest1').innerText = `Interest 1: ${interestList[0]}`;
                document.getElementById('interest2').innerText = `Interest 2: ${interestList[1]}`;
            }
        } catch (error) {
            console.error('Error fetching current interests:', error);
        }
    }
    async function fetchData(channelId) {
        try {
            // Fetch the current logged-in user
            const userResponse = await fetch(`${pythonURI}/api/user`, fetchOptions);
            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await userResponse.json();
            const currentUserId = userData.id; // Logged-in user's ID
            // Fetch chat messages for the selected channel
            const response = await fetch(`${pythonURI}/api/chat?id=${channelId}`, {
                ...fetchOptions,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch chats: ' + response.statusText);
            }
            const chatData = await response.json();
            console.log(chatData); // Debugging: See what data is returned
            const chatBox = document.getElementById('chatBox');
            chatBox.innerHTML = '';
            chatData.forEach(chatItem => {
                const messageElement = document.createElement('div');
                messageElement.className = 'chat-message';
                messageElement.id = `chat-${chatItem.id}`;
                let buttonsHTML = "";
                if (chatItem.user_id === currentUserId || currentUserId === 1) { // Admin (ID 1) can edit/delete all
                    buttonsHTML = `
                        <button class="edit-button" onclick="editMessage(${chatItem.id})">Edit</button>
                        <button class="delete-button" onclick="deleteMessage(${chatItem.id})">Delete</button>
                    `;
                }
                messageElement.innerHTML = `
                    <div class="message-content">
                        <p><strong>${chatItem.message}</strong></p>
                        ${buttonsHTML}
                    </div>
                `;
                chatBox.appendChild(messageElement);
            });
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    window.updateAIQuestionAndCreateChannel = updateAIQuestionAndCreateChannel;
    fetchGroups();
    displayCurrentInterests()
</script>
<div class="main">
    <div class="interests">
        <div id="interest1"></div>
        <div id="interest2"></div>
    </div>
    <div class="chat-container">
    <button class="popup-button" onclick="showPopup()">Show Instructions</button>
    <h2>
        <span class="ai-text">AI Generated Prompt</span><br>
        <span id="aiQuestion">Generate a Random Question</span>
    </h2>
    <button 
    onclick="updateAIQuestionAndCreateChannel(
        document.getElementById('interest1').textContent, 
        document.getElementById('interest2').textContent
    )"
>Generate New Question & Create Channel</button>
    <div class="form-container">
            <h2>Select Group and Channel</h2>
            <form id="selectionForm">
                <label for="group_id">Group:</label>
                <select id="group_id" name="group_id" required>
                    <option value="">Select a group</option>
                </select>
                <label for="channel_id">Channel:</label>
                <select id="channel_id" name="channel_id" required>
                    <option value="">Select a channel</option>
                </select>
                <button type="submit">Select</button>
            </form>
        </div>
    <div id="chatBox"></div>
    <div class="message-input">
        <input type="text" id="messageInput" placeholder="Send a Message">
        <button onclick="sendMessage()">Send</button>
    </div>
</div>
</div>

<div id="popup" class="popup">
    <div class="popup-content">
        <span class="close">&times;</span>
        <h2>How to Use the Chatroom</h2>
        <p>Welcome to the Random Chatroom! Here's how it works:</p>
        <ul>
            <li><strong>AI-Powered Conversation Starters:</strong> Click "Generate New Question & Create Channel" to generate a new AI-driven topic and start a new conversation.</li>
            <li><strong>Join a Group and Channel:</strong> Select a channel from the dropdown menus, then click "Select" to join the conversation.</li>
            <li><strong>Send Messages:</strong> Type a message in the input box and click "Send" to chat with others.</li>
            <li><strong>Edit or Delete Messages:</strong> Click "Edit" to modify your message or "Delete" to remove it.</li>
        </ul>
    </div>
</div>