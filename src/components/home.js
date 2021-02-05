import StudentList from '../containers/student-list'
import Search from '../containers/search'
const Home = ({history})=>{
   
    return <div>
      
        <br/>
        <Search/>
        <StudentList history={history}/>
    </div>

}

export default Home