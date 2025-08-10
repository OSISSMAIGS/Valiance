from flask import Flask, render_template

app = Flask(__name__)


# VALIANCE
@app.route("/")
def valiance():
    return render_template("valiance/index.html")


@app.route("/Events")
def valiance_events():
    return render_template("valiance/events.html")


# EVENTS - VALIANCE'S


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


@app.route("/Events/Luminance")
def e_luminance():
    return render_template("valiance/e_luminance.html")


@app.route("/Events/IgnatiusDay")
def e_ignatius():
    return render_template("valiance/e_ignatius.html")

@app.route("/Events/IgnatiusDay/Cooking")
def l_cooking():
    return render_template("valiance/lomba_ignatius/l_cooking.html")


@app.route("/Events/IgnatiusDay/Dont_Step_On_The_Paper")
def l_dont_step():
    return render_template("valiance/lomba_ignatius/l_dont_step.html")


@app.route("/Events/IgnatiusDay/Whisper")
def l_whisper():
    return render_template("valiance/lomba_ignatius/l_whisper.html")


@app.route("/Events/IgnatiusDay/Move_The_Cup")
def l_blow_the_cup():
    return render_template("valiance/lomba_ignatius/l_blow_the_cup.html")


@app.route("/Events/Questival")
def e_questival():
    return render_template("valiance/e_questival.html")


# Lomba Rakwala

@app.route("/Events/Rakwala")
def e_rakwala():
    return render_template("valiance/e_rakwala.html")

@app.route("/Events/Rakwala/Estafet_Kelereng")
def l_estafet_kelereng():
    return render_template("valiance/lomba_rakwala/l_estafet_kelereng.html")


@app.route("/Events/Rakwala/Estafet_Air")
def l_estafet_air():
    return render_template("valiance/lomba_rakwala/l_estafet_air.html")


@app.route("/Events/Rakwala/Buah_Berhadiah")
def l_buah_berhadiah():
    return render_template("valiance/lomba_rakwala/l_buah_berhadiah.html")


@app.route("/Events/Rakwala/Bola_Pipa")
def l_bola_pipa():
    return render_template("valiance/lomba_rakwala/l_bola_pipa.html")


@app.route("/Events/Rakwala/Nyanyi")
def l_nyanyi():
    return render_template("valiance/lomba_rakwala/l_nyanyi.html")


@app.route("/Events/Rakwala/Susun_Kata")
def l_susun_kata():
    return render_template("valiance/lomba_rakwala/l_susun_kata.html")


@app.route("/Events/Rakwala/Masak")
def l_masak():
    return render_template("valiance/lomba_rakwala/l_masak.html")


@app.route("/Events/Rakwala/Siapa_Cepat_Dapat_Kursi")
def l_siapa_cepat_dapat_kursi():
    return render_template("valiance/lomba_rakwala/l_siapa_cepat_dapat_kursi.html")


@app.route("/Events/Rakwala/Makan_Kerupuk")
def l_makan_kerupuk():
    return render_template("valiance/lomba_rakwala/l_makan_kerupuk.html")


@app.route("/Events/Rakwala/Cerpen")
def l_cerpen():
    return render_template("valiance/lomba_rakwala/l_cerpen.html")


@app.route("/Events/Rakwala/Sarung_Smash")
def l_sarung_smash():
    return render_template("valiance/lomba_rakwala/l_sarung_smash.html")


@app.route("/Events/Rakwala/Fashion_Show")
def l_fashion_show():
    return render_template("valiance/lomba_rakwala/l_fashion_show.html")

@app.route("/Events/Rakwala/Melukis_Totebag")
def l_melukis_totebag():
    return render_template("valiance/lomba_rakwala/l_melukis_totebag.html")

# OTHERS
@app.route("/Coming_Soon")
def coming_soon():
    return render_template("valiance/coming_soon.html")


@app.route("/About_Us")
def about_us():
    return render_template("valiance/about_us.html")


@app.errorhandler(404)
def page_not_found(error):
    return render_template("/valiance/404.html"), 404


# Credence
@app.route("/credence")
def credence():
    return render_template("valiance/credence.html")


if __name__ == "__main__":
    app.run()
