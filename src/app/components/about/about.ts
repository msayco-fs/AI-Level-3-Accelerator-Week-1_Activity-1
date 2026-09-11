import { Component } from '@angular/core';

interface Value {
  title: string;
  text: string;
  icon: 'leaf' | 'heart' | 'people';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly values: Value[] = [
    {
      title: 'Ethically Sourced',
      text: 'Our matcha is stone-milled in small Uji farms that pay growers fairly and farm without synthetic pesticides.',
      icon: 'leaf',
    },
    {
      title: 'Baked With Care',
      text: 'Every croissant, mochi, and cheesecake is mixed, laminated, and baked in-house from scratch, every single day.',
      icon: 'heart',
    },
    {
      title: 'Rooted In Community',
      text: 'We host local artists, book clubs, and school fundraisers — Matcharap is a table for the whole neighborhood.',
      icon: 'people',
    },
  ];
}
