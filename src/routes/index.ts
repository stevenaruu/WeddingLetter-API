import { Application, Router } from 'express'
import { HealthRouter } from './health.route'
import { GuestRouter } from './guest.route'
import { AdminRouter } from './admin.route'
import { RouteRouter } from './route'

const _routes: Array<[string, Router]> = [
    ['/', RouteRouter],
    ['/health', HealthRouter],
    ['/guest', GuestRouter],
    ['/admin', AdminRouter]
]

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, router] = route
        app.use(url, router)
    })
}
