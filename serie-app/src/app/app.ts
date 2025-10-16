import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { series } from './data';
import { Serie } from './Serie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  series: Serie[] = series;

  getAverageSeasons(): number {
    const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return total / this.series.length;
  }
}