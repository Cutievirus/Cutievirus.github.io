<style lang="scss">
    div{
        position:sticky;
        top: 0;
        max-height:100vh;
        overflow-y:auto;
        overflow-x:hidden;
    }
    @media(max-width:$breakpoint-mobile){
        div{
            position:static;
            max-height:initial;
            width:100%;
        }
    }
</style>

<div>
    <slot/>
</div>