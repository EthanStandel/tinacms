/**

*/

const query = `#graphql
query {
  author(relativePath: "author1.mdx") {
    social {
      platform
      handle
    }
  }
}
`

const events = [
  {
    type: 'forms:fields:onChange',
    value: [{}],
    mutationType: {
      type: 'insert',
      at: 0,
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          name: 'social',
          type: 'object',
          list: true,
          fields: [
            {
              component: 'select',
              type: 'string',
              name: 'platform',
              options: [
                {
                  label: 'Choose an option',
                  value: '',
                },
                'twitter',
                'facebook',
                'instagram',
              ],
              parentTypename: 'AuthorSocial',
            },
            {
              component: 'text',
              type: 'string',
              name: 'handle',
              parentTypename: 'AuthorSocial',
            },
          ],
          parentTypename: 'Author',
          component: 'group-list',
        },
      },
      name: 'social',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: 'twitter',
    mutationType: {
      type: 'change',
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          component: 'select',
          type: 'string',
          name: 'social.0.platform',
          options: [
            {
              label: 'Choose an option',
              value: '',
            },
            'twitter',
            'facebook',
            'instagram',
          ],
          parentTypename: 'AuthorSocial',
        },
      },
      name: 'social.0.platform',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: 'a',
    mutationType: {
      type: 'change',
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          component: 'text',
          type: 'string',
          name: 'social.0.handle',
          parentTypename: 'AuthorSocial',
        },
      },
      name: 'social.0.handle',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: [
      {},
      {
        platform: 'twitter',
        handle: 'a',
      },
    ],
    previousValue: [
      {
        platform: 'twitter',
        handle: 'a',
      },
    ],
    mutationType: {
      type: 'insert',
      at: 0,
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          name: 'social',
          type: 'object',
          list: true,
          fields: [
            {
              component: 'select',
              type: 'string',
              name: 'platform',
              options: [
                {
                  label: 'Choose an option',
                  value: '',
                },
                'twitter',
                'facebook',
                'instagram',
              ],
              parentTypename: 'AuthorSocial',
            },
            {
              component: 'text',
              type: 'string',
              name: 'handle',
              parentTypename: 'AuthorSocial',
            },
          ],
          parentTypename: 'Author',
          component: 'group-list',
        },
      },
      name: 'social',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: 'facebook',
    mutationType: {
      type: 'change',
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          component: 'select',
          type: 'string',
          name: 'social.0.platform',
          options: [
            {
              label: 'Choose an option',
              value: '',
            },
            'twitter',
            'facebook',
            'instagram',
          ],
          parentTypename: 'AuthorSocial',
        },
      },
      name: 'social.0.platform',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: 'b',
    mutationType: {
      type: 'change',
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          component: 'text',
          type: 'string',
          name: 'social.0.handle',
          parentTypename: 'AuthorSocial',
        },
      },
      name: 'social.0.handle',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: [
      {
        platform: 'twitter',
        handle: 'a',
      },
      {
        platform: 'facebook',
        handle: 'b',
      },
    ],
    previousValue: [
      {
        platform: 'facebook',
        handle: 'b',
      },
      {
        platform: 'twitter',
        handle: 'a',
      },
    ],
    mutationType: {
      type: 'move',
      from: 0,
      to: 1,
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          name: 'social',
          type: 'object',
          list: true,
          fields: [
            {
              component: 'select',
              type: 'string',
              name: 'platform',
              options: [
                {
                  label: 'Choose an option',
                  value: '',
                },
                'twitter',
                'facebook',
                'instagram',
              ],
              parentTypename: 'AuthorSocial',
            },
            {
              component: 'text',
              type: 'string',
              name: 'handle',
              parentTypename: 'AuthorSocial',
            },
          ],
          parentTypename: 'Author',
          component: 'group-list',
        },
      },
      name: 'social',
    },
  },
  {
    type: 'forms:fields:onChange',
    value: [
      {
        platform: 'facebook',
        handle: 'b',
      },
    ],
    previousValue: [
      {
        platform: 'twitter',
        handle: 'a',
      },
      {
        platform: 'facebook',
        handle: 'b',
      },
    ],
    mutationType: {
      type: 'remove',
      at: 0,
    },
    formId: 'content/authors/author1.mdx',
    field: {
      data: {
        tinaField: {
          name: 'social',
          type: 'object',
          list: true,
          fields: [
            {
              component: 'select',
              type: 'string',
              name: 'platform',
              options: [
                {
                  label: 'Choose an option',
                  value: '',
                },
                'twitter',
                'facebook',
                'instagram',
              ],
              parentTypename: 'AuthorSocial',
            },
            {
              component: 'text',
              type: 'string',
              name: 'handle',
              parentTypename: 'AuthorSocial',
            },
          ],
          parentTypename: 'Author',
          component: 'group-list',
        },
      },
      name: 'social',
    },
  },
]

import { testRunner } from '../runner'
// @ts-ignore jest: Cannot find name 'test'
test('formifies the query and responds correctly to events', async () => {
  await testRunner(query, events, __dirname)
})
