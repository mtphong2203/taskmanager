import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public logo: string = './assets/images/logo.png'
  public textLogo: string = 'Quizzes'
  public quiz01: string = './assets/images/quiz-bg-01.jpeg'

  public member01: string = './assets/images/avatar-2.png'
  public member02: string = './assets/images/avatar-7.png'
  public member03: string = './assets/images/avatar-9.png'
}
