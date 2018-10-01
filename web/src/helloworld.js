import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const HELLO_WORLD = gql`
    query {
        hello
    }
`

const HelloWorld = () => (
    <Query query={HELLO_WORLD} >
        {({ loading, error, data}) => {
            if (loading) return `<p>Loading...</p>`
            if (error) return `Error!: ${error}`

            return (
                <h2>{data.hello}</h2>
            )
        }}
    </Query>
)

export default HelloWorld