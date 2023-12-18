import React from 'react';
import Profile from "./Profile";
import {getProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import withRouter from './withRouter';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);









