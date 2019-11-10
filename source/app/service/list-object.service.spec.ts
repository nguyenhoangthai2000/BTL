import { TestBed } from '@angular/core/testing';

import { ListObjectService } from './list-object.service';

describe('ListObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListObjectService = TestBed.get(ListObjectService);
    expect(service).toBeTruthy();
  });
});
