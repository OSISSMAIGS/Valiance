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
  
  if (screen.width < 768) {
    spark.maxCount = 25;
    spark.alpha = 0.45;
  } else if (screen.width < 500) {
    spark.maxCount = 15;
    spark.alpha = 0.5;
  }
  
  (function() {
    spark.start = startSparkles;
    spark.stop = stopSparkles;
    spark.toggle = function() { isSparkling ? stopSparkles() : startSparkles(); };
    spark.pause = pauseSparkles;
    spark.resume = resumeSparkles;
    spark.togglePause = function() { isPaused ? resumeSparkles() : pauseSparkles(); };
    spark.isPaused = function() { return isPaused; };
    spark.remove = function() {
      stopSparkles();
      isPaused = false;
      particles = [];
      if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
      }
    };
    spark.isRunning = function() { return isSparkling; };
  
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
                                     window[vendors[x]+'CancelRequestAnimationFrame'];
    }
  
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, spark.frameInterval - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
  
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
  
    var colors = [
      "rgba(255,105,180,",
      "rgba(255,228,0,",
      "rgba(255,140,0,",
      "rgba(255,182,193,",
      "rgba(255,165,0,"
    ];
  
    var isSparkling = false,
        isPaused = false,
        lastTimestamp = Date.now(),
        particles = [],
        particlePointer = 0,
        canvas = null,
        ctx = null,
        animationFrameId = null;
  
    function Particle(canvasWidth, canvasHeight) {
      this.color = colors[Math.floor(Math.random() * colors.length)] + spark.alpha + ")";
      if (spark.gradient) {
          this.color2 = colors[Math.floor(Math.random() * colors.length)] + spark.alpha + ")";
      }
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * -canvasHeight;
      this.diameter = Math.random() * 8 + 4;
      this.tilt = Math.random() * 10 - 5;
      this.tiltAngleIncrement = Math.random() * 0.05 + 0.03;
      this.tiltAngle = Math.random() * Math.PI * 2;
      return this;
    }
  
    function pauseSparkles() { isPaused = true; }
    function resumeSparkles() {
      if(isPaused) {
          isPaused = false;
          if(isSparkling && !animationFrameId) {
              lastTimestamp = Date.now();
              draw();
          }
      }
    }
  
    function draw() {
      if (isPaused) {
          if(animationFrameId) {
              window.cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
          }
          return;
      }
      if (!isSparkling && particles.length === 0) {
          if(animationFrameId) {
              window.cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
          }
          if (ctx && canvas) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          return;
      }
  
      var currentTime = Date.now();
      var deltaTime = currentTime - lastTimestamp;
  
      if (deltaTime >= spark.frameInterval) {
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
  
        var W = window.innerWidth;
        var H = window.innerHeight;
  
        if (isSparkling && particles.length < spark.maxCount) {
            for(let i=0; i < (spark.maxCount - particles.length); i++){
                if(particles.length < spark.maxCount) particles.push(new Particle(W,H));
                else break;
            }
        }
  
        particlePointer += 0.015;
  
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
  
          p.tiltAngle += p.tiltAngleIncrement;
          p.x += (Math.sin(particlePointer + (p.y / H) * Math.PI) * 0.5);
          p.y += (Math.cos(particlePointer) + p.diameter + spark.speed) * 0.5;
          p.tilt = Math.sin(p.tiltAngle * (isPaused ? 0 : 1)) * 10;
  
          if (p.y > H + p.diameter) {
            if (isSparkling) {
              Object.assign(p, new Particle(W,H));
              p.y = Math.random() * -50 - p.diameter;
              p.x = Math.random() * W;
            } else {
              particles.splice(i, 1);
              i--;
              continue;
            }
          } else if (p.x > W + p.diameter || p.x < -p.diameter) {
              if (isSparkling) {
                  Object.assign(p, new Particle(W,H));
                  p.y = Math.random() * -50 - p.diameter;
                  p.x = Math.random() * W;
              } else {
                  particles.splice(i,1);
                  i--;
                  continue;
              }
          }
  
          if (ctx) {
              ctx.beginPath();
              ctx.lineWidth = p.diameter;
  
              var x2 = p.x + p.tilt;
              var y2 = p.y + p.tilt + p.diameter / 2;
              var x1 = x2 + p.diameter / 2;
  
              if (spark.gradient) {
                var grad = ctx.createLinearGradient(x1, p.y, x2, y2);
                grad.addColorStop(0, p.color);
                grad.addColorStop(1, p.color2);
                ctx.strokeStyle = grad;
              } else {
                ctx.strokeStyle = p.color;
              }
  
              ctx.moveTo(x1, p.y);
              ctx.lineTo(x2, y2);
              ctx.stroke();
          }
        }
        lastTimestamp = currentTime - (deltaTime % spark.frameInterval);
      }
      animationFrameId = window.requestAnimationFrame(draw);
    }
  
    function startSparkles() {
      var W = window.innerWidth;
      var H = window.innerHeight;
  
      if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.setAttribute("id", "spark-canvas");
        canvas.setAttribute("style", "display:block;z-index:5;pointer-events:none;position:fixed;top:0;left:0;width:100%;height:100%;");
        document.body.prepend(canvas);
        ctx = canvas.getContext("2d");
  
        var resizeTimeout;
        window.addEventListener("resize", function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }, 100);
        }, true);
      }
      canvas.width = W;
      canvas.height = H;
  
      if (particles.length < spark.maxCount) {
          for (var i = particles.length; i < spark.maxCount; i++) {
              particles.push(new Particle(W, H));
          }
      }
  
      isSparkling = true;
      isPaused = false;
  
      if (!animationFrameId) {
          lastTimestamp = Date.now();
          draw();
      }
    }
  
    function stopSparkles() {
      isSparkling = false;
    }
  }());
  
  
  document.addEventListener('DOMContentLoaded', () => {
      if (typeof spark !== 'undefined' && spark.start) {
        spark.start();
      }
  
      const padletCard = document.querySelector('.padlet-card-link');
      const padletOverlay = padletCard ? padletCard.querySelector('.padlet-card-overlay') : null;
  
      if (padletCard && padletOverlay) {
        padletOverlay.classList.add('hidden-overlay');
  
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
  
        const observerCallback = (entries, observerInstance) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('hidden');
              entry.target.classList.add('show');
  
              padletOverlay.classList.remove('hidden-overlay');
              padletOverlay.classList.add('show-overlay');
  
              observerInstance.unobserve(entry.target);
            }
          });
        };
  
        const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
        intersectionObserver.observe(padletCard);
  
      } else {
        if (!padletCard) {
          console.warn('Elemen .padlet-card-link tidak ditemukan.');
        }
        if (!padletOverlay) {
          console.warn('Elemen .padlet-card-overlay tidak ditemukan di dalam .padlet-card-link.');
        }
      }
  });