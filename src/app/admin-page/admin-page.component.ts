import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit, OnChanges {
  section: string = '';
  tmbEditPage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.section = this.route.snapshot.queryParams.section;

    this.tmbEditPage = `https://github.com/bffs-wow/${
      location.href.split('admin')[0].split('https://bffs-wow.github.io/')[1]
    }edit/gh-pages/assets/tmb-data.json`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.section = this.route.snapshot.queryParams.section;
  }
}
