<script lang="ts">
    import Color from "color";
    export let color="gold";
    let color2:string,color3:string;
    $:{
        color2 = Color(color).mix(Color("white"), 0.9).hex();
        color3 = Color(color).mix(Color("red"), 0.333).hex();
    }
</script>
<style lang="scss">
    span,span :global(a[href]){
        background-image: linear-gradient(var(--color,yellow),var(--color2,white),var(--color,yellow),var(--color3,orange));
        background-clip: text;
        color: transparent;

        :global{
            & a[href^="http://"]::after,
            & a[href^="https://"]::after{
                background-image: linear-gradient(var(--color,yellow),var(--color2,white),var(--color,yellow),var(--color3,orange));
                mask-image: var(--ext-link-icon);
                mask-position: center;
                mask-repeat: no-repeat;
                mask-size: contain;
            }
            &{
                a,span,i,b{
                    filter:none;
                }
            }
        }
    }
    span{
        @include drop-shadow;
    }

</style>

<span style="--color:{color};--color2:{color2};--color3:{color3};">
    <slot/>
</span>