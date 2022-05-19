import {gql} from "graphql-tag";

export const UPSERT_GROUP = gql`
  mutation RoomUpsert($input: UpserRoomInput!) {
    roomUpsert(input: $input) {
      id
      name
    }
  }
`


export const ADD_USERS_TO_GROUP = gql `
  mutation RoomAdd($input: AddToRoomInput!) {
    roomAdd(input: $input) {
      id
      updatedAt
    }
  }
`
