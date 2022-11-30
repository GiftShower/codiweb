from flask import Flask, render_template
import dukpy
from os import listdir
from os.path import isfile, join

app = Flask(__name__, static_folder="./static")


@app.route('/')
def home():
    depath = "../static/resource/"
    pkrDesc = open("static/resource/description/parakuro.txt", "r")
    engDesc = open("static/resource/description/english.txt", "r")
    lgnDesc = open("static/resource/description/legend.txt", "r")
    return render_template(
        'main.html',
        datas=[("parakuro", depath+"parakuro.gif", "pkr", pkrDesc.read()),
               ("LEGEND", depath+"legend.jpg", "lgn", lgnDesc.read()),
               ("ENGLISH", depath+"english.jpg", 'eng', engDesc.read())])


@app.route('/card')
def card():
    return render_template('card.html')


def tscompile():
    print("Compiling Typescript code...")
    fls = [f for f in listdir("static/js/") if isfile(join("static/js/", f)) and ('.ts' in f)]

    for target in fls:
        print(target)
        tmpf = open("static/js/" + target, "r")
        output_code = dukpy.typescript_compile(tmpf.read())
        tmpf.close()
        file = open("static/js/" + target.replace('.ts', '.js'), "w")
        file.write(output_code)
        file.close()

    print("Typescript code compiled to Javascript.")


if __name__ == '__main__':
    # app.run('127.0.0.1', 5000, debug=True)
    tscompile()
    app.run(debug=True)
