import { Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: error => console.warn('error', error),
    complete: () => console.info('completed')
}

const intervalo$ = new Observable<number>( subscriber => {
    // crear un contador, 1, 2, 3, 4, 5,.........
    var contador: number = 0;
   const interval = setInterval( () => {
        //cada segundo
        subscriber.next(contador+=1)
        console.log(interval);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add( subs2 );
subs2.add(subs3);

setTimeout(() => {
     subs1.unsubscribe(); 
    // subs2.unsubscribe(); 
    // subs3.unsubscribe(); 
    console.log('Completado timeoutq');
}, 6000);






