import React from "react";
import useMacbookStore from "../store/index.js";
import clsx from "clsx";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2> Take a closer look.</h2>

      <div className="controls">
        <p className="info">MacbookPro 16" in Silver / Space Black</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-contorl">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div className="bg-neutral-900" />
          </div>

          <div className="size-control">
            <div>
              <p>14"</p>
            </div>
            <div>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white text-4xl">Render Canvas</p>
    </section>
  );
};

export default ProductViewer;
