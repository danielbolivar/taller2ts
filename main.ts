import { series } from "./data.js";
import Serie from "./serie.js";

class SeriesManager {
  private seriesTable: HTMLTableElement;
  private averageElement: HTMLParagraphElement;
  private serieDetail: HTMLDivElement;

  constructor() {
    this.seriesTable = document.getElementById(
      "seriesTable",
    ) as HTMLTableElement;
    this.averageElement = document.getElementById(
      "averageSeasons",
    ) as HTMLParagraphElement;
    this.serieDetail = document.getElementById("serieDetail") as HTMLDivElement;
    this.renderTable();
    this.renderAverage();
  }

  public renderTable(): void {
    const tbody = this.seriesTable.createTBody();
    series.forEach((serie) => {
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      row.addEventListener("click", () => this.showSerieDetail(serie));
    });
  }

  public renderAverage(): void {
    const averageSeasons = Math.floor(
      series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length,
    );
    this.averageElement.textContent = `Seasons average: ${averageSeasons}`;
  }

  private showSerieDetail(serie: Serie): void {
    this.serieDetail.innerHTML = `
      <div class="card">
        <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <p class="card-text"><strong>Channel:</strong> ${serie.channel}</p>
          <p class="card-text"><strong>Seasons:</strong> ${serie.seasons}</p>
          <a href="${serie.webpage}" class="btn btn-primary" target="_blank">Visit webpage</a>
        </div>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SeriesManager();
});
