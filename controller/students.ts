import { Student } from "../models/student"
import { ServerError } from "../errors/server";

export class StudentController {
  public list(): Promise<Array<Student>> | ServerError {
    return new Promise((resolve, reject) => {
      resolve([{ 
        name: 'pol' 
      }])
    })
  }
}