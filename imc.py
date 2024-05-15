from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/form')
def form():
    return render_template('dati.html')

@app.route('/imc', methods = ['POST', 'GET'])
def imc():
    if request.method == 'GET':
        return "The URL /data is accessed directly. Try going to '/form' to submit form"
    if request.method == 'POST':
        result = request.form
        weight = float(result['Weight'])
        height = float(result['Height'])
        imc = weight / (height * height)
        return render_template('imc.html', result=imc)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)