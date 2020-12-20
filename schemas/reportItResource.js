export default {
  name: 'reportItResource',
  title: 'Report It: Resource',
  type: 'document',
  initialValue: {
    featured: false,
    publishDateTime: new Date().toISOString(),
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The name of the resource',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Unique Resource ID',
      type: 'slug',
      options: {
        source: doc => `${new Date().toISOString().slice(0, 10)}-${doc.title}`,
        maxLength: 96,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      description: 'Whether this resource should be featured',
      type: 'boolean',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'reportItCategory' },
    },
    {
      name: 'publishDateTime',
      title: 'Publish Date and Time',
      type: 'datetime',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      description: 'The primary phone number to display in the header',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      description: 'The primary email address to display in the header',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description: 'Image used in card view, and first displayed under the header',
      type: 'figure',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
