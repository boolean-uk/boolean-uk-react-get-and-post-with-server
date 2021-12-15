export class LocalRoutes {
    static home = "/"
    static admin = "/admin"
    static tickets = "/tickets"
    static toursIdBook = "/tours/:id/book"

    static adminHome = LocalRoutes.home
    static adminToursCreate = "tours/create"
    static adminTicketsSummary = "tickets/summary"
}

export class APIEndpoints {
    static baseURL = "http://localhost:3030"
    static tours = `${APIEndpoints.baseURL}/tours`
    static tickets = `${APIEndpoints.baseURL}/tickets`
}
