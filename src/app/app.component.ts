import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaComponent } from "./media/media.component";  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade2';
}

