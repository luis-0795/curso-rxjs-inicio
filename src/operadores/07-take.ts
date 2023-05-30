import { range, from, fromEvent, interval, of  } from 'rxjs';
import { filter, map, reduce, take, tap } from 'rxjs/operators'


const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( t => console.log('tap', t) ),
    take(3)
)
.subscribe( {
    next: val => console.log('next', val),
    complete: () => console.log('complete') 
}  )



