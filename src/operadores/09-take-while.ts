import { range, from, fromEvent, interval, of  } from 'rxjs';
import { filter, first, map, reduce, take, takeWhile, tap } from 'rxjs/operators'


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x, y}) ),
    //takeWhile( ({ y }) => y <= 150 )
    takeWhile( ({ y }) => y <= 150, true )
)
.subscribe( {
    next: (val) => console.log('next', val),
    complete: () => console.log('complete')
}  ) 



