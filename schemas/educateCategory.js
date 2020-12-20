import React from 'react';

export default {
  name: 'educateCategory',
  title: 'Educate: Category',
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
        'Combatting Racism': '✊',
        'Mental Health': '🧠',
        default: '📖',
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
