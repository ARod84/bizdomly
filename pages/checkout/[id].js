import React from 'react'
import { gql } from '@apollo/client'
import { publicClient } from '../../lib/apollo'
import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import Checkout from '../../components/containers/checkout/Checkout'

const CheckoutPage = ({ course, paypalDetails }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <Checkout course={course} paypalDetails={paypalDetails} />
      </Layout>
    </React.Fragment>
  )
}

export default CheckoutPage

export async function getStaticProps({ params }) {
  const GET_COURSE = gql`
  query GetPostByUri($id: ID!) {
    course(id: $id, idType: ID) {
      title
      databaseId
      courseACF {
        price
        shortDescription
        discount
      }
    }
  }
  `

  const GET_PAYPAL_DETAILS = gql`
      query GetPayPalDetails {
          paypalClientID
      }
  `

  const response = await publicClient.query({
    query: GET_COURSE,
    variables: {
      id: params.id
    }
  })

  const course = response?.data?.course

  const response2 = await publicClient.query({
    query: GET_PAYPAL_DETAILS
  })

  const paypalDetails = response2?.data
  return {
    props: {
      course,
      paypalDetails
    }
  }
}

export async function getStaticPaths(){
  const paths = []
  return {
      paths,
      fallback: 'blocking'
  }
}
