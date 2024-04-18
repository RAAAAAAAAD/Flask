from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/en')
def hello_world():
  return render_template("indeximc.html",part='part2' ,  Titolo='Welcome')

@app.route('/it')
def ciao_mondo():
  return render_template("indeximc.html",part='part1' ,Titolo='Benvenuti')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3246, debug=True)