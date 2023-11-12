import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  user = {
    name: 'John',
    firstname: 'Doe',
    age: 25,
    description:'bfdqhsdbf fqdvqsk dfvkjqdhfnv dfsvkjqdnkv dfsvqdkf'
    // Add other properties as needed
  };
  ngOnInit(): void {
  }

}
