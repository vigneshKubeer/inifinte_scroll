import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MenuListService } from './menu-list.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [InfiniteScrollModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
})
export class MenuListComponent implements OnInit {
  isLoading: boolean = false;
  page = 1;
  items: string[] = [];
  pageSize: number = 20;

  constructor(private service: MenuListService) {}
  ngOnInit(): void {
    this.loadData();
  }
  loadData = () => {
    this.toggleLoading();
    this.service.getItems(this.page, this.pageSize).subscribe({
      next: (res: any) => (this.items = res),
      error: (err: any) => console.log(err),
      complete: () => this.toggleLoading(),
    });
  };
  toggleLoading = () => (this.isLoading = !this.isLoading);
  onScroll() {
    this.page++;
    this.appendData();
  }
  appendData() {
    this.toggleLoading();
    this.service.getItems(this.page, this.pageSize).subscribe({
      next: (resp: any) => (this.items = [...this.items, ...resp]),
      error: (err: any) => console.log(err),
      complete: () => this.toggleLoading(),
    });
  }
}
