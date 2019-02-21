import { TestBed } from '@angular/core/testing';

import { TaskRestMockService } from './task-rest-mock.service';

describe('TaskRestMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskRestMockService = TestBed.get(TaskRestMockService);
    expect(service).toBeTruthy();
  });
});
