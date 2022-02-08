export interface assetDataType {
    description: string,
      name: string,
      collectibleNumber: number,
      id: string,
      collectionId: string,
      creator: string,
      props: {
        seed: string,
        name: string,
        collectibleNumber: number,
        categories: [
          {
            type: string,
            value: string
          },
          {
            type: string,
            value: string
          },
          {
            type: string,
            value: string
          },
          {
            type: string,
            label: string,
            value: string,
            score: number
          }
        ],
        shortId: string
      },
      owner: string,
      cost: string,
      block: {
        id: string,
        height: number,
        timestamp: number
      },
      transactionId: string,
      history: [
        {
          id: string,
          moduleAssetId: string,
          moduleAssetName: string,
          fee: string,
          height: number,
          nonce: string,
          block: {
            id: string,
            height: number,
            timestamp: number
          },
          sender: {
            address: string,
            publicKey: string
          },
          signatures: string[],
          asset: {
            amount: string,
            data: string,
            recipient: {
              address: string,
              publicKey: string,
              username: string
            }
          },
          isPending: boolean,
          type: string,
          action: string,
          from: string,
          to: string
        }
      ],
      previousOwners: [
        {
          address: string,
          nonce: number,
          transactionId: string,
          timestamp: number,
          action: string,
          data: string
        }
      ],
      // auctions : [],
      locked: boolean,
      data: string,
      url: string
}