import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handleAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handleAuth as GET, handleAuth as POST };
