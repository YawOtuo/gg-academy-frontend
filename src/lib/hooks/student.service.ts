import axios from "axios";
import { url } from "../../../weburl";

class StudentService {
  getAllStudents() {
    return axios.get(`${url}students`);
  }

  getStudentById(id) {
    return axios.get(`${url}students/${id}`);
  }

  async addStudent(body) {
    
    console.log(body)
    const res = await axios.post(`${url}students`, 
      
        body
    );
    return res;
  }

  async updateStudent(id, body) {
    const res = await axios.put(`${url}students/${id}`, 
      body
    );
    return res;
  }

  async deleteStudent(id) {
    const res = await axios.delete(`${url}students/${id}`)
    return res;
  }
}

export default StudentService