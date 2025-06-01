// JavaScript for Questival event pages

document.addEventListener('DOMContentLoaded', function() {
    console.log('e_questival.js loaded');
    // Add Questival-specific JavaScript functionality here

    if (typeof spark !== 'undefined' && spark.start) {
        spark.start(); // Start the particle animation
        console.log('Spark particles started.');
    } else {
        console.error('Spark object or spark.start method not found.');
    }
});

var spark = {
    maxCount: 50,
    speed: 0.8,
    frameInterval: 15,
    alpha: 0.7,
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
    
    // New color combination (Squid Game Theme)
    var n = [
      "rgba(255, 0, 150,",   // Pink/Magenta (Guards)
      "rgba(0, 128, 128,",   // Teal/Green (Players)
      "rgba(220, 220, 220,", // Light Grey (Neutral/Accent)
      "rgba(255, 255, 255,"   // White (Accent)
    ];
    
    var e = false,
        i = false,
        o = Date.now(),
        a = [],
        r = 0,
        l = null;
  
    function d(t, e, i) {
      return t.color = n[Math.random() * n.length | 0] + (spark.alpha + ")"),
             t.x = Math.random() * e,
             t.y = Math.random() * i - i,
             t.diameter = 10 * Math.random() + 5,
             t.tilt = 10 * Math.random() - 10,
             t.tiltAngleIncrement = .07 * Math.random() + .05,
             t.tiltAngle = Math.random() * Math.PI,
             t.shapes = ['circle', 'square', 'triangle'],
             t.shape = t.shapes[Math.floor(Math.random() * t.shapes.length)],
             t.rotation = Math.random() * Math.PI * 2,
             t.rotationSpeed = (Math.random() - 0.5) * 0.05,
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
                  t.rotation += t.rotationSpeed;
                }
                if (t.x > n + 20 || t.x < -20 || t.y > i) {
                  e && a.length <= spark.maxCount ? d(t, n, i) : (a.splice(o, 1), o--);
                }
              }
            }(),
            function(ctx) {
              for (var particle, k = 0; k < a.length; k++) {
                particle = a[k];
                
                ctx.fillStyle = particle.color; 

                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation);

                var size = particle.diameter;
                ctx.beginPath();

                if (particle.shape === 'circle') {
                  ctx.arc(0, 0, size / 2, 0, 2 * Math.PI);
                } else if (particle.shape === 'square') {
                  ctx.rect(-size / 2, -size / 2, size, size);
                } else if (particle.shape === 'triangle') {
                  var h = size * (Math.sqrt(3)/2);
                  ctx.moveTo(0, -h / 2);
                  ctx.lineTo(-size / 2, h / 2);
                  ctx.lineTo(size / 2, h / 2);
                  ctx.closePath();
                }
                ctx.fill();
                ctx.restore();
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
  