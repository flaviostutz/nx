import type { ProjectConfiguration, Tree } from '@nrwl/devkit';
import type { Logger, ProjectMigrationInfo } from '../../utilities';
import type { BuilderMigrator } from './builder.migrator';

export type BuilderMigratorClassType = {
  new (
    tree: Tree,
    project: ProjectMigrationInfo,
    projectConfig: ProjectConfiguration,
    logger: Logger
  ): BuilderMigrator;
};
