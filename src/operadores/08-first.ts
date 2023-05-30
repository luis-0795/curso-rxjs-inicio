import { range, from, fromEvent, interval, of  } from 'rxjs';
import { filter, first, map, reduce, take, tap } from 'rxjs/operators'


const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    tap<MouseEvent>( console.log),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) )

    map( ({clientY, clientX }) => ({ clientY,clientX }) ),

    first ( event => event.clientY >= 150  ) //toma el primer valor del observable cuando se cumpla la condicion y se completa
)
.subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    })


