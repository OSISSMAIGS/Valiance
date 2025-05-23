var spark = {
    maxCount: 50,
    speed: 0.8,
    frameInterval: 15,
    alpha: 0.35,
    gradient: false,
    start: null,
    stop: null,
    toggle: null,
    pause: null,
    resume: null,
    togglePause: null,
    remove: null,
    isPaused: null,
    isRunning: null
  };
  
  if (screen.width < 500) spark.maxCount = 15;
  
  !function() {
    spark.start = s;
    spark.stop = w;
    spark.toggle = function() { e ? w() : s() };
    spark.pause = u;
    spark.resume = m;
    spark.togglePause = function() { i ? m() : u() };
    spark.isPaused = function() { return i };
    spark.remove = function() { stop(), i = false, a = [] };
    spark.isRunning = function() { return e };
  
    var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    
    // New color combination (pink, yellow, and orange)
    var n = [
      "rgba(255,105,180,",   // Hot pink
      "rgba(255,228,0,",     // Yellow
      "rgba(255,140,0,",     // Orange
      "rgba(255,182,193,",   // Light pink
      "rgba(255,165,0;"      // Orange (lighter)
    ];
    
    var e = false,
        i = false,
        o = Date.now(),
        a = [],
        r = 0,
        l = null;
  
    function d(t, e, i) {
      return t.color = n[Math.random() * n.length | 0] + (spark.alpha + ")"),
             t.color2 = n[Math.random() * n.length | 0] + (spark.alpha + ")"),
             t.x = Math.random() * e,
             t.y = Math.random() * i - i,
             t.diameter = 10 * Math.random() + 5,
             t.tilt = 10 * Math.random() - 10,
             t.tiltAngleIncrement = .07 * Math.random() + .05,
             t.tiltAngle = Math.random() * Math.PI,
             t;
    }
  
    function u() { i = true; }
    function m() { i = false; c(); }
  
    function c() {
      if (!i)
        if (0 === a.length) l.clearRect(0, 0, window.innerWidth, window.innerHeight), null;
        else {
          var n = Date.now(), u = n - o;
          (!t || u > spark.frameInterval) && (
            l.clearRect(0, 0, window.innerWidth, window.innerHeight),
            function() {
              var t, n = window.innerWidth, i = window.innerHeight;
              r += .01;
              for (var o = 0; o < a.length; o++) {
                t = a[o];
                if (!e && t.y < -15) t.y = i + 100;
                else {
                  t.tiltAngle += t.tiltAngleIncrement;
                  t.x += Math.sin(r) - .5;
                  t.y += .5 * (Math.cos(r) + t.diameter + spark.speed);
                  t.tilt = 15 * Math.sin(t.tiltAngle);
                }
                if (t.x > n + 20 || t.x < -20 || t.y > i) {
                  e && a.length <= spark.maxCount ? d(t, n, i) : (a.splice(o, 1), o--);
                }
              }
            }(),
            function(t) {
              for (var n, e, i, o, r = 0; r < a.length; r++) {
                if (n = a[r], t.beginPath(), t.lineWidth = n.diameter, i = n.x + n.tilt, e = i + n.diameter / 2, o = n.y + n.tilt + n.diameter / 2, spark.gradient) {
                  var l = t.createLinearGradient(e, n.y, i, o);
                  l.addColorStop("0", n.color), l.addColorStop("1.0", n.color2), t.strokeStyle = l;
                } else t.strokeStyle = n.color;
                t.moveTo(e, n.y), t.lineTo(i, o), t.stroke();
              }
            }(l),
            o = n - u % spark.frameInterval
          );
          requestAnimationFrame(c);
        }
    }
  
    function s(t, n, o) {
      var r = window.innerWidth, u = window.innerHeight;
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return window.setTimeout(t, spark.frameInterval); };
      var m = document.getElementById("spark-canvas");
      if (null === m) {
        (m = document.createElement("canvas")).setAttribute("id", "spark-canvas"),
        m.setAttribute("style", "display:block;z-index:5;pointer-events:none;position:fixed;top:0"),
        document.body.prepend(m),
        m.width = r, m.height = u,
        window.addEventListener("resize", function() { m.width = window.innerWidth, m.height = window.innerHeight }, true),
        l = m.getContext("2d");
      } else if (null === l) l = m.getContext("2d");
  
      var s = spark.maxCount;
      if (n) {
        if (o)
          if (n == o) s = a.length + o;
          else {
            if (n > o) { var f = n; n = o; o = f; }
            s = a.length + (Math.random() * (o - n) + n | 0);
          }
        else s = a.length + n;
      }
      for (; a.length < s;) a.push(d({}, r, u));
      e = true, i = false, c(), t && window.setTimeout(w, t);
    }
  
    function w() { e = false; }
  }();
  