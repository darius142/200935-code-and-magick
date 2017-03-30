'use strict';

window.renderStatistics = function (ctx, names, times) {


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;


  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  function getRandom() {
    return Math.random();
  }

  var barWidth = 40;
  var indent = 80;
  var initialX = 150;
  var initialY = 80;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandom() + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY + histogramWidth - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialY + histogramWidth + 20);
  }
};


