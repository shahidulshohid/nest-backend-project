import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(private readonly service: ProjectService){}
    @Post('seed')
    async seedData(){
        return this.service.seed();
    }

    @Get('developers')
    async geDeveloper(){
        return this.service.getDevelopers();
    }

    @Get('projects')
    async getProject(){
        return this.service.getProjects();
    }
}
