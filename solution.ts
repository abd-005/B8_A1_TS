const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier){
        return value * multiplier;
        
    } else if(multiplier === 0 ) {
        return value * multiplier;
    } else{
        
        return value * 2;
    }
}


const processInput = (x : string | number | boolean): string | number | boolean => {
    if(typeof x === "string"){
        return x.trim().toLowerCase();
    } else if(typeof x === "number"){
        return x * 10;
    } else{
        if(x === true){
            return "Active";
        } else {
            return "Inactive";
        }
    }
}


const formatCoordinate = (tuple: readonly [number, number, string]): string => {
    if(tuple[0]>0 && tuple[1]>0){
       return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`; 
    }else{
        return "Latitude & Longitude must be a positive number!"
    }
}


const concatenateArrays = <T> (...arrays: T[][]): Array<T> => {
    return arrays.flat();
}


interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const result = (courses.filter((course)=> course.students >= minStudents && course.isPublished === true));
    return result;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const result = items.map((item)=>{
        return item[key]
    })
    return result
}


class Employee {

    constructor (protected name: string, private baseSalary: number) {}

    getDetails(): string {
            return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
        }    
}
    
class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string ){
        super(name, baseSalary)

    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
} 


const validateAgeAsync = async(age: number): Promise<string | undefined> => {
        try {
            if(age <= 0){
                throw new Error("Access Denied: Age must be a positive value!"); 
            } else if(age < 18){
                throw new Error("Access Denied: Must be 18 or older"); 
            } 
            
            const result =  new Promise<string>((resolve)=>{
    
                setTimeout(() => { 
                        const res = "Access Granted";
                        resolve(res);
                    }, 1000);
            })
            
            return result;
            
        } catch (error) {
            if(error instanceof Error){
                return error.toString();
            }
        }
    } 