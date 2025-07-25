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

4. Imposta la `KEY` come variabile d'ambiente 

```
export GEMINI_API_KEY="la_tua_chiave_api"
```

5. Avvia il server:

```bash
python server/server.py
```

---

> ⚠️ Non condividere mai la tua API key in pubblico.
