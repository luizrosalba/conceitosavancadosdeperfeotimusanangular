import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-example',
  //changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  usuarios = new BehaviorSubject([]);
  //usuarios: any = []; /// o componente só sera renderizado novamente se essa variavel mudar
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    // this.exampleService.getUsers().subscribe((usuarios) => {
    //   this.usuarios = usuarios;
    // });
  }
  ///https://www.positronx.io/understand-angular-change-detection-strategy/

  //putUsers(user: Object): Observable<{}> {

  clickEditar(user: Object) {
    // this.exampleService.patchUsers(user).subscribe((usuarios) => {
    //   this.usuarios = usuarios;
    // });
    // alert('Usuario ' + user['login'] + ' editado');
  }

  clickDelete(id: number) {
    // //alert(name);
    // this.exampleService.deleteUsers(id).subscribe((usuarios) => {
    //   this.usuarios = usuarios; /// mudanca da lista de usuarios
    //   this.exampleService.getUsers().subscribe((usuarios) => {
    //     this.usuarios = usuarios; /// mudanca da lista de usuarios
    //   });
    // });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
