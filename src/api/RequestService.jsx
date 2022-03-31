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
    
  };
}
