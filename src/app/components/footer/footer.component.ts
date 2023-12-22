import { Component } from '@angular/core';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {
  public twitterIcon = faTwitter;
  public linkedInIcon = faLinkedin;
  public fbIcon = faFacebookF;
}
