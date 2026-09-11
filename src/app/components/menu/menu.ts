import { Component, computed, signal } from '@angular/core';

export type MenuCategory = 'drink' | 'pastry';
export type MenuTag = 'best-seller' | 'feature' | 'new';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag: MenuTag;
  category: MenuCategory;
  icon: 'latte' | 'iced' | 'espresso' | 'croissant' | 'donut' | 'cake';
}

type FilterKey = 'all' | MenuCategory;

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {
  protected readonly activeFilter = signal<FilterKey>('all');

  protected readonly filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All Favorites' },
    { key: 'drink', label: 'Matcha Drinks' },
    { key: 'pastry', label: 'Fresh Pastries' },
  ];

  protected readonly menuItems: MenuItem[] = [
    {
      name: 'Classic Matcha Latte',
      description: 'Stone-milled ceremonial matcha whisked with steamed oat milk and a touch of raw honey.',
      price: '$5.50',
      tag: 'best-seller',
      category: 'drink',
      icon: 'latte',
    },
    {
      name: 'Iced Hojicha Cream',
      description: 'Roasted hojicha tea over ice, crowned with a cloud of vanilla-bean cold foam.',
      price: '$5.75',
      tag: 'new',
      category: 'drink',
      icon: 'iced',
    },
    {
      name: 'Matcha Espresso Fusion',
      description: 'Ceremonial matcha meets a shot of espresso for an earthy, energizing double act.',
      price: '$6.25',
      tag: 'feature',
      category: 'drink',
      icon: 'espresso',
    },
    {
      name: 'Matcha Butter Croissant',
      description: 'Laminated 36 hours, folded with matcha butter for a flaky, jade-hued crumb.',
      price: '$4.25',
      tag: 'best-seller',
      category: 'pastry',
      icon: 'croissant',
    },
    {
      name: 'Red Bean Mochi Donut',
      description: 'Pillowy mochi-glazed donut filled with sweet red bean and a hint of sea salt.',
      price: '$3.95',
      tag: 'new',
      category: 'pastry',
      icon: 'donut',
    },
    {
      name: 'Matcha Basque Cheesecake',
      description: 'Burnt-top Basque cheesecake swirled with matcha, jammy in the center, caramelized on top.',
      price: '$5.50',
      tag: 'feature',
      category: 'pastry',
      icon: 'cake',
    },
  ];

  protected readonly filteredItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter((item) => item.category === filter);
  });

  setFilter(filter: FilterKey): void {
    this.activeFilter.set(filter);
  }

  tagLabel(tag: MenuTag): string {
    switch (tag) {
      case 'best-seller':
        return 'Best Seller';
      case 'feature':
        return 'Feature';
      case 'new':
        return 'New';
    }
  }
}
