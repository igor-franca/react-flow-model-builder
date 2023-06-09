import ReactFlow, { Background, Connection, ConnectionMode, Controls, Node, addEdge, useEdgesState, useNodesState } from 'reactflow';
import {zinc} from 'tailwindcss/colors';
import 'reactflow/dist/style.css';

import DefaultEdge from './components/edges/DefaultEdge'

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';

// Nodes, Edges


const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {
      objectDefinitionLabel : "Employee",
      objectFields:[
        {
          label: 'ERC',
          relationships: [],
          forestKey: false,
          primaryKey: true,
        },
        {
          label: 'Name',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        },
        {
          label: 'Age',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        },
        {
          label: 'Department',
          relationships: [],
          forestKey: true,
          primaryKey: false,
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {
      objectDefinitionLabel: "Department",
      objectFields:[
        {
          label: 'ERC',
          relationships: [],
          forestKey: false,
          primaryKey: true,
        },
        {
          label: 'Name',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        },
        {
          label: 'State',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        }
      ]
    }
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 800,
      y: 600,
    },
    data: {
      objectDefinitionLabel: "Locale",
      objectFields:[
        {
          label: 'Name',
          relationships: [],
          forestKey: false,
          primaryKey: true,
        },
        {
          label: 'Country',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        },
        {
          label: 'State',
          relationships: [],
          forestKey: false,
          primaryKey: false,
        }
      ]
    }
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
      </ReactFlow>
    </div>
  )
}

export default App
