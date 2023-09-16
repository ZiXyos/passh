import {
  AuthenticatedResDto,
  SigninReqDto,
  SignupReqDto,
} from "../dto/user.dto";
import { HttpClient } from "../http-client";

export class AuthResource {
  public static baseEp = "/api/v1/auth";

  constructor(private readonly httpClient: HttpClient) {}

  async signupWithPassword(parameters: SignupReqDto) {
    const response = await this.httpClient.post<AuthenticatedResDto>({
      endPoint: `${AuthResource.baseEp}/signup`,
      options: {
        body: { ...parameters },
      },
    });

    return {
      data: response,
    };
  }

  async loginWithPassword(parameters: SigninReqDto) {
    const response = await this.httpClient.post<AuthenticatedResDto>({
      endPoint: `${AuthResource.baseEp}/login`,
      options: {
        body: { ...parameters },
      },
    });

    return {
      data: response,
    };
  }
}
