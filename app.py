from flask import Flask,render_template

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
@app.route('/home')
def home():
	return render_template('landing-temp.html')

@app.route('/portfolio')
def portfolio():
	return render_template('portfolio-temp.html')

@app.route('/secretgame')
def game():
	return render_template('game-temp.html')

@app.route('/details/<image_id>')
def details(image_id):
	return render_template('details-temp.html',image_id = image_id)



if __name__ == '__main__':
	app.run()