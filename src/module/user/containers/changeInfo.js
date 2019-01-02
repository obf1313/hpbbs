/**
 * Created by Cn on 2018/10/18.
 */
import { connect } from 'react-redux'
import ChangeInfo from '../components/changeInfo'
import {changeInfo} from '../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeInfo: (params) => {
            dispatch(changeInfo(params))
        }
    }
}

const ChangeInfoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChangeInfo)

export default ChangeInfoForm