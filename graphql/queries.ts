import gql from 'graphql-tag'

export const BLOCKS_QUERY = gql`
  query getBlocks($skip: Int!, $take: Int!, $orderByNumber: Boolean, $orderAsc: Boolean) {
    getBlocks(skip: $skip, take: $take, orderByNumber: $orderByNumber, orderAsc: $orderAsc) {
      hash
      number
      parentHash
      timestamp
      encodedLength
      transactions {
        hash
      }
    }
  }
`

export const BLOCK_QUERY = gql`
  query getBlock($hash: String!) {
    getBlock(hash: $hash) {
      hash
      number
      parentHash
      timestamp
      encodedLength
      transactions {
        hash
        timestamp
        method
        section
        signature
        nonce
      }
    }
  }
`

export const TRANSACTIONS_QUERY = gql`
  query getTransactions($skip: Int!, $take: Int!, $orderAsc: Boolean) {
    getTransactions(skip: $skip, take: $take, orderAsc: $orderAsc) {
      blockHash
      events {
        method
        section
      }
      hash
      method
      nonce
      section
      signature
      signer
      timestamp
      tip
    }
  }
`

export const TRANSACTION_QUERY = gql`
  query getTransaction($hash: String!) {
    getTransaction(hash: $hash) {
      args
      blockHash
      callIndex
      decimals
      encodedLength
      era
      hash
      method
      nonce
      section
      signature
      signer
      ss58
      timestamp
      tip
      tokens
      type
      version
    }
  }
`
export const TRANSACTIONS_BY_CONTRACT_QUERY = gql`
  query getTransactionsByContract($address: String!, $skip: Int!, $take: Int!, $orderAsc: Boolean) {
    getTransactionsByContract(skip: $skip, take: $take, orderAsc: $orderAsc, address: $address) {
      blockHash
      events {
        method
        section
      }
      hash
      method
      nonce
      section
      signature
      signer
      timestamp
      tip
    }
  }
`
