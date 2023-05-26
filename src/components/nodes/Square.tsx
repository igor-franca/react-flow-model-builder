import { NodeProps, Handle, Position } from "reactflow";

type ObjectField = {
    label: string;
    relationship: [];
    forestKey: boolean;
    primaryKey: boolean;
};

export function Square(props: NodeProps) {
    return (
        <div className="bg-amber-50 rounded w-[200px] h-[200px]" style={{padding: "1rem"}}>
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
                {props.data.objectFields.map((currentField : ObjectField) => {
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
                })}
            </div>
            <Handle
                id="right"
                type='source' 
                position={Position.Right}
                className="-right-5 w-3 h-3 border-2 bg-blue-400/80 "
            />
            <Handle 
                id="left" 
                type='source' 
                position={Position.Left}
                className="-left-5 w-3 h-3 border-2 bg-blue-400/80 "
            />
            <Handle
                id="top"
                type='source' 
                position={Position.Top}
                className="-top-5 w-3 h-3 border-2 bg-blue-400/80 "
            />
            <Handle 
                id="bottom" 
                type='source' 
                position={Position.Bottom}
                className="-bottom-5 w-3 h-3 border-2 bg-blue-400/80 "
            />
        </div>
    )
};