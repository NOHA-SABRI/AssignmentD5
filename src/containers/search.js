import { useRef } from 'react'
import { getStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getStudents}) => {
    const name = useRef()
    const searchByName = () => {
        console.log(name.current.value)
        getStudents(name.current.value)
    }
    return <div className="col text-center">
        <div className="form-group">
            <input ref={name} className="form-control rounded-pill text-center  " type="text" placeholder="Enter Student Name" />
        </div>
        <div className="form-group">
            <input className="btn btn-success w-25" type="button" value="search"
                onClick={searchByName} />
        </div>
    </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)

