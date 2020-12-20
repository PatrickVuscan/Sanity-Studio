import React from 'react';

export default {
  name: 'reportItCategory',
  title: 'Report It: Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      const EMOJIS = {
        Emergency: '🚓',
        'Police Services': '🚓',
        School: '🏫',
        Mall: '🏬',
        Outdoors: '🏖️',
        default: 'ℹ️',
      };
      return {
        title,
        media: (
          <span style={{ fontSize: '1.5rem' }}>
            {title && EMOJIS[title] ? EMOJIS[title] : EMOJIS.default}
          </span>
        ),
      };
    },
  },
};
