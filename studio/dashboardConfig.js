export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9c2ed00fd0ed49439f8d99',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1iqwip2q',
                  apiId: 'e0851aa2-629b-4003-bd57-cad4505c9246'
                },
                {
                  buildHookId: '5d9c2ed1fd555e8095f52280',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rqht8mcn',
                  apiId: '55df1213-c42f-432b-a01d-d1b1ba33c380'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenh-sportsbet/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rqht8mcn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
