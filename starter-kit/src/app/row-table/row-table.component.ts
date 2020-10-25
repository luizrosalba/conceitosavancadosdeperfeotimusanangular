import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { RowService } from './row-service.service';

@Component({
  selector: 'app-row-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
})
export class RowTableComponent implements OnInit {
  avatar: string; /// somente o campo alterado sera renderizado novamente
  login: string; /// somente o campo alterado sera renderizado novamente
  id: number; /// somente o campo alterado sera renderizado novamente
  html_url: string; /// somente o campo alterado sera renderizado novamente
  type: string; /// somente o campo alterado sera renderizado novamente

  constructor(private rowService: RowService) {}

  ngOnInit(): void {}
}
