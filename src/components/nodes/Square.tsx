import { useState } from "react";
import { NodeProps, Handle, Position } from "reactflow";

type ObjectField = {
    label: string;
    relationship: [];
    forestKey: boolean;
    primaryKey: boolean;
};

export function Square(props: NodeProps) {
    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <>
        <Handle
            id="right"
            type='source' 
            position={Position.Right}
            className="top-12 w-3 h-3 border-2 bg-blue-400/80 "
        />
        <Handle 
            id="left" 
            type='source' 
            position={Position.Left}
            className="top-12 w-3 h-3 border-2 bg-blue-400/80 "
        />
        </>
    )
};