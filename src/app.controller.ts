import { Body, Controller, Get,Post} from '@nestjs/common';
import { BigQueryService } from './app.service';

interface InsertDataRequest {
  id: number;
  Name: string;
  Emp_code: number;
  Department: string;
}

@Controller('/test')
export class BigQueryController {
  constructor(private readonly bigqueryService: BigQueryService) {}

  @Get('/runQuery')
  async runQuery(): Promise<any> {
    return this.bigqueryService.runQuery();
  }

  @Post('/insertData')
  async insertData(@Body() data: InsertDataRequest): Promise<any> {
    const insertedData = await this.bigqueryService.insertData(data.id, data.Name, data.Emp_code, data.Department);
    return { message: 'Data inserted successfully', data: insertedData };
  }
}

//   @Put('updateData')
//   async updateData(@Body() data): Promise<any> {
//     return this.bigqueryService.updateData(data.id, data.Name, data.Emp_code, data.Department);
//   }

//   @Delete('deleteData/:Emp_code')
//   async deleteData(@Param('Emp_code') Emp_code): Promise<any> {
//     return this.bigqueryService.deleteData(Emp_code);
//   }







// import { Controller, Get, Post, Res } from '@nestjs/common';
// import { AppService, CreateCatDto, NewService } from './app.service';
// import { Response } from 'express';

// @Controller('/test')
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Get('/data')
//   async getHello(@Res() res: Response): Promise<void> {
//     try {
//       const data = await this.appService.getHello();
//       res.status(200).json({ responseMessage: 'Successfully', data });
//     } catch (err) {
//       res.status(500).json({ responseMessage: 'Internal Server Error' });
//     }
//   }
// }

// @Controller('/test1')
// export class NewController {
//   constructor(private readonly appService: NewService) {}
//   @Get('/hello1/')
//   getHello(): string {
//     return this.appService.sayHello();
//   }
// }

// @Controller('/post')
// export class PostController {
//   @Post('/data')
//   async createCat(response: Response): Promise<any> {
//     try {
//       const createCatDto = new CreateCatDto();
//       const result = await createCatDto.postHello();
//       if (result) {
//         return result;
//       } else {
//         return { responseMessage: 'No Data Found' };
//       }
//     } catch (err) {
//       console.log(err);
//       return response.send({
//         message: 'Internal Server Error',
//       });
//     }
//   }
// }
