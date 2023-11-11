import { Component} from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  selectedColor: string = '#000000';
  selectedFontSize: number = 16;
  selectedFont: string = 'Arial'
}
