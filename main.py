from flask import Flask, render_template

app = Flask(__name__)

# VALIANCE
@app.route("/")
def valiance():
    return render_template("valiance/index.html")

@app.route("/Valiance") # Double routing / Alternative Route (hirauke b)
def valiance_other():
    return render_template("valiance/index.html")



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
    app.run(debug=True)
