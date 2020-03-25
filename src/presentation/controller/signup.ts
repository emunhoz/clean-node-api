import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const handleName: any = {
      statusCode: 400,
      body: new MissingParamError('name')
    }

    const handleEmail: any = {
      statusCode: 400,
      body: new MissingParamError('email')
    }

    if (httpRequest.body.name === undefined) return handleName
    if (httpRequest.body.email === undefined) return handleEmail
  }
}
