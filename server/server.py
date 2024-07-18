from flask import Flask, jsonify, request
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)


@app.route('/api/summarize', methods=['GET'])
def summarize_text():
    text = request.args.get('text', type=str)
    summarizer = pipeline("summarization", model='facebook/bart-large-cnn')
    summary = summarizer(text, max_length=50, min_length=10, do_sample=False)
    print(summary)
    return jsonify(summary[0])

if __name__ == '__main__':
    app.run(debug=True, port=8080)