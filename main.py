from flask import Flask, render_template

app = Flask(__name__)

# VALIANCE
@app.route("/")
def valiance():
    return render_template("valiance/index.html")

@app.route("/Events")
def valiance_events():
    return render_template("valiance/events.html")

#EVENTS - VALIANCE'S

@app.route("/Events/Euphony")
def e_euphony():
    return render_template("valiance/e_euphony.html")

@app.route("/Events/Kandela")
def e_kandela():
    return render_template("valiance/e_kandela.html")

@app.route("/Events/Atheria")
def e_atheria():
    return render_template("valiance/e_atheria.html")

@app.route("/Events/Savioris")
def e_savioris():
    return render_template("valiance/e_savioris.html")

@app.route("/Events/SheHuaJie")
def e_cny():
    return render_template("valiance/e_cny.html")

@app.route("/Events/Serenite")
def e_serenite():
    return render_template("valiance/e_serenite.html")

@app.route("/Events/Tamiera")
def e_tamiera():
    return render_template("valiance/e_tamiera.html")

@app.route("/Events/Estrevo")
def e_estrevo():
    return render_template("valiance/e_estrevo.html")

@app.route("/Events/Vaisakha")
def e_vaisakha():
    return render_template("valiance/e_vaisakha.html")

@app.route("/Events/Eterlight")
def e_eterlight():
    return render_template("valiance/e_eterlight.html")

@app.route("/Events/Questival")
def e_questival():
    return render_template("valiance/e_questival.html")

# OTHERS
@app.route("/Coming_Soon")
def coming_soon():
    return render_template("valiance/coming_soon.html")

@app.route("/About_Us")
def about_us():
    return render_template("valiance/about_us.html")

@app.errorhandler(404)
def page_not_found(error):
    return render_template('/valiance/404.html'), 404

# Credence
@app.route('/credence')
def credence():
    return render_template('valiance/credence.html')

if __name__ == '__main__':
    app.run()