import type { IPagination } from '@vben/types';

import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

interface IUser {
    userId: string;
    displayName: string;
    statusMessage: string;
    pictureUrl: string;
}

@Controller('')
export class AppController {
    user: IUser;
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): { text: string } {
        return { text: 'Hello World' };
    }

    @Get('pagination')
    getPagination(): IPagination {
        return {
            page: 1,
            page_size: 10,
            total: 100,
            total_pages: 10,
        };
    }

    @Post('user')
    getPagination2(@Body() body: IUser) {
        this.user = body;
        return body;
    }

    @Get('user')
    getUser() {
        return this.user;
    }
}
