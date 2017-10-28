import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {
  search
} from '../../modules/search'


class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.isResult)
    }

    render() {
        return (
            <div>
                <div>Home</div>
                <h3>value: { this.props.isResult }</h3>
                <p><button onClick={() => this.props.search()}>Search</button></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
         isResult: state.search.isResult 
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    search,
    changePage: () => push('/result')
  }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)