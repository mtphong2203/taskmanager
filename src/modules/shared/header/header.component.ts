import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public logo: string = './assets/images/logo.png'
  public textLogo: string = 'Quizzes'
  public userLogo: string = './assets/images/avatar-5.png'

  currentPage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Lắng nghe sự kiện NavigationEnd và ép kiểu event thành NavigationEnd
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Lọc sự kiện NavigationEnd
    ).subscribe((event: NavigationEnd) => {
      // Cập nhật currentPage từ URL sau khi điều hướng
      this.currentPage = event.urlAfterRedirects.split('/')[1]; // Lấy phần sau dấu '/' trong URL
    });

    // Cập nhật giá trị currentPage khi trang được tải lần đầu tiên
    this.currentPage = this.router.url.split('/')[1];
  }
}
