import axios from "axios";


const url = 'http://';

export default class RequestService {

  static async postOrderData(name, email, phone, city, street, postcode, house, housing, apartment, dhl, dpd, mailing, cash, emoney) {
    try {
        const response = await axios.post(url, {
            name,
            email,
            phone,
            city,
            street,
            postcode,
            house,
            housing,
            apartment,
            dhl,
            dpd,
            mailing,
            cash,
            emoney
        })
        return response 
    }catch(e) {
        console.log(e)
    }
    
  }

  static async postFilterData(filterData) {
    try {
        const response = await axios.post(url, {
          season: filterData.season,
          collection: filterData.collection, 
          gender: filterData.gender,
          size: filterData.size,
          available:  filterData.available, 
          color: filterData.color,
          minPrice: filterData.minPrice,
          maxPrice: filterData.maxPrice
        })
        return response 
    }catch(e) {
        console.log(e)
    }
    
  };
}
