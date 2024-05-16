import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/userModel";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDB();
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        console.log("Profile data:", profile);

        const userExist = await User.findOne({
          email: profile.email,
        });
        console.log("User exists:", userExist);

        if (!userExist) {
          const newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, "").toLowerCase(),
            image: profile.picture,
          });
          console.log("New user created:", newUser);
        }
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    }
  },
  debug: true,
});

export { handler as GET, handler as POST };
