import { Component, OnInit } from '@angular/core';
import { PutService } from './put-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-list',
  templateUrl: './put-list.component.html',
  styleUrls: ['./put-list.component.scss'],
})
export class PutListComponent implements OnInit {
  users: any = []; /// mapear
  constructor(private putService: PutService) {}

  ngOnInit(): void {
    this.putService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  //onClickMe () {
  Click(user: Object) {
    this.putService.putUsers(user).subscribe((users) => {
      this.users = users;
    });
    alert('Usuario ' + user['nome'] + ' atualizado');
  }
}
