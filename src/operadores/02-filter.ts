import { range, from, fromEvent  } from 'rxjs';
import { filter, map } from 'rxjs/operators'


// range(1,10).pipe(
//     filter( val => val % 2 === 1  )
// ).subscribe( console.log );


 range(20,30).pipe(
     filter( (val,i) => {
        console.log('index', i);
        return val % 2 === 1; 
     } )
 )//.subscribe( console.log );
interface Personaje {
    tipo:string,
    nombre:string
}
 const personajes: Personaje[] = [
    { 
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre:'Joker'
    }
 ];

 from(personajes).pipe(

    filter( p => p.tipo !== 'Heroe' )

 ).subscribe( console.log );


 const keyUp$ = fromEvent <KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code), // keyboardevent, string
    filter( key => key === 'Enter'),
    
 )

 keyUp$.subscribe( console.log )







