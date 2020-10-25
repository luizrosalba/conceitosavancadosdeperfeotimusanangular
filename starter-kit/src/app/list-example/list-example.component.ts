import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExampleService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  //changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  usuarios: any = []; /// o componente só sera renderizado novamente se essa variavel mudar
  @Input() title: string;
  @Input() principal: string;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.exampleService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  clickEditar(user: Object) {
    this.exampleService.patchUsers(user).subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
    alert('Usuario ' + user['login'] + ' editado');
  }

  clickDelete(id: number) {
    //alert(name);
    this.exampleService.deleteUsers(id).subscribe((usuarios) => {
      this.usuarios = usuarios;

      this.exampleService.getUsers().subscribe((usuarios) => {
        this.usuarios = usuarios;
      });
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
