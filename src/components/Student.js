//importacion de react
import { div } from 'prelude-ls';
import React,{Component} from 'react';

//creacion de la clase Student para la anidacion de informacion
class Student extends Component{
    render(){
        // creacion de props para la modificacion y clonacion de archivos
        //con una constante y variables se imprime la informacion
        const{name,email,phone}= this.props
        return(
            <div>

                {/* llamado de variables props name email y phone  */}
                <h1>COMPONENT STUDENT</h1>
                <h2>Datos del Aprendiz</h2>
                <p>Nombre: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
        )
    }

}

//exportacion de archivos hacia post.js 
export default Student;




