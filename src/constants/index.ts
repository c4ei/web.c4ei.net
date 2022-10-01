import { ChainId, JSBI, Percent, Token, WETH } from 'definixswap-sdk'

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const multicallAdress = {
  [ChainId.MAINNET]: process.env.REACT_APP_MULTICALL_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_MULTICALL_ADDRESS_TESTNET || ''
}

export const INV_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_INV_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_INV_ADDRESS_TESTNET || ''
}

export const FST_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_FST_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_FST_ADDRESS_TESTNET || ''
}

export const BUSD_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_BUSD_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_BUSD_ADDRESS_TESTNET || ''
}

export const USDT_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_USDT_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_USDT_ADDRESS_TESTNET || ''
}

export const WBNB_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_WBNB_ADDRESS_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_WBNB_ADDRESS_TESTNET || ''
}

// export const BTCB_ADDRESS = {
//   [ChainId.MAINNET]: process.env.REACT_APP_BTCB_ADDRESS_MAINNET || '',
//   [ChainId.BSCTESTNET]: process.env.REACT_APP_BTCB_ADDRESS_TESTNET || ''
// }

// export const ETH_ADDRESS = {
//   [ChainId.MAINNET]: process.env.REACT_APP_ETH_ADDRESS_MAINNET || '',
//   [ChainId.BSCTESTNET]: process.env.REACT_APP_ETH_ADDRESS_TESTNET || ''
// }

// export const XRP_ADDRESS = {
//   [ChainId.MAINNET]: process.env.REACT_APP_XRP_ADDRESS_MAINNET || '',
//   [ChainId.BSCTESTNET]: process.env.REACT_APP_XRP_ADDRESS_TESTNET || ''
// }

// export const ADA_ADDRESS = {
//   [ChainId.MAINNET]: process.env.REACT_APP_ADA_ADDRESS_MAINNET || '',
//   [ChainId.BSCTESTNET]: process.env.REACT_APP_ADA_ADDRESS_TESTNET || ''
// }

// export const VELO_ADDRESS = {
//   [ChainId.MAINNET]: process.env.REACT_APP_VELO_ADDRESS_MAINNET || '',
//   [ChainId.BSCTESTNET]: process.env.REACT_APP_VELO_ADDRESS_TESTNET || ''
// }

export const FST_INV_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FST_INV_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_FST_INV_LP_TESTNET || ''
}

export const FST_BUSD_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FST_BUSD_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_FST_BUSD_LP_TESTNET || ''
}

export const FST_BNB_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FST_BNB_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_FST_BNB_LP_TESTNET || ''
}

export const INV_BUSD_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_INV_BUSD_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_INV_BUSD_LP_TESTNET || ''
}

export const USDT_BUSD_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_USDT_BUSD_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_USDT_BUSD_LP_TESTNET || ''
}

export const BNB_BTCB_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_BNB_BTCB_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_BNB_BTCB_LP_TESTNET || ''
}

export const PANCAKE_BNB_BUSD_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_PANCAKE_BNB_BUSD_LP_MAINNET || '',
  [ChainId.BSCTESTNET]: process.env.REACT_APP_PANCAKE_BNB_BUSD_LP_TESTNET || ''
}

export const HERODOTUS_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_HERODOTUS_MAINNET || '', // ==================
  [ChainId.BSCTESTNET]: process.env.REACT_APP_HERODOTUS_TESTNET || ''
}

export const PANCAKE_MASTER_CHEF_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_MAINNET || '', // ==================
  [ChainId.BSCTESTNET]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_TESTNET || ''
}

export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xBa9303709c2Ad10b62a598e18e15b1E42921edea', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0xb689551b37868Ee8752932ae1f2592ff6eB631D3', 18, 'USDT', 'Tether USD')
export const UST = new Token( ChainId.MAINNET, '0x23396cf899ca06c4472205fc903bdb4de249d6fc', 18, 'UST', 'Wrapped UST Token')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.BSCTESTNET]: [
    ...WETH_ONLY[ChainId.BSCTESTNET],
    new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
    new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token'),
    // new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token'),
    new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    // new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token'),
    // new Token(ChainId.BSCTESTNET, ETH_ADDRESS[ChainId.BSCTESTNET], 18, 'ETH', 'ETH Token'),
    // new Token(ChainId.BSCTESTNET, XRP_ADDRESS[ChainId.BSCTESTNET], 18, 'XRP', 'XRP Token'),
    // new Token(ChainId.BSCTESTNET, ADA_ADDRESS[ChainId.BSCTESTNET], 18, 'ADA', 'ADA Token'),
    // new Token(ChainId.BSCTESTNET, VELO_ADDRESS[ChainId.BSCTESTNET], 18, 'VELO', 'VELO Token')
  ],
  [ChainId.MAINNET]: [
    ...WETH_ONLY[ChainId.MAINNET],
    new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
    new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
    new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token'),
    // new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token'),
    new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
    // new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token'),
    // new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token'),
    // new Token(ChainId.MAINNET, XRP_ADDRESS[ChainId.MAINNET], 18, 'XRP', 'XRP Token'),
    // new Token(ChainId.MAINNET, ADA_ADDRESS[ChainId.MAINNET], 18, 'ADA', 'ADA Token'),
    // new Token(ChainId.MAINNET, VELO_ADDRESS[ChainId.MAINNET], 5, 'VELO', 'VELO Token'),
  ]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {}
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token')
    ],
    [
      new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token')
    ],
    [
      new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token')
    ],
    [
      new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB')
    ],
    // [
    //   new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, INV_ADDRESS[ChainId.MAINNET], 18, 'INV', 'INV Token'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    [
      new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
      new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token')
    ],
    [
      new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
      new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token')
    ],
    [
      new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
      new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB')
    ],
    // [
    //   new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    [
      new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
      new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD Token')
    ],
    // [
    //   new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD BNB'),
    //   new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD BNB'),
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD BNB'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token'),
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, USDT_ADDRESS[ChainId.MAINNET], 18, 'USDT', 'USDT Token'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, BTCB_ADDRESS[ChainId.MAINNET], 18, 'BTCB', 'BTCB Token'),
    //   new Token(ChainId.MAINNET, ETH_ADDRESS[ChainId.MAINNET], 18, 'ETH', 'ETH Token')
    // ],
    // [
    //   new Token(ChainId.MAINNET, VELO_ADDRESS[ChainId.MAINNET], 5, 'VELO', 'VELO Token'),
    //   new Token(ChainId.MAINNET, WBNB_ADDRESS[ChainId.MAINNET], 18, 'WBNB', 'Wrapped BNB')
    // ],
    // [
    //   new Token(ChainId.MAINNET, VELO_ADDRESS[ChainId.MAINNET], 5, 'VELO', 'VELO Token'),
    //   new Token(ChainId.MAINNET, BUSD_ADDRESS[ChainId.MAINNET], 18, 'BUSD', 'BUSD BNB'),
    // ],
    // [
    //   new Token(ChainId.MAINNET, VELO_ADDRESS[ChainId.MAINNET], 5, 'VELO', 'VELO Token'),
    //   new Token(ChainId.MAINNET, FST_ADDRESS[ChainId.MAINNET], 18, 'FST', 'FST Token'),
    // ],
  ],
  [ChainId.BSCTESTNET]: [
    [
      new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token')
    ],
    [
      new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token')
    ],
    [
      new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token')
    ],
    [
      new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
      new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB')
    ],
    // [
    //   new Token(ChainId.BSCTESTNET, INV_ADDRESS[ChainId.BSCTESTNET], 18, 'INV', 'INV Token'),
    //   new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    //   new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB'),
    //   new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD BNB'),
    //   new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD BNB'),
    //   new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, USDT_ADDRESS[ChainId.BSCTESTNET], 18, 'USDT', 'USDT Token'),
    //   new Token(ChainId.BSCTESTNET, BTCB_ADDRESS[ChainId.BSCTESTNET], 18, 'BTCB', 'BTCB Token')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, VELO_ADDRESS[ChainId.BSCTESTNET], 18, 'VELO', 'VELO Token'),
    //   new Token(ChainId.BSCTESTNET, WBNB_ADDRESS[ChainId.BSCTESTNET], 18, 'WBNB', 'Wrapped BNB')
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, VELO_ADDRESS[ChainId.BSCTESTNET], 18, 'VELO', 'VELO Token'),
    //   new Token(ChainId.BSCTESTNET, BUSD_ADDRESS[ChainId.BSCTESTNET], 18, 'BUSD', 'BUSD BNB'),
    // ],
    // [
    //   new Token(ChainId.BSCTESTNET, VELO_ADDRESS[ChainId.BSCTESTNET], 18, 'VELO', 'VELO Token'),
    //   new Token(ChainId.BSCTESTNET, FST_ADDRESS[ChainId.BSCTESTNET], 18, 'FST', 'FST Token'),
    // ],
  ]
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
