import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { LoadManyResponseModel } from '../../../shared/models/load-many-response.model';
import { _BasePageComponent } from '../../../shared/pages/base-page.component';
import { Commit } from '../../models/commit.interface';
import { CommitsService } from '../../services/commits.service';

@Component({
  selector: 'app-commits-main',
  templateUrl: './commits-main.component.html',
  styleUrl: './commits-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-block mt-5 mb-5',
  },
  providers: [CommitsService],
})
export class CommitsMainComponent
  extends _BasePageComponent<Commit>
  implements OnInit
{
  commitsService: CommitsService = inject(CommitsService);
  commitsSearchControl = new FormControl<string>('');
  repository: string = '';

  ngOnInit(): void {
    this.repository = this.activatedRoute.snapshot.params['repo'];

    combineLatest([this.searchTextChange$(), this.pageChange$, this.retry$])
      .pipe(
        tap(([_, page]) => {
          this.page = page;
          this.isLoading.set(true);
          this.hasError.set(false);
        }),
        switchMap(([text, page]) => {
          if (!text) return of(null);
          return this.commitsService
            .getCommits(text, this.repository, page)
            .pipe(
              catchError((err) => {
                this.hasError.set(true);
                return of(null);
              })
            );
        })
      )
      .subscribe((response: LoadManyResponseModel<Commit> | null) => {
        this.isLoading.set(false);
        this.data.set(response);
      });
  }

  searchTextChange$(): Observable<string> {
    return this.commitsSearchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(400),
      tap((d) => this.pageChange$.next(1)),
      map((t) => t?.trim() || '')
    );
  }

  getRepoQueryParams(): Record<string, string> {
    return history.state.queryParams;
  }
}
