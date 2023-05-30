import { range, from, fromEvent, interval, of  } from 'rxjs';
import { distinct, filter, first, map, reduce, skip, take, takeUntil, takeWhile, tap } from 'rxjs/operators'



const numeros$= of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct() // 
).subscribe( console.log )

interface Personaje {
    nombre: string;
}
const personajes:Personaje[] = [
    { 
        nombre: 'Megaman'
    },
    { 
        nombre: 'zxmen'
    },
    { 
        nombre: 'terri'
    },  { 
        nombre: 'caguama'
    },
    { 
        nombre: 'oso'
    }
];

from( personajes).pipe(
    distinct( p => p.nombre )
)
.subscribe( console.log )