import  NextAuth  from "next-auth/next";


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:'',
            clientSecret:''
        })
    ],
    callbacks:{
        async session({session}){

        },

        async signIn({profile}){

        },
    }
})

export {handler as GET,handler as POST}