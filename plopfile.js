module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
        validate: (input) => input.length > 0,
      },
      {
        type: 'list',
        name: 'type',
        choices: ['common', 'partials', 'pages'],
        message: 'What type of component is it?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{pascalCase name}}/styled.tsx',
        templateFile: 'plop-templates/styled.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/types.hbs',
      },
    ],
  })
}
