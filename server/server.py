from flask import Flask, request, jsonify, send_from_directory
import requests, os
app = Flask(__name__, static_folder='../static', template_folder='../public')
API_KEY = os.getenv('GEMINI_API_KEY')
@app.route('/')
def index():
    return send_from_directory(app.template_folder, 'index.html')
@app.route('/dump')
def dump():
    return send_from_directory(app.template_folder, 'ingredients.html')
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(app.static_folder, filename)
@app.route('/generate', methods=['POST'])
def gen():
    data = request.json.get('ingredients', [])
    prompt = f"Genera ricetta in JSON usando SOLO questi ingredienti: {','.join(data)}. Massimo 5 passaggi, solo sale/pepe/olio extra."
    r = requests.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
        json={"contents":[{"parts":[{"text":prompt}]}]},
        headers={'X-goog-api-key': API_KEY, 'Content-Type':'application/json'}
    )
    resp = r.json()
    if 'candidates' not in resp:
        return jsonify({'error': 'API response error', 'detail': resp}), 500
    txt = resp['candidates'][0]['output']
    j_str = txt[txt.find('{'):txt.rfind('}')+1]
    try:
        j = eval(j_str)
    except Exception:
        return jsonify({'error': 'Parsing error'}), 500
    return jsonify(j)
if __name__ == '__main__':
    app.run(port=5000)
