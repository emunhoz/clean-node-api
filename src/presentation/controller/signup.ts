export class SignUpController {
  handle (httpRequest: any): any {
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
