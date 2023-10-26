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
            <div className='w-screen h-screen bg-gradient-to-b from-yellow-400 to-orange-500'></div>
            <main className='absolute top-0 w-full h-full z-10 p-4 text-white'>
                <Nav/>
                {children}
            </main>
           </Provider>
        </body>
    </html>
  )
}

export default RootLayout