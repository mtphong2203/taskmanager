import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public logo: string = './assets/images/logo.png'
  public textLogo: string = 'Quizzes'
  public date: number = new Date().getFullYear();
}
