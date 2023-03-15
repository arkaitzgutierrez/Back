import { Test, TestingModule } from '@nestjs/testing';
import { PosicionesController } from './posiciones.controller';

describe('PosicionesController', () => {
  let controller: PosicionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosicionesController],
    }).compile();

    controller = module.get<PosicionesController>(PosicionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
