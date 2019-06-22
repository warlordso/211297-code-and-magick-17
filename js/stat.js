window.renderStatistics = function(ctx, names, times) {

// тень облака

ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
ctx.fillRect (110, 20, 420, 270);

// белое облако

ctx.fillStyle = "#fff";
ctx.fillRect (100, 10, 420, 270);

// текст

ctx.font = "16px, PT Mono";
ctx.fillStyle = "#000"
ctx.fillText ("Ура вы победили!",  110, 50);
ctx.fillText ("Список результатов:", 110, 70);

var getMaxValue = function(anyArray) {
    var maxValue = -1;

    for (var index = 0; index < anyArray.length; index++) {
      if (anyArray[index] > maxValue) {
        maxValue = anyArray[index];
      }
    }
    return maxValue;
  };

  // Определение цвета

  var getPlayerColor = function (playerName) {
    if (playerName === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0, 0, 255, ' + (Math.random() + 0.1).toFixed(1) + ')';
    }
  };

  // Построение гистограммы

  var histogramHeight = 150;
  var initialX = 150;
  var initialY = 245;
  var columnIndent = 90;
  var columnWidth = 40;
  var lineHeight = 20;
  var maxTime = getMaxValue(times);

  for (j = 0; j < times.length; j++) {
    var playerTime = Math.round(times[j]);
    var columnHeight = playerTime * histogramHeight / (maxTime - 0);

    ctx.fillStyle = getPlayerColor(names[j]);
    ctx.fillRect(initialX + j * columnIndent, initialY, columnWidth, columnHeight * (-1));

    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, initialX + j * columnIndent, initialY - columnHeight - lineHeight / 2);
    ctx.fillText(names[j], initialX + j * columnIndent, initialY + lineHeight);
  }

}