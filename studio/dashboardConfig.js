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
                  buildHookId: '5ea22827b58fb63437e28d59',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uoxk8vep',
                  apiId: '145f59b1-d16c-4deb-a4e3-3424f6d67343'
                },
                {
                  buildHookId: '5ea228287961c53f37140e6a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tikr6eq9',
                  apiId: '6c3e5cd7-ae81-4d9a-929e-71febbe5c136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yaseen1989/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tikr6eq9.netlify.app', category: 'apps'}
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
