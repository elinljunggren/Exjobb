class CustomerService {
  getCustomer(http, id) {
    return http.get('/customer/' + id).map(res => res.json())
  }

  getDisposals(http, id) {
    return http.get('/disposals/' + id).map(res => res.json())
  }

  getDisposals(http, id, startDate, endDate) {
    return http.get('/disposals/' + id + '/' + startDate + '/' + endDate).map(res => res.json())
  }
}
