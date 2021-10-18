import React from "react";

export default function Path({ pathHistory }) {
  return (
    <div className="path-wrapper">
      {pathHistory.map((path, i) => {
        return (
          <>
            <a
              className={
                pathHistory.length - 1 === i ? "path path--active" : "path"
              }
              href="#"
            >
              {path}
            </a>
            {pathHistory.length - 1 !== i && (
              <span className="path-separator">/</span>
            )}
          </>
        );
      })}
    </div>
  );
}
