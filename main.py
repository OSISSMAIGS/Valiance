from flask import Flask, render_template

app = Flask(__name__)

# VALIANCE
@app.route("/")
def valiance():
    return render_template("valiance/index.html")

@app.route("/Valiance") # Double routing / Alternative Route (hirauke b)
def valiance_other():
    return render_template("valiance/index.html")

@app.route("/Valiance/Events")
def valiance_events():
    return render_template("valiance/events.html")

#EVENTS - VALIANCE'S

@app.route("/Valiance/Events/Euphony")
def e_euphony():
    return render_template("valiance/e_euphony.html")

@app.route("/Valiance/Events/Kandela")
def e_kandela():
    return render_template("valiance/e_kandela.html")

@app.route("/Valiance/Events/Atheria")
def e_atheria():
    return render_template("valiance/e_atheria.html")

@app.route("/Valiance/Events/Savioris")
def e_savioris():
    return render_template("valiance/e_savioris.html")

""" #LOMBA - ATHERIA
@app.route("/Valiance/Events/Atheria/LCC")
def l_lcc():
    return render_template("valiance/lomba_atheria/l_lcc.html")
@app.route("/Valiance/Events/Atheria/Family_100")
def l_family100():
    return render_template("valiance/lomba_atheria/l_family100.html")
@app.route("/Valiance/Events/Atheria/Futsal")
def l_futsal():
    return render_template("valiance/lomba_atheria/l_futsal.html")
@app.route("/Valiance/Events/Atheria/Masak")
def l_masak():
    return render_template("valiance/lomba_atheria/l_masak.html")
@app.route("/Valiance/Events/Atheria/Estafet_Balon")
def l_estafet():
    return render_template("valiance/lomba_atheria/l_estafet.html")
@app.route("/Valiance/Events/Atheria/Mobile_Legends")
def l_ML():
    return render_template("valiance/lomba_atheria/l_ML.html")
@app.route("/Valiance/Events/Atheria/Creativity_in_Vidio")
def l_creativity():
    return render_template("valiance/lomba_atheria/l_creativity.html")
@app.route("/Valiance/Events/Atheria/Catur")
def l_catur():
    return render_template("valiance/lomba_atheria/l_catur.html")
@app.route("/Valiance/Events/Atheria/Badminton")
def l_badminton():
    return render_template("valiance/lomba_atheria/l_badminton.html")
@app.route("/Valiance/Events/Atheria/Estafet_DragonBall")
def l_dragonball():
    return render_template("valiance/lomba_atheria/l_dragonball.html")
# @app.route("/Valiance/Events/Atheria/Cosplay")
# def l_cosplay():
#     return render_template("valiance/lomba_atheria/l_cosplay.html")
@app.route("/Valiance/Events/Atheria/Classwar")
def l_classwar():
    return render_template("valiance/lomba_atheria/l_classwar.html")
@app.route("/Valiance/Events/Atheria/Workshop_Baking")
def l_baking():
    return render_template("valiance/lomba_atheria/l_baking.html")
@app.route("/Valiance/Events/Atheria/Workshop_Baking_Fun_Pack")
def l_baking_fun():
    return render_template("valiance/lomba_atheria/l_baking_fun.html")
@app.route("/Valiance/Events/Atheria/Workshop_Baking_Party_Pack")
def l_baking_party():
    return render_template("valiance/lomba_atheria/l_baking_party.html")
@app.route("/Valiance/Events/Atheria/Nyanyi")
def l_nyanyi():
    return render_template("valiance/lomba_atheria/l_nyanyi.html") """

# OTHERS
@app.route("/Coming_Soon")
def coming_soon():
    return render_template("valiance/coming_soon.html")

@app.errorhandler(404)
def page_not_found(error):
    return render_template('/valiance/404.html'), 404


# Credence

@app.route('/credence')
def credence():
    return render_template('valiance/credence.html')

if __name__ == '__main__':
    app.run()