import React from 'react'
//import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'
import {
  ButtonStyle,
  Wrapper,
  Title,
  ChartWrapper,
  Inner,
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
      <div>
        <h2> Welcome </h2>
        <RedisForm />
      </div>
      <h1>Metric Dashboard</h1>

      <Wrapper>
        <Inner>
          <LineGraph />
          {/* <BarChart /> */}
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
        <ConnectedClients />
        {/* <PieChart /> */}
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
        <TotalCommands />
          {/* <MetricsTable /> */}
          </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <EvictedKeys />
            {/* <MetricsTable /> */}
            </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <GraphCacheHitRatio />
          
            {/* <MetricsTable /> */}
            </Inner>
            <Inner>
              <TableCacheHitRatio />
            </Inner>
      </Wrapper>
    </>
  )
}

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161
