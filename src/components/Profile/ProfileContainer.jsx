import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        console.log(userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).
        then(response => {
            this.props.setUserProfile(response.data);
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









