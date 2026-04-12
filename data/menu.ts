import { MenuSection } from '../types/menu';

const COCKTAILS_DESCRIPTIONS: Record<string, string> = {
 'Smoking Old Fashioned':
  'Classic whisky cocktail infused with aromatic smoke and bitters',
 'Whiskey Sour':
  'Smooth whisky balanced with fresh citrus and a hint of sweetness',
 'Mint Julep': 'Refreshing blend of whisky, mint, and crushed ice',
 'Moscow Mule': 'Crisp vodka cocktail with ginger beer and lime',
 'Texas Tear': 'Bold and smoky house blend with a strong finish',
 'White Russian': 'Creamy mix of vodka, coffee liqueur, and milk',
 Montana: 'Signature house cocktail with a smooth, refreshing twist',
 'Long Island Iced Tea': 'Strong blend of multiple spirits',
 'Sex on the Beach': 'Sweet fruity cocktail with citrus',
 'Piña Colada': 'Creamy coconut and pineapple mix',
 Margarita: 'Tequila with fresh citrus kick',
 'Tequila Sunrise': 'Sweet citrus with smooth finish',
 'Rixos Peach Margarita': 'Peach-infused citrus cocktail',
 'Rixos Mango Margarita': 'Mango twist on classic margarita',
 'Strawberry Daiquiri': 'Fresh strawberry rum blend',
 'Rixos Pineapple Daiquiri': 'Tropical pineapple cocktail',
 'Rixos Mango Daiquiri': 'Sweet mango rum mix',
 'Strawberry Mojito': 'Minty fresh with strawberry flavor',
 'Electrified Long Island': 'Stronger version of classic mix',
 'Rixos Alexandra': 'Signature house cocktail',
 'Rixos Montana': 'Bold refreshing house mix',
 'Rixos Cosmopolitan': 'Smooth citrus vodka cocktail',
 'Rixos Brambles': 'Berry-infused refreshing drink',
 'Rixos Lagoons': 'Cool tropical blend',
 'Rixos BJ': 'Sweet creamy layered shot',
};

const COCKTAIL_NAMES = Object.keys(COCKTAILS_DESCRIPTIONS);

const getCocktails = (price: string, prefix: string) =>
 COCKTAIL_NAMES.map((name, index) => ({
  id: `${prefix}-ck-${index}`,
  name,
  price,
  description: COCKTAILS_DESCRIPTIONS[name] || '',
 }));

export const LOUNGE_MENU: MenuSection = {
 title: 'Lounge',
 backgroundTitle: 'Lounge',
 categories: [
  {
   title: 'Cognac / Brandy',
   items: [
    {
     id: 'l-c1',
     name: 'Hennessy XO (W/Gift Box)',
     price: '850,000',
     description:
      'Rich and full-bodied with deep oak and spice notes',
    },
    {
     id: 'l-c2',
     name: 'Hennessy VSOP',
     price: '185,000',
     description:
      'Smooth and balanced with hints of vanilla and fruit',
    },
    {
     id: 'l-c3',
     name: 'Hennessy VS',
     price: '130,000',
     description: 'Bold and lively with a clean warm finish',
    },
    {
     id: 'l-c4',
     name: 'Martell Blue Swift',
     price: '165,000',
     description: 'Smooth cognac finished in bourbon casks',
    },
    {
     id: 'l-c5',
     name: 'Martell VS Single Distillery',
     price: '120,000',
     description: 'Light and fruity with a mellow finish',
    },
    {
     id: 'l-c6',
     name: 'Remy Martin XO Excellence',
     price: '650,000',
     description: 'Luxurious blend with rich complexity and depth',
    },
    {
     id: 'l-c7',
     name: 'Remy Martin 1738',
     price: '200,000',
     description: 'Velvety smooth with toasted oak notes',
    },
    {
     id: 'l-c8',
     name: 'Remy Martin VSOP',
     price: '180,000',
     description: 'Elegant and smooth with balanced fruit tones',
    },
    {
     id: 'l-c9',
     name: 'Martell XO',
     price: '700,000',
     description: 'Full-bodied with intense richness and depth',
    },
   ],
  },
  {
   title: 'Tequila',
   items: [
    {
     id: 'l-t1',
     name: 'Clase Azul Reposado',
     price: '450,000',
     description:
      'Ultra-smooth premium tequila with sweet vanilla notes',
    },
    {
     id: 'l-t2',
     name: 'Casamigos Reposado',
     price: '265,000',
     description: 'Rich and smooth with caramel and spice hints',
    },
    {
     id: 'l-t3',
     name: 'Casamigos Blanco',
     price: '265,000',
     description: 'Crisp and clean with fresh citrus finish',
    },
    {
     id: 'l-t4',
     name: 'Don Julio 1942',
     price: '670,000',
     description: 'Luxury tequila with refined smooth character',
    },
    {
     id: 'l-t5',
     name: 'Don Julio Reposado',
     price: '290,000',
     description: 'Aged with warm oak and smooth finish',
    },
    {
     id: 'l-t6',
     name: 'Don Julio Blanco',
     price: '290,000',
     description: 'Fresh and bright with pure agave taste',
    },
    {
     id: 'l-t7',
     name: 'Olmeca Gold',
     price: '50,000',
     description: 'Smooth with a slightly sweet finish',
    },
    {
     id: 'l-t8',
     name: 'Olmeca Blanco',
     price: '50,000',
     description: 'Light and crisp with citrus edge',
    },
    {
     id: 'l-t9',
     name: 'Tequila Sierra',
     price: '45,000',
     description: 'Bold and simple with strong finish',
    },
    {
     id: 'l-t10',
     name: 'Patron',
     price: '100,000',
     description: 'Premium smooth tequila with clean finish',
    },
   ],
  },
  {
   title: 'Whisky',
   items: [
    {
     id: 'l-w1',
     name: 'Glenfiddich 18 Years',
     price: '265,000',
     description: 'Rich and complex with oak, spice, and dried fruit',
    },
    {
     id: 'l-w2',
     name: 'Glenfiddich 15 Years',
     price: '165,000',
     description: 'Smooth with honey and warm spice notes',
    },
    {
     id: 'l-w3',
     name: 'Glenfiddich 12 Years',
     price: '125,000',
     description: 'Fresh and fruity with soft oak finish',
    },
    {
     id: 'l-w4',
     name: 'Jameson',
     price: '60,000',
     description: 'Light and smooth with subtle sweetness',
    },
    {
     id: 'l-w5',
     name: 'Jameson Black Barrel',
     price: '85,000',
     description: 'Deep and rich with toasted wood notes',
    },
    {
     id: 'l-w6',
     name: 'Jack Daniel\u2019s No.7',
     price: '65,000',
     description: 'Bold with smoky vanilla finish',
    },
    {
     id: 'l-w7',
     name: 'Johnnie Walker Red Label',
     price: '45,000',
     description: 'Spicy and vibrant with bold character',
    },
    {
     id: 'l-w8',
     name: 'Johnnie Walker Black Label',
     price: '75,000',
     description: 'Smooth and smoky with balanced depth',
    },
    {
     id: 'l-w9',
     name: 'William Lawson\u2019s',
     price: '30,000',
     description: 'Easy-drinking with soft malty finish',
    },
   ],
  },
  {
   title: 'Champagne & Sparkling',
   items: [
    {
     id: 'l-ch1',
     name: 'Mo\u00ebt & Chandon Nectar Ros\u00e9',
     price: '260,000',
     description: 'Sweet and fruity with vibrant berry notes',
    },
    {
     id: 'l-ch2',
     name: 'Mo\u00ebt & Chandon Imperial Brut',
     price: '210,000',
     description: 'Crisp and elegant with refreshing bubbles',
    },
    {
     id: 'l-ch3',
     name: 'Belaire Ros\u00e9 Fant\u00f4me',
     price: '160,000',
     description: 'Smooth ros\u00e9 with rich sweet profile',
    },
    {
     id: 'l-ch4',
     name: 'Andr\u00e9 Ros\u00e9',
     price: '30,000',
     description: 'Light sparkling wine with fruity taste',
    },
    {
     id: 'l-ch5',
     name: 'Martini Ros\u00e9',
     price: '30,000',
     description: 'Soft and floral with gentle bubbles',
    },
   ],
  },
  {
   title: 'Liqueurs / Rum / Bitters',
   items: [
    {
     id: 'l-l1',
     name: 'J\u00e4germeister',
     price: '50,000',
     description: 'Herbal liqueur with bold bittersweet taste',
    },
    {
     id: 'l-l2',
     name: 'Campari',
     price: '50,000',
     description: 'Bitter and aromatic with citrus notes',
    },
    {
     id: 'l-l3',
     name: 'Baileys (Big)',
     price: '45,000',
     description: 'Creamy liqueur with rich chocolate notes',
    },
    {
     id: 'l-l4',
     name: 'Baileys Strawberries',
     price: '45,000',
     description: 'Sweet creamy liqueur with berry flavor',
    },
    {
     id: 'l-l5',
     name: 'Bacardi',
     price: '40,000',
     description: 'Light rum with clean crisp finish',
    },
    {
     id: 'l-l6',
     name: 'Absolut Vodka',
     price: '40,000',
     description: 'Smooth vodka with pure clean taste',
    },
    {
     id: 'l-l7',
     name: 'Gordon\u2019s Gin',
     price: '20,000',
     description: 'Classic dry gin with herbal freshness',
    },
   ],
  },
  {
   title: 'Wine',
   items: [
    {
     id: 'l-wn1',
     name: 'Artesa Estate Pinot Noir 2017',
     price: '\u20a660,000',
     description: 'Light-bodied red with soft berry notes',
    },
    {
     id: 'l-wn2',
     name: 'Willamette Jigsaw Pinot Noir 2017',
     price: '\u20a660,000',
     description: 'Silky and elegant with smooth finish',
    },
    {
     id: 'l-wn3',
     name: 'Tre Ricci Cabernet Sauvignon',
     price: '\u20a665,000',
     description: 'Bold red wine with rich deep flavor',
    },
    {
     id: 'l-wn4',
     name: 'Woodside Pinot Noir 2013',
     price: '\u20a670,000',
     description: 'Aged and smooth with complex taste',
    },
    {
     id: 'l-wn5',
     name: 'Drostdy-Hof',
     price: '30,000',
     description: 'Easy-drinking wine with soft finish',
    },
    {
     id: 'l-wn6',
     name: 'Carlo Rossi',
     price: '30,000',
     description: 'Light and fruity with balanced taste',
    },
    {
     id: 'l-wn7',
     name: 'Four Cousins Red',
     price: '30,000',
     description: 'Sweet and smooth red wine',
    },
    {
     id: 'l-wn8',
     name: 'Four Cousins White',
     price: '30,000',
     description: 'Fresh and sweet white wine',
    },
    {
     id: 'l-wn9',
     name: 'Agor',
     price: '30,000',
     description: 'Sweet wine with smooth profile',
    },
    {
     id: 'l-wn10',
     name: 'Sweet Kiss',
     price: '25,000',
     description: 'Light and fruity sweet wine',
    },
    {
     id: 'l-wn11',
     name: 'Bluenun 24k Gold',
     price: '50,000',
     description: 'Sparkling wine with delicate fruit notes',
    },
   ],
  },
  {
   title: 'Beer',
   items: [
    {
     id: 'l-b1',
     name: 'Heineken Jar x2',
     price: '5,000',
     description: 'Crisp lager with clean finish',
    },
    {
     id: 'l-b2',
     name: 'Budweiser Jar x2',
     price: '5,000',
     description: 'Smooth refreshing lager',
    },
    {
     id: 'l-b3',
     name: 'Desperados Jar x2',
     price: '4,000',
     description: 'Beer infused with tequila flavor',
    },
    {
     id: 'l-b4',
     name: 'Smirnoff Ice',
     price: '2,000',
     description: 'Sweet citrus-flavored drink',
    },
    {
     id: 'l-b5',
     name: 'Orijin Beer Jar x2',
     price: '4,000',
     description: 'Herbal beer with unique taste',
    },
    {
     id: 'l-b6',
     name: 'Guinness Smooth Jar x2',
     price: '4,000',
     description: 'Creamy stout with rich flavor',
    },
    {
     id: 'l-b7',
     name: 'Guinness Smooth Big Jar x2',
     price: '6,000',
     description: 'Creamy stout with rich flavor',
    },
    {
     id: 'l-b8',
     name: 'Orijin Bitters',
     price: '2,000',
     description: 'Herbal bitters with sharp finish',
    },
    // {
    //  id: 'l-b9',
    //  name: 'Trophy',
    //  price: '2,500',
    //  description: 'Light lager beer with a smooth, refreshing taste',
    // },
    // {
    //  id: 'l-b10',
    //  name: 'Goldberg',
    //  price: '2,500',
    //  description:
    //   'Strong lager beer with a bold, slightly bitter finish',
    // },
   ],
  },
  {
   title: 'Soft Drinks / Mixers',
   items: [
    {
     id: 'l-s1',
     name: 'Cranberry Juice',
     price: '10,000',
     description: 'Fruit juice',
    },
    {
     id: 'l-s2',
     name: 'Power Horse',
     price: '4,000',
     description: 'Energy drink',
    },
    {
     id: 'l-s3',
     name: 'Red Bull',
     price: '4,000',
     description: 'Energy drink',
    },
    {
     id: 'l-s4',
     name: 'Monster',
     price: '3,000',
     description: 'Energy drink',
    },
    {
     id: 'l-s5',
     name: 'Fresh Juice',
     price: '6,000',
     description: 'Fresh juice',
    },
    {
     id: 'l-s6',
     name: 'Hollandia',
     price: '5,000',
     description: 'Yogurt drink',
    },
    {
     id: 'l-s7',
     name: 'Malt',
     price: '1,500',
     description: 'Non-alcoholic malt drink',
    },
    {
     id: 'l-s8',
     name: 'Fayrouz',
     price: '1,500',
     description: 'Non-alcoholic fruit malt',
    },
    {
     id: 'l-s9',
     name: 'Coke',
     price: '1,500',
     description: 'Soft drink',
    },
    {
     id: 'l-s10',
     name: 'Sprite',
     price: '1,500',
     description: 'Soft drink',
    },
    {
     id: 'l-s11',
     name: 'Water',
     price: '1,000',
     description: 'Still water',
    },
   ],
  },
  {
   title: 'Signature Bar',
   items: getCocktails('10,000', 'l'),
  },
  {
   title: 'Mocktails',
   items: [
    {
     id: 'l-m1',
     name: 'Rixos Wise Lady',
     price: '8,000',
     description: 'Refreshing fruit blend',
    },
    {
     id: 'l-m2',
     name: 'Rixos Blue Slush',
     price: '8,000',
     description: 'Icy sweet citrus drink',
    },
    {
     id: 'l-m3',
     name: 'Rixos Chapman',
     price: '7,000',
     description: 'Classic Nigerian fruit mix',
    },
    {
     id: 'l-m4',
     name: 'Virgin Colada',
     price: '8,000',
     description: 'Coconut and pineapple blend',
    },
    {
     id: 'l-m5',
     name: 'Virgin Daiquiri',
     price: '8,000',
     description: 'Sweet frozen fruit mix',
    },
    {
     id: 'l-m6',
     name: 'Rixos HMG Juice',
     price: '7,000',
     description: 'House mixed fruit juice',
    },
    {
     id: 'l-m7',
     name: 'Rixos Traffic Relief',
     price: '8,000',
     description: 'Cool refreshing blend',
    },
    {
     id: 'l-m8',
     name: 'Rixos Mojito',
     price: '8,000',
     description: 'Minty fresh citrus drink',
    },
    {
     id: 'l-m9',
     name: 'Rixos Shandy',
     price: '8,000',
     description: 'Light fruity soft drink mix',
    },
    {
     id: 'l-m10',
     name: 'Rixos Milky Chapman',
     price: '7,000',
     description: 'Creamy Chapman twist',
    },
    {
     id: 'l-m11',
     name: 'Rixos Twisted Chapman',
     price: '8,000',
     description: 'Bold flavored Chapman mix',
    },
    {
     id: 'l-m12',
     name: 'Rixos Lemonade',
     price: '8,000',
     description: 'Fresh citrus lemonade',
    },
    {
     id: 'l-m13',
     name: 'Rixos Bubble Gum',
     price: '8,000',
     description: 'Sweet playful drink',
    },
   ],
  },
  {
   title: 'Milkshakes',
   items: [
    {
     id: 'l-ms1',
     name: 'Rixos Oreo Shake',
     price: '12,000',
     description: 'Creamy chocolate cookie shake',
    },
    {
     id: 'l-ms2',
     name: 'Rixos Strawberry Shake',
     price: '12,000',
     description: 'Smooth sweet strawberry blend',
    },
    {
     id: 'l-ms3',
     name: 'Rixos Chocolate Shake',
     price: '12,000',
     description: 'Rich creamy chocolate drink',
    },
    {
     id: 'l-ms4',
     name: 'Rixos Banana Vanilla Shake',
     price: '12,000',
     description: 'Banana and vanilla mix',
    },
    {
     id: 'l-ms5',
     name: 'Rixos Mixed Flavours',
     price: '15,000',
     description: 'Blend of assorted flavors',
    },
   ],
  },
  {
   title: 'Smoothies',
   items: [
    {
     id: 'l-sm1',
     name: 'Rixos Strawberry Delight',
     price: '8,000',
     description: 'Fresh strawberry blend',
    },
    {
     id: 'l-sm2',
     name: 'Rixos Crystal',
     price: '8,000',
     description: 'Light refreshing fruit mix',
    },
    {
     id: 'l-sm3',
     name: 'Rixos Fruitlicious',
     price: '8,000',
     description: 'Mixed tropical fruits',
    },
    {
     id: 'l-sm4',
     name: 'Rixos Pineapple',
     price: '8,000',
     description: 'Fresh pineapple smoothie',
    },
    {
     id: 'l-sm5',
     name: 'Rixos Enchanted',
     price: '8,000',
     description: 'Sweet mixed fruit blend',
    },
    {
     id: 'l-sm6',
     name: 'Rixos Dates Smoothie',
     price: '8,000',
     description: 'Rich creamy date blend',
    },
    {
     id: 'l-sm7',
     name: 'Nectar of the Gods',
     price: '8,000',
     description: 'Premium fruit fusion',
    },
    {
     id: 'l-sm8',
     name: 'Rixos Berry Smoothie',
     price: '8,000',
     description: 'Mixed berry blend',
    },
    {
     id: 'l-sm9',
     name: 'Rixos Strawman Smoothie',
     price: '8,000',
     description: 'Strawberry and banana mix',
    },
   ],
  },
  {
   title: 'Shisha',
   items: [
    {
     id: 'l-sh1',
     name: 'One Horse',
     price: '12,000',
     description: 'Premium flavored shisha',
    },
   ],
  },
  {
   title: 'Rice',
   items: [
    {
     id: 'l-r1',
     name: 'Jollof Rice (Chicken)',
     price: '9,500',
     description:
      'Smoky jollof rice served with chicken and coleslaw or plantain',
    },
    {
     id: 'l-r2',
     name: 'Jollof Rice (Beef)',
     price: '9,000',
     description:
      'Smoky rice served with beef and coleslaw or plantain',
    },
    {
     id: 'l-r3',
     name: 'Jollof Rice (Turkey)',
     price: '12,600',
     description:
      'Smoky rice served with turkey and coleslaw or plantain',
    },
    {
     id: 'l-r4',
     name: 'Ofada Rice',
     price: '11,400',
     description: 'Local rice with rich native sauce and plantain',
    },
    {
     id: 'l-r5',
     name: 'Native Rice',
     price: '7,900',
     description: 'Traditional rice with plantain and egg',
    },
    {
     id: 'l-r6',
     name: 'Fried Rice (Chicken)',
     price: '9,500',
     description: 'Fried rice with chicken and coleslaw or plantain',
    },
    {
     id: 'l-r7',
     name: 'Asun Rice',
     price: '10,900',
     description: 'Spicy rice served with grilled asun',
    },
   ],
  },
  {
   title: 'Pasta & Noodles',
   items: [
    {
     id: 'l-p1',
     name: 'Jollof Pasta',
     price: '12,600',
     description: 'Pasta cooked in rich jollof sauce',
    },
    {
     id: 'l-p2',
     name: 'Asun Pasta',
     price: '10,900',
     description: 'Spicy pasta with goat meat',
    },
    {
     id: 'l-p3',
     name: 'Native Pasta',
     price: '7,800',
     description: 'Local-style seasoned pasta',
    },
    {
     id: 'l-p4',
     name: 'Stir-Fried Pasta',
     price: '7,600',
     description: 'Lightly tossed with vegetables',
    },
    {
     id: 'l-p5',
     name: 'Egg Noodles',
     price: '3,500',
     description: 'Noodles mixed with egg',
    },
    {
     id: 'l-p6',
     name: 'Veg Noodles',
     price: '3,000',
     description: 'Vegetable stir-fried noodles',
    },
    {
     id: 'l-p7',
     name: 'Pepper Soup Noodles',
     price: '5,500',
     description: 'Spicy broth noodles with goat meat',
    },
   ],
  },
  {
   title: 'Soups',
   items: [
    {
     id: 'l-sp1',
     name: 'Afang',
     price: '4,800',
     description: 'Rich vegetable soup with seafood',
    },
    {
     id: 'l-sp2',
     name: 'Edikang Ikong',
     price: '3,500',
     description: 'Nutritious vegetable soup',
    },
    {
     id: 'l-sp3',
     name: 'Oha',
     price: '3,500',
     description: 'Traditional eastern soup',
    },
    {
     id: 'l-sp4',
     name: 'Fisherman',
     price: '5,000',
     description: 'Seafood-rich spicy soup',
    },
    {
     id: 'l-sp5',
     name: 'Bitter Leaf',
     price: '4,500',
     description: 'Classic soup with bold taste',
    },
    {
     id: 'l-sp6',
     name: 'Banga',
     price: '3,600',
     description: 'Palm nut soup with rich flavor',
    },
    {
     id: 'l-sp7',
     name: 'Ogbono',
     price: '3,000',
     description: 'Draw soup with unique texture',
    },
    {
     id: 'l-sp8',
     name: 'Efo Riro',
     price: '3,500',
     description: 'Spinach stew with rich sauce',
    },
    {
     id: 'l-sp9',
     name: 'Egusi',
     price: '3,000',
     description: 'Melon seed soup with thick texture',
    },
   ],
  },
  {
   title: 'Swallows',
   items: [
    {
     id: 'l-sw1',
     name: 'Eba',
     price: '1,500',
     description: 'Garri swallow',
    },
    {
     id: 'l-sw2',
     name: 'Yellow Eba',
     price: '1,500',
     description: 'Garri swallow with rich color',
    },
    {
     id: 'l-sw3',
     name: 'Semo',
     price: '1,500',
     description: 'Smooth wheat swallow',
    },
    {
     id: 'l-sw4',
     name: 'Poundo',
     price: '1,500',
     description: 'Soft pounded yam alternative',
    },
    {
     id: 'l-sw5',
     name: 'Plantain Swallow',
     price: '1,500',
     description: 'Healthy plantain swallow',
    },
   ],
  },
  {
   title: 'Protein Bites',
   items: [
    {
     id: 'l-pb1',
     name: 'Isi Ewu',
     price: '6,000',
     description:
      'Spicy goat head delicacy tossed in rich traditional sauce',
    },
    {
     id: 'l-pb2',
     name: 'Nkwobi',
     price: '9,000',
     description: 'Tender cow leg served in thick palm oil spice mix',
    },
    {
     id: 'l-pb3',
     name: 'Peppered Beef',
     price: '5,000',
     description: 'Juicy beef saut\u00e9ed in hot pepper sauce',
    },
    {
     id: 'l-pb4',
     name: 'Peppered Turkey',
     price: '9,100',
     description: 'Grilled turkey tossed in spicy pepper mix',
    },
    {
     id: 'l-pb5',
     name: 'Asun',
     price: '7,000',
     description: 'Charcoal-grilled goat meat in fiery pepper sauce',
    },
    {
     id: 'l-pb6',
     name: 'Peppered Chicken',
     price: '6,900',
     description: 'Spicy saut\u00e9ed chicken with rich flavor',
    },
    {
     id: 'l-pb7',
     name: 'Peppered Gizzard',
     price: '5,700',
     description: 'Stir-fried gizzard in bold pepper sauce',
    },
    {
     id: 'l-pb8',
     name: 'Peppered Jumbo Snail',
     price: '9,900',
     description: 'Large snail cooked in rich spicy sauce',
    },
    {
     id: 'l-pb9',
     name: 'Peppered Goat Meat',
     price: '8,000',
     description: 'Classic spicy goat meat with smoky flavor',
    },
   ],
  },
  {
   title: 'Pepper Soups',
   items: [
    {
     id: 'l-ps1',
     name: 'Goat Meat Pepper Soup with Yam Cubes',
     price: '7,500',
     description:
      'Hot and spicy broth with tender goat meat and soft yam',
    },
    {
     id: 'l-ps2',
     name: 'Small Catfish Pepper Soup',
     price: '10,000',
     description: 'Fresh catfish in rich, aromatic pepper broth',
    },
    {
     id: 'l-ps3',
     name: 'Big Catfish Pepper Soup',
     price: '15,000',
     description: 'Fresh catfish in rich, aromatic pepper broth',
    },
    {
     id: 'l-ps4',
     name: 'Assorted Pepper Soup',
     price: '7,000',
     description: 'Mixed meats in a bold, spicy soup',
    },
    {
     id: 'l-ps5',
     name: 'Ox Tail Pepper Soup',
     price: '9,000',
     description: 'Rich and flavorful soup with tender oxtail',
    },
    {
     id: 'l-ps6',
     name: 'Cow Leg Pepper Soup',
     price: '8,000',
     description: 'Soft cow leg in deeply spiced broth',
    },
   ],
  },
  {
   title: 'Grills',
   items: [
    {
     id: 'l-gr1',
     name: 'Grilled Catfish',
     price: '19,000',
     description: 'Whole catfish grilled and seasoned to perfection',
    },
    {
     id: 'l-gr2',
     name: 'Grilled Croaker Fish',
     price: '22,600',
     description: 'Fresh croaker fish with smoky grilled flavor',
    },
    {
     id: 'l-gr3',
     name: 'Grilled Chicken and Chips',
     price: '9,000',
     description: 'Juicy grilled chicken served with crispy fries',
    },
    {
     id: 'l-gr4',
     name: 'Grilled Turkey and Fries',
     price: '12,800',
     description: 'Well-seasoned turkey served with fries',
    },
    {
     id: 'l-gr5',
     name: 'Fries Alone',
     price: '2,000',
     description: 'Crispy golden fries with a light salted finish',
    },
   ],
  },
  {
   title: 'Sharwama',
   items: [
    {
     id: 'l-sw-1',
     name: 'Chicken Shawarma',
     price: '4,500',
     description:
      'Grilled chicken wrapped with creamy sauce and veggies',
    },
    {
     id: 'l-sw-2',
     name: 'Beef Shawarma',
     price: '4,500',
     description:
      'Seasoned beef wrap with fresh vegetables and sauce',
    },
   ],
  },
 ],
};

export const RESTAURANT_MENU: MenuSection = {
 title: 'Restaurant',
 backgroundTitle: 'Steakhouse',
 categories: [
  {
   title: 'Champagne & Sparkling',
   items: [
    {
     id: 'r-ch1',
     name: 'Mo\u00ebt & Chandon Nectar Ros\u00e9',
     price: '250,000',
     description: 'Sweet and fruity with vibrant berry notes',
    },
    {
     id: 'r-ch2',
     name: 'Mo\u00ebt & Chandon Imperial Brut',
     price: '230,000',
     description: 'Crisp and elegant with refreshing bubbles',
    },
    {
     id: 'r-ch3',
     name: 'Andr\u00e9 Ros\u00e9 Sparkling Wine',
     price: '40,000',
     description: 'Light sparkling wine with fruity taste',
    },
    {
     id: 'r-ch4',
     name: 'Martini Ros\u00e9',
     price: '50,000',
     description: 'Soft and floral with gentle bubbles',
    },
    {
     id: 'r-ch5',
     name: 'Belaire Ros\u00e9 Fant\u00f4me',
     price: '130,000',
     description: 'Smooth ros\u00e9 with rich sweet profile',
    },
   ],
  },
  {
   title: 'Liqueurs / Rum / Bitters',
   items: [
    {
     id: 'r-l1',
     name: 'Baileys (Big)',
     price: '50,000',
     description: 'Creamy liqueur with rich chocolate notes',
    },
    {
     id: 'r-l2',
     name: 'Baileys Strawberries',
     price: '50,000',
     description: 'Sweet creamy liqueur with berry flavor',
    },
   ],
  },
  {
   title: 'Wine',
   items: [
    {
     id: 'r-wn1',
     name: 'Artesa Estate Pinot Noir 2017',
     price: '\u20a665,000',
     description: 'Light-bodied red with soft berry notes',
    },
    {
     id: 'r-wn2',
     name: 'Willamette Jigsaw Pinot Noir 2017',
     price: '\u20a665,000',
     description: 'Silky and elegant with smooth finish',
    },
    {
     id: 'r-wn3',
     name: 'Tre Ricci Cabernet Sauvignon',
     price: '\u20a670,000',
     description: 'Bold red wine with rich deep flavor',
    },
    {
     id: 'r-wn4',
     name: 'Woodside Pinot Noir 2013',
     price: '\u20a675,000',
     description: 'Aged and smooth with complex taste',
    },
    {
     id: 'r-wn5',
     name: 'Drostdy-Hof',
     price: '35,000',
     description: 'Easy-drinking wine with soft finish',
    },
    {
     id: 'r-wn6',
     name: 'Carlo Rossi',
     price: '35,000',
     description: 'Light and fruity with balanced taste',
    },
    {
     id: 'r-wn7',
     name: 'Four Cousins Red',
     price: '35,000',
     description: 'Sweet and smooth red wine',
    },
    {
     id: 'r-wn8',
     name: 'Four Cousins White',
     price: '35,000',
     description: 'Fresh and sweet white wine',
    },
    {
     id: 'r-wn9',
     name: 'Agor',
     price: '35,000',
     description: 'Sweet wine with smooth profile',
    },
    {
     id: 'r-wn10',
     name: 'Sweet Kiss',
     price: '30,000',
     description: 'Light and fruity sweet wine',
    },
    {
     id: 'r-wn11',
     name: 'Bluenun 24k Gold',
     price: '60,000',
     description: 'Sparkling wine with delicate fruit notes',
    },
   ],
  },
  {
   title: 'Soft Drinks / Mixers',
   items: [
    {
     id: 'r-s1',
     name: 'Cranberry Juice',
     price: '12,000',
     description: 'Fruit juice',
    },
    {
     id: 'r-s2',
     name: 'Power Horse',
     price: '4,000',
     description: 'Energy drink',
    },
    {
     id: 'r-s3',
     name: 'Red Bull',
     price: '4,500',
     description: 'Energy drink',
    },
    {
     id: 'r-s4',
     name: 'Monster Drink',
     price: '3,000',
     description: 'Energy drink',
    },
    {
     id: 'r-s5',
     name: 'Fresh Juice',
     price: '8,000',
     description: 'Fresh juice',
    },
    {
     id: 'r-s6',
     name: 'Hollandia',
     price: '5,000',
     description: 'Yogurt drink',
    },
    {
     id: 'r-s7',
     name: 'Malt',
     price: '2,000',
     description: 'Non-alcoholic malt drink',
    },
    {
     id: 'r-s8',
     name: 'Farouz',
     price: '2,000',
     description: 'Non-alcoholic fruit malt',
    },
    {
     id: 'r-s9',
     name: 'Coke',
     price: '2,000',
     description: 'Soft drink',
    },
    {
     id: 'r-s10',
     name: 'Sprite',
     price: '2,000',
     description: 'Soft drink',
    },
    {
     id: 'r-s11',
     name: 'Water',
     price: '1,500',
     description: 'Still water',
    },
   ],
  },
  {
   title: 'Signature Bar',
   items: getCocktails('10,000', 'r'),
  },
  {
   title: 'Mocktails',
   items: [
    {
     id: 'r-m1',
     name: 'Rixos Wise Lady',
     price: '8,000',
     description: 'Refreshing fruit blend',
    },
    {
     id: 'r-m2',
     name: 'Rixos Blue Slush',
     price: '8,000',
     description: 'Icy sweet citrus drink',
    },
    {
     id: 'r-m3',
     name: 'Rixos Chapman',
     price: '7,000',
     description: 'Classic Nigerian fruit mix',
    },
    {
     id: 'r-m4',
     name: 'Virgin Colada',
     price: '8,000',
     description: 'Coconut and pineapple blend',
    },
    {
     id: 'r-m5',
     name: 'Virgin Daiquiri',
     price: '8,000',
     description: 'Sweet frozen fruit mix',
    },
    {
     id: 'r-m6',
     name: 'Rixos HMG Juice',
     price: '7,000',
     description: 'House mixed fruit juice',
    },
    {
     id: 'r-m7',
     name: 'Rixos Traffic Relief',
     price: '8,000',
     description: 'Cool refreshing blend',
    },
    {
     id: 'r-m8',
     name: 'Rixos Mojito',
     price: '8,000',
     description: 'Minty fresh citrus drink',
    },
    {
     id: 'r-m9',
     name: 'Rixos Shandy',
     price: '8,000',
     description: 'Light fruity soft drink mix',
    },
    {
     id: 'r-m10',
     name: 'Rixos Milky Chapman',
     price: '7,000',
     description: 'Creamy Chapman twist',
    },
    {
     id: 'r-m11',
     name: 'Rixos Twisted Chapman',
     price: '8,000',
     description: 'Bold flavored Chapman mix',
    },
    {
     id: 'r-m12',
     name: 'Rixos Lemonade',
     price: '8,000',
     description: 'Fresh citrus lemonade',
    },
    {
     id: 'r-m13',
     name: 'Rixos Bubble Gum',
     price: '8,000',
     description: 'Sweet playful drink',
    },
   ],
  },
  {
   title: 'Milkshakes',
   items: [
    {
     id: 'r-ms1',
     name: 'Rixos Oreo Shake',
     price: '12,000',
     description: 'Creamy chocolate cookie shake',
    },
    {
     id: 'r-ms2',
     name: 'Rixos Strawberry Shake',
     price: '12,000',
     description: 'Smooth sweet strawberry blend',
    },
    {
     id: 'r-ms3',
     name: 'Rixos Chocolate Shake',
     price: '12,000',
     description: 'Rich creamy chocolate drink',
    },
    {
     id: 'r-ms4',
     name: 'Rixos Banana Vanilla Shake',
     price: '12,000',
     description: 'Banana and vanilla mix',
    },
    {
     id: 'r-ms5',
     name: 'Rixos Mixed Flavours',
     price: '15,000',
     description: 'Blend of assorted flavors',
    },
   ],
  },
  {
   title: 'Smoothies',
   items: [
    {
     id: 'r-sm1',
     name: 'Rixos Strawberry Delight',
     price: '8,000',
     description: 'Fresh strawberry blend',
    },
    {
     id: 'r-sm2',
     name: 'Rixos Crystal',
     price: '8,000',
     description: 'Light refreshing fruit mix',
    },
    {
     id: 'r-sm3',
     name: 'Rixos Fruitlicious',
     price: '8,000',
     description: 'Mixed tropical fruits',
    },
    {
     id: 'r-sm4',
     name: 'Rixos Pineapple',
     price: '8,000',
     description: 'Fresh pineapple smoothie',
    },
    {
     id: 'r-sm5',
     name: 'Rixos Enchanted',
     price: '8,000',
     description: 'Sweet mixed fruit blend',
    },
    {
     id: 'r-sm6',
     name: 'Rixos Dates Smoothie',
     price: '8,000',
     description: 'Rich creamy date blend',
    },
    {
     id: 'r-sm7',
     name: 'Nectar of the Gods',
     price: '8,000',
     description: 'Premium fruit fusion',
    },
    {
     id: 'r-sm8',
     name: 'Rixos Berry Smoothie',
     price: '8,000',
     description: 'Mixed berry blend',
    },
    {
     id: 'r-sm9',
     name: 'Rixos Strawman Smoothie',
     price: '8,000',
     description: 'Strawberry and banana mix',
    },
   ],
  },
  {
   title: 'Starters / Finger Chops',
   items: [
    {
     id: 'r-st1',
     name: 'Buffalo Chicken Wings',
     price: '7,900',
     description: 'Crispy wings tossed in spicy buffalo sauce',
    },
    {
     id: 'r-st2',
     name: 'Small Chops with Dip',
     price: '7,000',
     description:
      'Assorted bite-sized snacks served with dipping sauce',
    },
    {
     id: 'r-st3',
     name: 'Asun',
     price: '7,500',
     description: 'Spicy grilled goat meat with smoky flavor',
    },
    {
     id: 'r-st4',
     name: 'Honey Glazed Wings with Fries',
     price: '8,000',
     description: 'Sweet glazed wings served with crispy fries',
    },
    {
     id: 'r-st5',
     name: 'Prawn Cocktail',
     price: '12,400',
     description: 'Fresh prawns served in creamy cocktail sauce',
    },
    {
     id: 'r-st6',
     name: 'Shrimps in Mayo',
     price: '2,800',
     description: 'Juicy shrimps coated in rich mayonnaise',
    },
    {
     id: 'r-st7',
     name: 'Mini Burgers with Fries',
     price: '5,100',
     description: 'Small juicy burgers served with fries',
    },
    {
     id: 'r-st8',
     name: 'Tempura Prawn',
     price: '9,000',
     description: 'Lightly battered and crispy fried prawns',
    },
    {
     id: 'r-st9',
     name: 'Turkey Bites',
     price: '9,700',
     description: 'Seasoned bite-sized turkey pieces',
    },
    {
     id: 'r-st10',
     name: 'Fries Alone',
     price: '2,000',
     description: 'Crispy golden fries with a light salted finish',
    },
   ],
  },
  {
   title: 'Protein Bites',
   items: [
    {
     id: 'r-pb1',
     name: 'Isi Ewu',
     price: '8,000',
     description:
      'Spicy goat head delicacy tossed in rich traditional sauce',
    },
    {
     id: 'r-pb2',
     name: 'Nkwobi',
     price: '12,000',
     description: 'Tender cow leg served in thick palm oil spice mix',
    },
    {
     id: 'r-pb3',
     name: 'Peppered Beef',
     price: '6,500',
     description: 'Juicy beef saut\u00e9ed in hot pepper sauce',
    },
    {
     id: 'r-pb4',
     name: 'Peppered Turkey',
     price: '11,000',
     description: 'Grilled turkey tossed in spicy pepper mix',
    },
    {
     id: 'r-pb5',
     name: 'Asun',
     price: '8,500',
     description: 'Charcoal-grilled goat meat in fiery pepper sauce',
    },
    {
     id: 'r-pb6',
     name: 'Peppered Chicken',
     price: '8,000',
     description: 'Spicy saut\u00e9ed chicken with rich flavor',
    },
    {
     id: 'r-pb7',
     name: 'Peppered Gizzard',
     price: '7,000',
     description: 'Stir-fried gizzard in bold pepper sauce',
    },
    {
     id: 'r-pb8',
     name: 'Peppered Jumbo Snail',
     price: '12,000',
     description: 'Large snail cooked in rich spicy sauce',
    },
    {
     id: 'r-pb9',
     name: 'Peppered Goat Meat',
     price: '10,000',
     description: 'Classic spicy goat meat with smoky flavor',
    },
   ],
  },
  {
   title: 'Pepper Soups',
   items: [
    {
     id: 'r-ps1',
     name: 'Goat Meat Pepper Soup with Yam Cubes',
     price: '9,000',
     description:
      'Hot and spicy broth with tender goat meat and soft yam',
    },
    {
     id: 'r-ps2',
     name: 'Small Catfish Pepper Soup',
     price: '12,000',
     description: 'Fresh catfish in rich, aromatic pepper broth',
    },
    {
     id: 'r-ps3',
     name: 'Big Catfish Pepper Soup',
     price: '17,000',
     description: 'Fresh catfish in rich, aromatic pepper broth',
    },
    {
     id: 'r-ps4',
     name: 'Assorted Pepper Soup',
     price: '8,500',
     description: 'Mixed meats in a bold, spicy soup',
    },
    {
     id: 'r-ps5',
     name: 'Ox Tail Pepper Soup',
     price: '11,000',
     description: 'Rich and flavorful soup with tender oxtail',
    },
    {
     id: 'r-ps6',
     name: 'Cow Leg Pepper Soup',
     price: '10,000',
     description: 'Soft cow leg in deeply spiced broth',
    },
   ],
  },
  {
   title: 'Salads',
   items: [
    {
     id: 'r-sl1',
     name: 'Caesar Salad',
     price: '10,700',
     description: 'Fresh greens with creamy Caesar dressing',
    },
    {
     id: 'r-sl2',
     name: 'Suya Carpaccio',
     price: '8,000',
     description: 'Thinly sliced spiced beef with suya flavor',
    },
    {
     id: 'r-sl3',
     name: 'Pasta Salad',
     price: '8,400',
     description: 'Cold pasta mixed with vegetables',
    },
    {
     id: 'r-sl4',
     name: 'Classic Pro-Coleslaw',
     price: '6,700',
     description: 'Fresh cabbage salad with creamy dressing',
    },
    {
     id: 'r-sl5',
     name: 'Chicken Salad',
     price: '8,800',
     description: 'Grilled chicken with fresh vegetables',
    },
   ],
  },
  {
   title: 'Main Dishes - Rice',
   items: [
    {
     id: 'r-mr1',
     name: 'Ofada Rice',
     price: '16,300',
     description:
      'Local rice served with rich traditional pepper sauce',
    },
    {
     id: 'r-mr2',
     name: 'Pineapple Fried Rice',
     price: '10,700',
     description: 'Sweet and savory fried rice with pineapple twist',
    },
    {
     id: 'r-mr3',
     name: 'Chinese Fried Rice',
     price: '12,200',
     description:
      'Classic stir-fried rice with vegetables and seasoning',
    },
    {
     id: 'r-mr4',
     name: 'Seafood Fried Rice',
     price: '15,700',
     description: 'Flavorful rice loaded with mixed seafood',
    },
    {
     id: 'r-mr5',
     name: 'Coconut Seafood Rice',
     price: '22,900',
     description: 'Creamy coconut-infused rice with premium seafood',
    },
    {
     id: 'r-mr6',
     name: 'Jollof Rice (Chicken)',
     price: '10,500',
     description:
      'Smoky jollof rice served with chicken and coleslaw or plantain',
    },
    {
     id: 'r-mr7',
     name: 'Jollof Rice (Beef)',
     price: '10,000',
     description:
      'Smoky rice served with beef and coleslaw or plantain',
    },
    {
     id: 'r-mr8',
     name: 'Jollof Rice (Turkey)',
     price: '13,600',
     description:
      'Smoky rice served with turkey and coleslaw or plantain',
    },
    {
     id: 'r-mr9',
     name: 'Ofada Rice',
     price: '12,500',
     description: 'Local rice with rich native sauce and plantain',
    },
    {
     id: 'r-mr10',
     name: 'Native Rice',
     price: '9,000',
     description: 'Traditional rice with plantain and egg',
    },
    {
     id: 'r-mr11',
     name: 'Fried Rice (Chicken)',
     price: '11,000',
     description: 'Fried rice with chicken and coleslaw or plantain',
    },
    {
     id: 'r-mr12',
     name: 'Asun Rice',
     price: '13,000',
     description: 'Spicy rice served with grilled asun',
    },
   ],
  },
  {
   title: 'Main Dishes - Pasta',
   items: [
    {
     id: 'r-mp1',
     name: 'Spaghetti Bolognese',
     price: '19,700',
     description: 'Rich meat sauce tossed with classic spaghetti',
    },
    {
     id: 'r-mp2',
     name: 'Chicken Alfredo Pasta',
     price: '20,700',
     description: 'Creamy pasta with tender chicken and parmesan',
    },
    {
     id: 'r-mp3',
     name: 'Mac and Cheese',
     price: '8,800',
     description: 'Cheesy baked pasta with creamy texture',
    },
    {
     id: 'r-mp4',
     name: 'Creamy Tomato Pasta with Crouton',
     price: '10,000',
     description:
      'Smooth tomato-based pasta topped with crunchy croutons',
    },
   ],
  },
  {
   title: 'Steak house Selection',
   items: [
    {
     id: 'r-sk1',
     name: 'Tomahawk Steak (410g)',
     price: '38,700',
     description: 'Large bone-in steak with rich, juicy flavor',
    },
    {
     id: 'r-sk2',
     name: 'Rixos Ribeye Steak (338g)',
     price: '30,700',
     description: 'Tender ribeye cut with deep marbling and taste',
    },
    {
     id: 'r-sk3',
     name: 'T-Bone Steak (350g)',
     price: '30,700',
     description: 'Classic cut combining strip and tenderloin',
    },
    {
     id: 'r-sk4',
     name: 'Smoked Pulled Beef Shank (2kg)',
     price: '66,500',
     description:
      'Slow-cooked beef, smoky and fall-off-the-bone tender',
    },
   ],
  },
  {
   title: 'Soups',
   items: [
    {
     id: 'r-sp1',
     name: 'Afang',
     price: '6,500',
     description: 'Rich vegetable soup with seafood',
    },
    {
     id: 'r-sp2',
     name: 'Edikang Ikong',
     price: '5,000',
     description: 'Nutritious vegetable soup',
    },
    {
     id: 'r-sp3',
     name: 'Oha',
     price: '5,000',
     description: 'Traditional eastern soup',
    },
    {
     id: 'r-sp4',
     name: 'Fisherman',
     price: '8,000',
     description: 'Seafood-rich spicy soup',
    },
    {
     id: 'r-sp5',
     name: 'Bitter Leaf',
     price: '6,500',
     description: 'Classic soup with bold taste',
    },
    {
     id: 'r-sp6',
     name: 'Banga',
     price: '5,500',
     description: 'Palm nut soup with rich flavor',
    },
    {
     id: 'r-sp7',
     name: 'Ogbono',
     price: '5,000',
     description: 'Draw soup with unique texture',
    },
    {
     id: 'r-sp8',
     name: 'Efo Riro',
     price: '5,500',
     description: 'Spinach stew with rich sauce',
    },
    {
     id: 'r-sp9',
     name: 'Egusi',
     price: '5,000',
     description: 'Melon seed soup with thick texture',
    },
   ],
  },
  {
   title: 'Swallows',
   items: [
    {
     id: 'r-sw1',
     name: 'Eba',
     price: '2,000',
     description: 'Garri swallow',
    },
    {
     id: 'r-sw2',
     name: 'Yellow Eba',
     price: '2,000',
     description: 'Garri swallow with rich color',
    },
    {
     id: 'r-sw3',
     name: 'Semo',
     price: '2,000',
     description: 'Smooth wheat swallow',
    },
    {
     id: 'r-sw4',
     name: 'Poundo',
     price: '2,000',
     description: 'Soft pounded yam alternative',
    },
    {
     id: 'r-sw5',
     name: 'Plantain Swallow',
     price: '2,000',
     description: 'Healthy plantain swallow',
    },
   ],
  },
  {
   title: 'Classic BBQ Spot - Chicken',
   items: [
    {
     id: 'r-bb1',
     name: 'Classic BBQ Chicken and Chips with Homemade BBQ Sauce',
     price: '9,500',
     description: 'Grilled chicken with rich homemade barbecue glaze',
    },
    {
     id: 'r-bb2',
     name: 'Honey Glazed Chicken with Sour Hot Sauce',
     price: '9,300',
     description: 'Sweet and spicy glazed chicken',
    },
    {
     id: 'r-bb3',
     name: 'Beer-Canned Chicken with Honey Garlic Glaze',
     price: '10,200',
     description:
      'Juicy roasted chicken infused with beer and garlic',
    },
    {
     id: 'r-bb4',
     name: 'Rixos Jerk Chicken with Spicy Jerk Sauce',
     price: '11,000',
     description: 'Caribbean-style spicy grilled chicken',
    },
    {
     id: 'r-bb5',
     name: 'Rixos Chef Recipe',
     price: '12,300',
     description:
      'House special chicken prepared with signature flavors',
    },
   ],
  },
  {
   title: 'Classic BBQ Spot - Turkey',
   items: [
    {
     id: 'r-tk1',
     name: 'Hot Grilled Turkey and Chips',
     price: '12,400',
     description: 'Juicy grilled turkey served with fries',
    },
    {
     id: 'r-tk2',
     name: 'Cajun Turkey with Spiced Yam',
     price: '12,800',
     description: 'Spicy Cajun turkey paired with seasoned yam',
    },
    {
     id: 'r-tk3',
     name: 'Suya Turkey with Roasted Plantain and Vegetable Sauce',
     price: '12,400',
     description: 'Suya-spiced turkey with Nigerian sides',
    },
    {
     id: 'r-tk4',
     name: 'Rixos Jerk Turkey with Spicy Jerk Sauce',
     price: '12,900',
     description: 'Bold jerk-seasoned turkey with heat',
    },
    {
     id: 'r-tk5',
     name: 'Spiced Smokey Turkey with BBQ Sauce',
     price: '12,600',
     description: 'Smoked turkey finished with rich BBQ glaze',
    },
   ],
  },
  {
   title: 'Seafood',
   items: [
    {
     id: 'r-sf1',
     name: 'Smoked Cajun Tiger Prawns with Dirty Fries',
     price: '21,700',
     description: 'Large prawns with bold Cajun spices and fries',
    },
    {
     id: 'r-sf2',
     name: 'Grilled Crocker Fish with Yam Fries',
     price: '15,700',
     description: 'Fresh fish grilled and served with yam fries',
    },
    {
     id: 'r-sf3',
     name: 'Grilled Catfish with Sweet Potatoes and Plantain',
     price: '15,400',
     description: 'Well-seasoned catfish with hearty sides',
    },
    {
     id: 'r-sf4',
     name: 'Grilled Lemon Tilapia',
     price: '20,400',
     description: 'Light and zesty grilled tilapia with lemon flavor',
    },
   ],
  },
  {
   title: 'Platters',
   items: [
    {
     id: 'r-pl1',
     name: 'Rixos Premium Platter (Serves 15)',
     price: '176,000',
     description:
      'Crocodile chunks, whole chunked guinea fowl, asun, 5 chunked turkeys, special fried rice, bole with vegetable sauce, yam fries, egg coleslaw, apple pie',
    },
    {
     id: 'r-pl2',
     name: 'Rixos Platter (Serves 10)',
     price: '128,800',
     description:
      'Whole grilled suya rabbit, asun, whole beer can chicken, 3 turkeys, coconut seafood rice, fried plantain, fried potatoes, fruit tart',
    },
   ],
  },
  {
   title: 'Desserts',
   items: [
    {
     id: 'r-ds1',
     name: 'Apple Pie',
     price: '7,300',
     description: 'Classic baked pie with sweet apple filling',
    },
    {
     id: 'r-ds2',
     name: 'Fruit Tart',
     price: '8,000',
     description: 'Buttery crust filled with fresh fruits',
    },
    {
     id: 'r-ds3',
     name: 'Death by Chocolate Cake',
     price: '10,300',
     description: 'Rich and indulgent chocolate layered cake',
    },
    {
     id: 'r-ds4',
     name: 'Flan',
     price: '13,700',
     description: 'Smooth creamy custard with caramel glaze',
    },
   ],
  },
 ],
};
