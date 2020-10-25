import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete-service.service';

@Component({
  selector: 'app-delete-list',
  templateUrl: './delete-list.component.html',
  styleUrls: ['./delete-list.component.scss'],
})
export class DeleteListComponent implements OnInit {
  users: any = []; /// mapear
  constructor(private deleteService: DeleteService) {}

  ngOnInit(): void {
    this.deleteService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  //onClickMe () {
  onClickMe(id: number) {
    //alert(name);
    this.deleteService.deleteUsers(id).subscribe((users) => {
      this.users = users;

      this.deleteService.getUsers().subscribe((users) => {
        this.users = users;
      });
    });
  }
}
