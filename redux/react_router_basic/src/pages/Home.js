import React from 'react';
import {connect} from 'react-redux';

const Home = ({grettings}) => {
    return (
        <div>
            <div>Home</div>
            <div>{grettings}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({grettings: state.grettings});

export default connect(mapStateToProps)(Home);