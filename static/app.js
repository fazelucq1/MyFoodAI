const categories = {
  "Verdure e ortaggi": [
    "pomodoro","cipolla","aglio","carota","zucchina","melanzana","peperone rosso","peperone giallo","peperone verde","cetriolo","lattuga","radicchio","cavolo","cavolfiore","broccoli","spinaci","bietola","asparagi","finocchio","porro","sedano","patata","patata dolce","rucola","valeriana","verza","zucca","barbabietola","cipollotto","piselli","fagiolini","fave","scalogno","funghi champignon","funghi porcini","funghi misti","germogli di soia","rape","topinambur","carciofi","lattughino","cime di rapa","cavolo nero","cavolo cappuccio","daikon","peperoncino fresco","alghe nori","alghe wakame","peperoni piccanti","cipolla rossa","cipolla bianca","cetriolini sottaceto","olive verdi","olive nere","mais dolce","zucca gialla","zucchina romanesca","zucchina gialla","pomodorini","pomodori secchi","pomodori datterini","pomodori ciliegino","pomodori pelati","melanzane grigliate","carote baby","foglie di menta","basilico fresco","prezzemolo","salvia","rosmarino","alloro","erba cipollina","aneto","coriandolo fresco","timo fresco","origano fresco","peperoncino secco","zenzero fresco"
  ],
  "Carni e salumi": [
    "petto di pollo","coscia di pollo","ali di pollo","tacchino","manzo macinato","bistecca di manzo","arrosto di manzo","vitello","filetto di maiale","costine di maiale","pancetta","prosciutto cotto","prosciutto crudo","speck","mortadella","salame","salsiccia fresca","salsiccia secca","wurstel","carne trita mista","coniglio","agnello","fegato","cuore di manzo","bresaola","roast beef","lonza di maiale","guanciale","coppa","culatello","spalla cotta","carne in scatola","hamburger di manzo","carpaccio di manzo","trippa","zampone","cotechino","pollo allo spiedo","anatra","oca","straccetti di pollo","carpaccio di tacchino","fesa di tacchino","filetti di pollo impanati","carne affumicata","carne salata","lardo","lombo di maiale","ossobuco"
  ],
  "Pesce e frutti di mare": [
    "tonno fresco","tonno in scatola","salmone fresco","salmone affumicato","merluzzo","baccalà","nasello","orata","branzino","sgombro","sardine","acciughe","cozze","vongole","calamari","seppie","polpo","gamberi","mazzancolle","gamberetti","surimi","granchio","aragosta","scampi","anguilla","trota","pesce spada","rana pescatrice","filetto di pesce","trancio di salmone","caviale","bottarga","alici","aringa","pesce misto","cozze sgusciate","anelli di calamari","seppie precotte","tonno al naturale","tonno sott’olio"
  ],
  "Uova e derivati": [
    "uova intere","tuorlo d’uovo","albume","uova sode","uova strapazzate","uova di quaglia","uova di anatra","uovo in camicia","frittata","omelette"
  ],
  "Latticini e formaggi": [
    "latte intero","latte scremato","latte parzialmente scremato","latte di capra","panna fresca","panna da cucina","panna acida","yogurt bianco","yogurt greco","kefir","burro","burro salato","margarina","mascarpone","ricotta","mozzarella","mozzarella di bufala","provola","provola affumicata","scamorza","gorgonzola","taleggio","brie","camembert","parmigiano grattugiato","grana padano","pecorino","caciocavallo","feta","cheddar","emmental","edamer","gouda","robiola","crescenza","stracchino","formaggio spalmabile","ricotta salata","fiocchi di latte","formaggini"
  ],
  "Cereali e derivati": [
    "pasta di semola","pasta integrale","pasta all’uovo","spaghetti","penne","fusilli","riso bianco","riso integrale","riso basmati","riso venere","couscous","bulgur","farro","orzo","miglio","quinoa","avena","fiocchi d’avena","mais","polenta","pane bianco","pane integrale","pane ai cereali","focaccia","pizza","piadina","grissini","cracker","taralli","tortillas","baguette","pan carrè","cereali da colazione","gallette di riso","cereali soffiati","semolino","pangrattato","farina 00","farina integrale","farina di mais","farina di riso","farina di avena","farina di mandorle","farina di ceci","farina di grano saraceno","amido di mais","fecola di patate","pasta sfoglia","pasta brisée"
  ],
  "Spezie e condimenti": [
    "sale","sale grosso","sale rosa","pepe nero","pepe bianco","peperoncino","paprika dolce","paprika piccante","curry","curcuma","zafferano","noce moscata","cannella","cumino","coriandolo","cardamomo","anice stellato","semi di finocchio","semi di sesamo","semi di lino","semi di chia","semi di zucca","lievito di birra","lievito secco","lievito istantaneo","bicarbonato","aceto di vino","aceto balsamico","aceto di mele","olio extravergine di oliva","olio di semi","olio di cocco","olio di sesamo","salsa di soia","salsa worcester","tabasco","ketchup","maionese","senape","senape in grani","dado vegetale","dado di carne","brodo granulare","miele","sciroppo d’acero","sciroppo d’agave","zucchero bianco","zucchero di canna","zucchero a velo","vanillina","estratto di vaniglia","aroma di mandorla","aroma di limone","cacao amaro","cacao zuccherato","cioccolato fondente","cioccolato al latte","cioccolato bianco"
  ],
  "Legumi e derivati": [
    "ceci","fagioli borlotti","fagioli cannellini","fagioli neri","lenticchie","lenticchie rosse","piselli secchi","soia","tofu","tempeh","edamame","hummus","crema di ceci","fagioli rossi","fagioli di Spagna","fagioli verdi","lupini","fave secche","pasta di legumi","burger di legumi","latte di soia","latte di mandorla","latte di avena","latte di riso","farina di soia","proteine di pisello","miso","natto","panna vegetale","yogurt vegetale"
  ],
  "Dolci e dessert": [
    "zucchero","cioccolato","cioccolato fondente","cioccolato al latte","cioccolato bianco","cacao","biscotti secchi","savoiardi","panna montata","mascarpone","crema pasticcera","crema chantilly","crema al cioccolato","marmellata","confettura","miele","sciroppo","caramello","zucchero di canna","zucchero a velo","frutta candita","scorza d’arancia","scorza di limone","limoncello","vaniglia","estratto di vaniglia","panna cotta","budino","gelatina","colla di pesce","gelato","granita","semifreddo","crema di nocciole","crema di pistacchio","torrone","mandorlato","amaretti","marzapane"
  ],
  "Frutta fresca e secca": [
    "mela","pera","banana","arancia","limone","lime","pompelmo","mandarino","kiwi","fragole","mirtilli","lamponi","more","ciliegie","albicocche","pesche","prugne","fichi","uva","melone","anguria","ananas","mango","papaya","cocco","frutto della passione","avocado","datteri","fichi secchi","uvetta","prugne secche","albicocche secche","noci","mandorle","nocciole","pistacchi","pinoli","anacardi","arachidi","noci brasiliane","noci pecan","semi misti","frutta mista disidratata","mela essiccata","banana essiccata","cocco rapè","scorza grattugiata","lime grattugiato","limone grattugiato","burro di arachidi","burro di mandorle","burro di anacardi","succo d’arancia","succo di limone","succo di mela","succo di pompelmo"
  ]
};
let selected = [];
const categoryEl = document.getElementById('category');
const inputEl = document.getElementById('ingredient-input');
const autoEl = document.getElementById('autocomplete-list');
const addBtn = document.getElementById('add-btn');
const viewBtn = document.getElementById('view-btn');
const genBtn = document.getElementById('generate-btn');
const selEl = document.getElementById('selected-ingredients');
const resEl = document.getElementById('recipe-result');
const allIngredients = Object.values(categories).flat();
Object.keys(categories).forEach(cat => {
  const o = document.createElement('option'); o.value = cat; o.text = cat; categoryEl.append(o);
});
inputEl.addEventListener('input', () => {
  const list = categoryEl.value ? categories[categoryEl.value] : allIngredients;
  const query = inputEl.value.toLowerCase();
  if (!query) { autoEl.classList.add('hidden'); return; }
  const matches = list.filter(i => i.toLowerCase().includes(query)).slice(0, 10);
  autoEl.innerHTML = matches.map(i => `<li class="px-2 py-1 hover:bg-gray-200 cursor-pointer">${i}</li>`).join('');
  autoEl.classList.toggle('hidden', matches.length === 0);
});
autoEl.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    inputEl.value = e.target.textContent;
    autoEl.classList.add('hidden');
  }
});
addBtn.onclick = () => {
  const ing = inputEl.value.trim();
  const validList = categoryEl.value ? categories[categoryEl.value] : allIngredients;
  if (ing && validList.includes(ing) && !selected.includes(ing)) {
    selected.push(ing);
    document.cookie = `ingredients=${encodeURIComponent(JSON.stringify(selected))}; path=/`;
    const li = document.createElement('li'); li.textContent = ing; selEl.append(li);
    genBtn.disabled = selected.length < 3 || selected.length > 80;
  }
  inputEl.value = '';
};
viewBtn.onclick = () => window.location.href = '/dump';
genBtn.onclick = async () => {
  resEl.innerHTML = 'Caricamento...'; resEl.classList.remove('hidden');
  const r = await fetch('/generate', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ingredients: selected})
  });
  const j = await r.json();
  if (j.error) resEl.innerHTML = `<p class="text-red-500">Errore: ${j.error}</p>`;
  else resEl.innerHTML = `
    <div class='border-l-4 border-blue-500 pl-4 mb-4'>
      <h2 class='text-xl font-bold'>${j.nome}</h2>
      <p>⏱️ ${j.tempo} | 🧑🍳 ${j.difficolta}</p>
    </div>
    <ul class='list-disc pl-5 mb-4'>${j.ingredienti.map(i => `<li>${i}</li>`).join('')}</ul>
    <ol class='list-decimal pl-5 mb-4'>${j.procedimento.map(p => `<li>${p}</li>`).join('')}</ol>
    ${j.tips ? `<p class='p-3 bg-yellow-50 rounded-lg'>💡 ${j.tips}</p>` : ''}
  `;
};
