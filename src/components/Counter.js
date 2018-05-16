import React, {Component} from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import {Container, Button, ButtonGroup, Fade, Row, Col} from 'reactstrap';

class Counter extends Component {
  constructor (props) {
    super (props);
    this.state = {
      seconds: 0,
      paused: true,
      pausedText: '⏸',
      fadeIn: false,
    };
  }

  pitchTimer (event) {
    this.setState ({seconds: 181, fadeIn: false});
  }

  judgeTimer (event) {
    this.setState ({seconds: 121, fadeIn: false});
  }

  startTimer (event) {
    this.setState ({paused: !this.state.paused});
  }

  onStop (event) {
    this.setState ({fadeIn: !this.state.fadeIn});
  }
  render () {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h1>Setup</h1>
              <ButtonGroup>
                <Button color="primary" onClick={e => this.pitchTimer (e)}>
                  Pitch Timer
                </Button>
                <Button color="warning" onClick={e => this.judgeTimer (e)}>
                  Judges Timer
                </Button>
                <Button color="success" onClick={e => this.startTimer (e)}>
                  {this.state.paused ? 'Start' : 'Pause'}
                </Button>
              </ButtonGroup>
              <div className="mt-3">
                <Fade in={this.state.fadeIn} tag="h1">
                  Acabou!!!!!!!!!! 👏👏👏
                </Fade>
              </div>
            </Col>
            <Col>
              <ReactCountdownClock
                seconds={this.state.seconds}
                color="#000"
                alpha={0.9}
                size={300}
                paused={this.state.paused}
                pausedText={this.state.pausedText}
                onComplete={e => this.onStop (e)}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Counter;
