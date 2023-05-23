import { range, from, fromEvent  } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'


const numeros$ = range(1, 5)

numeros$.pipe(
    tap( x => console.log('antes',x) ),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('se termino todo')
    })
)
.subscribe( val => console.log('subs', val) )






