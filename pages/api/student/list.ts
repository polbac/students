import { StudentController } from "../../../controller/students"

const student = new StudentController()

export default async (req, res) => {

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  try {
    const list = await student.list()
    res.end(JSON.stringify(list))
  } catch(err) {
    console.log(err)
    res.end('error')
  }
  }