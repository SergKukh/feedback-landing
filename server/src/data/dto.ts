import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class CreateFeedbackDto {
    @IsNotEmpty({ message: 'empty' })
    @IsString({ message: 'should be a string' })
    readonly name: string;

    @IsNotEmpty({ message: 'empty' })
    @IsEmail()
    readonly email: string;

    @IsNotEmpty({ message: 'empty' })
    @IsString({ message: 'should be a string' })
    readonly message: string;
}