export interface MenuItem {
 id: string;
 name: string;
 price: string;
 description: string;
}

export interface MenuCategory {
 title: string;
 items: MenuItem[];
}

export interface MenuSection {
 title: string;
 backgroundTitle: string;
 categories: MenuCategory[];
}
