import React from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withNavigate} from "../../hoc/withNavigate";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            // debugger
            // if (!userId) {
            //     this.props.navigate("/login")
            // }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withNavigate,
    withAuthRedirect
)(ProfileContainer);









