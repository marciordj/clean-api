// interface IRequest {
//   body: {
//     name: any
//     email: any
//     password: any
//     passwordConfirmation: any
//   }
// }

// interface IResponse {
//   statusCode: number
//   body: any
// }

export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
