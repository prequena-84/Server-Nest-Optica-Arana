import type { 
    TIdDiagnose,TIdCostumers,TIdUsers,TSphere,
    TCylinder,TAxis,TAdd,TDpn,THeight,TLensType,
    TLensMaterial,TFormula,TObservation
} from "src/types/diagnose/TDiagnose";

interface IDiagnose {
    idDiagnose: TIdDiagnose;   //id Dianostico
    idCostumers: TIdCostumers; // id clientes
    idUsers: TIdUsers;  // id usuario
    sphereR: TSphere;   // Esfera Derecha
    sphereL: TSphere;   // Esfera Izquierda
    cylinderR: TCylinder; // cilindro Derecho
    cylinderL: TCylinder; // cilindro Izquierdo
    axisR: TAxis;        // eje Derecho
    axisL: TAxis;        // eje Izquierdo
    addR: TAdd;          // add Derecho
    addL: TAdd;          // add Izquierdo
    dPnR: TDpn;          // dPnD Derecho
    dPnL: TDpn;          // dPnD Izquierdo
    heightR: THeight;    // altura Derecha
    heightL: THeight;    // altura Izquierda
    lensType: TLensType; // tipo de lente
    lensMaterial: TLensMaterial;// material de lente
    formula: TFormula;          // formula de lente
    observation: TObservation;  // observaciones
}

export type {
    IDiagnose,
}