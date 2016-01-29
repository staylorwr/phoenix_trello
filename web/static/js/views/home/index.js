import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { setDocumentTitle } from '../../utils';


class HomeIndexView extends React.Component {

};

const mapStateToProps = (state) => (
  state.boards
);

export default connect(mapStateToProps)(HomeIndexView);