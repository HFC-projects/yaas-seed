import { Config, RecursivePartial } from './config.interface';

export const productionConfig: RecursivePartial<Config> = {
  logger:{
    level: "error"
  }
};
