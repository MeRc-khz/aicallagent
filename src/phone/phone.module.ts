import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Module({
  providers: [PhoneService]
})
export class PhoneModule {}
