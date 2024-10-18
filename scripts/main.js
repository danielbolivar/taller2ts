import { series } from "./data.js";
var SeriesManager = /** @class */ (function () {
    function SeriesManager() {
        this.seriesTable = document.getElementById("seriesTable");
        this.averageElement = document.getElementById("averageSeasons");
        this.serieDetail = document.getElementById("serieDetail");
        this.renderTable();
        this.renderAverage();
    }
    SeriesManager.prototype.renderTable = function () {
        var _this = this;
        var tbody = this.seriesTable.createTBody();
        series.forEach(function (serie) {
            var row = tbody.insertRow();
            row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      ");
            row.addEventListener("click", function () { return _this.showSerieDetail(serie); });
        });
    };
    SeriesManager.prototype.renderAverage = function () {
        var averageSeasons = Math.floor(series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0) / series.length);
        this.averageElement.textContent = "Seasons average: ".concat(averageSeasons);
    };
    SeriesManager.prototype.showSerieDetail = function (serie) {
        this.serieDetail.innerHTML = "\n      <div class=\"card\">\n        <img src=\"".concat(serie.poster, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <p class=\"card-text\"><strong>Channel:</strong> ").concat(serie.channel, "</p>\n          <p class=\"card-text\"><strong>Seasons:</strong> ").concat(serie.seasons, "</p>\n          <a href=\"").concat(serie.webpage, "\" class=\"btn btn-primary\" target=\"_blank\">Visit webpage</a>\n        </div>\n      </div>\n    ");
    };
    return SeriesManager;
}());
document.addEventListener("DOMContentLoaded", function () {
    new SeriesManager();
});
