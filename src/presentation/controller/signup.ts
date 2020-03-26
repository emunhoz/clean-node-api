import { HttpResponse, HttpRequest, Controller, EmailValidator } from '../protocols'
import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      const { body: { email, password, passwordConfirmation } } = httpRequest

      for (const field of requiredFields) {
        if (httpRequest.body[field] === undefined) return badRequest(new MissingParamError(field))
      }

      const isValid = this.emailValidator.isValid(email)

      if (!isValid) return badRequest(new InvalidParamError('email'))

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
    } catch (err) {
      return serverError()
    }
  }
}
