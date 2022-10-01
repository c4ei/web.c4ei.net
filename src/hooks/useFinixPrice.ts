import BigNumber from 'bignumber.js'
import { useState, useEffect } from 'react'
import { useActiveWeb3React } from './index'
import multicall from '../utils/multicall'
import {
  multicallAdress,
  FST_INV_LP,
  FST_BUSD_LP,
  FST_BNB_LP,
  INV_BUSD_LP,
  PANCAKE_BNB_BUSD_LP,
  FST_ADDRESS,
  INV_ADDRESS,
  WBNB_ADDRESS,
  BUSD_ADDRESS,
  HERODOTUS_ADDRESS,
  PANCAKE_MASTER_CHEF_ADDRESS
} from '../constants'
import erc20 from '../constants/abis/erc20.json'

const getTotalBalanceLp = async (input) => {
  const { lpAddress, pair1, pair2, masterChefAddress, multicallAddress } = input
  let pair1Amount = 0
  let pair2Amount = 0
  try {
    const calls = [
      {
        address: pair1,
        name: 'balanceOf',
        params: [lpAddress]
      },
      {
        address: pair2,
        name: 'balanceOf',
        params: [lpAddress]
      },
      {
        address: pair1,
        name: 'decimals'
      },
      {
        address: pair2,
        name: 'decimals'
      }
    ]

    const [pair1BalanceLP, pair2BalanceLP, pair1Decimals, pair2Decimals] = await multicall(
      multicallAddress,
      erc20,
      calls
    )

    pair1Amount = new BigNumber(pair1BalanceLP).div(new BigNumber(10).pow(pair1Decimals)).toNumber()
    pair2Amount = new BigNumber(pair2BalanceLP).div(new BigNumber(10).pow(pair2Decimals)).toNumber()
  } catch (error) {
    console.log(error)
  }
  return [pair1Amount, pair2Amount]
}

export default function useFinixPrice(): number {
  const [currentPrice, setCurrentPrice] = useState(0)
  const { account, chainId = process.env.REACT_APP_CHAIN_ID || '' } = useActiveWeb3React()
  // const multicallContractAddress = multicallAdress[chainId || process.env.REACT_APP_CHAIN_ID || '56']
  const multicallContractAddress = multicallAdress[chainId || process.env.REACT_APP_CHAIN_ID || '21004']
  useEffect(() => {
    console.log(account)
    const fetchPromise = [
      getTotalBalanceLp({
        lpAddress: FST_INV_LP[chainId],
        pair1: FST_ADDRESS[chainId],
        pair2: INV_ADDRESS[chainId],
        masterChefAddress: HERODOTUS_ADDRESS[chainId],
        multicallAddress: multicallContractAddress
      }),
      getTotalBalanceLp({
        lpAddress: FST_BUSD_LP[chainId],
        pair1: FST_ADDRESS[chainId],
        pair2: BUSD_ADDRESS[chainId],
        masterChefAddress: HERODOTUS_ADDRESS[chainId],
        multicallAddress: multicallContractAddress
      }),
      getTotalBalanceLp({
        lpAddress: FST_BNB_LP[chainId],
        pair1: FST_ADDRESS[chainId],
        pair2: WBNB_ADDRESS[chainId],
        masterChefAddress: HERODOTUS_ADDRESS[chainId],
        multicallAddress: multicallContractAddress
      }),
      getTotalBalanceLp({
        lpAddress: INV_BUSD_LP[chainId],
        pair1: INV_ADDRESS[chainId],
        pair2: BUSD_ADDRESS[chainId],
        masterChefAddress: HERODOTUS_ADDRESS[chainId],
        multicallAddress: multicallContractAddress
      }),
      getTotalBalanceLp({
        lpAddress: PANCAKE_BNB_BUSD_LP[chainId],
        pair1: WBNB_ADDRESS[chainId],
        pair2: BUSD_ADDRESS[chainId],
        masterChefAddress: PANCAKE_MASTER_CHEF_ADDRESS[chainId],
        multicallAddress: multicallContractAddress
      })
    ]
    Promise.all(fetchPromise).then(response => {
      const [
        [totalFinixDefinixFinixSixPair, totalSixDefinixFinixSixPair],
        [totalFinixDefinixFinixBusdPair, totalBusdDefinixFinixBusdPair],
        [totalFinixDefinixFinixBnbPair, totalBnbDefinixFinixBnbPair],
        [totalSixDefinixSixBusdPair, totalBnbDefinixSixBusdPair],
        [totalBnbInDefinixBnbBusdPair, totalBusdInDefinixBnbBusdPair]
      ] = response
      // const totalFinixDefinixFinixSixPair = 10000000.0
      // const totalSixDefinixFinixSixPair = 12820512.82
      const finixSixRatio = totalSixDefinixFinixSixPair / totalFinixDefinixFinixSixPair || 0
      // FST-BUSD
      // const totalFinixDefinixFinixBusdPair = 10000000.0
      // const totalBusdDefinixFinixBusdPair = 500000.0
      const finixBusdRatio = totalBusdDefinixFinixBusdPair / totalFinixDefinixFinixBusdPair || 0
      // FST-BNB
      // const totalFinixDefinixFinixBnbPair = 10000000.0
      // const totalBnbDefinixFinixBnbPair = 1824.82
      const finixBnbRatio = totalBnbDefinixFinixBnbPair / totalFinixDefinixFinixBnbPair || 0
      // INV-BUSD
      // const totalSixDefinixSixBusdPair = 12820512.82
      // const totalBnbDefinixSixBusdPair = 500000.0
      const sixBusdRatio = totalBnbDefinixSixBusdPair / totalSixDefinixSixBusdPair || 0
      // PANCAKE BNB-BUSD
      // const totalBnbInDefinixBnbBusdPair = 557985
      // const totalBusdInDefinixBnbBusdPair = 152220163
      const definixBnbBusdRatio = totalBusdInDefinixBnbBusdPair / totalBnbInDefinixBnbBusdPair || 0
      // Price cal
      const finixSixPrice = finixSixRatio * sixBusdRatio
      const finixBnbPrice = finixBnbRatio * definixBnbBusdRatio
      const averageFinixPrice =
        (finixBusdRatio * totalFinixDefinixFinixBusdPair +
          finixBnbPrice * totalFinixDefinixFinixBnbPair +
          finixSixPrice * totalFinixDefinixFinixSixPair) /
        (totalFinixDefinixFinixBusdPair + totalFinixDefinixFinixBnbPair + totalFinixDefinixFinixSixPair)

      // console.log('FST-INV LP Address : ', getFinixSixLPAddress())
      // console.log('FST Address : ', getFinixAddress())
      // console.log('Total FST in FST-INV pair : ', totalFinixDefinixFinixSixPair)
      // console.log('INV Address : ', getSixAddress())
      // console.log('Total INV in FST-INV pair : ', totalSixDefinixFinixSixPair)
      // console.log('FST-BUSD LP Address : ', getFinixBusdLPAddress())
      // console.log('FST Address : ', getFinixAddress())
      // console.log('Total FST in FST-BUSD pair : ', totalFinixDefinixFinixBusdPair)
      // console.log('BUSD Address : ', getBusdAddress())
      // console.log('Total BUSD in FST-BUSD pair : ', totalBusdDefinixFinixBusdPair)
      // console.log('FST-WBNB LP Address : ', getFinixBnbLPAddress())
      // console.log('FST Address : ', getFinixAddress())
      // console.log('Total FST in FST-WBNB pair : ', totalFinixDefinixFinixBnbPair)
      // console.log('WBNB Address : ', getWbnbAddress())
      // console.log('Total WBNB in FST-WBNB pair : ', totalBnbDefinixFinixBnbPair)
      // console.log('INV-BUSD LP Address : ', getSixBusdLPAddress())
      // console.log('INV Address : ', getSixAddress())
      // console.log('Total INV in INV-BUSD pair : ', totalSixDefinixSixBusdPair)
      // console.log('BUSD Address : ', getBusdAddress())
      // console.log('Total BUSD in INV-BUSD pair : ', totalBnbDefinixSixBusdPair)
      // console.log('Definix BNB-BUSD LP Address : ', getDefinixBnbBusdLPAddress())
      // console.log('WBNB Address : ', getWbnbAddress())
      // console.log('Total WBNB in Definix BNB-BUSD pair : ', totalBnbInDefinixBnbBusdPair)
      // console.log('BUSD Address : ', getBusdAddress())
      // console.log('Total BUSD in Definix BNB-BUSD pair : ', totalBusdInDefinixBnbBusdPair)
      setCurrentPrice(averageFinixPrice)
    })
  }, [chainId, multicallContractAddress, account])
  return currentPrice || 0
}
