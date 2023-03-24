import React from 'react'

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
  UpperLogo,
} from '../styles/GlobalStyle'
import RedisForm from './RedisForm'
import { MemoryUsage } from './Charts/MemoryUsage'
import { ConnectedClients } from './Charts/connectedClients'
import { TotalCommands } from './Charts/totalCommands'
import { EvictedKeys } from './Charts/evictedKeys'
import { GraphCacheHitRatio } from './Charts/graphCacheHitRatio'

type Props = {}

export default function Dashboard(props: Props): JSX.Element {
  return (
    <>
      <NavBar>
        <a href="/">
          <UpperLogo
            src={
              'https://github.com/oslabs-beta/RediScope/raw/routing-images/src/components/images/RediScope%205.png'
            }
          ></UpperLogo>
        </a>
        <Nav>
          <Elements>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/Login" style={{paddingLeft: "1.6em"}}>Sign Out</a>
            </li>
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
              <MemoryUsage />
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
          </GraphDiv>
        </GraphContainer>
      </DashboardContainer>
    </>
  )
}
