import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

	async callStoredProc(procName: string, params: { [key: string]: any }) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
  
      const queryParams = Object.keys(params)
        .map((key, index) => `@p_${key} = @${index}`)
        .join(', ');
  
      const parameters = Object.values(params);
  
      const result = await queryRunner.query(
        `EXEC ${procName} ${queryParams}`,
        parameters
      );
  
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
  
}
