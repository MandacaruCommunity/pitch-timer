import React from 'react';
import {Container, Jumbotron} from 'reactstrap';
import PropTypes from 'prop-types';

const Info = props => {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container fluid>
          <div className="d-flex">
            <div className="justify-content-start">
              <h1 className="display-3">{props.title}</h1>
              <p className="lead">
                {props.lead}
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
};

export default Info;
