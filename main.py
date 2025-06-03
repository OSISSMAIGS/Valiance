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

# LOMBA - Questival
@app.route("/Events/Questival/Lomba_Basket")
def lomba_basket():
    return render_template("valiance/lomba_questival/lomba_basket.html")

@app.route("/Events/Questival/Lomba_Guess_The_Words")
def lomba_guess_the_words():
    return render_template("valiance/lomba_questival/lomba_guess_the_words.html")

@app.route("/Events/Questival/Lomba_Squid_Game_5v5")
def lomba_squid_game_5v5():
    return render_template("valiance/lomba_questival/lomba_squid_game_5v5.html")

@app.route("/Events/Questival/Lomba_Esport_Valorant")
def lomba_esport_valorant():
    return render_template("valiance/lomba_questival/lomba_esport_valorant.html")

@app.route("/Events/Questival/Lomba_Blind_Makeup")
def lomba_blind_makeup():
    return render_template("valiance/lomba_questival/lomba_blind_makeup.html")

@app.route("/Events/Questival/Lomba_Deaf_Blind_Mute_Baking")
def lomba_deaf_blind_mute_baking():
    return render_template("valiance/l_closed.html")

@app.route("/Events/Questival/Lomba_Round_And_Round")
def lomba_round_and_round():
    return render_template("valiance/lomba_questival/lomba_round_and_round.html")

@app.route("/Events/Questival/Lomba_Velocity")
def lomba_velocity():
    return render_template("valiance/lomba_questival/lomba_velocity.html")

# WORKSHOPS - Questival
@app.route("/Events/Questival/Workshop_Swap_The_Canvas")
def workshop_swap_the_canvas():
    return render_template("valiance/lomba_questival/workshop_swap_the_canvas.html")

@app.route("/Events/Questival/Workshop_Dalgona")
def workshop_dalgona():
    return render_template("valiance/lomba_questival/workshop_dalgona.html")

# MINIGAMES - Questival
@app.route("/Events/Questival/Minigames_Eye_Contact")
def minigames_eye_contact():
    return render_template("valiance/lomba_questival/minigames_eye_contact.html")

@app.route("/Events/Questival/Minigames_Lie_Detector")
def minigames_lie_detector():
    return render_template("valiance/lomba_questival/minigames_lie_detector.html")

@app.route("/Events/Questival/Minigames_Dont_Touch_The_Color")
def minigames_dont_touch_the_color():
    return render_template("valiance/lomba_questival/minigames_dont_touch_the_color.html")

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