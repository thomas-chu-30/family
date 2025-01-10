interface IPagination {
    /**
     * Page number
     */
    page: number;
    /**
     * Page size
     */
    page_size: number;
    /**
     * Total count
     */
    total: number;
    /**
     * Total pages
     */
    total_pages: number;
}

export type { IPagination };
