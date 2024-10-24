import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  companyInfo = {
    name: 'SportsMart',
    description: 'At SportsMart, we aim to provide the best platform for buying and selling sports equipment. Our goal is to foster a community where enthusiasts can connect and trade in high-quality sports goods at affordable prices.',
    mission: 'To empower sports enthusiasts by providing them a seamless platform for trading sports gear and promoting a healthy lifestyle through sports.',
    vision: 'To become the leading online marketplace for sports equipment globally, making sports accessible to everyone.',
    values: ['Integrity', 'Customer Satisfaction', 'Quality', 'Sustainability']
  };
}
