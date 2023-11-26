//@ts-nocheck
import { plainToInstance, Type } from 'class-transformer';
import { apiEnv, IApiEnv } from '../../apps/api/src/environments/environment';
import { IsNotEmpty, validateSync } from 'class-validator';
import { IsBoolean, IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator';
import 'reflect-metadata';

export class ApiEnvVo implements IApiEnv {
  @IsBoolean()
  public isProd: boolean;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvCookieVo)
  public cookie: ApiEnvCookieVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvWebVo)
  public web: ApiEnvWebVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  public db: ApiEnvDbVo;

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  public api: ApiEnvApiVo;
}

class ApiEnvCookieVo {
  @IsNotEmpty()
  @IsNumber()
  public cookie_expires: number;

  @IsNotEmpty()
  @IsString()
  public cookie_secret: string;
}

class ApiEnvWebVo {
  @IsNotEmpty()
  @IsString()
  public host: string;
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string;
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number;
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, apiEnv);
const errors = validateSync(apiEnvVoInstance);

if (errors.length) {
  console.error(errors);
  process.exit(1);
}
