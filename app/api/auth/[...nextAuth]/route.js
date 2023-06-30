import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDatabase } from "@utils/database";

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            // serverLess route -> Lambda -> session
            await connectToDatabase()

            // check if the user already exists



            // if not, create a new user

            return true

        } catch (error) {
            console.log(`Error: ${error}`)
            return false
        }
    }
})

export { handler as GET, handler as POST };