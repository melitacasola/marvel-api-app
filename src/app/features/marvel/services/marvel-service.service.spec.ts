import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MarvelService } from './marvel-service.service';
import { DataApi } from '../../../core/interfaces/data-api.interface';
import { ISeries } from '../../../core/interfaces/series.interface';

describe('MarvelServiceService', () => {
  let service: MarvelService;
  let httpCtrl: HttpTestingController;

  const SERIES_RESPONSE: DataApi<ISeries> = {
    code: 200,
    status: 'Ok',
    data: {
      results: [
        {
          id: 1,
          title: 'Series Title 1',
          description: 'Description 1',
          thumbnail: { path: 'path1', extension: 'jpg' },
          pageCount: 100,
          prices: [{ type: 'printPrice', price: 4.99 }],
          creators: {
            available: 2,
            collectionURI: 'uri',
            items: [
              { resourceURI: 'uri1', name: 'Creator 1', role: 'Writer' },
              { resourceURI: 'uri2', name: 'Creator 2', role: 'Artist' }
            ]
          },
          dates: [{ type: 'onsaleDate', date: new Date() }]
        },
        {
          id: 2,
          title: 'Series Title 2',
          description: 'Description 2',
          thumbnail: { path: 'path2', extension: 'jpg' },
          pageCount: 200,
          prices: [{ type: 'printPrice', price: 4.99 }],
          creators: {
            available: 2,
            collectionURI: 'uri',
            items: [
              { resourceURI: 'uri2', name: 'Creator 2', role: 'Writer' },
              { resourceURI: 'uri3', name: 'Creator 3', role: 'Artist' }
            ]
          },
          dates: [{ type: 'onsaleDate', date: new Date() }]
        }
      ]
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      // providers: [MarvelService]
    });
    service = TestBed.inject(MarvelService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return series from Http Get call.', () => {
    service.getSeries()
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
          expect(response.length).toBeGreaterThan(1);
        }
      });

      const mockHttp = httpCtrl.expectOne(`${service.url}series?`);
      expect(mockHttp.request.method).toEqual('GET');
      mockHttp.flush(SERIES_RESPONSE);
  });

  it('Should return error message for MarvelService Http request.', () => {
    service.getSeries()
    .subscribe({
        error: (error) => {
          expect(error).toBeTruthy();
          expect(error.status).withContext('status').toEqual(401);
        }
    });

    const mockHttp = httpCtrl.expectOne(`${service.url}series?`);
    const httpRequest = mockHttp.request;

    mockHttp.flush("error request", { status: 401, statusText: 'Unathorized access' });
  });

});
