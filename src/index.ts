import { server } from './server/server'

server.listen(process.env.PORT || 3333, () => console.log(`Running in port ${process.env.PORT || 3333}`))