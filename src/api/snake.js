import apiUrl from '../apiConfig'
import axios from 'axios'

export const createScore = (form) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/scores',
    // headers: {
    //   'Authorization': `Token token=${user.token}`
    // },
    data: {
      score: {
        score: form.score
      }
    }
  })
}

export const getScores = () => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/scores`
  })
}

export const deleteScore = id => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/scores/${id}`
  })
}

export const updateScore = (id, newScore) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/scores/${id}`,
    data: {
      score: {
        score: newScore
      }
    }
  })
}

export const indexPurchases = user => {
  return axios({
    url: apiUrl + '/purchases',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const showPurchase = (user, purchaseId) => {
  return axios({
    url: apiUrl + '/purchases/' + purchaseId,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const deletePurchase = (user, purchaseId) => {
  return axios({
    url: apiUrl + '/purchases/' + purchaseId,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const updatePurchase = (user, form, purchaseId) => {
  return axios({
    url: apiUrl + '/purchases/' + purchaseId,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      purchase: {
        purchaseProduct: form.purchaseProduct,
        productPrice: form.productPrice
      }
    }
  })
}
