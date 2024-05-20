import { Test, TestingModule } from '@nestjs/testing';
import { BigQueryController } from './app.controller';
import { BigQueryService } from './app.service';

describe('AppController', () => {
  let appController: BigQueryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BigQueryController],
      providers: [BigQueryService],
    }).compile();

    appController = app.get<BigQueryController>(BigQueryController);
    
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.runQuery()).toBe('Hello World!');
    });
  });
});


// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// describe('AppController', () => {
//   let appController: AppController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//       providers: [AppService],
//     }).compile();

//     appController = app.get<AppController>(AppController);
    
//   });

//   // describe('root', () => {
//   //   it('should return "Hello World!"', () => {
//   //     expect(appController.getHello()).toBe('Hello World!');
//   //   });
//   // });
// });