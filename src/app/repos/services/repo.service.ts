import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { appConfig } from '../../app.config';
import { LoadManyResponseModel } from '../../shared/models/load-many-response.model';
import { Repo } from '../models/repo.interface';
import { RequestQueryParams } from '../../shared/models/request-query-params.interface';

@Injectable()
export class RepoService {
  httpClient: HttpClient = inject(HttpClient);

  /**
   * Fetches the repos from GitHub
   * @param query {must be provided}
   * @param language
   * @param stars
   * @param page
   * @param pageSize
   * @returns
   */
  getRepos(
    query: string,
    language?: string,
    stars?: number,
    page: number = 1,
    pageSize: number = 10
  ): Observable<LoadManyResponseModel<Repo>> {
    let queryParams: RequestQueryParams = {
      q:
        query +
        ` ${language ? `language:${language}` : ''} ${
          stars ? `stars:>=${stars}` : ''
        } `,
      page,
      per_page: pageSize,
    };

    return this.httpClient
      .get(`${appConfig.domainUrl}/repositories`, {
        params: {
          ...queryParams,
        },
      })
      .pipe(
        map((data: any) => {
          return new LoadManyResponseModel<Repo>(
            data.items,
            data.total_count,
            data.incomplete_results
          );
        })
      );
  }
}
