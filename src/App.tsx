import ReactFlow, { MiniMap, Background, Connection, ConnectionMode, Controls, Node, addEdge, useEdgesState, useNodesState, Position } from 'reactflow';
import {zinc} from 'tailwindcss/colors';
import 'reactflow/dist/style.css';

import DefaultEdge from './components/edges/DefaultEdge'

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';

const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES = [
  {
    id: 'A',
    type: 'group',
    data: { label: '' },
    position: { x: 200, y: 200 },
    style: {
      width: 150,
      height: 140,
    },
  },
  {
    id: 'B',
    type: 'input',
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
    data: { label: 'child node 1' },
    position: { x: 0, y: 0 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'C',
    type: 'input',
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
    data: { label: 'child node 2' },
    position: { x: 0, y: 40 },
    parentNode: 'A',
    extent: 'parent',
  },
] satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, []);

  return (
    <div className='w-screen h-screen'>    
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background 
          gap={12}
          size={2}
          color={zinc[200]}
        />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default App
