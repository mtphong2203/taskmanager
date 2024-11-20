import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormatPipe } from '../../utils/format.pipe';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [RouterModule, FormatPipe],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {
  public quiz02: string = './assets/images/map.jpeg'
  public quiz03: string = './assets/images/inventions.png'
  public quiz04: string = './assets/images/capitals.jpeg'

  public time: number = 15;
}
