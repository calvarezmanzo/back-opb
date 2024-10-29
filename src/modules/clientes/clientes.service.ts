import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ClientesService {


    constructor(private readonly databaseService: DatabaseService,
    ) { }



    async findAll() {
        return await this.databaseService.callStoredProc('sp_get_clientes', {
        });
    }


    async ejecutarSP(spName: string, params: Record<string, any>): Promise<any> {
 

        return await this.databaseService.ejecutarSP(spName, params);
    }



}
