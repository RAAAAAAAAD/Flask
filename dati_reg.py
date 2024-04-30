from flask import Flask, render_template
app = Flask(__name__)
import pandas as pd
df=pd.read_csv('/workspace/Flask/Data/regione.csv')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/elenco')
def elenco():
    info=df.regione
    return render_template('json.html', tabella=info.to_json())

@app.route('/info/<regione>')
def info(regione):
  info = df[df['regione'] == regioni]
  return render_template('json.html', tabella = info.to_json())

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)