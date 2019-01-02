/**
 * Created by Cn on 2018/10/18.
 */
import { connect } from 'react-redux'
import Login from '../components/login'
import {checkLogin} from '../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (params) => {
            dispatch(checkLogin(params))
        }
    }
}

const LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginForm