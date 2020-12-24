/**
 The demo includes these functions:
 - Register a custom node;
 - Register a custom edge;
 - Utilize node tooltip;
 - Utilize edge tooltip;
 - Utilize the context menu on node;
 - Render the custom React components of tooltip and ContextMenu.
 **/

import { useEffect, useRef } from "react";
import { data } from "./data";
import G6, { Graph } from "@antv/g6";

type GraphRef = Graph | null;
type ContainerRef = HTMLDivElement | null;

const GettingStarted = () => {
  const containerRef = useRef<ContainerRef>(null);
  const graphRef = useRef<GraphRef>(null);

  useEffect(() => {
    if (graphRef.current === null) {
      graphRef.current = new G6.Graph({
        // @ts-ignore
        container: containerRef.current,
        width: 1200,
        height: 800,
        modes: {
          default: ["drag-canvas"],
        },
        layout: {
          type: "dagre",
          direction: "LR",
        },
        defaultNode: {
          type: "node",
          labelCfg: {
            style: {
              fill: "#000000A6",
              fontSize: 10,
            },
          },
          style: {
            stroke: "#72CC4A",
            width: 150,
          },
        },
        defaultEdge: {
          type: "polyline",
        },
      });
    }
    graphRef.current.data(data);
    graphRef.current.render();
  }, []);

  return <div ref={containerRef} />;
};

export default GettingStarted;
