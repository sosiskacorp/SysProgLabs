type User = {
    id: string;
    name: string;
  };
  
  type Course = {
    id: number;
    title: string;
  };
  
  type WithRate = {
    rate: 1 | 2 | 3 | 4 | 5;
  };
  
  type WithStudentRole = {
    role: 'student';
  };
  
  type WithTeacherRole = {
    role: 'teacher';
  };
  
  type WithLevel = {
    level: 'junior' | 'middle' | 'senior';
  };
  
  type StudentCourse = Course & WithStudentRole & WithRate & WithLevel;
  type Student = User & { courses: { [id: number]: StudentCourse } };
  
  type TeacherCourse = Course & WithTeacherRole;
  type Teacher = User & WithLevel & { courses: { [id: number]: TeacherCourse } };
  
  type Director = User & {
    students: { [id: string]: Student };
    teachers: { [id: string]: Teacher & WithRate };
  };