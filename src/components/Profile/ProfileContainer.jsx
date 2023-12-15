import React from 'react';
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        console.log(userId);
        this.props.getProfile(userId);
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

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);









