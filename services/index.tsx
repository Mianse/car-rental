import { gql } from "graphql-request"
import request from 'graphql-request'

export const getCarsList = async ()=>{
    const querry = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
        }
      }
    `
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv15a53d1v6t08uxse4hb6ek/master',querry)
    return result
}
