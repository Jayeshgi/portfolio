import { spawnSync } from 'node:child_process';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
for (const file of ['site/content.js', 'site/app.js', 'scripts/dev.mjs', 'scripts/build.mjs']) {
  const result = spawnSync(process.execPath, ['--check', fileURLToPath(new URL(file, root))], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status || 1);
}
const html = await readFile(new URL('site/index.html', root), 'utf8');
for (const match of html.matchAll(/(?:src|href)="(\.\/[^"?#]+)"/g)) {
  await access(new URL(match[1], new URL('site/', root)));
}
console.log('JavaScript syntax and local HTML asset references passed.');
