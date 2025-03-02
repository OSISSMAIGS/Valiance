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

# Serenite - Registration

@app.route("/Events/Serenite/Anonymous_Gifts")
def l_anon():
    return render_template("valiance/lomba_cny/l_closed.html")

@app.route("/Events/Serenite/Closed")
def l_closed():
    return render_template("valiance/lomba_cny/l_closed.html")

@app.route("/Events/Tamiera/Azan")
def l_azan():
    return render_template("valiance/lomba_tamiera/l_azan.html")
@app.route("/Events/Tamiera/Nasyid")
def l_nasyid():
    return render_template("valiance/lomba_tamiera/l_nasyid.html")
@app.route("/Events/Tamiera/Cerdas_Cermat")
def l_cerdas_cermat():
    return render_template("valiance/lomba_tamiera/l_cerdas_cermat.html")
@app.route("/Events/Tamiera/Sambung_Ayat")
def l_sambung_ayat():
    return render_template("valiance/lomba_tamiera/l_sambung_ayat.html")


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