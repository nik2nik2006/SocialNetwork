import React from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withNavigate} from "../../hoc/withNavigate";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshProfile()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if (prevProps.params.userId !== this.props.params.userId) {
            this.refreshProfile()
        }
    };

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withNavigate,
    withAuthRedirect
)(ProfileContainer);









