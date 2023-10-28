import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/global.css'

export const metadata ={
    title:'SugGST',
    description:'Suggest anything about everything'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <main className='relative bg-gradient-to-br from-yellow-400 to-orange-500  top-0 min-w-screen min-h-screen z-10 p-4 text-white'>
                <Nav/>
                {children}
            </main>
           </Provider>
        </body>
    </html>
  )
}

export default RootLayout