import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { LoadManyResponseModel } from '../../../shared/models/load-many-response.model';
import { Repo } from '../../models/repo.interface';
import { _BasePageComponent } from '../../../shared/pages/base-page.component';
import { RepoService } from '../../services/repo.service';

interface RepoQueryParams {
  search?: string;
  language?: string;
  stars?: number;
  page?: number;
}

@Component({
  selector: 'app-repos-main',
  templateUrl: './repos-main.component.html',
  styleUrl: './repos-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RepoService],
  host: {
    class: 'd-block mt-5 mb-5',
  },
})
export class ReposMainComponent
  extends _BasePageComponent<Repo>
  implements OnInit, OnDestroy
{
  repoService: RepoService = inject(RepoService);
  router: Router = inject(Router);

  /**
   * These queryParams are maintaing the url state of the page
   */
  queryParams: RepoQueryParams = {
    search: '',
    language: '',
    page: 1,
    stars: 0,
  };

  repoSearchControl = new FormControl<string>('');
  langaugeFilterControl = new FormControl<string | null>(null);
  starFilterControl = new FormControl<number | null>(null);

  ngOnInit(): void {
    combineLatest([
      this.searchTextChange$(),
      this.pageChange$,
      this.languageChange$(),
      this.starChange$(),
      this.retry$,
    ])
      .pipe(
        tap(([text, page, language, stars]) => {
          this.queryParams.search = text;
          this.queryParams.page = page;
          this.queryParams.language = language;
          this.queryParams.stars = stars;

          this.router.navigate([], {
            queryParams: this.queryParams,
          });

          this.isLoading.set(true);
          this.hasError.set(false);
        }),
        switchMap(([text, page, language, stars]) => {
          if (!text) return of(null);
          return this.repoService.getRepos(text, language, stars, page).pipe(
            catchError((err) => {
              this.hasError.set(true);
              return of(null);
            })
          );
        })
      )
      .subscribe((response: LoadManyResponseModel<Repo> | null) => {
        this.isLoading.set(false);
        this.data.set(response);
      });

    this.repoSearchControl.setValue(
      this.activatedRoute.snapshot.queryParams['search'] || ''
    );
    this.langaugeFilterControl.setValue(
      this.activatedRoute.snapshot.queryParams['language'] || ''
    );
    this.starFilterControl.setValue(
      this.activatedRoute.snapshot.queryParams['stars'] || 0
    );
    this.page = this.activatedRoute.snapshot.queryParams['page'] || 1;
  }

  searchTextChange$(): Observable<string> {
    return this.repoSearchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(400),
      tap((d) => this.pageChange$.next(1)),
      map((t) => t?.trim() || '')
    );
  }

  languageChange$(): Observable<string> {
    return this.langaugeFilterControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(400),
      tap((d) => this.pageChange$.next(1)),
      map((t) => t?.trim() || '')
    );
  }

  starChange$(): Observable<number> {
    return this.starFilterControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(400),
      tap((d) => this.pageChange$.next(1)),
      map((t) => t || 0)
    );
  }
}
