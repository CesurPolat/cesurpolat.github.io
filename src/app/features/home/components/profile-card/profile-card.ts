import { Component } from '@angular/core';
import { GlassWrapperComponent } from '../../../../shared/glass-wrapper';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [GlassWrapperComponent],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCardComponent {
  profile = environment.profile;
}
