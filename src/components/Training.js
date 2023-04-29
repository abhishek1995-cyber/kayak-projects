import CourseCard from "./CourseCard"

export default function Training(){
    return (
        <div className="container padding training">
        <div>
            <h2>Training Courses</h2>
            <div className="course-year">
                <p>
                    Monthly
                </p>
                <button className="btn">
                    Yearly
                </button>
            </div>
        </div>
        <CourseCard />
        </div>
    )
}