class User {
    private _CourseCount:number = 1
    private isActive: boolean = false

    constructor(public name:string, public email:string, public password: number){
        this.name = name;
        this.email = email;
        this.password - password
    }

    get getcoursecount (): number{
        return this._CourseCount
    }

    // when we use setter there is no declare type 
    set courseCount(courseNum: number) {
        if (courseNum <=1){
            throw new Error("Course should be more then 1")
        }
        else {
            this._CourseCount = courseNum
        }
    } 
}

const obj1 = new User('ahmed','ahm@.com', 456)
//obj1.isActive  // not accessable out side the class
export {}