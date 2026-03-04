import { Component } from '@angular/core';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [GlassWrapperComponent],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCardComponent { }
