from flask import Flask, request, jsonify, send_from_directory
import requests
import json
import os

app = Flask(__name__, static_folder='../static', template_folder='../public')
API_KEY = 

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
    if not API_KEY:
        return jsonify({'error': 'Missing API key'}), 500
    if not data or not isinstance(data, list):
        return jsonify({'error': 'Dati ingredienti mancanti o non validi'}), 400

    prompt = (
        f"Genera una ricetta in formato JSON usando SOLO questi ingredienti: {', '.join(data)}. "
        "Limita a massimo 5 passaggi. Usa solo sale, pepe e olio extra come aggiunte. "
        "Il formato deve essere:\n"
        "{\n"
        "  \"nome\": \"Nome della ricetta\",\n"
        "  \"tempo\": \"Tempo di preparazione es. 20 minuti\",\n"
        "  \"difficolta\": \"Facile/Media/Difficile\",\n"
        "  \"ingredienti\": [\"lista\", \"degli\", \"ingredienti\"],\n"
        "  \"procedimento\": [\"passaggio 1\", \"passaggio 2\", ...],\n"
        "  \"tips\": \"Suggerimento opzionale\"\n"
        "}"
    )

    try:
        r = requests.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
            json={"contents": [{"parts": [{"text": prompt}]}]},
            headers={'X-goog-api-key': API_KEY, 'Content-Type': 'application/json'}
        )
        r.raise_for_status()
        resp = r.json()
    except requests.RequestException as e:
        return jsonify({'error': 'Errore nella richiesta API', 'detail': str(e)}), 500

    if 'candidates' not in resp or not resp['candidates']:
        return jsonify({'error': 'Risposta API non valida', 'detail': resp}), 500

    # Estrazione testo dalla risposta, gestendo blocchi markdown
    output = resp['candidates'][0]['content']['parts'][0]['text']

    if output.startswith("```json"):
        output = output.strip("` \n")
        output = output.replace("json", "", 1).strip()
    if output.endswith("```"):
        output = output.rsplit("```", 1)[0].strip()

    try:
        parsed = json.loads(output)
    except Exception as e:
        return jsonify({'error': 'Errore nel parsing della risposta', 'detail': str(e)}), 500

    return jsonify(parsed)

if __name__ == '__main__':
    app.run(port=5000)
