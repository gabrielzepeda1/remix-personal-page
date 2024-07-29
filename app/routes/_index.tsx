import type { MetaFunction } from "@remix-run/node";
import { Button, Tooltip } from "flowbite-react";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col items-center px-4">Initial Commit</main>
  );
}
