import { MatPaginatorIntl } from '@angular/material/paginator';

export class ESPaginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = ' Siguiente página';
    this.previousPageLabel = ' Anterior página';
    this.itemsPerPageLabel = 'Pag. por Pantalla';
    this.firstPageLabel = ' Primera página';
    this.lastPageLabel  = ' Útima página';
    this.getRangeLabel  = this.grl.bind(this);
  }

    private grl(page: number, pageSize: number, length: number): string {
        if (length === 0 || pageSize === 0) {
            return 0 +' de ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return startIndex +' - '+ endIndex + ' de ' + length ;
    }
}