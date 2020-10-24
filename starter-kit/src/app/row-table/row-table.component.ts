import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
})
export class RowTableComponent implements OnInit {
  // @Input() avatar:string ;/// somente o campo alterado sera renderizado novamente
  // @Input() login:string ;/// somente o campo alterado sera renderizado novamente
  @Input() id: number; /// somente o campo alterado sera renderizado novamente
  // @Input() html:string ;/// somente o campo alterado sera renderizado novamente
  // @Input() tipo:string ;/// somente o campo alterado sera renderizado novamente

  constructor() {}

  ngOnInit(): void {}
}
