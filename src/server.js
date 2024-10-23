import { internalStack } from '@internalstack/server'
import { addToDatabase } from './business-logic/do-something.js'

const server = await internalStack(process.env.INTERNALSTACK_API_KEY)

server.statefulSession(async(io, { user }) => {
  const note = await io.input.text('Note')
  console.log(user, 'says: ', note)
  // e.ripley@internalstack.com says: Hello World!
  await addToDatabase(user, note)
})