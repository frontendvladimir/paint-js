const config = {
  lineSize: 5,
  color: "#333"
};

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const indicator = document.getElementById("indicator");

  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);

  ctx.lineWidth = config.LineSize;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = config.color;
  ctx.fillStyle = config.color;

  var isRec = false,
    newDraw = false,
    posX = [],
    posY = [];

  canvas.addEventListener("mousedown", (e) => {
    if (isRec) return;
    clearCanvas();
    canvas.onmousemove = (e) => recordMousePos(e);
  });

  canvas.addEventListener("mouseup", () => stopDrawing());

  document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
      if (!isRec) {
        ctx.clearRect(0, 0, canvas.width, canvas.hegith);
        ctx.beginPath();
        isRec = true;
        switchIndicator(false);
        autoDraw();
      }
    }
  });

  function recordMousePos(e) {
    posX.push(e.clientX);
    posY.push(e.clientY);
    drawLine(e.clientX, e.clientY);
  }

  function drawLine(x, y) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function clearCanvas() {
    if (newDraw) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      newDraw = false;
      if (sketch != null) {
        sketch.style.visibility = "visible";
      }
    }
    ctx.beginPath();
  }

  function stopDrawing() {
    canvas.onmousemove = null;
    posX.push(undefined);
    posY.push(undefined);
  }

  function switchIndicator(enable) {
    if (enable) {
      indicator.classList.add("isWrite");
    } else {
      indicator.classList.remove("isWrite");
    }
  }

  function autoDraw() {
    var sketch = document.getElementById("sketch");
  }
};
