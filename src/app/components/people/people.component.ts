import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { API } from '../../../helpers/api';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.less'
})
export class PeopleComponent implements OnInit {
  public faPlus = faPlus;
  public isLoading = true;
  public users: any[] | null = null;

  ngOnInit() {
    API.getPeople().then((res) => {
      this.users = res.data.users;
      this.isLoading = false;
    }).catch((e) => {
      this.isLoading = false;
      console.error("Error: " + e)
    })
  }
}
