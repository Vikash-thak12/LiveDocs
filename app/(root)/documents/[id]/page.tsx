import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getRoom } from '@/lib/actions/room.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Documents = async ({ params: { id }}: SearchParamProps) => {
  const clearUser = await currentUser();
  if(!clearUser) redirect('/sign-in')

  const room = await getRoom({
    roomId: id,
    userId: clearUser.emailAddresses[0].emailAddress
  })

  if(!room) redirect('/')
  return (
    <main className='flex w-full flex-col items-center'>
      <CollaborativeRoom
      roomId={id} 
      roomMetadata={room.metadata}
      
       />
    </main>
  )
}

export default Documents