import { gql } from "graphql-request"
import request from 'graphql-request'

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv15a53d1v6t08uxse4hb6ek/master'
export const getCarsList = async ()=>{
    const querry = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
          carBrand
        }
      }
      
      
      
      
    `
    const result = await request(MASTER_URL,querry)
    return result
}

export const getStoreLocation =async ()=>{
  const querry = gql`
  query storeLocationy {
    storeLocations(where: {}) {
      address
    }
  }
  
  
  `
  const result = await request(MASTER_URL,querry);
  return result
}
