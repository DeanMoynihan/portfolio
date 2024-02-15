"use client";
import { WorkType } from "@/app/types";
import { useState } from "react";

export default function Rework({ works }: { works: WorkType[] }) {
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
          .filter(({ type }: { type: string }) => type === filter)
          .sort((a, b) => {
            if (a.date === 0 && b.date === 0) {
              return 0;
            } else if (a.date === 0) {
              return -1;
            } else if (b.date === 0) {
              return 1;
            } else {
              return b.date - a.date;
            }
          })
          .map(({title, date, url, thumbnail}: { title: string; date: number; url: string; thumbnail: string }, i: number) => {
              return (
                <a key={i} href={url} target="_blank">
                    <div className="work-box-container" >
                        <div className="work-box-title" >
                            <h2>{title}</h2>
                            <h2>{date > 0 && date}</h2>
                        </div>
                        <div className="work-box-background" style={{backgroundImage: `url('${thumbnail}')`}}>
                        </div>
                    </div>
                </a>
              );
            }
          )}
      </div>
    </>
  );
}
