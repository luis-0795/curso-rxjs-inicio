import { range, from, fromEvent  } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'





const texto = document.createElement('div');
texto.innerHTML = `


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex quam, congue et arcu nec, ultrices aliquam diam. In fringilla magna non mi vulputate, eu mollis libero placerat. Sed consequat, elit eget facilisis euismod, odio dolor congue nisl, ac volutpat odio ante eget urna. Fusce ut nulla quis leo ullamcorper feugiat ut dictum metus. Integer fringilla elit non est posuere varius sed non orci. Quisque tellus diam, viverra id mollis ut, aliquet eget ligula. Nam mi est, elementum eu sodales sed, lacinia bibendum nunc. Quisque enim arcu, pulvinar a ante at, tristique faucibus mauris. Vivamus sit amet nisi fermentum sapien luctus porttitor. Mauris interdum convallis diam, sit amet consequat elit auctor at.
<br/> <br/>
Nullam dignissim at felis sed iaculis. Proin ut feugiat velit, et consectetur urna. Fusce commodo tempor finibus. Nullam eget quam nec odio ullamcorper ornare. Nullam non libero neque. Duis eget porta augue. Nam et eros rutrum, bibendum massa vitae, pretium ante. Proin quis tincidunt mauris, eget scelerisque odio. Fusce ornare scelerisque augue, vitae dapibus nunc euismod in. Morbi ultrices magna et vehicula sollicitudin. Ut vitae lorem enim. Nunc fermentum condimentum consectetur.
<br/> <br/>
Duis facilisis velit sed lorem eleifend commodo. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae dui ac arcu maximus dictum sed eget ex. Curabitur interdum urna nec lacinia venenatis. Suspendisse id sem a ipsum tincidunt tristique. Sed a mollis enim, in porttitor massa. Mauris vitae egestas eros. Pellentesque nec ex eget nisl condimentum egestas. Proin blandit neque vitae orci bibendum finibus. Maecenas pretium tempor orci, convallis pulvinar quam mattis sed. Ut et pulvinar dui.
<br/> <br/>
Nam viverra sapien non leo facilisis aliquet. Nam tincidunt placerat ex at facilisis. Integer nec pulvinar enim, non rhoncus ipsum. Nullam eleifend justo eget ante vulputate fermentum. Nulla quis sodales sapien, nec pellentesque lorem. Sed a turpis turpis. Integer posuere, mi quis accumsan lacinia, sapien enim bibendum tortor, eget sodales augue orci et tellus. Phasellus tristique felis a nibh dapibus, ac aliquet purus ultrices.
<br/> <br/>
Vestibulum accumsan turpis elit, sit amet tincidunt leo ullamcorper sed. Praesent sollicitudin efficitur ultrices. Mauris scelerisque maximus dictum. Sed aliquam maximus elit eu venenatis. Praesent pulvinar augue vitae nisl facilisis, at consequat odio molestie. Nam suscipit, nisi ut aliquet aliquam, nisl lacus porta ex, vitae egestas orci magna at erat. Fusce vestibulum sollicitudin libero et lobortis. Maecenas commodo sapien ut massa commodo rhoncus. Donec vitae dui suscipit, efficitur neque eget, pharetra arcu. 
`

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//function que haga el calculo

const calcularPorcentajeScroll = (event) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight) ) * 100

}

//Streams

const scroll$ = fromEvent(document,'scroll')

//scroll$.subscribe( console.log );


const progress$ = scroll$.pipe(
    //map( event => calcularPorcentajeScroll(event)  )
    map(  calcularPorcentajeScroll  ),
    tap( console.log )

);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})

 



