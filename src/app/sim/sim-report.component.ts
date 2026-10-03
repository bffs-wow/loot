import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-sim-report',
    standalone: true,
    template: `
    <div style="display:flex; gap:16px; align-items:center; padding:10px 18px; background:#1e293b; border-bottom:1px solid #334155;">
      <span style="color:#94a3b8; font-size:13px; font-weight:600;">Loot System Research</span>
      <a style="cursor:pointer; color:#60a5fa; font-size:13px; text-decoration:none;" (click)="show('loot-system-simulation-report.html')">📊 Full 300-run report</a>
      <a style="cursor:pointer; color:#60a5fa; font-size:13px; text-decoration:none;" (click)="show('drop-simulator.html')">🎲 Live drop simulator</a>
    </div>
    <iframe [src]="current" title="loot-system-simulation" style="width:100%; height: calc(100vh - 45px); border:0; display:block; background:#0f172a;"></iframe>
  `,
})
export class SimReportComponent {
  current: SafeResourceUrl;
  private san: DomSanitizer;

  constructor(san: DomSanitizer) {
    this.san = san;
    this.current = this.san.bypassSecurityTrustResourceUrl(
      'assets/sim/loot-system-simulation-report.html'
    );
  }

  show(file: string) {
    this.current = this.san.bypassSecurityTrustResourceUrl('assets/sim/' + file);
  }
}