from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot_logic import get_bot_response

app = Flask(__name__)
CORS(app) 
@app.route("/")


@app.route("/get_response", methods=["POST"])
def get_response():
    user_message = request.json.get("message")
    response = get_bot_response(user_message)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
