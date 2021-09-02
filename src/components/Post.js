//importaciones de los componenetes de react dentro del proyecto
import render from 'dom-serializer';
import { extend } from 'lodash';
import React,{Component}from 'react';
import Student from './Student';


//clase Post que es llamado de componentes del proyecto 
class Post extends Component{
    state = {
        name:'ADSI', 
        course: '2252471',
        lenguage:['React ','php ','html']
    }

//Creacion de funcion flecha forma mas compacta de crear un codigo con el parametro (e) 

    handleChangeState=(e)=>{
        this.setState({
            name:'PROGRAMACION',
            course:'2002021',
            lenguage:['Java','javaScrip','CSS']
        })
    }

//Funcion flecha para imprimir en consola al pasar el mouse sobre el boton 
    handleMouseOver=(e)=>{
        console.log('Mouse ubicado encima del Boton');
    }

//Funcion flecha para imprimir en consola al copiar el codigo 
    handleCopy=(e)=>{
        console.log('Texto del parrafo copiado')
    }

//utiliacion del handlechange para el from
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

//con el preventDefault no permite que recargue la pagina bloquea los valores para no ser actualiados 
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('name',this.state.name);
        console.log('title',this.state.title);
        console.log('time',this.state.time);
    }



/*el render nos permite llamar con this. renderizando todo el codigo sin nesesidad de actualizar la pagina. 
.join permite crear separaciones y agregar puntos o comas al codigo js para que se vea mejor presentado al ususario.
Con onClick se establece la accion que va a realizar el boton. 
llamando a la funcion HandleChangeState con this. podemos acceder a la funcion handleChangeState directamente al precionar el boton.*/
        render(){
            return(
                <div>
                    <h1>Este es el componente post</h1>
                    {new Date().toLocaleString()}
                    <p>Programa:{this.state.name}</p>
                    <p>Title:{this.state.title}</p>
                    <p>Duracion:{this.state.time}</p>
                    <p>Ficha:{this.state.course}</p>
                    <p>Lenguajes:{this.state.lenguage.join(', ')}</p>
                    <button onClick={this.handleChangeState}>Cambiar Estado del Componente</button><br/><br/>
                    <button onMouseOver={this.handleMouseOver}>Mouse sobre el boton</button>
                    <p onCopy={this.handleCopy}>Ficha 2252471</p><br/><br/>

{/* creacion del formulario para la utilizacion de target y pageX y llamado de un parametro e (estado) */}
                    <from onSubmit={this.handleSubmit}>
                        programa: <input type="text" name="name" onChange={this.handleChange}/><br/><br/>
                        Titulo: <input type="text" name="title" onChange={this.handleChange}/><br/><br/>
                        Duracion: <input type="text" name="time" onChange={this.handleChange}/><br/><br/>
                        <button type="submit">Actualizar</button>
                    </from>

{/*al crear el llamado de la clase Student podemos imprimir la informacion cuantas veces sea necesarios con ayuda del this.props */}
                    <Student name="Camilo Sanchez" email="camilosanchez@gmail.com" phone="3142461517"/>
                    <Student name="juan rodrigez" email="janro@gmail.com" phone="31546547457"/>
                </div>
            )
        }
        
}


//se exporta la clase Post hacia el archivo App.jss o a donde sea llamado 
export default Post;


//ejemplo 1
/*
Funcion flecha compacta 
(a,b) => a+b+15;
*/


//Ejemplo2
/*
sin funcion flecha

    funciont(){
        return a+b+15;
    }

    let a = 15;
    let b = 30;
 
Funcion flecha
    ()=> a+b+15;
 
 */

//ejemplo2

/*
    Funtion suma(a){
        return a +15
    }

se puede dejar o quitar los parentesis sin alterar la funcion 
warning:solo se puede dejar o quitar los parentesis solo si es un parametro. si es mas de un parametro hay que colocar los parentesis 

    let suma = (a) => a+15


*/

//se puede llamar el parametro en vez de imprimir un mensaje en consola 