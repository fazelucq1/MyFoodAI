# 🧠🍝 MyFoodAI

**MyFoodAI** è una web app che usa l'intelligenza artificiale per suggerire ricette basate sugli ingredienti che hai a casa. Inserisci gli ingredienti, e l'app penserà al piatto per te! 😋

---

## 🛠️ Installazione

1. Clona il progetto:

```bash
git clone https://github.com/fazelucq1/MyFoodAI.git
cd MyFoodAI
```

2. Crea un virtual environment (opzionale ma consigliato):

```bash
python3 -m venv venv
source venv/bin/activate  # Su Windows: venv\Scripts\activate
```

3. Installa le dipendenze:

```bash
pip install -r server/requirements.txt
```

4. Crea un file `.env` nella root del progetto:

```
OPENAI_API_KEY=la_tua_chiave_api
```

5. Avvia il server:

```bash
python app.py
```

---

## 🌍 URL utili

* `http://localhost:5000/` → Home con input ingredienti
* `http://localhost:5000/recipe` → Ricetta generata (visibile solo dopo invio dati)
* `http://localhost:5000/dump` → Ingredienti inseriti (pagina dedicata, no download)

---

## 📦 Stack Tecnologico

* `Python 3` + `Flask`
* `HTML` / `CSS` / `JavaScript` (vanilla)
* `dotenv` per caricare la API key
* `OpenAI API` per la generazione delle ricette
* `Session cookies` per gestire ricette temporanee

---

## 🧪 Esempio .env

Esempio di file `.env`:

```
OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

> ⚠️ Non condividere mai la tua API key in pubblico.
