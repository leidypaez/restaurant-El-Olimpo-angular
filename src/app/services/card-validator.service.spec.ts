import { TestBed } from '@angular/core/testing';

import { CardValidatorService } from './card-validator.service';

describe('CardValidatorService', () => {
  let service: CardValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
