import os

from flask import Flask, render_template
import dukpy

app = Flask(__name__, static_folder="./static")


@app.route('/')
def home():
    return render_template('main.html')

@app.route('/card')
def card():
    return render_template('card.html')

def tscompile():
    print("Compiling Typescript code...")
    tmpf = open("static/js/scroller.ts", "r")
    output_code = dukpy.typescript_compile(tmpf.read())
    tmpf.close()
    f = open("static/js/scroller.js", "w")
    f.write(output_code)
    f.close()
    print("Typescript code compiled to Javascript.")


if __name__ == '__main__':
    # app.run('127.0.0.1', 5000, debug=True)
    tscompile()
    app.run(debug=True)
