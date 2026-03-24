<div class="separator"><slot/></div>

<style lang="scss">
    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        margin: scale(8px) 0;
    }

    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: scale(1px) dashed white;
        @include drop-shadow;
    }

    .separator:not(:empty)::before {
        margin-right: scale(4px);
    }

    .separator:not(:empty)::after {
        margin-left: scale(4px);
    }
</style>