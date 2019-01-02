import { connect } from 'react-redux'
import PlateOne from '../components/plate'
import {getPlate} from '../actions'

const mapStateToProps = state => {
    return {
        plate: state.plate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPlate: (params) => {
            dispatch(getPlate(params))
        }
    }
}

const Plate = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlateOne)

export default Plate