import React from 'react';
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        console.log(userId);
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }
    render() {
        return (
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);









