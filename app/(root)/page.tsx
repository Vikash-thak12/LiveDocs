import AddDocumentBtn from "@/components/AddDocumentBtn"
import Header from "@/components/Header"
import { SignedIn, SignIn, UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"

const page = async () => {

  const clearUser = await currentUser();
  if(!clearUser) redirect('/sign-in')

  const documents = []
  
  return (
    <main className="home-container">
      <Header className="sticky top-0 left-0">
        <div className="flex items-center gap-2 lg:gap-5">
          Notification 
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {
        (documents.length > 0 ? (
          <div></div>
        ) : (
          <div className="document-list-empty">
            <Image
            src="/assets/icons/doc.svg"
            alt="document"
            width={40}
            height={40}
            className="mx-auto"
             />
             <AddDocumentBtn
             userId={clearUser.id}
             email={clearUser.emailAddresses[0].emailAddress}
              />
          </div>
        ))
      }
    </main>
  )
}

export default page
