import axios from 'axios'

const SELLER_BASE_REST_API_URL = 'http://localhost:8080/api/clients';

class SellerService {

    getAllSellers() {
        return axios.get(SELLER_BASE_REST_API_URL)
    }

    createSeller(seller) {
        return axios.post(SELLER_BASE_REST_API_URL, seller)
    }

    getSellerById(sellerId) {
        return axios.get(SELLER_BASE_REST_API_URL + '/' + sellerId);
    }

    updateSeller(sellerId, seller) {
        return axios.put(SELLER_BASE_REST_API_URL + '/' + sellerId, seller);
    }

    deleteSeller(sellerId) {
        return axios.delete(SELLER_BASE_REST_API_URL + '/' + sellerId);
    }
}

export default new SellerService();