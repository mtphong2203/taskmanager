import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormatPipe } from '../../utils/format.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormatPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public quiz01: string = './assets/images/quiz-bg-01.jpeg'
  public quiz02: string = './assets/images/map.jpeg'
  public quiz03: string = './assets/images/inventions.png'
  public quiz04: string = './assets/images/capitals.jpeg'

  public time: number = 15;
}
