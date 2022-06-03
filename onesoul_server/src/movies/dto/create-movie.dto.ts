import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  //https://github.com/typestack/class-validator 참고
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true }) //배열이라 하나하나씩 검사한다는 뜻 each: true
  readonly genres: string[];
}
