import { ChangeDetectionStrategy, Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { RowService } from './row-service.service';

@Component({
  selector: 'app-row-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './row-table.component.html',
  styleUrls: ['./row-table.component.scss'],
})
export class RowTableComponent implements OnInit {
  // @Input() usuarios: Object;
  @Input() data: Observable<any>;
  usuarios: Object[] = [];
  // avatar: string; /// somente o campo alterado sera renderizado novamente
  // login: string; /// somente o campo alterado sera renderizado novamente
  // id: number; /// somente o campo alterado sera renderizado novamente
  // html_url: string; /// somente o campo alterado sera renderizado novamente
  //type: string; /// somente o campo alterado sera renderizado novamente

  constructor(private rowService: RowService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.data.subscribe((item) => {
      this.usuarios = [...this.usuarios, ...item];
      this.cd.markForCheck();
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
}
