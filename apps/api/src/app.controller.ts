import type { IPagination } from '@vben/types';

import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('')
export class AppController {
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
}
