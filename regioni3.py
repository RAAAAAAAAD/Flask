from flask import Flask, render_template, request
import pandas as pd
app = Flask(__name__)

dati_regioni = pd.read_csv('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-statistici-riferimento/popolazione-istat-regione-range.csv')

@app.route('/')
def home():
    regione=dati_regioni['denominazione_regione'].drop_duplicates()
    return render_template('search2.html', reg_nome=regione)

@app.route('/search', methods = ['GET'])
def search():
    import pandas as pd
    regione = request.args['regione']
    print(regione)
    risultato = dati_regioni[dati_regioni['denominazione_regione']==regione].index
    if len(risultato) == 0:
        table = 'Regione non trovata'
    else:
        table = list(risultato)
    return render_template('checkbox.html', tabella = table)

@app.route('/info', methods = ['GET'])
def info():
    id = int(request.args['id'])
    risultato = dati_regioni.iloc[[id]]
    if len(risultato) == 0:
        table = 'Regione non trovata'
    else:
        for id in risultato:
            table = risultato.to_html()
    return render_template('table.html', tabella = table)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)