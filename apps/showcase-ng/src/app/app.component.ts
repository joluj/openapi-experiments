import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from './generated';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule, AsyncPipe],
  selector: 'openapi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$ = this.petService.findPetsByStatus(['available']);

  constructor(private readonly petService: PetService) {}
}
