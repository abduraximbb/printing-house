import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './models/client.model';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { UserGuard } from '../common/guards/user.guard';
import { OrdersModule } from '../orders/orders.module';
import { Order } from '../orders/models/order.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Client,Order]),
    JwtModule.register({}),
    MailModule,
  ],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
