"use client";
import { useEffect, useState } from "react";
import http from "@/services/http";
import useUserStore from "@/app/stors/useUserStore";

export default function Home() {

  const [data, setData] = useState<{ id: any }>({ id: 0 });

  const count = useUserStore((state) => state.count);
  const incrementHopsa = useUserStore((state) => state.incrementHopsa);
  const incrementDownload = useUserStore((state) => state.incrementDownload);
  const resetCounts = useUserStore((state) => state.resetCounts);

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

      {/* כפתורים שמשתמשים ב-Zustand */}
      <button onClick={incrementHopsa}>Increase </button><br/>
      <button onClick={incrementDownload}>Dicrease </button><br/>
      <button onClick={resetCounts}>Reset</button>

      <div>
        <p> Count: {count}</p>
      </div>

    </div>
  );
}
