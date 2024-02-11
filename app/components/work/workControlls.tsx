"use client";
import { WorkType } from "@/app/types";
import { useState } from "react";

export default function WorkControlls({ works }: { works: WorkType[] }) {
  const typesSet = new Set(works.map((item: WorkType) => item.type));
  const uniqueTypes: string[] = [...typesSet];
  const [filter, setFilter] = useState(uniqueTypes[0]);

  return (
    <>
      <div className="work-controls">
        {uniqueTypes.map((type: string, i: number) => {
          const thisType = type;
          const totalOfType = works.filter(({ type }: { type: string }) => type === thisType).length;
          return (
            <>
              <button
                key={i}
                onClick={() => setFilter(type)}
                className={filter === type ? "active" : "not-active"}
              >
                {type.toUpperCase()}({totalOfType})
              </button>
              {i < uniqueTypes.length - 1 && "/"}
            </>
          );
        })}
      </div>
      <div className="work-list">
        {works
          .sort((a: WorkType, b: WorkType) => b.date - a.date)
          .filter(({ type }: { type: string }) => type === filter)
          .map(({title, date, url,}: { title: string; date: number; url: string }, i: number) => {
              return (
                <a key={i} href={url} target="_blank" className="work">
                  <p>{title}</p>
                  <p>{date}</p>
                </a>
              );
            }
          )}
      </div>
    </>
  );
}
