import React from 'react'

import {
  Wrapper,
  Inner,
} from '../styles/GlobalStyle'
import RedisForm from './RedisForm'
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
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <ConnectedClients />
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <TotalCommands />
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <EvictedKeys />
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <GraphCacheHitRatio />

        </Inner>
        <Inner>
          <TableCacheHitRatio />
        </Inner>
      </Wrapper>
    </>
  )
}


