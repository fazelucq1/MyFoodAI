from flask import Flask, request, jsonify, send_from_directory
import requests, os
app = Flask(__name__, static_folder='../public', static_url_path='')
API_KEY = os.getenv('GEMINI_API_KEY')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/public/<path:filename>')
def public_files(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/generate', methods=['POST'])
def gen():
    data = request.json['ingredients']
    prompt = f"Genera ricetta in formato JSON usando SOLO questi ingredienti: {','.join(data)}. Massimo 5 passaggi, solo sale/pepe/olio extra."
    r = requests.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        json={"contents":[{"parts":[{"text":prompt}]}]},
        headers={'X-goog-api-key':API_KEY,'Content-Type':'application/json'}
    )
    txt = r.json()['candidates'][0]['output']
    j = txt[txt.find('{'):txt.rfind('}')+1]
    return jsonify(eval(j))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
