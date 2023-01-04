import React from 'react'
//import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'
import {
  ButtonStyle,
  GraphDiv,
  Title,
  ChartWrapper,
  Inner,
  DashboardContainer,
  URLSelector,
  GraphContainer,
  Nav,
  NavBar,
  Elements,
} from '../styles/GlobalStyle'
import RedisForm from './RedisForm'
import { MetricsTable } from './Charts/MetricsTable'
import { LineGraph } from './Charts/LineGraph'
import { ConnectedClients } from './Charts/connectedClients'
import { TotalCommands } from './Charts/totalCommands'
import { EvictedKeys } from './Charts/evictedKeys'
import { GraphCacheHitRatio } from './Charts/graphCacheHitRatio'
import { TableCacheHitRatio } from './Charts/tableCacheHitRatio'

type Props = {}

export default function Dashboard(props: Props): JSX.Element {
  return (
    <>
    <NavBar>
      <Title> RediScope </Title>
      <Nav>
        <Elements>
          <li><a href='/'>About</a></li>
          <li><a href='/Login'>Sign Out</a></li>
        </Elements>
      </Nav>
    </NavBar>
    <DashboardContainer>
      <URLSelector>
        <RedisForm />
      </URLSelector>
      <GraphContainer>
        <GraphDiv>
          <Inner>
            <LineGraph />
            {/* <BarChart /> */}
          </Inner>
        </GraphDiv>
        <GraphDiv>
          <Inner>
          <ConnectedClients />
          {/* <PieChart /> */}
          </Inner>
        </GraphDiv>
        <GraphDiv>
          <Inner>
          <TotalCommands />
            {/* <MetricsTable /> */}
            </Inner>
      </GraphDiv>
      <GraphDiv>
        <Inner>
          <EvictedKeys />
            {/* <MetricsTable /> */}
            </Inner>
      </GraphDiv>
      <GraphDiv>
        <Inner>
          <GraphCacheHitRatio />
            {/* <MetricsTable /> */}
            </Inner>
            <Inner>
              <TableCacheHitRatio />
            </Inner>
      </GraphDiv>
    </GraphContainer>
  </DashboardContainer>
  </>
  )
}

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161
