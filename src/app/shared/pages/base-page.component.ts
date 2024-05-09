import { ChangeDetectorRef, Directive, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoadManyResponseModel } from '../models/load-many-response.model';

/**
 * A base class that contains all the common code.
 * Since its an abstract class so it can only be extended by other components
 */
@Directive()
export abstract class _BasePageComponent<T> {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  data = signal<LoadManyResponseModel<T> | null>(null);
  page: number = 1;
  pageSize: number = 10;
  destroy$: Subject<void> = new Subject<void>();
  pageChange$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  retry$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  hasError = signal<boolean>(false);
  isLoading = signal(false);

  /**
   * Called when user clicks on paginator
   * @param page
   */
  onPageChange(page: number) {
    this.pageChange$.next(page);
  }

  /**
   * Called when user clicks on retry link
   * @param value
   */
  onRetry(value: boolean) {
    this.retry$.next(true);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
