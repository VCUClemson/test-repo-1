var responses = [
    "Hey",
    "Sure"
];
var currentResponseIndex = 0;

// Function to add a message to the chat box
function addMessage(message, type) {
    var chatBox = document.getElementById("chatBox");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message");
    if (type === "user") {
        messageDiv.classList.add("userMessage");
    } else {
        messageDiv.classList.add("responseMessage");
    }
    chatBox.appendChild(messageDiv);
    // Automatically scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to send a message
function sendMessage() {
    var userInput = document.getElementById("message-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        // Clear the input box after sending message
        document.getElementById("message-input").value = "";
        // Get the next bot response from the array after a delay of 5 seconds
        setTimeout(function() {
            var botResponse = responses[currentResponseIndex];
            addMessage(botResponse, "bot");
            // Move to the next response, looping back to the start if necessary
            currentResponseIndex = (currentResponseIndex + 1) % responses.length;
        }, 3000);
    }
}

// Event listener for send button
document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});

// Event listener for enter key
document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});