import { HttpResponse, HttpRequest } from '../protocols/https'

export class SignUpController {
  handle (httpRequest: HttpResponse): HttpRequest {
    const handleName: any = {
      statusCode: 400,
      body: new Error('Missing error param: name')
    }

    const handleEmail: any = {
      statusCode: 400,
      body: new Error('Missing error param: email')
    }

    if (httpRequest.body.name === undefined) return handleName
    if (httpRequest.body.email === undefined) return handleEmail
  }
}
