import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-52-44-31-100.compute-1.amazonaws.com',
  port: 5432,
  username: 'ynzbqcfdrdqmge',
  password: '1257a113f6674366b92598a8d17234aa06bb8f70ea7f35e72de1387d27e36571',
  database: 'd3vf45e52u5ldm',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
