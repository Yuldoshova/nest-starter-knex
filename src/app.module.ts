import { Module } from '@nestjs/common';
import knex, { Knex } from 'knex';
import { config } from '../knexfile';

@Module({
  imports: [],
  providers: [
    {
      provide: 'KnexConnection',
      useFactory: (): Knex => {
        return knex(config.development);
      },
    },
  ],
  exports: ['KnexConnection'],
})
export class AppModule {}
