"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var syntaxJsx=_interopDefault(require("@babel/plugin-syntax-jsx"));const hasJSX=(e,t)=>{const n={hasJSX:!1};t.traverse({JSXElement(){this.hasJSX=!0}},n);return n.hasJSX},remove$createElement=(e,t)=>{t.traverse({ObjectMethod(t){"setup"===t.node.key.name&&t.traverse({VariableDeclaration(t){t.traverse({MemberExpression(n){e.isThisExpression(n.node.object)&&e.isIdentifier(n.node.property)&&"$createElement"===n.node.property.name&&t.remove()}})}})}})},autoImportH=(e,t,n)=>{if(hasJSX(e,t)){const i=t.get("body").filter(e=>e.isImportDeclaration()).map(e=>e.node),o=i.filter(e=>e.source.value===n),r=o.some(t=>t.specifiers.some(t=>e.isImportSpecifier(t)&&"h"===t.local.name));if(!r){const i=e.importSpecifier(e.identifier("h"),e.identifier("h"));o.length>0?o[0].specifiers.push(i):t.unshiftContainer("body",e.importDeclaration([i],e.stringLiteral(n)))}}};var index=(e,{importSource:importSource="@vue/composition-api"}={})=>{const t=e.types;return{inherits:syntaxJsx,visitor:{Program(e){remove$createElement(t,e),autoImportH(t,e,importSource)}}}};module.exports=index;
