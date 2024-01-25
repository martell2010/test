// index.mjs
import fs from 'fs/promises';
import path from 'path';

async function loadModule(modulePaths) {
  const currentWorkingDir = process.cwd();
  const packageDir = path.dirname(new URL(import.meta.url).pathname);
  const externalModulesPath = path.join(packageDir, 'external-modules.js');
  const moduleImports = [];

  for (const relativePath of modulePaths) {
    const absolutePath = path.resolve(currentWorkingDir, relativePath);
    moduleImports.push(`import module_${moduleImports.length} from '${absolutePath.replace(/\\/g, '/')}';`);
  }

  const content = `${moduleImports.join('\n')}\nexport default { ${moduleImports.map((_, i) => `module_${i}`).join(', ')} };`;

  await fs.writeFile(externalModulesPath, content, 'utf-8');

  console.log(`Модули успешно добавлены в ${externalModulesPath}`);
}

export { loadModule };
