import { Module } from '@nestjs/common';
import { BigQueryService } from './app.service';
import { BigQueryController } from './app.controller';

@Module({
  providers: [BigQueryService],
  controllers: [BigQueryController],
})
export class BigQueryModule {}


// import { Module } from '@nestjs/common';
// import { AppController,NewController, PostController } from './app.controller';
// import { AppService, CreateCatDto, NewService, } from './app.service';


// @Module({
//   imports: [],
//   controllers: [AppController,NewController,PostController],
//   providers: [AppService,NewService,CreateCatDto],
// })
// export class AppModule {}