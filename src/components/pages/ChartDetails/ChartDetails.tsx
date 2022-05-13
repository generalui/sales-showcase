import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'

import { Page } from 'partials/Page'

import { CustomText } from 'common/CustomText'

import { Container, DetailsContainer, Separator, Title } from './styled'

export const ChartDetails = () => (
  <Page>
    <Container>
      <Title>Mempool Transaction Count</Title>
      <DetailsContainer>
        <CustomText>
          The mempool is where all valid transactions wait to be confirmed by the Bitcoin network. A
          high number of transactions in the mempool indicates a congested traffic which will result
          in longer average confirmation time and higher priority fees. The mempool count metric
          tells how many transactions are causing the congestion whereas the Mempool Size (Bytes)
          chart is a better metric to estimate how long the congestion will last.
        </CustomText>
      </DetailsContainer>
      <Title>Market Price</Title>
      <DetailsContainer>
        <CustomText>
          The market price is how much you can sell 1 Bitcoin (BTC) for. The supply of BTC is
          limited and pre-defined in the Bitcoin protocol. This means that the price is sensitive to
          shifts in both supply and demand. In total, 21 Millions BTC can be mined and the Total
          Circulating Bitcoin chart displays how many of them have already been found.
        </CustomText>
      </DetailsContainer>
      <Title>Market Capitalization</Title>
      <DetailsContainer>
        <CustomText>
          The total USD value of all coins in circulation for a given currency. The three currencies
          with the largest market capitalization are shown whereas the total market capitalization
          is calculated on the top ~250 coins (greatest to least capitalization).
        </CustomText>
      </DetailsContainer>
      <Title>Hashrate Distribution</Title>
      <DetailsContainer>
        <CustomText>
          A mining pool is a group of miners who share their computing power over a network and get
          rewarded based on the amount of power each contributes as opposed to whether or not the
          pool finds a block. Mining pools help make revenue for miners more predictable. Huge drops
          in weekly numbers could highlight that some mining pools are either being turned off or
          they have decided to mine other currencies. If a mining pool were to control more than
          half of the total hashrate, it could (while unlikely) lead to a 51% attack on the network.
        </CustomText>
      </DetailsContainer>
      <Separator />
      <CustomText>Source: Blockchain.com</CustomText>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Container>
  </Page>
)
