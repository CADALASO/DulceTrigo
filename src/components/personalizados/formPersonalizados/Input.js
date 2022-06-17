import React from 'react';
import {Input,Label,GrupoInput,LeyendaError,IconoValidacion} from '../../../elements/form';
import { faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const ComponenteInput=({estado,cambiarEstado,tipo,label,name,placeholder,leyendaError,expresionRegular,funcion})=>{

const onChange =(e)=>{
    cambiarEstado({...estado,campo:e.target.value})
}

const validacion=()=>{
if (expresionRegular){
    if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado,valido:'true'});
    }else{
        cambiarEstado({...estado,valido:'false'});
    }
}
if (funcion){
funcion();
}
}
    return(
    <div className='prueba'>  
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>
        <Input 
        type={tipo} 
        id="nombre"
        placeholder={placeholder}
        value={estado.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
        />
        <IconoValidacion 
        icon={estado.valido==='true'?faCheckCircle : faTimesCircle} 
        valido={estado.valido}
        />


        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
    );
}

export default ComponenteInput;