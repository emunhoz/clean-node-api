import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) return badRequest(new MissingParamError('name'))
    if (httpRequest.body.email === undefined) return badRequest(new MissingParamError('email'))
  }
}
