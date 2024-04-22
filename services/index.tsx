import { gql } from "graphql-request"
import request from 'graphql-request'

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv15a53d1v6t08uxse4hb6ek/master'
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

export const createBooking = async (formValue : any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          userName: "${formValue.userName}",
          pickUpDate: "${formValue.pickUpDate}",
          dropOffDate: "${formValue.dropOffDate}",
          pickUpTime: "${formValue.pickUpTime}",
          dropOffTime: "${formValue.dropOffTime}",
          contactNumber: "${formValue.contactNumber}",
          carId: { connect: { id: "${formValue.carId}" } }
        }
      ) {
        id
      }
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};