"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocationOption from "@/app/_utils/LocationOption";
import Image from "next/image";
import Link from "next/link";
import ThemeOptions from "@/app/_utils/ThemeOptions";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChevronLeft, Loader2 } from "lucide-react";


function MeetingForm({ setFormValue }) {
  const [themeColor, setThemeColor] = useState();
  const [eventName, setEventName] = useState();
  const [duration, setDuration] = useState(30);
  const [locationType, setLocationType] = useState();
  const [locationUrl, setLocationUrl] = useState();
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const router = useRouter();
  useEffect(() => {
    setFormValue({
      eventName: eventName,
      duration: duration,
      locationType: locationType,
      locationUrl: locationUrl,
      themeColor: themeColor,
    });
  }, [eventName, duration, locationType, locationUrl, themeColor]);

  //  * On Create CLick Handler

  const onCreateclick = async () => {
    const id = Date.now().toString();
    setLoading(true);
    await setDoc(doc(db, "MeetingEvent", id), {
      id: id,
      eventName: eventName,
      duration: duration,
      locationType: locationType,
      locationUrl: locationUrl,
      themeColor: themeColor,
      businessId: doc(db, "Business", user?.email),
      createdBy: user?.email,
    });
    toast("New Meeting Event Created!...");
    router.replace("/dashboard/meeting-type");
  };
  return (
    <div className="p-6">
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4 text-primary">
          Create New Event
        </h2>
        <hr />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event name *</h2>
        <Input
          onChange={(event) => setEventName(event.target.value)}
          placeholder="Name of your meeting event..."
        />

        <h2 className="font-bold">Duration *</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              {duration} Min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setDuration(15)}>
              15 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(30)}>
              30 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(45)}>
              45 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(60)}>
              60 Min
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <h2 className="font-bold">Location *</h2>
        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          {LocationOption.map((option, index) => (
            <div
              key={index}
              onClick={() => setLocationType(option.name)}
              className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 hover:border-primary ${
                locationType == option.name && "bg-blue-100 border-primary"
              }`}
            >
              <Image
                src={option.icon}
                alt={option.name}
                width={30}
                height={30}
              />
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>
        {locationType && (
          <>
            <h2 className="font-bold ">Add {locationType} Url *</h2>
            <Input
              placeholder="Add Url..."
              onChange={(event) => setLocationUrl(event.target.value)}
            />
          </>
        )}
        <h2 className="font-bold">Select Theme Color</h2>
        <div className="flex items-center justify-evenly">
          {ThemeOptions.map((color, index) => (
            <div
              key={index}
              className={`h-7 w-7 rounded-full ${
                themeColor == color && "border-4 border-black b"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setThemeColor(color)}
            ></div>
          ))}
        </div>
      </div>
      <Button
        className="w-full mt-9"
        disabled={!eventName || !duration || !locationType || !locationUrl}
        onClick={() => onCreateclick()}
      >
        Create
        {loading ? <Loader2 className="animate-spin" /> : "Create"}
      </Button>
      <Link href={"/dashboard"}>
        <Button variant="destructive" className="w-full mt-3">
          <h2 className="flex gap-2 justify-center items-center font-semibold cursor-pointer ">
            <ChevronLeft  />
            Cancel
          </h2>
        </Button>
      </Link>
    </div>
  );
}

export default MeetingForm;
