const express = require('express');
const app = express();


app.use(express.json());

const students = [
    { id: 1, name: "node", age: 18 },
    { id: 2, name: "express", age: 19 },
    { id: 3, name: "javascript", age: 20 }
];


// Check condition 
// if ไม่ใส่ ชื่อ หรือ อายุ ให้ส่ง status 400, ส่งข้อความกลับไป Invalid data 
const validateStudent = (req, res, next) => {
    const { name, age } = req.body; 
    if (!name || !age) {
        return res.status(400).send("Invalid data")
    }
    next();
}

// Get All Students
app.get('/api/students', (req, res) => {
    res.send(students)
})

// Get Someone Student
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);
    if (student) {
        res.send(student);
    } else {
        res.status(404).send("Error 404: Student not found")
    }
})

// Post ` เพิ่ม นร. ใหม่ `
app.post('/api/students', validateStudent  ,(req, res) => {
    const newStudent = {
            id: students.length + 1,
            name: req.body.name,
            age: req.body.age
    }; 
    students.push(newStudent);
    res.status(201).send(students);
})

// Update เปลี่ยนแปลงค่า นร.
app.put('/api/students/:id', (req, res ) => {
    const id = parseInt(req.params.id);

    const updateStudent = students.find(s => s.id === id);
    if (updateStudent) {
        res.send(updateStudent);
    } else {
        res.status(404).send("Error 404: Student not found");
    }

    updateStudent.name = req.body.name;
    updateStudent.age = req.body.age;

    res.json(students);
})

// Delete ลบ นร.
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex === -1) {
        res.status(404).send("Error 404: Student not found");
    } else {
        res.status(200);
    }

    const deleteStudent = students.splice(studentIndex, 1);
    res.json(deleteStudent[0]);
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

