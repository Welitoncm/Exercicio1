import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: string | null = null;

  calcularMedia() {
    const mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.resultado = mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
