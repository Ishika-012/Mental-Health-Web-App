import json
import random

# Load responses from JSON file
def load_responses():
    with open("responses.json", "r") as file:
        return json.load(file)["intents"]

# Get response based on user input
def get_bot_response(user_message):
    intents = load_responses()
    
    for intent in intents:
        # Check if any pattern matches the user message
        for pattern in intent["patterns"]:
            if pattern.lower() in user_message.lower():
                return random.choice(intent["responses"])
    
    # Default response if no match found
    return "I'm here to listen. Feel free to share anything you're comfortable with."
