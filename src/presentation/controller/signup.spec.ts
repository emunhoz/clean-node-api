import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SignUpController => new SignUpController()

describe('Signup Controller', () => {
  test('return 400 when name is missing', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        email: 'johndoe@mail.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('return 400 when email is missing', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'John Doe',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('return 400 when password is missing', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        passwordConfirmation: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('return 400 when password confirmation is missing', () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'John Doe',
        email: 'johndoe@mail.com',
        password: '123456'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
