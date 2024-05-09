import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { appConfig } from '../../app.config';
import { LoadManyResponseModel } from '../../shared/models/load-many-response.model';
import { RequestQueryParams } from '../../shared/models/request-query-params.interface';
import { Commit } from '../models/commit.interface';

@Injectable()
export class CommitsService {
  httpClient: HttpClient = inject(HttpClient);

  getCommits(
    query: string,
    repo: string,
    page: number = 1,
    pageSize: number = 10
  ): Observable<LoadManyResponseModel<Commit>> {
    let queryParams: RequestQueryParams = {
      q: `${query} ${repo ? `repo:${repo}` : ''}`,
      page,
      per_page: pageSize,
    };

    return this.httpClient
      .get(`${appConfig.domainUrl}/commits`, {
        params: {
          ...queryParams,
        },
      })
      .pipe(
        map((data: any) => {
          const items: Commit[] = (data.items as any[]).map((item) => {
            return {
              id: item.sha,
              url: item.url,
              authorName: item.commit.author.name,
              message: item.commit.message,
            };
          });
          return new LoadManyResponseModel<Commit>(
            items,
            data.total_count,
            data.incomplete_results
          );
        })
      );
  }
}
