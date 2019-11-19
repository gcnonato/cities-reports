import React from 'react';
import { Row, Col, Card, CardBody } from 'shards-react';
// import styled from 'styled-components';

import { DataProvider } from '../DataContext';
import { DisplayTotalAlerts } from './DisplayTotalAlerts';
import { DayOfWeekChart } from './DayOfWeekChart';
import { HourOfDayChart } from './HourOfDayChart';
import { InteractionLineChart } from './InteractionLineChart';

// const Div = styled.div`
//   padding: 1rem;
//   margin-top: 2rem;
// `;

export default () => {
  return (
    <DataProvider>
      <Row className="mb-3">
        <Col md={2} sm={4}>
          <DisplayTotalAlerts />
        </Col>
        <Col md={4} sm={8}>
          <DayOfWeekChart />
        </Col>
        <Col md={6} sm={12}>
          <HourOfDayChart />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={8} sm={12}>
          <InteractionLineChart />
        </Col>
      </Row>
      {/* <Row>
        <Col md={7}>
          <Row>
            <Col md={12}>
              <MoveChart />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <GainOrLossChart />
            </Col>
            <Col md={6}>
              <FluctuationChart />
            </Col>

            <Col md={6}>
              <QuarterChart />
            </Col>
            <Col md={6} />
          </Row>
        </Col>
        <Col
          md={5}
          style={{ overflowY: 'scroll', maxHeight: '70vh', width: '100%' }}
        >
          <DataTable />
        </Col>
      </Row> */}
    </DataProvider>
  );
};