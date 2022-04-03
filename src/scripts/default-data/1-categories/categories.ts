import { getObjectId } from 'mongo-seeding';
import { CategoriesPayloadType } from 'shortwaits-shared';

const categories: CategoriesPayloadType[] = [
  {
    _id: getObjectId('1007'),
    short_id: '1007',
    name: 'Beauty Services',
    keys: ['beauty'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios de educacion',
        languageName: 'spanish',
      },
    ],
    isDefault: true,
    state: 1,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1008'),
    short_id: '1008',
    name: 'Education Services',
    keys: ['education'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Salud y bienestar',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1018'),
    short_id: '1018',
    name: 'Animal Care',
    keys: ['dog', 'cat', 'veterinarian'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios para mascotas',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1010'),
    short_id: '1010',
    name: 'Food Product',
    keys: ['food'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Restaurantes y vida nocturna',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1000'),
    short_id: '1000',
    name: 'Accounting & Tax Services',
    keys: ['accounting', 'tax'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios de contabilidad e impuestos',
        languageName: 'spanish',
      },
    ],
    isDefault: true,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1001'),
    short_id: '1001',
    name: 'Arts, Culture & Entertainment',
    keys: ['art', 'culture', 'entertainment'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Arte, cultura y entretenimiento',
        languageName: 'spanish',
      },
    ],
    isDefault: true,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1017'),
    short_id: '1017',
    name: 'Health & Wellness',
    keys: ['health', 'wellness', 'covid'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios de salud',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1020'),
    short_id: '1020',
    name: 'Other',
    keys: [],
    translations: [
      {
        languageCode: 'es',
        translation: 'Compras y venta al por menor',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1024'),
    short_id: '1024',
    name: 'Restaurants & Nightlife',
    keys: ['drinks', 'alcohol', 'food'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Bodas, Eventos y Reuniones',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1022'),
    short_id: '1022',
    name: 'Pet Services',
    keys: ['dog', 'cat', 'pet'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios de transporte',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1021'),
    short_id: '1021',
    name: 'Transportation Services',
    keys: ['taxi', 'bus', 'car'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicios de belleza',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1026'),
    short_id: '1026',
    name: 'Vehicle service and accessories.',
    keys: ['mechanic', 'car', 'shop', 'fix'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Otro',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1027'),
    short_id: '1027',
    name: 'Wedding, Events & Meetings',
    keys: ['party', 'bridal', 'weeding', 'ring'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Producto alimenticio',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1023'),
    short_id: '1023',
    name: 'Shopping & Retail',
    keys: ['store', 'shop'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Servicio de vehículos y accesorios.',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
  {
    _id: getObjectId('1019'),
    short_id: '1019',
    name: 'Home Improvement',
    keys: ['home', 'construction', 'renovation', 'improvement'],
    translations: [
      {
        languageCode: 'es',
        translation: 'Mejoras para el hogar',
        languageName: 'spanish',
      },
    ],
    isDefault: false,
    state: 0,
    deleted: false,
    description: '',
  },
];

export default categories;
