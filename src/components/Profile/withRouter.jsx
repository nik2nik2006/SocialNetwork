import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />
};
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
//
// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component {...props} router={{ location, navigate, params }} />
//         );
//     }
//     return ComponentWithRouterProp;
// }



export default withRouter;