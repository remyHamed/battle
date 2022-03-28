etape de création du projet

cmd 1 :
npm init

cmd 2 :
npm i typescript

cmd 3 :
npx tsc --init

cmd 4 :
npx tsc



Modifier le fichuer tsconfig.json

/* Emit */
"declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
// "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
// "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
"sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
// "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
"outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
// "removeComments": true,    

modifier package.json

"scripts": {
"start": "node index.js",
"build": "npx tsc ./index.ts"
}"

dans web storm
add confuguration

cliquer sur le plus
npm
start
 a nouveau le plus
build





