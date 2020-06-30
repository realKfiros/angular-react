import { Rule, SchematicContext, Tree, url, apply, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';
import { normalize } from 'path';

export function component(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      }),
      move(normalize(process.cwd() + '/src/app'))
    ]);
    return mergeWith(sourceParametrizedTemplates);
  };
}
