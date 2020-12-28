import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies.';
    }

    @Get('/:id')
    getOne(@Param("id") id: string){
        return `This will return one movie with ID : ${id}`;
    }

    @Post()
    create(){
        return 'This will create a Movie.'
    }

    @Delete('/:id')
    remove(@Param('id') id: string){
        return `This will delete a movie with ID : ${id}`
    }

    @Patch('/:id')  //리소스의 일부분만 업데이트
    patch(@Param('id') id:string){
        return `This will patch a movie with ID : ${id}`
    }

     
}
