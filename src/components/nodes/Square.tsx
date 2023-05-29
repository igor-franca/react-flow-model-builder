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
        <div className="bg-amber-50 rounded w-[250px] h-[auto]" style={{padding: "1rem"}}>
            <div  
                className="bg-zinc-200" 
                style={{
                    font: "status-bar",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center"
                }}>
                <h2>
                    {props.data.objectDefinitionLabel}
                </h2>
            </div>
            <div>
                {props.data.objectFields.map((currentField: ObjectField, index: number) => {
                    if(index < 3 || showAll ){
                        return (
                            <>
                            <div style={{margin: "7px", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <h3>
                                    {currentField.label}
                                </h3>
    
                                {currentField.primaryKey && (
                                    <span>
                                        P-key
                                    </span>
                                )}
    
                                {currentField.forestKey && (
                                    <span>
                                        F-key
                                    </span>
                                )}
                            </div>
                            </>
                        )
                    }
                })}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', border: "0.1rem solid", marginTop: '1rem'}}> 
                    <button onClick={() => {setShowAll(!showAll); console.log({showAll})}}>
                        {showAll ? "Hide fields" : "Show all Fields"}
                    </button>
            </div>
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
        </div>
    )
};