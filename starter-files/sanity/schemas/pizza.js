import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the Pizza',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      description: 'Slug of the URL',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'A photo of the Pizza',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the Pizza in cents',
      validation: (Rule) => Rule.min(1000).max(5000),
      // TODO : add custom component
    },
  ],
};
