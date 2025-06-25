import type { 
    TIdDiagnose,TIdCostumers,TIdUsers,TSphere,
    TCylinder,TAxis,TAdd,TDpn,THeight,TLensType,
    TLensMaterial,TFormula,TObservation
} from "src/types/diagnose/diagnose.type";

interface IDiagnose {
    idDiagnose:TIdDiagnose;   //id Dianostico
    idCostumers:TIdCostumers; // id clientes
    idUsers:TIdUsers;       // id usuario
    sphereR?:TSphere | 0;   // Esfera Derecha
    sphereL?:TSphere | 0;   // Esfera Izquierda
    cylinderR?:TCylinder | 0; // cilindro Derecho
    cylinderL?:TCylinder | 0; // cilindro Izquierdo
    axisR?:TAxis | 0;        // eje Derecho
    axisL?:TAxis | 0;        // eje Izquierdo
    addR?:TAdd | 0;          // add Derecho
    addL?:TAdd | 0;          // add Izquierdo
    dPnR?:TDpn | 0;          // dPnD Derecho
    dPnL?:TDpn | 0;          // dPnD Izquierdo
    heightR?:THeight | 0;    // altura Derecha
    heightL?:THeight | 0;    // altura Izquierda
    lensType?:TLensType | null; // tipo de lente
    lensMaterial?:TLensMaterial | null;// material de lente
    formula?:TFormula | null;   // formula de lente
    observation?:TObservation | null;  // observaciones
}

export type {
    IDiagnose,
}