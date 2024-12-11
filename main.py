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

#ASTERATION
@app.route("/Asteration")
def asteration():
    return render_template("asteration/index.html")

#EVENTS - ASTERATION'S
@app.route("/Asteration/Events")
def asteration_events():
    return render_template("asteration/events.html")

@app.route("/Asteration/Events/Gelora")
def e_gelora():
    return render_template("asteration/e_gelora.html")

@app.route("/Asteration/Events/Aventura")
def e_aventura():
    return render_template("asteration/e_aventura.html")

@app.route("/Asteration/Events/Etourdissante")
def e_etourdissante():
    return render_template("asteration/e_etourdissante.html")
  
@app.route("/Asteration/Events/Qaliftar")
def e_qaliftar():
    return render_template("asteration/e_qaliftar.html")

@app.route("/Asteration/Events/Reveera")
def e_reveera():
    return render_template("asteration/e_reveera.html")

@app.route("/Asteration/Events/Lunerast")
def e_lunerast():
    return render_template("asteration/e_lunerast.html")

@app.route("/Asteration/Events/Litioree")
def e_litioree():
    return render_template("asteration/e_litioree.html")

@app.route("/Asteration/Events/Armone")
def e_armone():
    return render_template("asteration/e_armone.html")

@app.route("/Asteration/Events/Pelita")
def e_pelita():
    return render_template("asteration/e_pelita.html")

@app.route("/Asteration/Events/Aksara")
def e_aksara():
    return render_template("asteration/e_aksara.html")

#OTHER
@app.route("/Asteration/Magazine")
def asteration_magazine():
    return render_template("asteration/magazine.html")

@app.route("/Asteration/About")
def asteration_about():
    return render_template("asteration/about.html")


# Credence

@app.route('/credence')
def credence():
    return render_template('valiance/credence.html')

if __name__ == '__main__':
    app.run()