import {Observer, of} from 'rxjs';

const observer: Observer<any> = {
    next: value =>  console.log("next", value),
    error: null,
    complete: () => console.log('terminamos la secuencia')
}


//const obs$ = of(1,2,3,4,5,6);

//const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));
const obs$ = of<any>(...[1,2,3,4,5,6],2,3,4,5);

console.log('inicio del observable');
obs$.subscribe( observer);
console.log('fin del observable');





