let students=[
                {id:1,name:"Nguyễn Đức Toàn",age:18,gpa:9.0,status:"active"},
                {id:2,name:"Nguyễn Thế Hiếu",age:18,gpa:7.9,status:"inactive"},
                {id:3,name:"Phạm Tấn Dũng",age:18,gpa:8.5,status:"active"},
                {id:4,name:"Phạm Hồng Phong",age:18,gpa:7.2,status:"inactive"},
                {id:5,name:"Cao Nguyễn Anh Dương",age:18,gpa:8.0,status:"active"}
            ];
            let nextId=6;
            function inforStudent(student){
                return `ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}`;
            }
            while(true){
                let choice=Number(prompt(
                    "===== STUDENT MANAGEMENT SYSTEM =====\n"+
                    "1. Create Student\n"+
                    "2. Read All Students\n"+
                    "3. Filter Scholarship Candidates (GPA > 8.0)\n"+
                    "4. Update Student Profile\n"+
                    "5. Delete Record\n"+
                    "6. Compliance Verification\n"+
                    "7. Academic Statistics\n"+
                    "8. Data Normalization\n"+
                    "0. Exit\n"+
                    "=====================================\n"+
                    "Enter your choice:"
                ));
                switch(choice){
                    case 1:{
                        let name=prompt("Enter student name:");
                        if(!name||name.trim()===""){
                            alert("Name cannot be empty!");
                            break;
                        }
                        let age=parseInt(prompt("Enter age:"));
                        if(isNaN(age)||age<=0){
                            alert("Invalid age!");
                            break;
                        }
                        let gpa=parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
                        if(isNaN(gpa)||gpa<0||gpa>10){
                            alert("Invalid GPA!");
                            break;
                        }
                        let status=prompt("Enter status (active/inactive):").trim().toLowerCase();
                        if(status!=="active"&&status!=="inactive"){
                            alert('Status must be "active" or "inactive"!');
                            break;
                        }
                        let newStudent={
                            id:nextId++,
                            name:name,
                            age:age,
                            gpa:gpa,
                            status:status
                        }
                        students.push(newStudent);
                        alert(`Student created successfully!\n${inforStudent(newStudent)}`)
                        break;
                    }
                    case 2:{
                        let output="===== ALL STUDENTS =====\n";
                        output+="------------------------------------------------------------\n";
                        students.forEach(student=>{
                            output+=`ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}\n`;
                        });
                        output+="------------------------------------------------------------\n";
                        output+=`Total: ${students.length} student(s)`;
                        alert(output);
                        break;
                    }
                    case 3:{
                        let candidate=students.filter(student=>student.gpa>8.0);
                        let output="===== SCHOLARSHIP CANDIDATES (GPA > 8.0) =====\n";
                        output+="------------------------------------------------------------\n";
                        candidate.forEach(student=>{
                            output+=`ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}\n`;
                        });
                        output+="------------------------------------------------------------\n";
                        output+=`Total: ${candidate.length} student(s)`;
                        alert(output);
                        break;
                    }
                    case 4:{
                        let updateId=Number(prompt("Enter student ID to update:"));
                        let updateStudent=students.find(student=>student.id===updateId);
                        if(!updateStudent){
                            alert(`No student found with ID: ${updateId}`);
                            break;
                        }
                        alert(`Found:\n${inforStudent(updateStudent)}\n\nLeave blank to keep current value.`);
                        let newName=prompt(`New name (current: ${updateStudent.name}):`);
                        let newGpa=prompt(`New GPA (current: ${updateStudent.gpa}):`);
                        if(newName&&newName.trim()!==""){
                            updateStudent.name=newName.trim();
                        }
                        if(newGpa!==null&&newGpa.trim()!==""){
                            let floatGpa=parseFloat(newGpa);
                            if(!isNaN(floatGpa)&&floatGpa>=0&&floatGpa<=10){
                                updateStudent.gpa=floatGpa;
                            }else{
                                alert("Invalid GPA value. GPA not updated.");
                            }
                        }
                        alert(`Student updated successfully!\n${inforStudent(updateStudent)}`);
                        break;
                    }
                    case 5:{
                        let delId=Number(prompt("Enter student ID to delete:"));
                        let delStudent=students.find(student=>student.id===delId);
                        if(!delStudent){
                            alert(`No student found with ID: ${delId}`);
                            break;
                        }
                        let notice=prompt(`Are you sure you want to delete?\n${inforStudent(delStudent)}\n\nType "yes" to confirm:`);
                        if(notice&&notice.trim().toLowerCase()==="yes"){
                            students=students.filter(student=>student.id!==delId);
                            alert(`Student "${delStudent.name}" has been deleted.`);
                        }else{
                            alert("Deletion cancelled.");
                        }
                        break;
                    }
                    case 6:{
                        let under18=students.some(student=>student.age<18);
                        let allActive=students.every(student=>student.status==="active");
                        let output="===== COMPLIANCE VERIFICATION =====\n";
                        output+=`\nHas at least one student under 18: ${under18?"YES":"NO"}`;
                        if(under18){
                            let minor=students.filter(student=>student.age<18);
                            output+="\n  Minors found:";
                            minor.forEach(student=>{
                                output+=`\n  → ${student.name} (Age: ${student.age})`;
                            });
                        }
                        output+=`\n\nAll students have "active" status: ${allActive?"YES":"NO"}`;
                        if(!allActive){
                            let inactive=students.filter(student=>student.status==="inactive");
                            output+=`\n  Inactive students:`
                            inactive.forEach(student=>{
                                output+=`\n  → ${student.name} (Status: ${student.status})`;
                            });
                        }
                        alert(output);
                        break;
                    }
                    case 7:{
                        if(students.length===0){
                            alert("No students available.");
                            break;
                        }
                        let totalGpa=students.reduce((sum,student)=>sum+student.gpa,0).toFixed(2);
                        let averageGpa=(totalGpa/students.length).toFixed(2);
                        let highestGpa=students.reduce((max,student)=>(student.gpa>max.gpa?student:max),students[0]);
                        let lowestGpa=students.reduce((min,student)=>(student.gpa<min.gpa?student:min),students[0]);
                        let output="===== ACADEMIC STATISTICS =====\n";
                        output+=`\nTotal students   : ${students.length}`;
                        output+=`\nTotal GPA sum    : ${totalGpa}`;
                        output+=`\nAverage GPA      : ${averageGpa}`;
                        output+=`\n\nHighest GPA: ${highestGpa.name} (${highestGpa.gpa})`;
                        output+=`\nLowest GPA : ${lowestGpa.name} (${lowestGpa.gpa})`;
                        alert(output);
                        break;
                    }
                    case 8:{
                        let upperName=students.map(student=>({
                            ...student,
                            name: student.name.toUpperCase()
                        }));
                        let output="===== NORMALIZED DATA (UPPERCASE NAMES) =====";
                        output+="------------------------------------------------------------\n";
                        upperName.forEach(student=>{
                            output+=inforStudent(student)+"\n"
                        })
                        output+="------------------------------------------------------------\n";
                        output+=`Total: ${upperName.length} student(s)`;
                        alert(output);
                        break;
                    }
                    case 0:
                        alert("Goodbye! Thank you for using Student Management System.");
                        break;
                    default:
                        alert("Invalid choice! Please enter a number from 0 to 8.");
                }
                if(choice===0){
                    break;
                }
            }