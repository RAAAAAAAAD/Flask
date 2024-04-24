from flask import Flask, render_template
import pandas as pd
df=pd.read_csv('/workspace/Flask/Data/regione.csv')

@app.route('/')
    return render_template('home.html')

@app.rount('/elenco')
    def elenco():
        df.regione
        return render_template('json.html', tabella=info.to_json)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)