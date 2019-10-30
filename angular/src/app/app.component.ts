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
  people: any[] = [];
  searchValue: string = '';
  showLoader: boolean = true;

  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.swService.getPeople().subscribe(result => {
      this.showLoader = false;
      this.people = result;
    })
  }

  onKeyUp(){
    this.showLoader = true;
    this.people = [];
    this.swService.searchPeopple(this.searchValue).subscribe(result => {
      this.showLoader = false;
      this.people = result;
    })
  }
}