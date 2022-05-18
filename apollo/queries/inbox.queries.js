import { gql } from 'graphql-tag'

export const GET_INBOXS = gql`
  query InboxsGet($filter: GetInboxsInput!) {
    inboxsGet(filter: $filter) {
      ... on Message {
        id
        from {
          id
        }
        content
        createdAt
        readAt {
          user {
            id
            name
            userID
            avatar
          }
          time
        }
      }
      ... on Image {
        id
        images
        createdAt
        from {
          id
          name
          userID
          avatar
        }
      }
      ... on File {
        id
        file
        createdAt
        from {
          id
          name
          userID
          avatar
        }
      }
    }
  }
`
