module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'plop-templates/Component/Component.jsx.hbs',
            }
        ],
    });
};
