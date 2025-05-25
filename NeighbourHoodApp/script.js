// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // Function to open Bootstrap modal
    function openModal(modalId) {
        var modalElement = document.getElementById(modalId);
        if (modalElement) {
            var modal = new bootstrap.Modal(modalElement);
            modal.show();
        } else {
            console.error("Modal with ID '" + modalId + "' not found.");
        }
    }

    // Event Listeners for opening modals
    document.getElementById('loginBtn')?.addEventListener('click', function () {
        openModal('loginModal');
    });

    document.getElementById('volunteerBtn')?.addEventListener('click', function () {
        openModal('volunteerModal');
    });

    document.getElementById('helpBtn')?.addEventListener('click', function () {
        openModal('helpModal');
    });

    // Ensure all "Request Help" buttons open the help modal
    document.querySelectorAll('.request-help-btn').forEach(button => {
        button.addEventListener('click', function () {
            openModal('helpModal');
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popupOverlay");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    function openPopup(message) {
        popupMessage.textContent = message;
        popupOverlay.style.display = "flex";
    }

    document.getElementById("urgentHelpBtn").addEventListener("click", function () {
        openPopup("Urgent help is on the way!");
    });

    document.getElementById("helpBtn").addEventListener("click", function () {
        openPopup("Requesting help for groceries...");
    });

    document.querySelectorAll(".request-help-btn").forEach(button => {
        button.addEventListener("click", function () {
            openPopup(`Requesting help for ${this.textContent.split("For ")[1]}...`);
        });
    });

    closePopup.addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });
});

function searchFunction() {
    let query = document.getElementById("search").value;
    alert("You searched for: " + query);
}

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') 
            ? 'block' 
            : 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    if (!input || !messagesContainer) return;

    const message = input.value.trim();
    if (message) {
        // Create and append user message
        const messageContainer = document.createElement('div');
        messageContainer.textContent = `You: ${message}`;
        messagesContainer.appendChild(messageContainer);

        // Simulate chatbot response
        setTimeout(() => {
            const botResponse = document.createElement('div');
            botResponse.textContent = `Chatbot: Echo - "${message}"`;
            messagesContainer.appendChild(botResponse);

            // Scroll to the latest message
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);

        input.value = '';
        input.focus();
    }
}

// Ensure chatbot is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
});
