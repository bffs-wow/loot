import { Component, OnInit } from '@angular/core';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClock, faHistory } from '@fortawesome/free-solid-svg-icons';
import { TmbService } from 'src/app/tmb/tmb.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faDiscord = faDiscord;
  faHistory = faHistory;
  constructor(protected tmbService: TmbService) { }

  ngOnInit(): void { }
}
