import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { RedisContext } from '../context/RedisContext'
import { useLocation } from 'react-router-dom'

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
import { CommandsPerSec } from './Charts/commandsPerSec'

type Props = {}

export default function Dashboard(props: Props): JSX.Element {
  const { user, setUser } = useContext(RedisContext);
  const navigate = useNavigate();
  // console.log(user, 'user in dash')
  const location = useLocation()
  console.log('location in Dashboard', location.state)

  const handleLogout = (path) => {
    // e.preventDefault();
    console.log(user, 'in handleLogout')
    navigate(location.state, { replace: true });
    setUser('');
    navigate(path);
  };

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
              <a 
                href="/"
                onClick={()=>handleLogout('/')}
                style={{ paddingBottom: "0", paddingTop: "0" }}
                >
                  About</a>
            </li>
            <li>
              <a 
                href="/Login"
                onClick={()=>handleLogout('/Login')}
                style={{marginLeft: "1.6em", paddingBottom: "0", paddingTop: "0"}}
                >
                  Sign Out</a>
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
          <GraphDiv>
            <Inner>
              <CommandsPerSec />
              {/* <MetricsTable /> */}
            </Inner>
          </GraphDiv>
        </GraphContainer>
      </DashboardContainer>
    </>
  )
}
