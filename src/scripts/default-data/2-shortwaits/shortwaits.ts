import { ShortwaitsAdminDefaultDataPayloadType } from 'shortwaits-shared';
import { getObjectId } from 'mongo-seeding';
import Categories from '../1-categories/categories';

const shortwaitsAdminDefaultData: ShortwaitsAdminDefaultDataPayloadType[] = [
  {
    _id: getObjectId('0000001'),
    short_id: '0000001',
    name: 'Shortwaits LLC',
    description: 'Shortwaits Default data for the USA area only',
    links: [''],
    suggestedLang: 'en',
    blackList: [],
    timeZones: ['ET'],
    myBusinessDefaultData: {
      Categories: Categories,
      myBusinessDefaultServices: [
        {
          name: 'Service I - 15 mins',
          applicableCategories: [
            Categories[0]._id,
            Categories[1]._id,
            Categories[2]._id,
          ],
          hours: {
            mon: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            tue: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            wed: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            thu: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            fri: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sat: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sun: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
          },
          description: 'Describe your service here =)',
          durationInMin: 15,
          price: 1500,
          businessId: null,
          createdBy: null,
          updatedBy: null,
          currency: 'USD',
          isPrivate: false,
          urls: null,
          isVideoConference: false,
          deleted: false,
          serviceColor: {
            colorId: 3,
            colorName: 'green',
            hexCode: '#C9E79D',
            isSelected: null,
            isDefault: false,
          },
          imageUrl: '',
        },
        {
          name: 'Service II - 1 hr',
          applicableCategories: [
            Categories[0]._id,
            Categories[1]._id,
            Categories[2]._id,
          ],
          hours: {
            mon: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            tue: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            wed: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            thu: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            fri: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sat: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sun: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
          },
          description: 'Describe your service here =)',
          durationInMin: 60,
          price: 2000,
          businessId: null,
          createdBy: null,
          updatedBy: null,
          currency: 'USD',
          isPrivate: false,
          urls: null,
          isVideoConference: false,
          deleted: false,
          serviceColor: {
            colorId: 2,
            colorName: 'blue',
            hexCode: '#B4CEDB',
            isSelected: null,
            isDefault: false,
          },
          imageUrl: '',
        },
        {
          name: 'Service III - 3 hrs',
          hours: {
            mon: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            tue: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            wed: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            thu: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            fri: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sat: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
            sun: [
              {
                startTime: 540,
                endTime: 1020,
                isActive: true,
              },
            ],
          },
          applicableCategories: [
            Categories[0]._id,
            Categories[1]._id,
            Categories[2]._id,
          ],
          description: 'Describe your service here =)',
          durationInMin: 180,
          price: 2500,
          businessId: null,
          createdBy: null,
          updatedBy: null,
          currency: 'USD',
          isPrivate: false,
          urls: null,
          isVideoConference: false,
          deleted: false,
          serviceColor: {
            colorId: 1,
            colorName: 'red',
            hexCode: '#F0C2C2',
            isSelected: null,
            isDefault: true,
          },
          imageUrl: '',
        },
      ],
      myBusinessDefaultCurrencies: [
        {
          name: 'United States dollar',
          decimalSeparator: 2,
          symbol: 'US$',
          code: 'USD',
          codeNumber: 840,
        },
        {
          name: 'Peruvian sol',
          symbol: 'S/',
          decimalSeparator: 2,
          code: 'PEN',
          codeNumber: 640,
        },
      ],
      myBusinessDefaultHours: {
        mon: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        tue: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        wed: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        thu: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        fri: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        sat: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
        sun: [
          {
            startTime: 540,
            endTime: 1020,
            isActive: true,
          },
        ],
      },
    },
    serviceColors: {
      red: {
        colorId: 1,
        colorName: 'red',
        hexCode: '#F0C2C2',
        isSelected: null,
        isDefault: true,
      },
      blue: {
        colorId: 2,
        colorName: 'blue',
        hexCode: '#B4CEDB',
        isSelected: null,
        isDefault: false,
      },
      green: {
        colorId: 3,
        colorName: 'green',
        hexCode: '#C9E79D',
        isSelected: null,
        isDefault: false,
      },
      yellow: {
        colorId: 4,
        colorName: 'yellow',
        hexCode: '#F3E7AD',
        isSelected: null,
        isDefault: false,
      },
      lightBlue: {
        colorId: 5,
        colorName: 'lightBlue',
        hexCode: '#BCE6E2',
        isSelected: null,
        isDefault: false,
      },
      purple: {
        colorId: 6,
        colorName: 'purple',
        hexCode: '#97a2db',
        isSelected: null,
        isDefault: false,
      },
    },
  },
];
export = shortwaitsAdminDefaultData;
