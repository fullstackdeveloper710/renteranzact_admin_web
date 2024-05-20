import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';
import * as path from 'path';

@Injectable()
export class BigQueryService {
  private readonly bigquery: BigQuery;

  // private readonly projectId: string = 'rajintest';
  // private readonly datasetId: string = 'RainDataset';
  // private readonly tableId: string = 'Bidding';

  private readonly projectId: string = 'squadi-dev';
  private readonly datasetId: string = 'analytics_325356741';
  private readonly tableId: string = 'events_20240215';

  constructor() {
    const keyFilename = path.join(__dirname, '../service-account.json');
    this.bigquery = new BigQuery({
      keyFilename,
      projectId: this.projectId,
    });
  }

  async runQuery(): Promise<any> {
    try {
      const query = `SELECT * FROM ${this.projectId}.${this.datasetId}.${this.tableId}`;
      const results = await this.bigquery.query(query);
      const count = results[0].length;
      return { count, results };
    } catch (err) {
      console.error('Error fetching data from BigQuery:', err.message);
      throw err;
    }
  }

   async insertData(id: number, Name: string, Emp_code: number, Department: string): Promise<any> {
      try {
        const query = `
          INSERT INTO ${this.projectId}.${this.datasetId}.${this.tableId} (id, Name, Emp_code, Department)
          VALUES (${id},'${Name}',${Emp_code},'${Department}')
        `;
        const job = await this.bigquery.query(query);
        return job;
      } catch (err) {
        console.error('Error inserting data into BigQuery:', err.message);
        throw err;
      }
    }

  // async updateData(id, Name, Emp_code, Department): Promise<any> {
  //   try {
  //     const query = `
  //       UPDATE ${process.env.projectId}.${process.env.datasetId}.${process.env.tableId}
  //       SET
  //         id = ${id},
  //         Name = '${Name}',
  //         Department = '${Department}'
  //       WHERE Emp_code = ${Emp_code}
  //     `;
  //     const job = await this.bigquery.query(query);
  //     return job;
  //   } catch (err) {
  //     console.error('Error updating data in BigQuery:', err.message);
  //     throw err;
  //   }
  // }

  // async deleteData(Emp_code): Promise<any> {
  //   try {
  //     const query = `
  //       DELETE FROM ${process.env.projectId}.${process.env.datasetId}.${process.env.tableId}
  //       WHERE Emp_code = ${Emp_code}
  //     `;
  //     const job = await this.bigquery.query(query);
  //     return job;
  //   } catch (err) {
  //     console.error('Error deleting data in BigQuery:', err.message);
  //     throw err;
  //   }
}

//with  dummy data

// import { Injectable } from '@nestjs/common';
// import * as fs from 'fs';
// import * as path from 'path';
// @Injectable()
// export class AppService {
//   private readonly jsonDataPath: string;
//   constructor() {
//     this.jsonDataPath = path.join(__dirname, '../data.json');
//   }
//   getHello(): void {
//     try {
//       const jsonData = fs.readFileSync(this.jsonDataPath, 'utf-8');
//       const parsedData = JSON.parse(jsonData);
//       return parsedData;
//     } catch (error) {
//       console.error('Error reading JSON file:', error);
//       throw new Error('Failed to read JSON file');
//     }
//   }
// }

// export class NewService {
//   sayHello(): any {
//     return [
//       {
//         name: 'suuny',
//       },
//     ];
//   }
// }
// export class CreateCatDto {
//   postHello(): { name: string; age: number; breed: string } {
//     return { name: 'testing', age: 6, breed: 'test' };
//   }
// }
