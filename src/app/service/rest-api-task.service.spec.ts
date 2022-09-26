import { TestBed } from '@angular/core/testing';

import { RestApiTaskService } from './rest-api-task.service';

describe('RestApiTaskService', () => {
  let service: RestApiTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
