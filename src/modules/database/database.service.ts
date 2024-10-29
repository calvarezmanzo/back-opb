import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) { }

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


  /**
   * Ejecuta un procedimiento almacenado con parámetros dinámicos.
   * @param spName Nombre del procedimiento almacenado.
   * @param params Objeto con los parámetros (clave-valor) a pasar al procedimiento.
   * @returns Promesa con el resultado de la ejecución del SP.
   */
  async ejecutarSP(spName: string, params: Record<string, any>): Promise<any> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
  
    try {
      // Construir la consulta SQL con placeholders nombrados
      const placeholders = Object.keys(params)
        .map((key) => `@${key} = '${params[key]}'`) // Uso explícito de nombres de parámetros
        .join(', ');
  
      // Construcción de la consulta completa
      const query = `EXEC ${spName} ${placeholders};`;
  
      console.log('Query generada:', query); // Depuración
  
      // Ejecutar la consulta con los parámetros como un objeto nombrado
      const result = await queryRunner.query(query, Object.values(params));
  
      return result;
    } catch (error) {
      console.error('Error al ejecutar el SP:', error);
      throw error;
    } finally {
      // Liberar el queryRunner
      await queryRunner.release();
    }
  }
  
  
}

