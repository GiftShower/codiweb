from flask import Flask, render_template

app = Flask(__name__, static_folder="./static")


@app.route('/')
def home():
    return render_template('main.html')


if __name__ == '__main__':
    # app.run('127.0.0.1', 5000, debug=True)
    app.run(debug=True)
