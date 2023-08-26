// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  MinLength,
  MaxLength,
} from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'This field is required ' })
  @MinLength(3, { message: 'username must be equal to greater than 3 ' })
  @MaxLength(15, { message: 'username must be equal to smaller than 15' })
  username: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'This field is required ' })
  @IsEmail()
  email: string;

  @Prop({ required: true, unique: true })
  @IsNotEmpty({ message: 'This field is required ' })
  @IsPhoneNumber()
  @MinLength(10)
  @MaxLength(12)
  phone: number;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'This field is required ' })
  @MaxLength(15)
  @MinLength(8)
  password: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: 'This field is required ' })
  @MaxLength(15)
  @MinLength(8)
  confirmpassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
