import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  enter: (path) => {
    console.log('### path:', path.toString());
    if (path.isIdentifier({name: "n"})) {
      path.node.name = "x";
    }
  }
});
