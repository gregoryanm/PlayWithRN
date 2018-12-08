module.exports = (req, res, next) => {
    if (req.url === '/employees' || req.url === '/Employees') {
      req.url = '/employees'
    }
    if (req.url === '/categoriesList') {
      req.url = '/categoriesList'
    }
    if (req.url === '/users?q=GantMan' || req.url === '/users?q=gantman') {
        req.url = '/gantman'
      }
      if (req.url === '/users?q=skellock') {
        req.url = '/skellock'
      }
    next()
  }