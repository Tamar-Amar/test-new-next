"use client";
import { useEffect, useState } from "react";
import http from "@/services/http"

export default function Home() {

  const [data, setData] = useState<{ id: any }>({ id: 0 });

  useEffect(() => {
    http.get("/books/1").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }
    , []);


  return (
    <div>
      <h1>{data.id}</h1>
    </div>
  );
}
