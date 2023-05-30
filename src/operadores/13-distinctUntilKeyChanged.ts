import { range, from, fromEvent, interval, of  } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, first, map, reduce, skip, take, takeUntil, takeWhile, tap } from 'rxjs/operators'


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
    distinctUntilKeyChanged('nombre')
)
.subscribe( console.log )