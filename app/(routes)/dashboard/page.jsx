"use client";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { useRouter } from "next/navigation";
import MeetingType from "./meeting-type/page";
import { LoaderIcon } from "lucide-react";



function Dashboard() {

  

  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading , setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user])



  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false)
      router.replace("/create-business");
    }
  };

  if(loading) {
    return <div>Checking your account...{loading ? <LoaderIcon className="animate-spin" /> : "Checking your account..."}</div>;
  }

  return (
    <div>

      <MeetingType/>
      {/* Dashboard
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink> */}
      
    </div>
  );
}

export default Dashboard;
