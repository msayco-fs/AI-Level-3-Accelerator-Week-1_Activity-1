import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'tiktok';
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected email = '';
  protected readonly subscribed = signal(false);

  protected readonly year = new Date().getFullYear();

  protected readonly socialLinks: SocialLink[] = [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
  ];

  protected readonly columns: FooterColumn[] = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Menu', href: '#menu' },
        { label: 'About', href: '#about' },
        { label: 'Location', href: '#location' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'hello@matcharap.com', href: 'mailto:hello@matcharap.com' },
        { label: '(555) 213-0198', href: 'tel:+15552130198' },
        { label: '128 Willow Leaf Lane', href: '#location' },
      ],
    },
  ];

  onSubscribe(form: { valid: boolean | null }): void {
    if (!form.valid) {
      return;
    }
    this.subscribed.set(true);
    this.email = '';
    setTimeout(() => this.subscribed.set(false), 4000);
  }
}
