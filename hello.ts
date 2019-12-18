import {parse} from '@babel/parser'

const ast = parse(`
function hello(name) {
  console.log(\`Hello, \${name}!\`)
}
`,);

console.log(JSON.stringify(ast, null, 4))
