import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { LoadManyResponseModel } from '../../models/load-many-response.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-100',
  },
})
/**
 * This is a configurable table component. The data needs to be provided from outside.
 * You can project your content at two places in this component.
 * Use [table-header] to project your table header content
 * Use [table-body] to project your table body content
 * This table handles all the loading, error and empty states.
 */
export class TableComponent<T> {
  /**
   * The data of type LoadManyResponseModel
   */
  @Input()
  data: LoadManyResponseModel<T> | null = null;

  /**
   * Provide the page to let the table paginator know which page to select
   */
  @Input()
  page: number = 1;

  /**
   * Provide the page to let the table paginator know how many pages to show
   */
  @Input()
  pageSize: number = 10;

  /**
   * Provide from the outside component
   */
  @Input()
  isLoading: boolean = false;

  /**
   * Provide from the outside component
   */
  @Input()
  hasError: boolean = false;

  /**
   * Event that informs the parent about the page change.
   * The component can fetch the new data on this event
   */
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Once there is any error to load the data, the component shows the Retry link.
   */
  @Output()
  retry: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   *
   * @param page Page to be selected
   */
  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  /**
   * Handler for Retry link
   * @param e
   */
  onRetry(e: MouseEvent) {
    e.preventDefault();
    this.retry.emit(true);
  }
}
