import { Component } from '@angular/core';

interface HourRow {
  days: string;
  hours: string;
}

interface Amenity {
  label: string;
  icon: 'wifi' | 'seat' | 'card' | 'pet';
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.html',
  styleUrl: './location.scss',
})
export class LocationComponent {
  protected readonly hours: HourRow[] = [
    { days: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
    { days: 'Saturday', hours: '8:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '8:00 AM – 5:00 PM' },
  ];

  protected readonly amenities: Amenity[] = [
    { label: 'Free High-Speed Wi-Fi', icon: 'wifi' },
    { label: '32 Indoor + 12 Patio Seats', icon: 'seat' },
    { label: 'Cards & Contactless Pay', icon: 'card' },
    { label: 'Dog-Friendly Patio', icon: 'pet' },
  ];
}
