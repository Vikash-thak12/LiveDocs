'use client'
import Loader from '@/components/Loader'
import { getClerkUser } from '@/lib/actions/user.actions'
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense'
import { ReactNode } from 'react'

const Provider = ({ children }: { children: ReactNode}) => {
    return (
        <div>
            <LiveblocksProvider 
            authEndpoint='/api/liveblocks-auth'
            resolveUsers={async({userIds}) => {
                const users = await getClerkUser({ userIds });
                return users;   
            }}
            >
                    <ClientSideSuspense fallback={<Loader />}>
                        {children}
                    </ClientSideSuspense>
            </LiveblocksProvider>
        </div>
    )
}

export default Provider