import Image from "next/image";
import { Button } from "@mantine/core";
import ButtonComponent from "@/components/button";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        <ButtonComponent size={"lg"} color={"bg-sky-800"}>
          Button
        </ButtonComponent>
      </div>
    </div>
  );
}
