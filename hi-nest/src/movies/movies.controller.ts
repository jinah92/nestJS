import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies.';
    }

    
    @Get('search')
    search(@Query('year') serachingYear){
        return `we are searching the movie made after : ${serachingYear}`;
    }

    @Get(':id')
    getOne(@Param("id") id: string){
        return `This will return one movie with ID : ${id}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This will delete a movie with ID : ${id}`
    }

    @Patch(':id')  //리소스의 일부분만 업데이트
    patch(@Param('id') id:string, @Body() updateData){
        return {
            updatedMovie: id,
            ...updateData
        }
    }

     
}
