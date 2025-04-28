const Course = (props) => {
    const { course } = props
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={total} />
      </div>
    )
}
  
const Header = (props) => <h2>{props.course}</h2>
  
const Content = (props) => (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
)
  
const Part = (props) => {
    return (
        <div>{props.part.name} {props.part.exercises}</div>
    )
}
  
const Total = (props) => <h4>total of {props.total} exercises</h4>

export default Course