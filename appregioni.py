from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def regioni():
    import pandas as pd
    df=pd.read_csv('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-statistici-riferimento/popolazione-istat-regione-range.csv')
    lista_regioni=df.denominazione_regione
    return render_template('ita_regioni.html')
if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3246, debug=True)