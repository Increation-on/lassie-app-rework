import axios from "axios";


const url = 'https://httpbin.org/post';

export default class RequestService {

  static async postOrderData(orderData) {
    const response = await axios.post(url, {
      orderData
    }).then(resp => {
      console.log(resp)
      return resp
    }).catch(e => console.log(e))
    return response.data
  };

  static async postFilterData(filterData) {
    const response = await axios.post(url, {
      season: filterData.season,
      collection: filterData.collection,
      gender: filterData.gender,
      size: filterData.size,
      available: filterData.available,
      color: filterData.color,
      minPrice: filterData.minPrice,
      maxPrice: filterData.maxPrice
    }).then(resp => {
      console.log(resp.status)
      return resp
    }).catch(e => console.log(e))
    return response.data
  };

  static async postReviewData(formData) {
    const response = await axios.post(url, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      spamProtect: formData.spamProtect
    }).then(resp => {
      return resp
    }).catch(e => {
      console.log(e)
    })
    return response.data
  };

}
