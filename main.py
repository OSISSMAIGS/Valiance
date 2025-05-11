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
    return render_template("valiance/lomba_vaisakha/e_vaisakha.html")

# Vaisakha - Registration
@app.route("/Events/Vaisakha/Lomba_Buddhist_Idol")
def l_buddhist_idol():
    return render_template("valiance/lomba_vaisakha/l_buddhist_idol.html")

@app.route("/Events/Vaisakha/Lomba_LCC_Buddhist")
def l_lcc():
    return render_template("valiance/lomba_vaisakha/l_lcc.html")

@app.route("/Events/Vaisakha/Lomba_Baca_Dhammapada")
def l_baca_dhammapada():
    return render_template("valiance/lomba_vaisakha/l_baca_dhammapada.html")

@app.route("/Events/Vaisakha/Minigames_Bingo")
def l_bingo():
    return render_template("valiance/lomba_vaisakha/l_bingo.html")

@app.route("/Events/Vaisakha/Minigames_Memory_Matching_Card")
def l_memory_matching_card():
    return render_template("valiance/lomba_vaisakha/l_memory_matching_card.html")

@app.route("/Events/Vaisakha/Minigames_Lotus_Landmines")
def l_lotus_landmines():
    return render_template("valiance/lomba_vaisakha/l_lotus_landmines.html")

@app.route("/Events/Vaisakha/Minigames_Tower_of_Dharma")
def l_tower_of_dharma():
    return render_template("valiance/lomba_vaisakha/l_tower_of_dharma.html")

@app.route("/Events/Vaisakha/Draw_Your_Face")
def l_draw_your_face():
    return render_template("valiance/lomba_vaisakha/l_draw_your_face.html")



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