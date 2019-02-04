import { 
  Component,
  OnInit,
} from '@angular/core';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: any[];

  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.swService.getPeople().subscribe(result => {
      this.people = result;
    })
  }
}