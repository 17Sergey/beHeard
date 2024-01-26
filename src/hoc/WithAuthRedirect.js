import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let WithAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        // URL changes when user is clicked on "Users" page
        let userId = props.router?.params.userId;
        if (!props.isAuth && !userId) return <Navigate to="/login" />
        return <Component {...props} />
    }
    
    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default WithAuthRedirect;