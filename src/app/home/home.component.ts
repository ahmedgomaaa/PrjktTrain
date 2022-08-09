import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomName = faker.name.findName(); // Rowan Nikolaus
  paragrah = faker.lorem.paragraphs(2); // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  img = faker.image.abstract(286, 430, true);
  constructor() { }


  ngOnInit(): void {
  }

}
