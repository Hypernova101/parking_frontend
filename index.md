---
layout: post
search_exclude: true
hide: true
show_reading_time: false 
---

<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    async function checkAuthorization() {
        try {
            const response = await fetch(`${pythonURI}/api/id`, fetchOptions);

            if (response.status === 401) {
                // Redirect immediately to login if unauthorized
                window.location.href = "{{site.baseurl}}/login";
            } else if (response.ok) {
                // If authorized, allow body to render
                const contentElements = document.querySelectorAll('.content');
                contentElements.forEach(element => {
                    element.style.display = "block";
                });;
            }
        } catch (error) {
            console.error("Authorization check failed:", error);
            // Redirect to login as a fallback
            window.location.href = "{{site.baseurl}}/login";
        }
    }

    // Run the check before rendering anything
    checkAuthorization();
</script>

<style>
    .content {
        display: none;
    }

    .heading {
        background-color: #b30000;
        padding: 40px 20px;
        text-align: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .heading h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 0;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .heading p {
        font-size: 1.2rem;
        margin: 10px 0 0;
        color: #ffcccc;
    }

    section {
        margin-bottom: 40px;
        padding: 20px;
        background-color: #2e2e2e;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    section h2 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #ff6666;
        border-bottom: 2px solid #b30000;
        padding-bottom: 5px;
        display: inline-block;
    }

    .profile-card {
        background-color: #b30000;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 10px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .profile-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    }

    button {
        background-color: #ff4d4d;
        color: #ffffff;
        border: none;
        padding: 12px 25px;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        background-color: #e60000;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .green-button {
        background-color: #28a745;
    }

    .green-button:hover {
        background-color: #218838;
    }

    .purple-button {
        background-color: #ff3333;
        color: #ffffff;
    }

    .purple-button:hover {
        background-color: #b30000;
    }

    .copyright {
        background-color: #b30000;
        text-align: center;
        padding: 20px;
        font-size: 0.9rem;
        color: #ffcccc;
    }

    .copyright p {
        margin: 0;
    }
    #leaderboard-container {
        background-color: #2e2e2e;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    #leaderboard-container div {
        border-radius: 5px;
    }

    #leaderboard-container div div {
        border-radius: 5px;
    }

    .mini-card {
        background-color: #2e2e2e;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
    }

    .mini-card h2 {
        color: #ff6666;
        border-bottom: 2px solid #b30000;
        padding-bottom: 5px;
        display: inline-block;
        margin-bottom: 10px;
    }

    .mini-message, .mini-poll {
        background-color: #b30000;
        padding: 8px;
        border-radius: 5px;
        color: #fff;
        margin-bottom: 5px;
    }

    .mini-button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        width: 100%;
        margin-top: 10px;
        text-align: center;
        transition: background-color 0.3s ease;
    }

    .mini-button:hover {
        background-color: #b30000;
    }
</style>

<div class="content">
    <header class="heading">
        <h1>Prism</h1>
        <p>An AI powered social media platform around fun and creativity</p>
    </header>

    <br>

    <section>
        <h2>Suggestions for You</h2>
        <div id="suggestions"></div>
    </section>

    <section>
        <h2>Leaderboard of Top Interests</h2>
        <div id="leaderboard-container" style="position: relative; width: 100%; height: auto;"></div>
    </section>

    <div id="user-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                                background-color: #2e2e2e; padding: 20px; border-radius: 10px; 
                                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); z-index: 1000;">
        <h3 id="modal-title" style="color: #ff6666;">Users with this Interest</h3>
        <ul id="user-list" style="list-style: none; padding: 0; color: #fff;"></ul>
        <button onclick="closeModal()" style="margin-top: 10px; background-color: #b30000; color: white; border: none; 
                                            padding: 10px 20px; border-radius: 5px; cursor: pointer;">
            Close
        </button>
    </div>

    <div id="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                                    background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>

    <section>
        <button class="purple-button" onclick="window.location.href='{{ site.baseurl }}/profile'">Access Your Profile</button>
    </section>

    <section class="mini-card">
        <h2>💬 Latest Messages</h2>
        <div id="mini-chatroom-container"></div>
        <button onclick="window.location.href='{{ site.baseurl }}/prism/topicchatroom'" class="mini-button">
            Join Chatroom
        </button>
    </section>

    <section class="mini-card">
        <h2>📊 Latest Polls</h2>
        <div id="mini-polls-container"></div>
        <button onclick="window.location.href='{{ site.baseurl }}/prism/polls'" class="mini-button">
            Vote in Polls
        </button>
    </section>

    <footer class="copyright">
        <p>&copy; 2025 Prism. All rights reserved.</p>
    </footer>
</div>


<script type="module">

        // Fetch and Display Mini Chatroom Messages
    async function fetchMiniChatroom() {
        try {
            const response = await fetch(`${pythonURI}/api/chat?id=8`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch chat messages");
            const messages = await response.json();

            const chatContainer = document.getElementById("mini-chatroom-container");
            chatContainer.innerHTML = ""; // Clear previous messages

            messages.slice(0, 5).forEach(chat => { // Show only 3 latest messages
                const messageElement = document.createElement("div");
                messageElement.className = "mini-message";
                messageElement.innerHTML = `<p><strong>${chat.message}</p>`;
                chatContainer.appendChild(messageElement);
            });
        } catch (error) {
            console.error("Error fetching chat messages:", error);
        }
    }

    // Fetch and Display Mini Polls Results
    async function fetchMiniPolls() {
        try {
            const response = await fetch(`${pythonURI}/api/poll`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch polls");
            const polls = await response.json();

            const pollsContainer = document.getElementById("mini-polls-container");
            pollsContainer.innerHTML = ""; // Clear previous content

            polls.slice(0, 2).forEach(poll => { // Show only 2 latest polls
                const pollElement = document.createElement("div");
                pollElement.className = "mini-poll";
                pollElement.innerHTML = `<p><strong>${poll.name}:</strong> ${poll.interests}</p>`;
                pollsContainer.appendChild(pollElement);
            });
        } catch (error) {
            console.error("Error fetching polls:", error);
        }
    }

    // Run both fetch functions on page load
    document.addEventListener("DOMContentLoaded", () => {
        fetchMiniChatroom();
        fetchMiniPolls();
    });

    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    async function fetchSuggestions() {
        try {
            const response = await fetch(`${pythonURI}/api/id`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch user data");

            const currentUser = await response.json();
            const interests = currentUser.interests.split(", ");

            const allUsersResponse = await fetch(`${pythonURI}/api/users`, fetchOptions);
            if (!allUsersResponse.ok) throw new Error("Failed to fetch all users");

            const allUsers = await allUsersResponse.json();

            const matchedUsers = allUsers.filter(user => {
                const userInterests = user.interests.split(", ");
                return userInterests.some(interest => interests.includes(interest)) && user.uid !== currentUser.uid;
            });

            const suggestionsContainer = document.getElementById("suggestions");
            suggestionsContainer.innerHTML = "";

            matchedUsers.forEach(user => {
                const card = document.createElement("div");
                card.className = "profile-card";
                card.textContent = `${user.name} - Interests: ${user.interests}`;
                suggestionsContainer.appendChild(card);
            });
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    }

    async function fetchLeaderboard() {
        try {
            const response = await fetch(`${pythonURI}/api/users`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch all users");

            const allUsers = await response.json();
            const interestCounts = {};
            const interestToUsers = {};

            // Count interests and map users to interests
            allUsers.forEach(user => {
                user.interests.split(", ").forEach(interest => {
                    interestCounts[interest] = (interestCounts[interest] || 0) + 1;
                    if (!interestToUsers[interest]) interestToUsers[interest] = [];
                    interestToUsers[interest].push(user.name); // Add user name to the interest
                });
            });

            // Sort interests by count
            const sortedInterests = Object.entries(interestCounts).sort((a, b) => b[1] - a[1]);
            const maxVotes = sortedInterests[0][1];

            // State for showing all interests or top 5
            let showAll = false;

            const leaderboardContainer = document.getElementById("leaderboard-container");

            // Create a reusable render function
            const renderLeaderboard = () => {
                leaderboardContainer.innerHTML = ""; // Clear previous content

                // Determine how many interests to show
                const interestsToShow = showAll ? sortedInterests : sortedInterests.slice(0, 5);

                interestsToShow.forEach(([interest, count]) => {
                    const barContainer = document.createElement("div");
                    barContainer.style.display = "flex";
                    barContainer.style.alignItems = "center";
                    barContainer.style.marginBottom = "15px";
                    barContainer.style.cursor = "pointer"; // Add cursor for clickability

                    // Label
                    const label = document.createElement("div");
                    label.textContent = `${interest}`;
                    label.style.width = "150px";
                    label.style.fontWeight = "bold";
                    label.style.color = "#ff6666";

                    // Bar
                    const bar = document.createElement("div");
                    bar.style.height = "30px";
                    bar.style.width = "0"; // Start width at 0 for animation
                    bar.style.transition = "width 1s ease, transform 0.2s ease";
                    bar.style.marginLeft = "10px";
                    bar.style.background = `linear-gradient(90deg, #ff4d4d, #b30000)`; // Dynamic gradient
                    bar.style.borderRadius = "5px";

                    // Hover effect
                    bar.addEventListener("mouseover", () => {
                        bar.style.transform = "scale(1.05)";
                    });
                    bar.addEventListener("mouseout", () => {
                        bar.style.transform = "scale(1)";
                    });

                    // Set bar width dynamically based on votes
                    setTimeout(() => {
                        bar.style.width = `${(count / maxVotes) * 80}%`; // Scale bar to max 80% width
                    }, 100);

                    // Click to show user details
                    bar.addEventListener("click", () => {
                        showModal(interest, interestToUsers[interest]);
                    });

                    // Count display
                    const countLabel = document.createElement("div");
                    countLabel.textContent = `${count} Votes`;
                    countLabel.style.marginLeft = "10px";
                    countLabel.style.color = "#ffffff";
                    countLabel.style.fontWeight = "bold";

                    barContainer.appendChild(label);
                    barContainer.appendChild(bar);
                    barContainer.appendChild(countLabel);

                    leaderboardContainer.appendChild(barContainer);
                });

                // Ensure the toggle button stays persistent
                if (!leaderboardContainer.querySelector("#toggle-button")) {
                    const toggleButton = document.createElement("button");
                    toggleButton.id = "toggle-button";
                    toggleButton.className = "purple-button";
                    toggleButton.style.marginTop = "20px";
                    toggleButton.textContent = showAll ? "Show Less" : "Show More";

                    // Toggle between showing all interests or top 5
                    toggleButton.addEventListener("click", () => {
                        showAll = !showAll;
                        toggleButton.textContent = showAll ? "Show Less" : "Show More";
                        renderLeaderboard();
                    });

                    leaderboardContainer.appendChild(toggleButton);
                }
            };

            // Initial render
            renderLeaderboard();
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
            const leaderboardContainer = document.getElementById("leaderboard-container");
            leaderboardContainer.innerHTML = "<p>Error loading leaderboard.</p>";
        }
    }



    // Show modal with user details
    function showModal(interest, users) {
        const modal = document.getElementById("user-modal");
        const overlay = document.getElementById("modal-overlay");
        const userList = document.getElementById("user-list");
        const modalTitle = document.getElementById("modal-title");

        modalTitle.textContent = `Users Interested in "${interest}"`;
        userList.innerHTML = ""; // Clear previous content

        // Populate user list
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user;
            userList.appendChild(listItem);
        });

        modal.style.display = "block";
        overlay.style.display = "block";
    }

    // Close modal
    function closeModal() {
        const modal = document.getElementById("user-modal");
        const overlay = document.getElementById("modal-overlay");
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    window.closeModal = closeModal;

    document.addEventListener("DOMContentLoaded", () => {
        fetchSuggestions();
        fetchLeaderboard();
    });
</script>




<script type="module">
    import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

    async function fetchVoteData() {
        try {
            const voteData = { upvotes: [], downvotes: [] }; // Initialize data structure
            const postIds = [1, 2, 3]; // Replace with your actual post IDs

            for (const postId of postIds) {
                const response = await fetch(`${pythonURI}/api/vote/post?post_id=${postId}`, {
                    ...fetchOptions,
                    method: "GET", // Use GET method
                    headers: {
                        ...fetchOptions.headers,
                    },
                });

                if (!response.ok) throw new Error(`Failed to fetch votes for post ID ${postId}`);

                const data = await response.json();

                // Collect post IDs for upvotes and downvotes
                data.upvotes.forEach(vote => voteData.upvotes.push(parseInt(vote.post_id, 10)));
                data.downvotes.forEach(vote => voteData.downvotes.push(parseInt(vote.post_id, 10)));
            }

            return voteData;
        } catch (error) {
            console.error("Error fetching vote data:", error);
            return { upvotes: [], downvotes: [] };
        }
    }


    async function sendVote(sectionId, voteType, method) {
        try {
            const response = await fetch(`${pythonURI}/api/vote`, {
                ...fetchOptions,
                method: method,
                headers: {
                    ...fetchOptions.headers,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: sectionId,
                    vote_type: voteType,
                }),
            });

            if (!response.ok) throw new Error("Vote submission failed");
        } catch (error) {
            console.error("Error submitting vote:", error);
        }
    }

    function toggleSectionVisibility(sectionId, show) {
        const section = document.getElementById(sectionId);
        const placeholder = document.getElementById(`${sectionId}-placeholder`);

        if (show) {
            section.style.display = "block";
            if (placeholder) placeholder.style.display = "none";
        } else {
            section.style.display = "none";
            if (!placeholder) {
                const newPlaceholder = document.createElement("div");
                newPlaceholder.id = `${sectionId}-placeholder`;
                newPlaceholder.innerHTML = `<button class="green-button" onclick="handleShowSection('${sectionId}')">Show Section</button>`;
                section.insertAdjacentElement("afterend", newPlaceholder);
            } else {
                placeholder.style.display = "block";
            }
        }
    }

    async function handleUpvote(sectionId) {
        await sendVote(sectionId, "upvote", "POST");
        const section = document.getElementById(sectionId);
        const upvoteButton = section.querySelector(".upvote-button");
        const downvoteButton = section.querySelector(".downvote-button");

        upvoteButton.textContent = "Suggestion Upvoted";
        upvoteButton.disabled = true;
        downvoteButton.disabled = false;
    }

    async function handleDownvote(sectionId) {
        await sendVote(sectionId, "downvote", "POST");
        toggleSectionVisibility(sectionId, false);
    }

    async function handleShowSection(sectionId) {
        await sendVote(sectionId, "upvote", "PUT");
        toggleSectionVisibility(sectionId, true);

        const section = document.getElementById(sectionId);
        const upvoteButton = section.querySelector(".upvote-button");
        const downvoteButton = section.querySelector(".downvote-button");

        upvoteButton.textContent = "Suggestion Upvoted";
        upvoteButton.disabled = true;
        downvoteButton.disabled = false;
    }

    window.handleShowSection = handleShowSection;

    async function deleteVotesForPosts(postIds) {
        try {
            for (const postId of postIds) {
                await fetch(`${pythonURI}/api/vote`, {
                    ...fetchOptions,
                    method: "DELETE",
                    headers: {
                        ...fetchOptions.headers,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ post_id: postId }),
                });
            }
        } catch (error) {
            console.error("Error deleting votes:", error);
        }
    }

    async function handleResetAllSuggestions() {
        await deleteVotesForPosts([1, 2, 3]);

        document.querySelectorAll("section").forEach(section => {
            const sectionId = section.id;

            toggleSectionVisibility(sectionId, true);

            const upvoteButton = section.querySelector(".upvote-button");
            const downvoteButton = section.querySelector(".downvote-button");

            upvoteButton.textContent = "Upvote";
            upvoteButton.disabled = false;

            downvoteButton.textContent = "Downvote";
            downvoteButton.disabled = false;
        });
    }

    async function initializeSections() {
        const voteData = await fetchVoteData();

        document.querySelectorAll("section").forEach((section, index) => {
            const sectionId = `${index + 1}`;
            section.id = sectionId;

            const isUpvoted = voteData.upvotes.includes(parseInt(sectionId, 10)); // Check if section is upvoted
            const isDownvoted = voteData.downvotes.includes(parseInt(sectionId, 10)); // Check if section is downvoted

            // Create a button container
            const buttonContainer = document.createElement("div");
            buttonContainer.style.textAlign = "right";

            // Upvote button
            const upvoteButton = document.createElement("button");
            upvoteButton.className = "vote-button purple-button upvote-button";
            upvoteButton.textContent = isUpvoted ? "Suggestion Upvoted" : "Upvote";
            upvoteButton.disabled = isUpvoted;
            upvoteButton.onclick = () => handleUpvote(sectionId);

            // Downvote button
            const downvoteButton = document.createElement("button");
            downvoteButton.className = "vote-button purple-button downvote-button";
            downvoteButton.textContent = "Downvote";
            downvoteButton.disabled = isDownvoted;
            downvoteButton.onclick = () => {
                if (isUpvoted) {
                    sendVote(sectionId, "downvote", "PUT");
                }
                handleDownvote(sectionId);
            };

            buttonContainer.appendChild(upvoteButton);
            buttonContainer.appendChild(downvoteButton);
            section.appendChild(buttonContainer);

            // Set visibility based on vote status
            if (isDownvoted) {
                toggleSectionVisibility(sectionId, false);
            } else {
                toggleSectionVisibility(sectionId, true);
            }
        });

        // Add Reset All Suggestions Button if not already present
        if (!document.querySelector("#reset-all-button")) {
            const resetButton = document.createElement("button");
            resetButton.id = "reset-all-button";
            resetButton.className = "green-button";
            resetButton.textContent = "Reset all Suggestions";
            resetButton.onclick = handleResetAllSuggestions;

            document.body.appendChild(resetButton);
        }
    }


    document.addEventListener("DOMContentLoaded", initializeSections);
</script>