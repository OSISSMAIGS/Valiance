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

@app.route("/Events/Pesantren_Kilat")
def e_tamiera():
    return render_template("valiance/l_closed.html")

# Tamiera - Registration

@app.route("/Events/Pesantren_Kilat/Azan")
def l_azan():
    return render_template("valiance/l_closed.html")
@app.route("/Events/Pesantren_Kilat/Nasyid")
def l_nasyid():
    return render_template("valiance/l_closed.html")
@app.route("/Events/Pesantren_Kilat/Cerdas_Cermat")
def l_cerdas_cermat():
    return render_template("valiance/l_closed.html")
@app.route("/Events/Pesantren_Kilat/Sambung_Ayat")
def l_sambung_ayat():
    return render_template("valiance/l_closed.html")


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